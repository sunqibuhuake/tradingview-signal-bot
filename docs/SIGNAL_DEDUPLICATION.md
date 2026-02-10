# 信号去重机制说明

## 问题描述

Bot 启动后频繁触发相同的交易信号，导致：
- 数据库中产生大量重复的执行记录
- 钉钉通知频繁发送（可能每秒多条）
- 资源浪费和信息噪音

## 根本原因

### TradingView 指标更新机制

TradingView 的 `indicator.onUpdate()` 回调会在以下情况被触发：

```typescript
indicator.onUpdate(() => {
  // 每次指标数据更新都会调用这个回调
  const indItem = indicator.periods[0];
  const item = chart.periods[0];
  onUpdate(indItem, item);
});
```

**更新频率**：
- **实时市场数据**：只要价格变动（tick），指标就会重新计算
- **加密货币**：24/7 交易，价格几乎每秒都在变动
- **时间周期影响**：即使设置 5分钟 K线（M5），在这 5 分钟内的每个 tick 都会触发更新

举例：
- 你监控 BTCUSDT 5分钟线
- BTC 价格每秒变动 1-10 次
- 每次变动都会：
  1. 更新当前 K 线的收盘价
  2. 重新计算指标
  3. 触发 `onUpdate` 回调
  
如果指标显示 "买入信号"，那么这 5 分钟内可能会触发 **300-3000 次相同的买入信号**！

## 解决方案

### 1. 信号去重逻辑

使用 `SignalManager` 类来管理信号去重：

```typescript
// lib/bot/TaskExecutor.ts

private async handleIndicatorUpdate(task, indInfo, indItem, chartItem) {
  // 1️⃣ 先检查是否有信号触发
  if (!indItem.Buy_Alert && !indItem.Sell_Alert) {
    return; // 没有买入或卖出信号，跳过
  }

  const action = indItem.Buy_Alert ? 'Buy' : 'Sell';
  const currentTime = Date.now();
  const signalKey = `${task.id}_${task.market.code}`;

  // 2️⃣ 检查是否为重复信号
  if (!this.signalManager.shouldProcessSignal(signalKey, action, currentTime)) {
    console.log(`[去重] 跳过重复信号: ${task.market.name} - ${action}`);
    return;
  }

  // 3️⃣ 记录信号，防止后续重复处理
  this.signalManager.recordSignal(signalKey, action, currentTime);
  
  // 4️⃣ 处理信号（创建记录、发送通知）
  // ...
}
```

### 2. 去重策略

`SignalManager` 支持两种去重模式：

#### 模式 1: 仅方向变化（duplicateWindow = 0）

适用于：**A股定时扫描**

```typescript
const signalManager = new SignalManager(0);
```

逻辑：
- 只有当信号方向改变时才触发
- 买入 → 买入：跳过
- 买入 → 卖出：触发 ✅
- 卖出 → 买入：触发 ✅

#### 模式 2: 时间窗口去重（duplicateWindow > 0）

适用于：**加密货币实时监控**

```typescript
const signalManager = new SignalManager(5 * 60 * 1000); // 5 分钟
```

逻辑：
- 同一方向的信号在窗口期内只触发一次
- 买入信号 → 5分钟内的所有买入信号都跳过
- 5分钟后 → 如果仍是买入信号，重新触发 ✅
- 买入 → 卖出：立即触发（方向改变）✅

### 3. 配置建议

| 市场类型 | 执行模式 | 时间周期 | 建议窗口期 | 说明 |
|---------|---------|---------|-----------|------|
| 加密货币 | REALTIME | 1-5 分钟 | 5-10 分钟 | 价格波动快，需要较长窗口期 |
| 加密货币 | REALTIME | 15-60 分钟 | 20-30 分钟 | 中期趋势，适中窗口期 |
| 加密货币 | REALTIME | 4小时-日线 | 1-2 小时 | 长期趋势，较短窗口期即可 |
| A股 | SCHEDULED | 日线 | 0（仅方向变化） | 每天扫描一次，不需要时间窗口 |
| 外汇 | REALTIME | 5-15 分钟 | 10-20 分钟 | 类似加密货币 |

### 4. 当前实现

在 `lib/bot/TaskExecutor.ts` 中：

```typescript
constructor(duplicateWindow: number = 5 * 60 * 1000) {
  this.signalManager = new SignalManager(duplicateWindow);
}
```

**默认配置**：5 分钟窗口期

可以在初始化时自定义：
```typescript
// Bot 控制器中
const executor = new TaskExecutor(10 * 60 * 1000); // 使用 10 分钟窗口期
```

## 技术实现

### SignalManager 内部机制

```typescript
class SignalManager {
  private signalRecords: Map<string, SignalRecord | ActionType>;
  
  shouldProcessSignal(marketId: string, action: ActionType, currentTime: number): boolean {
    const lastSignal = this.signalRecords.get(marketId);
    
    // 无窗口期：仅检查方向变化
    if (this.duplicateWindow === 0) {
      return lastSignal !== action;
    }
    
    // 有窗口期：检查方向和时间
    if (lastSignal?.action === action) {
      const timeDelta = currentTime - lastSignal.time;
      if (timeDelta < this.duplicateWindow) {
        return false; // 窗口期内的重复信号
      }
    }
    
    return true;
  }
  
  recordSignal(marketId: string, action: ActionType, currentTime: number): void {
    if (this.duplicateWindow === 0) {
      this.signalRecords.set(marketId, action);
    } else {
      this.signalRecords.set(marketId, { action, time: currentTime });
    }
  }
}
```

## 监控和调试

### 查看去重日志

```typescript
console.log(`[去重] 跳过重复信号: ${task.market.name} - ${action}`);
```

如果看到大量这样的日志，说明去重机制正在工作。

### 统计信息

```typescript
const stats = this.signalManager.getStats();
console.log(`总市场数: ${stats.totalMarkets}`);
console.log(`总信号数: ${stats.totalSignals}`);
```

## 常见问题

### Q1: 为什么 5 分钟后又发送了相同的信号？

A: 如果市场条件没有改变（仍然是买入信号），超过窗口期后会重新发送。这是**预期行为**，用于提醒交易者信号依然有效。

如果不希望重复发送，可以：
1. 增加窗口期：`new SignalManager(60 * 60 * 1000)` // 1小时
2. 使用仅方向变化模式：`new SignalManager(0)`

### Q2: 如何调整不同任务使用不同的去重策略？

A: 当前所有任务共用一个 SignalManager。如需独立配置，可以改为：

```typescript
// 未来优化方案
class TaskExecutor {
  private signalManagers: Map<string, SignalManager>;
  
  startTask(task) {
    const window = task.market.type === 'CRYPTO' ? 5 * 60 * 1000 : 0;
    this.signalManagers.set(task.id, new SignalManager(window));
  }
}
```

### Q3: 信号记录会一直保存在内存中吗？

A: 是的，当前实现将所有信号记录保存在内存中（Map）。重启 Bot 后会清空。

如需持久化，可以：
1. 将信号记录存入数据库
2. 添加过期清理机制（如 24 小时后清除旧记录）

## 总结

- ✅ 已添加信号去重机制
- ✅ 支持时间窗口和方向变化两种模式
- ✅ 默认使用 5 分钟窗口期
- ✅ 可通过构造函数参数自定义

**建议**：
1. 加密货币实时监控：使用 5-20 分钟窗口期
2. A股定时扫描：使用 0 窗口期（仅方向变化）
3. 根据实际使用情况调整窗口期长度
