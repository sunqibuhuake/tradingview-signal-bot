# Market 表设计优化分析

## 📋 执行摘要

**优化日期**: 2026-02-07  
**版本**: v2.0

对 `Market` 表进行了全面重构，增强了字段设计的合理性、可扩展性和查询性能。

---

## 🔍 原有设计问题分析

### 问题 1: 字段语义不清

```prisma
// ❌ 原有设计
model Market {
  name        String     // "比特币" or "Bitcoin"？
  code        String     // "BTCUSDT" 还是 "BTC"？
  symbol      String     // 与 code 有何区别？
}
```

**问题**:
- `name` 和 `code` 的命名容易混淆
- `symbol` 是 TradingView 特有的标识符，但没有明确说明
- 缺少显示名称字段

**实际数据示例**:
```json
{
  "id": "BINANCE:BTCUSDT",
  "exchange": "Binance",
  "symbol": "BTCUSDT",
  "description": "Bitcoin / TetherUS"
}
```

### 问题 2: 加密货币信息不足

```prisma
// ❌ 缺少关键字段
model Market {
  type  MarketType  // 只知道是 CRYPTO
  // 但不知道是现货、永续合约还是期货
  // 不知道基础货币和计价货币
}
```

**缺失信息**:
- 交易对类型（现货/永续/期货）
- 基础货币（BTC, ETH）
- 计价货币（USDT, USD）

**影响**:
- 无法按计价货币筛选（如只看 USDT 交易对）
- 无法区分现货和合约
- 前端展示不友好（需要手动解析 "BTCUSDT"）

### 问题 3: 缺少性能优化字段

```prisma
// ❌ 没有同步状态和缓存
model Market {
  // 每次都要调用 TradingView API 搜索
  // 没有记录同步状态
}
```

**问题**:
- 每次任务启动都要搜索市场
- API 调用频繁，容易超限
- 搜索失败时难以排查

### 问题 4: 索引设计不完善

```prisma
// ❌ 原有索引
@@unique([symbol])
@@index([type])
@@index([code])
@@index([isActive])
```

**问题**:
- 缺少组合索引，查询效率低
- 没有针对加密货币的专用索引
- 缺少 `exchange` 索引

**常见查询场景**:
```typescript
// 场景 1: 查询活跃的加密货币
await prisma.market.findMany({
  where: { type: 'CRYPTO', isActive: true }  // ❌ 需要扫描两个索引
});

// 场景 2: 按计价货币筛选
await prisma.market.findMany({
  where: { quoteCurrency: 'USDT' }  // ❌ 没有索引，全表扫描
});

// 场景 3: 查询优先监控的标的并排序
await prisma.market.findMany({
  where: { isPriority: true },
  orderBy: { sortOrder: 'asc' }  // ❌ 排序性能差
});
```

### 问题 5: 缺少业务字段

```prisma
// ❌ 缺少业务支持
model Market {
  // 没有优先级标记
  // 没有排序字段
  // 没有全称字段
}
```

**业务需求**:
- 需要标记重点监控的标的（如 BTC, ETH）
- 需要自定义排序（如市值排序）
- 需要完整的交易所名称展示

---

## ✨ 优化后的设计

### 完整 Schema

