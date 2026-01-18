import axios from 'axios';
import dayjs from 'dayjs';
import { config } from '../config';
import type { ActionType } from '../types';

export interface NotificationPayload {
  market: string;
  action: ActionType;
  price: number;
  indicatorName: string;
  timestamp: Date;
}

/**
 * Notification Service - handles sending notifications via DingTalk
 */
export class NotificationService {
  private webhookUrl: string;

  constructor(webhookUrl?: string) {
    this.webhookUrl = webhookUrl || config.dingTalk.webhookUrl;
  }

  /**
   * Send A-share trading signal notification
   */
  async sendChinaStockSignal(payload: NotificationPayload): Promise<void> {
    const { market, action, price, indicatorName, timestamp } = payload;
    const actionName = action === 'Buy' ? '买入' : '卖出';

    const content = [
      'A股 Trading Signal',
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
    const actionType = action === 'Buy' ? 'Long' : 'Short';

    const content = [
      'Crypto Trading Signal',
      `交易对：${market}`,
      `操作：${action} / ${actionType}`,
      `价格：${price}`,
      `时间：${dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}`,
      `信号指标：5min-${indicatorName}`,
    ].join('\n');

    await this.send(content);
  }

  /**
   * Send custom notification
   */
  async sendCustom(title: string, details: Record<string, any>): Promise<void> {
    const content = [
      title,
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
        return; // Success, no need to log
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
