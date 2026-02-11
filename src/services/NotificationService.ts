import axios from 'axios';
import dayjs from 'dayjs';
import type { ActionType } from '../types';

export interface NotificationPayload {
  market: string;
  action: ActionType | 'Ignore';
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
 */
export class NotificationService {
  private webhookUrl: string;
  private safeWord: string;

  constructor(config: NotificationConfig) {
    if (!config.webhookUrl) {
      throw new Error('[NotificationService] Webhook URL is required');
    }
    if (!config.safeWord) {
      throw new Error('[NotificationService] Safe word is required');
    }
    this.webhookUrl = config.webhookUrl;
    this.safeWord = config.safeWord;
  }

  /**
   * Send A-share trading signal notification
   */
  async sendChinaStockSignal(payload: NotificationPayload): Promise<void> {
    const { market, action, price, indicatorName, timestamp } = payload;
    const actionName = action === 'Buy' ? '买入' : '卖出';

    const content = [
      `【${this.safeWord}】A股 Trading Signal`,
      `标的：${market}`,
      `操作：${actionName}`,
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
    const { market, action, price, indicatorName, timestamp } = payload;

    if (action === 'Ignore') {
      await this.send(
        [
          `【${this.safeWord}】`,
          `交易对：${market}`,
          `操作：忽略`,
          `时间：${dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}`,
          `信号指标：${indicatorName}`,
        ].join('\n'),
      )
    } else {
      const actionType = action === 'Buy' ? 'Long' : 'Short';

      const content = [
        `【${this.safeWord}】`,
        `交易对：${market}`,
        `操作：${action} / ${actionType}`,
        `价格：${price}`,
        `时间：${dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}`,
        `信号指标：5min-${indicatorName}`,
      ].join('\n');

      await this.send(content);
    }

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
   * Core send method
   */
  private async send(content: string): Promise<void> {
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
        return; // Success
      } else {
        throw new Error(`DingTalk API error: ${response.data.errmsg}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to send notification: ${error.message}`);
      }
      throw error;
    }
  }
}
