# TradingView API 获取指标结果逻辑分析

## 📋 执行摘要

**结论**: 当前任务表设计**基本合理**，但存在一些**需要优化的问题**和**潜在风险**。

**关键发现**:
- ✅ Timeframe 映射存在不一致性
- ⚠️ 缺少指标输出字段的动态验证
- ⚠️ 任务配置缺少重要的 TradingView 参数
- ⚠️ 信号去重逻辑未在任务表中体现

---

## 🔍 TradingView API 工作流程分析

### 1. 指标获取流程

```typescript
// Step 1: 获取私有指标列表
const indicList = await TradingView.getPrivateIndicators(
  config.tradingView.session,
  config.tradingView.signature
);

// Step 2: 查找目标指标
const indic = indicList.find(item => item.id === indicatorId);

// Step 3: 获取指标实例
const privateIndic = await indic.get();

// 返回: [指标元信息, 指标实例]
return [indic, privateIndic];
```

**关键点**:
- 需要 `session` 和 `signature` 认证
- 只能访问**私有指标**（用户自己创建的）
- 指标 ID 格式: `USER;{hash}`
- 返回的指标实例用于后续的图表会话

### 2. 市场搜索流程

```typescript
// 搜索市场
const markets = await TradingView.searchMarketV3(query, filter);

// 示例:
// - query: "BINANCE:BTCUSDT" 或 "BTCUSDT"
// - filter: 'crypto' | 'stock' | 'forex' | 'futures' | 'index'
// 返回: SearchMarketResult[]
```

**SearchMarketResult 结构**:
```typescript
{
  id: string;           // "BINANCE:BTCUSDT"
  symbol: string;       // "BTCUSDT"
  description: string;  // "Bitcoin / TetherUS"
  type: string;         // "crypto"
  exchange: string;     // "BINANCE"
  currency_code?: string;
  provider_id?: string;
}
```

### 3. 实时监控流程 (REALTIME 模式)

```typescript
// Step 1: 创建图表会话
const chart = new client.Session.Chart();

// Step 2: 设置市场和参数
chart.setMarket(market.id, {
  timeframe: '5',      // 5分钟
  range: 500,          // 500根K线
});

// Step 3: 添加指标
const indicator = new chart.Study(indic);

// Step 4: 监听更新
indicator.onUpdate(() => {
  const indItem = indicator.periods[0];  // 指标数据
  const item = chart.periods[0];         // K线数据
  onUpdate(indItem, item);
});
```

**实时监控特点**:
- 建立持久 WebSocket 连接
- 每次价格/指标更新都会触发回调
- `periods[0]` 是最新的数据点
- 适合高频交易、加密货币市场

**指标输出结构** (indItem):
```typescript
{
  $time: 1707363000,           // Unix 时间戳
  Buy_Alert: 1,                // 买入信号 (0 或 1)
  Sell_Alert: 0,               // 卖出信号 (0 或 1)
  FAST_EMA: 42350.5,           // 快速 EMA
  SLOW_EMA: 42280.3,           // 慢速 EMA
  // ... 其他自定义字段
}
```

**K线输出结构** (chartItem):
```typescript
{
  time: 1707363000,            // Unix 时间戳
  open: 42300,                 // 开盘价
  close: 42350,                // 收盘价
  max: 42380,                  // 最高价
  min: 42290,                  // 最低价
  volume: 1250.5               // 成交量
}
```

### 4. 定时扫描流程 (SCHEDULED 模式)

```typescript
// 一次性读取指标数据
const result = await readIndicator(market, indic, {
  timeframe: '1D',
  range: 500,
  timeout: 10000
});

// 返回: { indItem, item } 或 null（超时）
```

**定时扫描特点**:
- 一次性查询，不保持连接
- 设置超时防止阻塞
- 适合低频检查、A股市场
- 需要手动轮询