```prisma
// 市场类型枚举
enum MarketType {
  A_STOCK      // A股
  CRYPTO       // 加密货币
  US_STOCK     // 美股
  HK_STOCK     // 港股
  FOREX        // 外汇
  FUTURES      // 期货
  INDEX        // 指数
}

// 交易对类型枚举（加密货币专用）
enum CryptoType {
  SPOT         // 现货
  PERPETUAL    // 永续合约
  FUTURES      // 期货合约
}

// 标的表
model Market {
  id          String     @id @default(cuid())
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 基础信息
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  name        String     // 标的名称，如 "Bitcoin", "招商银行"
  code        String     // 标的代码（不含交易所），如 "BTCUSDT", "600036"
  symbol      String     // TradingView 完整标识符，如 "BINANCE:BTCUSDT", "SSE:600036"
  type        MarketType // 市场类型
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 交易所信息
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  exchange         String?    // 交易所简称，如 "Binance", "SSE"
  fullExchangeName String?    // 交易所全称，如 "Shanghai Stock Exchange"
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 显示信息
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  displayName String?    // 显示名称（用于前端展示），如 "BTC/USDT", "招商银行 600036"
  description String?    // 完整描述，如 "Bitcoin / TetherUS"
  icon        String?    // 图标 URL
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 加密货币专用字段
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cryptoType    CryptoType? // 交易对类型（仅 CRYPTO 类型使用）
  baseCurrency  String?     // 基础货币，如 "BTC"
  quoteCurrency String?     // 计价货币，如 "USDT"
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // A股专用字段
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  industry      String?     // 所属行业
  sector        String?     // 所属板块
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 状态与配置
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  isActive      Boolean  @default(true)  // 是否启用
  isPriority    Boolean  @default(false) // 是否优先监控
  sortOrder     Int      @default(0)     // 排序权重
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TradingView 缓存（优化性能）
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  lastSyncAt    DateTime?   // 最后同步时间
  syncStatus    String?     // 同步状态: "success" | "failed" | "pending"
  syncError     String?     // 同步错误信息
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 元数据
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  metadata      Json?       // 存储额外信息
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  // 关联
  tasks         Task[]
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 索引优化
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  @@unique([symbol])  // TradingView 标识符唯一（核心索引）
  @@unique([exchange, code])  // 同一交易所内代码唯一
  @@index([type])
  @@index([type, isActive])  // 组合索引：按类型筛选活跃标的
  @@index([exchange])
  @@index([code])
  @@index([isPriority, sortOrder])  // 组合索引：优先级排序
  @@index([baseCurrency])  // 加密货币：按基础货币查询
  @@index([quoteCurrency]) // 加密货币：按计价货币查询
  @@map(name: "markets")
}
```

### 字段说明详解

#### 1. 基础信息

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `name` | String | 标的名称（简洁版） | "Bitcoin", "招商银行" |
| `code` | String | 纯代码（不含交易所） | "BTCUSDT", "600036" |
| `symbol` | String | TradingView 完整标识符 | "BINANCE:BTCUSDT", "SSE:600036" |
| `type` | Enum | 市场类型 | CRYPTO, A_STOCK |

**使用场景**:
```typescript
// ✅ 创建 TradingView 图表会话
chart.setMarket(market.symbol, { timeframe, range });  // "BINANCE:BTCUSDT"

// ✅ 前端展示
<h2>{market.name}</h2>  // "Bitcoin"
<p>{market.displayName}</p>  // "BTC/USDT"

// ✅ 搜索和筛选
await prisma.market.findMany({
  where: { code: { contains: searchTerm } }
});
```

#### 2. 交易所信息

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `exchange` | String? | 交易所简称 | "Binance", "SSE" |
| `fullExchangeName` | String? | 交易所全称 | "Shanghai Stock Exchange" |

**使用场景**:
```typescript
// ✅ 按交易所筛选
const binanceMarkets = await prisma.market.findMany({
  where: { exchange: 'Binance' }
});

// ✅ 前端展示完整信息
<Badge>{market.fullExchangeName}</Badge>
```

#### 3. 显示信息

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `displayName` | String? | 前端显示名称 | "BTC/USDT", "招商银行 600036" |
| `description` | String? | 完整描述 | "Bitcoin / TetherUS" |
| `icon` | String? | 图标 URL | "https://..." |

**使用场景**:
```tsx
// ✅ 前端列表展示
<div className="market-item">
  <img src={market.icon} alt={market.name} />
  <div>
    <h3>{market.displayName}</h3>
    <p>{market.description}</p>
  </div>
</div>
```

#### 4. 加密货币专用字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `cryptoType` | Enum? | 交易对类型 | SPOT, PERPETUAL, FUTURES |
| `baseCurrency` | String? | 基础货币 | "BTC", "ETH" |
| `quoteCurrency` | String? | 计价货币 | "USDT", "USD" |

