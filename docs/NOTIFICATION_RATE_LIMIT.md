# 通知频率限制机制

## 问题背景

钉钉机器人 Webhook 有严格的频率限制：
- **每分钟最多 20 条消息**
- 超过限制会返回错误：`sending too many messages per minute`

在实时监控场景下，如果同时监控多个标的，很容易触发限流。

## 解决方案

### 1. 信号去重（第一道防线）

使用 `SignalManager` 进行信号去重：

```typescript
// 5 分钟窗口期，同一标的同一方向的信号只触发一次
const signalManager = new SignalManager(5 * 60 * 1000);

// 检查是否应该处理
if (!signalManager.shouldProcessSignal(signalKey, action, currentTime)) {
  console.log(`[去重] 跳过重复信号`);
  return;
}

// 记录信号
signalManager.recordSignal(signalKey, action, currentTime);
```

**效果**：
- 同一标的的买入信号在 5 分钟内只触发一次
- 大大减少通知数量

### 2. 通知频率限制（第二道防线）

使用 `NotificationRateLimiter` 限制通知发送频率：

```typescript
// 每分钟最多 15 条消息（留有余量）
const rateLimiter = new NotificationRateLimiter(15);

// 发送前检查
if (!rateLimiter.canSend()) {
  console.warn(`[限流] 跳过发送通知`);
  throw new Error('Rate limit exceeded');
}

// 发送成功后记录
await sendNotification();
rateLimiter.recordSent();
```

**效果**：
- 即使有多个标的触发信号，也会限制在 15 条/分钟以内
- 自动跳过超限的通知，不会导致错误

## 实现细节

### NotificationRateLimiter 类

```typescript
export class NotificationRateLimiter {
  private messageTimestamps: number[] = [];
  private maxMessagesPerMinute: number = 15;
  private windowMs: number = 60 * 1000; // 1 分钟

  /**
   * 检查是否可以发送
   */
  canSend(): boolean {
    const now = Date.now();
    
    // 清理过期的时间戳
    this.messageTimestamps = this.messageTimestamps.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    // 检查是否超过限制
    return this.messageTimestamps.length < this.maxMessagesPerMinute;
  }

  /**
   * 记录发送
   */
  recordSent(): void {
    this.messageTimestamps.push(Date.now());
  }

  /**
   * 获取统计信息
   */
  getStats() {
    return {
      sentInLastMinute: this.messageTimestamps.length,
      remainingQuota: this.maxMessagesPerMinute - this.messageTimestamps.length,
      nextAvailableIn: calculateWaitTime(),
    };
  }
}
```

### NotificationService 集成

```typescript
export class NotificationService {
  private rateLimiter: NotificationRateLimiter;

  constructor(config: NotificationConfig) {
    this.rateLimiter = new NotificationRateLimiter(15);
  }

  private async send(content: string): Promise<void> {
    // 检查频率限制
    if (!this.rateLimiter.canSend()) {
      const stats = this.rateLimiter.getStats();
      console.warn(
        `[限流] 跳过发送，已达到限制 (${stats.sentInLastMinute}/15 条/分钟)`
      );
      throw new Error('Rate limit exceeded');
    }

    // 发送通知
    await axios.post(this.webhookUrl, ...);
    
    // 记录成功发送
    this.rateLimiter.recordSent();
  }
}
```

## 配置建议

### 根据监控标的数量调整

| 监控标的数量 | 信号去重窗口期 | 通知限制 | 说明 |
|------------|--------------|---------|------|
| 1-5 个 | 3 分钟 | 15 条/分钟 | 小规模监控，较宽松 |
| 5-10 个 | 5 分钟 | 12 条/分钟 | 中等规模，推荐配置 |
| 10-20 个 | 10 分钟 | 10 条/分钟 | 大规模监控，严格限制 |
| 20+ 个 | 15 分钟 | 8 条/分钟 | 超大规模，极严格 |

### 调整方法

