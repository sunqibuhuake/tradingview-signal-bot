/**
 * Notification Rate Limiter
 * 限制通知发送频率，避免触发钉钉的频率限制
 * 
 * 钉钉限制：每分钟最多 20 条消息
 * 我们的策略：每分钟最多 15 条（留有余量）
 */
export class NotificationRateLimiter {
  private messageTimestamps: number[] = [];
  private maxMessagesPerMinute: number;
  private windowMs: number = 60 * 1000; // 1 分钟

  constructor(maxMessagesPerMinute: number = 15) {
    this.maxMessagesPerMinute = maxMessagesPerMinute;
  }

  /**
   * 检查是否可以发送消息
   */
  canSend(): boolean {
    const now = Date.now();
    
    // 清理过期的时间戳（超过 1 分钟）
    this.messageTimestamps = this.messageTimestamps.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    // 检查是否超过限制
    if (this.messageTimestamps.length >= this.maxMessagesPerMinute) {
      const oldestTimestamp = this.messageTimestamps[0];
      const waitTime = this.windowMs - (now - oldestTimestamp);
      console.log(
        `[限流] 已达到每分钟 ${this.maxMessagesPerMinute} 条消息上限，需等待 ${Math.ceil(waitTime / 1000)} 秒`
      );
      return false;
    }

    return true;
  }

  /**
   * 记录消息发送
   */
  recordSent(): void {
    this.messageTimestamps.push(Date.now());
  }

  /**
   * 获取当前统计信息
   */
  getStats(): {
    sentInLastMinute: number;
    remainingQuota: number;
    nextAvailableIn: number;
  } {
    const now = Date.now();
    
    // 清理过期的时间戳
    this.messageTimestamps = this.messageTimestamps.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    const sentInLastMinute = this.messageTimestamps.length;
    const remainingQuota = Math.max(0, this.maxMessagesPerMinute - sentInLastMinute);
    
    let nextAvailableIn = 0;
    if (sentInLastMinute >= this.maxMessagesPerMinute && this.messageTimestamps.length > 0) {
      const oldestTimestamp = this.messageTimestamps[0];
      nextAvailableIn = Math.ceil((this.windowMs - (now - oldestTimestamp)) / 1000);
    }

    return {
      sentInLastMinute,
      remainingQuota,
      nextAvailableIn,
    };
  }

  /**
   * 重置限流器
   */
  reset(): void {
    this.messageTimestamps = [];
  }

  /**
   * 等待直到可以发送
   */
  async waitUntilCanSend(): Promise<void> {
    while (!this.canSend()) {
      const stats = this.getStats();
      console.log(
        `[限流] 等待 ${stats.nextAvailableIn} 秒后继续发送 (已发送: ${stats.sentInLastMinute}/${this.maxMessagesPerMinute})`
      );
      await new Promise((resolve) => setTimeout(resolve, stats.nextAvailableIn * 1000));
    }
  }
}