**实现细节**:
```typescript
readIndicator(): Promise<ReadIndicatorResult | null> {
  return new Promise((resolve) => {
    const chart = new this.client.Session.Chart();
    chart.setMarket(market.id, { timeframe, range });
    
    // 设置超时
    const timer = setTimeout(() => {
      indicator.remove();
      resolve(null);  // 超时返回 null
    }, timeout);
    
    const indicator = new chart.Study(indic);
    
    indicator.onUpdate(() => {
      const indItem = indicator.periods[0];
      const item = chart.periods[0];
      
      clearTimeout(timer);
      indicator.remove();
      
      resolve({ indItem, item });
    });
  });
}
```

---

## 📊 当前任务表设计评估

### ✅ 合理的设计

#### 1. 执行模式分离
```prisma
enum ExecutionMode {
  REALTIME  // 实时监控
  SCHEDULED // 定时扫描
}
```
- 清晰区分两种使用场景
- 符合 TradingView API 的两种使用模式

#### 2. 时间周期枚举
```prisma
enum Timeframe {
  M1, M5, M15, M30, H1, H4, D1, W1, MN1
}
```
- 覆盖常用的时间周期
- 便于前端选择和验证

#### 3. 关联设计
```prisma
Task -> TaskIndicator -> Indicator
Task -> Market
```
- 支持一个任务关联多个指标（多对多）
- 任务与标的一对一关联
- 级联删除保证数据一致性

#### 4. 执行记录
```prisma
Task -> TaskExecution -> IndicatorResult
```
- 完整记录执行历史
- 指标结果通过执行记录关联

### ⚠️ 需要优化的问题

#### 问题 1: Timeframe 类型不匹配

**问题描述**:
```typescript
// Prisma Schema
enum Timeframe {
  M1, M5, M15, M30, H1, H4, D1, W1, MN1
}

// TradingView API 期望
type TimeFrame = '1' | '5' | '15' | '30' | '60' | '240' | '1D' | '1W' | '1M';

// 配置文件中的值
config.bot.crypto.timeframe = '5'    // ✅ 正确
config.bot.cn.timeframe = '1D'       // ✅ 正确

// 但 Prisma 存储为 "M5", "D1"
```

**影响**:
- 需要在代码中进行映射转换
- 容易出错，增加维护成本

**建议修改**:
```prisma
// 方案 A: 使用字符串枚举（推荐）
enum Timeframe {
  M1  = "1"
  M5  = "5"
  M15 = "15"
  M30 = "30"
  H1  = "60"
  H4  = "240"
  D1  = "1D"
  W1  = "1W"
  MN1 = "1M"
}

// 或方案 B: 直接使用字符串
model Task {
  timeframe String @default("5") // 直接存储 TradingView 格式
}
```

**修改后的使用**:
```typescript
// 不需要转换，直接使用
chart.setMarket(market.id, {
  timeframe: task.timeframe,  // "5" or "1D"
  range: task.range
});
```

#### 问题 2: 缺少指标输出字段验证

**问题描述**:
```prisma
model Indicator {
  outputFields Json  // {"Buy_Alert": "boolean", "Sell_Alert": "boolean"}
}
```

**当前问题**:
- 没有验证实际输出是否匹配 `outputFields` 定义
- 硬编码检查 `Buy_Alert` 和 `Sell_Alert`
- 不同指标可能有不同的字段名

**当前代码**:
```typescript
// 硬编码检查
if (!indItem.Buy_Alert && !indItem.Sell_Alert) {
  return;
}

const signal = indItem.Buy_Alert ? 'BUY' : indItem.Sell_Alert ? 'SELL' : 'NEUTRAL';
```

**建议改进**:
```prisma
model Indicator {
  outputFields     Json     // 所有输出字段
  signalFields     Json     // 信号字段配置
  // 示例: {
  //   "buy": "Buy_Alert",
  //   "sell": "Sell_Alert",
  //   "type": "boolean"  // 或 "threshold" 配合 thresholdValue
  // }
}
```

