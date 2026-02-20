import axios from 'axios';
import dayjs from 'dayjs';
import { ActionType } from '../types';
import { NotificationRateLimiter } from './NotificationRateLimiter';

export interface NotificationPayload {
  market: string;
  signalTitle: string;
  price: number;
  indicatorName: string;
  timestamp: Date;
}

export interface NotificationConfig {
  webhookUrl: string;
  safeWord: string;
}

/**
 * Notification Service - handles sending notifications via DingTalk
 * 支持使用数据库配置的 Webhook 或环境变量的 Webhook
 * 安全词会自动添加到消息内容中，确保通过钉钉自定义关键词验证
 * 
 * 内置频率限制：每分钟最多 15 条消息（钉钉限制为 20 条）
 */
export class NotificationService {
  private webhookUrl: string;
  private safeWord: string;
  private rateLimiter: NotificationRateLimiter;

  constructor(config: NotificationConfig) {
    if (!config.webhookUrl) {
      throw new Error('[NotificationService] Webhook URL is required');
    }
    if (!config.safeWord) {
      throw new Error('[NotificationService] Safe word is required');
    }
    this.webhookUrl = config.webhookUrl;
    this.safeWord = config.safeWord;
    this.rateLimiter = new NotificationRateLimiter(15); // 每分钟最多 15 条
  }

  /**
   * Send A-share trading signal notification
   */
  async sendChinaStockSignal(payload: NotificationPayload): Promise<void> {
    const { market, signalTitle, price, indicatorName, timestamp } = payload;
    // const actionName = action === 'Buy' ? '买入' : '卖出';

    const content = [
      `【${this.safeWord}】A股 Trading Signal`,
      `标的：${market}`,
      `信号：${signalTitle}`,
      `价格：${price}`,
      `时间：${dayjs(timestamp).format('YYYY-MM-DD')}`,
      `信号指标：日线-${indicatorName}`,
    ].join('\n');

    await this.send(content);
  }

  /**
   * Send crypto trading signal notification
   */
  async sendCryptoSignal(payload: NotificationPayload): Promise<void> {
    const { market, signalTitle, price, indicatorName, timestamp } = payload;

      const content = [
        `【${this.safeWord}】`,
        `交易对：${market}`,
        `信号：${signalTitle}`,
        `价格：${price}`,
        `时间：${dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}`,
        `信号指标：${indicatorName}`,
      ].join('\n');

      await this.send(content);

  }

  /**
   * Send custom notification
   */
  async sendCustom(title: string, details: Record<string, any>): Promise<void> {
    const content = [
      `【${this.safeWord}】${title}`,
      ...Object.entries(details).map(([key, value]) => `${key}：${value}`),
    ].join('\n');

    await this.send(content);
  }

  /**
   * Core send method with rate limiting
   */
  private async send(content: string): Promise<void> {
    // 检查频率限制
    if (!this.rateLimiter.canSend()) {
      const stats = this.rateLimiter.getStats();
      console.warn(
        `[限流] 跳过发送通知，已达到限制 (${stats.sentInLastMinute}/${15} 条/分钟)`
      );
      throw new Error(`Rate limit exceeded: ${stats.sentInLastMinute}/15 messages per minute`);
    }

    try {
      const response = await axios.post(
        this.webhookUrl,
        {
          msgtype: 'text',
          text: { content },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000,
        }
      );

      if (response.data.errcode === 0) {
        this.rateLimiter.recordSent(); // 记录成功发送
        return; // Success
      } else {
        // 钉钉返回错误
        if (response.data.errmsg?.includes('too many')) {
          console.error('[钉钉限流] 触发钉钉频率限制，请降低发送频率');
        }
        throw new Error(`DingTalk API error: ${response.data.errmsg}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to send notification: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * 获取当前限流统计
   */
  getRateLimitStats() {
    return this.rateLimiter.getStats();
  }
}
