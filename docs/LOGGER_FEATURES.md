# 日志系统功能说明

## 概述

项目使用了增强的日志系统，提供美观的输出和丰富的信息展示。

## 特性

### 1. 彩色日志级别

- 🔵 **INFO**: 一般信息
- ⚙️ **DEBUG**: 调试信息
- ⚠️ **WARN**: 警告信息
- ✖️ **ERROR**: 错误信息
- ✓ **SUCCESS**: 成功信息

### 2. 美化的 Banner

```
╔═══════════════════════════════════════════════════════════════╗
║                    TradingView Signal Bot                     ║
║          Real-time trading signals powered by AI              ║
╚═══════════════════════════════════════════════════════════════╝
```

### 3. 交易信号展示

```
╔════════════════════════════════════════════════════════════╗
║  TRADING SIGNAL                                            ║
╠════════════════════════════════════════════════════════════╣
║  Market     : BTCUSDT                                      ║
║  Action     : 📈 BUY                                       ║
║  Price      : 45000.00                                     ║
║  Indicator  : Custom EMA                                   ║
╚════════════════════════════════════════════════════════════╝
```

### 4. 市场概览

显示当前监控状态、市场数量、活跃市场和信号数。

### 5. 进度条

实时显示扫描进度：
```
[████████████████░░░░░░░░░░░░░░] 60% (30/50) 正在扫描...
```

### 6. 加载动画

显示正在进行的操作：
```
⠋ 正在加载股票配置...
```

### 7. 统计信息

```
┌─ Runtime Statistics ─┐
│ Uptime        : 2h 30m 15s
│ Total Logs    : 1234
│ Success       : 45
│ Info          : 987
│ Warnings      : 12
│ Errors        : 2
│ Debug         : 188
└────────────────────────────────────────────┘
```

## 使用示例

### 基本日志

```typescript
import { logger } from './utils/logger';

logger.info('这是一条信息');
logger.success('操作成功');
logger.warn('警告信息');
logger.error('错误信息', error);
logger.debug('调试信息');
```

### 交易信号

```typescript
logger.signal({
  market: 'BTCUSDT',
  action: 'Buy',
  price: 45000.00,
  indicator: 'Custom EMA',
  confidence: 85, // 可选
});
```

### 市场概览

```typescript
logger.marketOverview({
  name: '加密货币市场',
  totalMarkets: 100,
  activeMarkets: 45,
  signals: 12,
  status: 'running',
});
```

### 进度条

```typescript
for (let i = 0; i < total; i++) {
  logger.progress(i + 1, total, '处理中...');
  // 处理逻辑
}
```

### 加载动画

```typescript
const spinner = logger.spinner('正在加载...');
// 执行操作
spinner.stop(true, '加载成功');
// 或
spinner.stop(false, '加载失败');
```

### 表格数据

```typescript
logger.table('配置信息', {
  '环境': 'Production',
  '版本': '1.0.0',
  '市场数': 100,
});
```

### 统计信息

```typescript
logger.stats(); // 显示运行时统计
```

## 配置

### 设置日志级别

```typescript
import { logger, LogLevel } from './utils/logger';

// 只显示 WARN 及以上级别
logger.setLevel(LogLevel.WARN);

// 显示所有日志（包括 DEBUG）
logger.setLevel(LogLevel.DEBUG);
```

## 输出示例

运行机器人时，你将看到：

1. **启动阶段**：Banner、配置加载、验证信息
2. **扫描阶段**：进度条、市场状态
3. **信号阶段**：美化的交易信号框
4. **统计阶段**：市场概览、运行时统计
5. **关闭阶段**：资源清理、最终统计

## 技术实现

- 使用 `chalk` 进行彩色输出
- 支持 TTY 和非 TTY 环境
- 自动统计日志数量和类型
- 时间戳精确到毫秒
- Unicode 字符绘制边框和进度条