**改进后的代码**:
```typescript
// 动态检查
const signalConfig = indicator.signalFields;
const buyField = signalConfig.buy;   // "Buy_Alert"
const sellField = signalConfig.sell; // "Sell_Alert"

if (!indItem[buyField] && !indItem[sellField]) {
  return;
}

const signal = indItem[buyField] ? 'BUY' : indItem[sellField] ? 'SELL' : 'NEUTRAL';
```

#### 问题 3: 任务表缺少重要参数

**当前配置**:
```prisma
model Task {
  timeframe     Timeframe
  range         Int
  executionMode ExecutionMode
  // ❌ 缺少以下参数
}
```

**缺少的参数**:

1. **搜索关键词/市场过滤**
```typescript
// 当前: 从 market.symbol 推断
const markets = await searchMarkets(task.market.symbol, filter);

// 问题: 
// - market.symbol 可能是 "BTCUSDT" 或 "BTC/USDT" 或 "BINANCE:BTCUSDT"
// - 搜索结果可能有多个匹配
// - 如何确定选择哪一个？
```

**建议添加**:
```prisma
model Task {
  // 搜索配置
  searchQuery   String?   // "BINANCE:BTCUSDT" 精确搜索
  searchFilter  String?   // 市场类型过滤，从 market.type 推断
  marketIndex   Int @default(0)  // 如果有多个结果，选择第几个
}
```

2. **信号去重配置**
```typescript
// 当前: 硬编码在 SignalManager 中
duplicateWindow: 20 * 60 * 1000  // 20 分钟
```

**建议添加**:
```prisma
model Task {
  // 信号去重
  deduplicateWindow Int?  // 去重窗口（毫秒）
  deduplicateMode   String? @default("action") // "action" | "any"
  // action: Buy 和 Sell 分别去重
  // any: 任何信号都去重
}
```

3. **超时配置**
```prisma
model Task {
  // 仅 SCHEDULED 模式
  readTimeout   Int? @default(10000)  // 读取超时（毫秒）
}
```

#### 问题 4: scheduleInterval 和 cronExpression 冲突

**当前设计**:
```prisma
model Task {
  cronExpression   String?  // "0 0 9 * * *"
  scheduleInterval Int?     // 86400000
}
```

**问题**:
- 两个字段功能重叠
- 没有明确优先级
- 当前代码只使用 `scheduleInterval`

**建议修改**:
```prisma
enum ScheduleType {
  INTERVAL  // 固定间隔
  CRON      // Cron 表达式
}

model Task {
  // 仅 SCHEDULED 模式使用
  scheduleType     ScheduleType?
  scheduleInterval Int?            // scheduleType = INTERVAL 时使用
  cronExpression   String?         // scheduleType = CRON 时使用
}
```

#### 问题 5: 缺少市场 ID 缓存

**当前流程**:
```typescript
// 每次执行都要搜索市场
const markets = await searchMarkets(task.market.symbol, filter);
const marketId = markets[0].id;  // "BINANCE:BTCUSDT"
```

**问题**:
- 重复搜索浪费资源
- 搜索结果可能变化（排序、新增交易所）
- 实时模式启动慢

**建议添加**:
```prisma
model Market {
  // 已有字段
  symbol        String
  name          String
  code          String
  type          MarketType
  
  // ✅ 新增
  tradingViewId String?  // "BINANCE:BTCUSDT" - 缓存搜索结果
  exchange      String?  // "BINANCE"
  
  @@unique([tradingViewId])
  @@index([tradingViewId])
}
```

**优化后的流程**:
```typescript
// 优先使用缓存的 tradingViewId
if (task.market.tradingViewId) {
  // 直接使用，不需要搜索
  chart.setMarket(task.market.tradingViewId, { ... });
} else {
  // 首次使用，搜索并缓存
  const markets = await searchMarkets(task.market.symbol, filter);
  const marketId = markets[0].id;
  
  // 更新缓存
  await prisma.market.update({
    where: { id: task.marketId },
    data: { tradingViewId: marketId }
  });
  
  chart.setMarket(marketId, { ... });
}
```