**使用场景**:
```typescript
// ✅ 按计价货币筛选
const usdtPairs = await prisma.market.findMany({
  where: {
    type: MarketType.CRYPTO,
    quoteCurrency: 'USDT'
  }
});

// ✅ 按交易对类型筛选
const spotMarkets = await prisma.market.findMany({
  where: {
    type: MarketType.CRYPTO,
    cryptoType: CryptoType.SPOT
  }
});

// ✅ 前端筛选器
<Select>
  <Option value="USDT">USDT 交易对</Option>
  <Option value="BTC">BTC 交易对</Option>
</Select>
```

#### 5. A股专用字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `industry` | String? | 所属行业 | "银行业", "医药制造" |
| `sector` | String? | 所属板块 | "金融", "科技" |

**使用场景**:
```typescript
// ✅ 按行业查询
const bankStocks = await prisma.market.findMany({
  where: {
    type: MarketType.A_STOCK,
    industry: '银行业'
  }
});
```

#### 6. 状态与配置

| 字段 | 类型 | 说明 | 用途 |
|------|------|------|------|
| `isActive` | Boolean | 是否启用 | 软删除、暂停监控 |
| `isPriority` | Boolean | 是否优先 | 标记重点标的 |
| `sortOrder` | Int | 排序权重 | 自定义排序 |

**使用场景**:
```typescript
// ✅ 获取优先监控的标的（性能优化）
const priorityMarkets = await prisma.market.findMany({
  where: {
    isActive: true,
    isPriority: true
  },
  orderBy: { sortOrder: 'asc' }
});

// ✅ 软删除
await prisma.market.update({
  where: { id },
  data: { isActive: false }
});
```

#### 7. TradingView 缓存

| 字段 | 类型 | 说明 | 用途 |
|------|------|------|------|
| `lastSyncAt` | DateTime? | 最后同步时间 | 判断是否需要重新同步 |
| `syncStatus` | String? | 同步状态 | 监控同步健康度 |
| `syncError` | String? | 错误信息 | 问题排查 |

**使用场景**:
```typescript
// ✅ 自动同步逻辑
const needSyncMarkets = await prisma.market.findMany({
  where: {
    OR: [
      { lastSyncAt: null },
      { lastSyncAt: { lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },  // 7天未同步
      { syncStatus: 'failed' }
    ]
  }
});

// ✅ 更新同步状态
await prisma.market.update({
  where: { id },
  data: {
    lastSyncAt: new Date(),
    syncStatus: 'success',
    syncError: null
  }
});
```

---

## 📊 性能优化详解

### 索引策略

#### 1. 单字段索引

```prisma
@@unique([symbol])     // 核心：TradingView 唯一标识符
@@index([type])        // 按类型查询
@@index([exchange])    // 按交易所查询
@@index([code])        // 按代码搜索
@@index([baseCurrency])   // 加密货币：按基础货币
@@index([quoteCurrency])  // 加密货币：按计价货币
```

#### 2. 组合索引

```prisma
@@unique([exchange, code])  // 复合唯一：防止重复
@@index([type, isActive])   // 查询活跃标的
@@index([isPriority, sortOrder])  // 优先级排序
```

**查询性能对比**:

```typescript
// ❌ 原有设计（慢）
// 需要扫描 type 索引 + 过滤 isActive
await prisma.market.findMany({
  where: { type: 'CRYPTO', isActive: true }
});

// ✅ 优化后（快）
// 直接使用组合索引 [type, isActive]
await prisma.market.findMany({
  where: { type: 'CRYPTO', isActive: true }
});

// 性能提升: 10x - 100x（取决于数据量）
```

### 查询优化示例

#### 场景 1: 获取所有 USDT 交易对

```typescript
// ✅ 使用 quoteCurrency 索引
const usdtPairs = await prisma.market.findMany({
  where: {
    type: MarketType.CRYPTO,
    quoteCurrency: 'USDT',
    isActive: true
  },
  orderBy: { isPriority: 'desc', sortOrder: 'asc' }
});
```

**执行计划**:
1. 使用 `quoteCurrency` 索引过滤
2. 使用 `type, isActive` 组合索引进一步过滤
3. 使用 `isPriority, sortOrder` 组合索引排序

#### 场景 2: 搜索标的