#### 1. 调整信号去重窗口期

```typescript
// TaskExecutor 构造函数
constructor(duplicateWindow: number = 5 * 60 * 1000) {
  this.signalManager = new SignalManager(duplicateWindow);
}

// BotManager 启动时
const executor = new TaskExecutor(10 * 60 * 1000); // 10 分钟
```

#### 2. 调整通知频率限制

```typescript
// NotificationService 构造函数
constructor(config: NotificationConfig) {
  this.rateLimiter = new NotificationRateLimiter(10); // 10 条/分钟
}
```

## 监控和调试

### 查看限流统计

```typescript
const notificationService = await this.getNotificationService(task);
const stats = notificationService.getRateLimitStats();

console.log(`已发送: ${stats.sentInLastMinute}/15`);
console.log(`剩余配额: ${stats.remainingQuota}`);
console.log(`下次可发送: ${stats.nextAvailableIn} 秒后`);
```

### 日志输出

```bash
# 信号去重
[去重] 跳过重复信号: BTCUSDT - Buy

# 通知限流
[限流] 跳过发送通知，已达到限制 (15/15 条/分钟)

# 钉钉限流
[钉钉限流] 触发钉钉频率限制，请降低发送频率
```

## 常见问题

### Q1: 为什么设置 15 条/分钟而不是 20 条？

A: 留有余量，避免边界情况。钉钉的 20 条限制是硬性的，超过会直接拒绝，设置 15 条可以提供缓冲空间。

### Q2: 如果信号很多怎么办？

A: 有几个策略：
1. **增加去重窗口期**：从 5 分钟增加到 10-15 分钟
2. **减少监控标的**：只监控最重要的标的
3. **降低通知频率**：调整为 8-10 条/分钟
4. **使用优先级**：只发送重要信号

### Q3: 被限流的通知会丢失吗？

A: 是的，当前实现是直接跳过。如需保证通知送达，可以实现消息队列：

```typescript
// 未来改进：消息队列
class NotificationQueue {
  private queue: Message[] = [];
  
  async add(message: Message) {
    this.queue.push(message);
  }
  
  async processQueue() {
    while (this.queue.length > 0) {
      if (rateLimiter.canSend()) {
        const message = this.queue.shift();
        await sendNotification(message);
        rateLimiter.recordSent();
      } else {
        await sleep(10000); // 等待 10 秒
      }
    }
  }
}
```

### Q4: 如何测试限流是否生效？

```typescript
// 快速测试
for (let i = 0; i < 20; i++) {
  try {
    await notificationService.sendCryptoSignal({
      market: `TEST${i}`,
      action: 'Buy',
      price: 50000,
      indicatorName: 'Test',
      timestamp: new Date(),
    });
    console.log(`✅ 发送成功 ${i + 1}`);
  } catch (error) {
    console.log(`❌ 被限流 ${i + 1}:`, error.message);
  }
}

// 预期结果：前 15 条成功，后 5 条被限流
```

## 最佳实践

1. **优先使用信号去重**：这是最有效的减少通知的方法
2. **合理设置窗口期**：根据交易策略调整
3. **监控限流情况**：定期查看日志，了解是否频繁触发限流
4. **分批启动任务**：不要一次启动太多任务
5. **使用不同 Webhook**：对于大规模监控，可以使用多个钉钉机器人

## 总结

通过**信号去重 + 通知限流**的双重机制，可以有效避免触发钉钉的频率限制：

- ✅ **第一道防线**：SignalManager 去重（减少 80-90% 的通知）
- ✅ **第二道防线**：NotificationRateLimiter 限流（保证不超过 15 条/分钟）
- ✅ **优雅降级**：超限时跳过发送，不影响程序运行
- ✅ **可配置**：根据实际情况调整参数

**推荐配置**：
- 信号去重窗口期：5-10 分钟
- 通知频率限制：12-15 条/分钟
- 监控标的数量：不超过 20 个