---

## 🎯 优化建议总结

### 高优先级 (建议立即修改)

1. **Timeframe 类型统一**
```prisma
enum Timeframe {
  M1  = "1"
  M5  = "5"
  M15 = "15"
  M30 = "30"
  H1  = "60"
  H4  = "240"
  D1  = "1D"
  W1  = "1W"
  MN1 = "1M"
}
```

2. **Market 表添加 tradingViewId**
```prisma
model Market {
  tradingViewId String?  @unique
  exchange      String?
}
```

3. **Schedule 配置清晰化**
```prisma
enum ScheduleType {
  INTERVAL
  CRON
}

model Task {
  scheduleType     ScheduleType?
  scheduleInterval Int?
  cronExpression   String?
}
```

### 中优先级 (功能增强)

4. **Indicator 添加信号字段配置**
```prisma
model Indicator {
  signalFields Json  // {"buy": "Buy_Alert", "sell": "Sell_Alert"}
}
```

5. **Task 添加信号去重配置**
```prisma
model Task {
  deduplicateWindow Int? @default(1200000)  // 20分钟
  deduplicateMode   String? @default("action")
}
```

6. **Task 添加超时和搜索配置**
```prisma
model Task {
  readTimeout   Int? @default(10000)
  searchQuery   String?
  marketIndex   Int @default(0)
}
```

### 低优先级 (长期优化)

7. **添加指标参数覆盖**
```prisma
model TaskIndicator {
  overrideParameters Json?  // 已有，需要实际使用
}
```

8. **添加执行统计**
```prisma
model Task {
  successCount Int @default(0)
  errorCount   Int @default(0)
  avgDuration  Float?
}
```

---

## 📝 完整优化后的 Schema 示例

```prisma
enum Timeframe {
  M1  = "1"
  M5  = "5"
  M15 = "15"
  M30 = "30"
  H1  = "60"
  H4  = "240"
  D1  = "1D"
  W1  = "1W"
  MN1 = "1M"
}

enum ScheduleType {
  INTERVAL
  CRON
}

model Task {
  id            String        @id @default(cuid())
  name          String
  description   String?
  
  // 关联标的
  marketId      String
  market        Market        @relation(fields: [marketId], references: [id], onDelete: Cascade)
  
  // 执行配置
  timeframe     Timeframe     @default(M5)
  range         Int           @default(500)
  executionMode ExecutionMode @default(REALTIME)
  
  // 定时任务配置
  scheduleType     ScheduleType?
  scheduleInterval Int?
  cronExpression   String?
  
  // TradingView 配置
  readTimeout   Int? @default(10000)    // 读取超时（毫秒）
  searchQuery   String?                 // 精确搜索关键词
  marketIndex   Int @default(0)         // 搜索结果索引
  
  // 信号去重配置
  deduplicateWindow Int? @default(1200000)  // 20分钟
  deduplicateMode   String? @default("action")
  
  // 任务状态
  status         TaskStatus    @default(ACTIVE)
  lastExecutedAt DateTime?
  nextExecutionAt DateTime?
  errorMessage   String?
  
  // 统计信息
  successCount Int @default(0)
  errorCount   Int @default(0)
  avgDuration  Float?
  
  // 通知配置
  enableNotification   Boolean @default(true)
  notificationChannels Json?
  
  createdBy     String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  taskIndicators TaskIndicator[]
  executions     TaskExecution[]
  
  @@index([marketId])
  @@index([status])
  @@index([executionMode])
}

model Market {
  // ... 已有字段
  
  // ✅ 新增
  tradingViewId String?  @unique  // "BINANCE:BTCUSDT"
  exchange      String?            // "BINANCE"
  
  @@index([tradingViewId])
}

model Indicator {
  // ... 已有字段
  
  outputFields   Json  // {"FAST_EMA": "number", "Buy_Alert": "boolean"}
  
  // ✅ 新增
  signalFields   Json  // {"buy": "Buy_Alert", "sell": "Sell_Alert", "type": "boolean"}
}
```