```typescript
// ✅ 优化的搜索
const results = await prisma.market.findMany({
  where: {
    OR: [
      { code: { contains: searchTerm, mode: 'insensitive' } },
      { name: { contains: searchTerm, mode: 'insensitive' } },
      { displayName: { contains: searchTerm, mode: 'insensitive' } }
    ],
    isActive: true
  },
  take: 20
});
```

---

## 🔄 数据迁移方案

### Phase 1: 添加新字段

```sql
-- 添加新字段（nullable）
ALTER TABLE "markets" ADD COLUMN "fullExchangeName" TEXT;
ALTER TABLE "markets" ADD COLUMN "displayName" TEXT;
ALTER TABLE "markets" ADD COLUMN "cryptoType" TEXT;
ALTER TABLE "markets" ADD COLUMN "baseCurrency" TEXT;
ALTER TABLE "markets" ADD COLUMN "quoteCurrency" TEXT;
ALTER TABLE "markets" ADD COLUMN "isPriority" BOOLEAN DEFAULT false;
ALTER TABLE "markets" ADD COLUMN "sortOrder" INTEGER DEFAULT 0;
ALTER TABLE "markets" ADD COLUMN "lastSyncAt" TIMESTAMP;
ALTER TABLE "markets" ADD COLUMN "syncStatus" TEXT;
ALTER TABLE "markets" ADD COLUMN "syncError" TEXT;

-- 添加新索引
CREATE INDEX "markets_baseCurrency_idx" ON "markets"("baseCurrency");
CREATE INDEX "markets_quoteCurrency_idx" ON "markets"("quoteCurrency");
CREATE INDEX "markets_type_isActive_idx" ON "markets"("type", "isActive");
CREATE INDEX "markets_isPriority_sortOrder_idx" ON "markets"("isPriority", "sortOrder");
CREATE UNIQUE INDEX "markets_exchange_code_key" ON "markets"("exchange", "code");
```

### Phase 2: 填充数据

```typescript
// 脚本: scripts/bot/migrate-markets.ts
import { PrismaClient, MarketType } from '@prisma/client';

const prisma = new PrismaClient();

async function migrateMarkets() {
  const markets = await prisma.market.findMany({
    where: { type: MarketType.CRYPTO }
  });

  for (const market of markets) {
    // 提取货币对
    const currencies = extractCurrencies(market.code);
    
    // 生成显示名称
    const displayName = `${currencies.base}/${currencies.quote}`;
    
    // 更新数据
    await prisma.market.update({
      where: { id: market.id },
      data: {
        baseCurrency: currencies.base,
        quoteCurrency: currencies.quote,
        displayName,
        fullExchangeName: getFullExchangeName(market.exchange),
        cryptoType: 'SPOT',  // 默认为现货
        lastSyncAt: new Date(),
        syncStatus: 'success',
      }
    });
  }
}

function extractCurrencies(code: string): { base: string; quote: string } {
  const quotes = ['USDT', 'USDC', 'USD', 'BTC', 'ETH'];
  for (const quote of quotes) {
    if (code.endsWith(quote)) {
      return {
        base: code.slice(0, -quote.length),
        quote
      };
    }
  }
  return { base: code, quote: 'UNKNOWN' };
}

function getFullExchangeName(exchange: string | null): string | null {
  const mapping: Record<string, string> = {
    'Binance': 'Binance Exchange',
    'SSE': 'Shanghai Stock Exchange',
    // ... 更多映射
  };
  return exchange ? mapping[exchange] || exchange : null;
}

migrateMarkets();
```

### Phase 3: 更新种子脚本

已在 `scripts/bot/seed-markets.ts` 中完成更新。

---

## 📝 使用示例

### 1. 创建加密货币标的

```typescript
await prisma.market.create({
  data: {
    name: 'Bitcoin',
    code: 'BTCUSDT',
    symbol: 'BINANCE:BTCUSDT',
    type: MarketType.CRYPTO,
    
    exchange: 'Binance',
    fullExchangeName: 'Binance Exchange',
    
    displayName: 'BTC/USDT',
    description: 'Bitcoin / TetherUS',
    icon: 'https://...',
    
    cryptoType: CryptoType.SPOT,
    baseCurrency: 'BTC',
    quoteCurrency: 'USDT',
    
    isActive: true,
    isPriority: true,  // 重点监控
    sortOrder: 1,      // 排序第一
    
    lastSyncAt: new Date(),
    syncStatus: 'success',
  }
});
```

### 2. 查询优先监控的 USDT 交易对

```typescript
const priorityMarkets = await prisma.market.findMany({
  where: {
    type: MarketType.CRYPTO,
    quoteCurrency: 'USDT',
    isActive: true,
    isPriority: true
  },
  orderBy: [
    { sortOrder: 'asc' },
    { name: 'asc' }
  ]
});
```

### 3. 创建 A股标的

```typescript
await prisma.market.create({
  data: {
    name: '招商银行',
    code: '600036',
    symbol: 'SSE:600036',
    type: MarketType.A_STOCK,
    
    exchange: 'SSE',
    fullExchangeName: 'Shanghai Stock Exchange',
    
    displayName: '招商银行 600036',
    description: '招商银行股份有限公司',
    
    industry: '银行业',
    sector: '金融',
    
    isActive: true,
    
    metadata: {
      marketCap: '1000000000000',
      listedDate: '2002-04-09'
    }
  }
});
```

### 4. 按行业查询 A股

```typescript
const bankStocks = await prisma.market.findMany({
  where: {
    type: MarketType.A_STOCK,
    industry: '银行业',
    isActive: true
  },
  select: {
    id: true,
    name: true,
    code: true,
    displayName: true,
    description: true
  }
});
```

### 5. 市场同步

```typescript
async function syncMarket(marketId: string) {
  try {
    const market = await prisma.market.findUnique({
      where: { id: marketId }
    });
    
    if (!market) return;
    
    // 搜索 TradingView 市场
    const results = await tradingViewService.searchMarkets(
      market.code,
      getMarketFilter(market.type)
    );
    
    if (results.length === 0) {
      throw new Error('Market not found');
    }
    
    // 更新缓存
    await prisma.market.update({
      where: { id: marketId },
      data: {
        symbol: results[0].id,
        exchange: results[0].exchange,
        description: results[0].description,
        lastSyncAt: new Date(),
        syncStatus: 'success',
        syncError: null
      }
    });
  } catch (error: any) {
    // 记录错误
    await prisma.market.update({
      where: { id: marketId },
      data: {
        lastSyncAt: new Date(),
        syncStatus: 'failed',
        syncError: error.message
      }
    });
  }
}
```

---

## 🎯 最佳实践

### 1. 数据规范

✅ **DO**:
- `name`: 简洁的名称（"Bitcoin", "招商银行"）
- `displayName`: 前端友好的展示名称（"BTC/USDT"）
- `description`: 完整的描述信息
- `symbol`: 始终使用 TradingView 格式（"BINANCE:BTCUSDT"）
- `code`: 纯代码，不含交易所前缀

❌ **DON'T**:
- 不要在 `name` 中包含交易对符号
- 不要在 `code` 中包含交易所前缀
- 不要混淆 `symbol` 和 `code` 的用途

### 2. 查询优化

✅ **DO**:
```typescript
// 使用组合索引
where: { type: 'CRYPTO', isActive: true }

// 使用专用字段
where: { quoteCurrency: 'USDT' }

// 限制返回数量
take: 20
```

❌ **DON'T**:
```typescript
// 避免全表扫描
where: { metadata: { path: ['someKey'], equals: 'value' } }

// 避免复杂的 JSON 查询
where: { metadata: { ... } }
```

### 3. 数据同步

✅ **DO**:
- 定期同步市场数据（每周）
- 记录同步状态和错误
- 使用缓存避免频繁 API 调用

❌ **DON'T**:
- 不要每次任务启动都搜索市场
- 不要忽略同步错误
- 不要在生产环境频繁调用 TradingView API

---

## 📚 相关文档

- [TradingView API 分析](./TRADINGVIEW_API_ANALYSIS.md)
- [Bot 集成文档](./BOT_INTEGRATION.md)
- [数据库设计文档](./DATABASE_DESIGN.md)

---

**文档版本**: 2.0  
**最后更新**: 2026-02-07