---

## 🚀 迁移计划

### Phase 1: 关键修复 (不破坏现有数据)

1. 添加新字段（nullable）
```sql
ALTER TABLE "markets" ADD COLUMN "tradingViewId" TEXT;
ALTER TABLE "markets" ADD COLUMN "exchange" TEXT;
ALTER TABLE "tasks" ADD COLUMN "deduplicateWindow" INTEGER DEFAULT 1200000;
ALTER TABLE "indicators" ADD COLUMN "signalFields" JSONB;
```

2. 数据迁移
```typescript
// 填充 tradingViewId
const tasks = await prisma.task.findMany({ include: { market: true } });
for (const task of tasks) {
  const markets = await tradingViewService.searchMarkets(
    task.market.symbol,
    getMarketFilter(task.market.type)
  );
  if (markets.length > 0) {
    await prisma.market.update({
      where: { id: task.marketId },
      data: { 
        tradingViewId: markets[0].id,
        exchange: markets[0].exchange
      }
    });
  }
}
```

### Phase 2: 类型优化 (需要重新生成 Prisma Client)

1. 修改 Timeframe 枚举值
2. 添加 ScheduleType 枚举
3. 更新所有使用 Timeframe 的代码

### Phase 3: 清理旧字段

1. 评估 `cronExpression` 使用情况
2. 如无使用，可以移除或标记为废弃

---

## 💡 最佳实践建议

### 1. 任务创建时验证

```typescript
async function createTask(data: CreateTaskInput) {
  // 验证 Market 是否有 tradingViewId
  const market = await prisma.market.findUnique({
    where: { id: data.marketId }
  });
  
  if (!market.tradingViewId) {
    throw new Error('Market 未初始化 TradingView ID，请先运行市场同步');
  }
  
  // 验证 Indicator 是否有 signalFields
  const indicator = await prisma.indicator.findUnique({
    where: { id: data.indicatorId }
  });
  
  if (!indicator.signalFields) {
    throw new Error('Indicator 未配置信号字段');
  }
  
  return prisma.task.create({ data });
}
```

### 2. 定期同步市场数据

```typescript
// 定期任务：同步 TradingView 市场数据
async function syncMarkets() {
  const markets = await prisma.market.findMany({
    where: { tradingViewId: null }
  });
  
  for (const market of markets) {
    try {
      const results = await tradingViewService.searchMarkets(
        market.symbol,
        getMarketFilter(market.type)
      );
      
      if (results.length > 0) {
        await prisma.market.update({
          where: { id: market.id },
          data: {
            tradingViewId: results[0].id,
            exchange: results[0].exchange
          }
        });
      }
    } catch (error) {
      console.error(`同步市场失败: ${market.symbol}`, error);
    }
  }
}
```

### 3. 指标输出验证

```typescript
// 验证指标输出是否匹配定义
function validateIndicatorOutput(
  indItem: any,
  outputFields: Record<string, string>
): boolean {
  for (const [field, type] of Object.entries(outputFields)) {
    if (!(field in indItem)) {
      console.warn(`缺少字段: ${field}`);
      return false;
    }
    
    const actualType = typeof indItem[field];
    const expectedType = type === 'boolean' ? 'number' : type;  // TradingView boolean = 0/1
    
    if (actualType !== expectedType && !(type === 'boolean' && actualType === 'number')) {
      console.warn(`字段类型不匹配: ${field}, 期望 ${type}, 实际 ${actualType}`);
      return false;
    }
  }
  
  return true;
}
```

---

## 📚 参考资料

- [TradingView API 文档](https://github.com/Mathieu2301/TradingView-API)
- [Prisma Schema 最佳实践](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate)
- 原有 Bot 实现: `src/bot-crypto/index.ts`, `src/bot-cn/index.ts`

---

**生成时间**: 2026-02-07  
**文档版本**: 1.0
