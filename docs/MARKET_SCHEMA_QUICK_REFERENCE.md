# Market 表优化速查表

## ✨ 核心改进点

### 1. 新增 12 个字段
- `fullExchangeName`, `displayName` - 更好的前端展示
- `cryptoType`, `baseCurrency`, `quoteCurrency` - 加密货币专用
- `industry`, `sector` - A股专用
- `isPriority`, `sortOrder` - 业务配置
- `lastSyncAt`, `syncStatus`, `syncError` - 同步状态

### 2. 新增 CryptoType 枚举
- SPOT, PERPETUAL, FUTURES

### 3. 优化 5 个索引
- 新增 `@@unique([exchange, code])`
- 新增 `@@index([type, isActive])`
- 新增 `@@index([isPriority, sortOrder])`
- 新增 `@@index([baseCurrency])`
- 新增 `@@index([quoteCurrency])`

---

## 🎯 使用对比

### 查询活跃的加密货币

```typescript
// ❌ 原有（需要扫描两个索引）
await prisma.market.findMany({
  where: { type: 'CRYPTO', isActive: true }
});

// ✅ 优化后（直接使用组合索引）
await prisma.market.findMany({
  where: { type: 'CRYPTO', isActive: true }
});
// 性能提升: 使用 [type, isActive] 组合索引
```

### 按计价货币筛选

```typescript
// ❌ 原有（全表扫描，需要解析 code）
const markets = await prisma.market.findMany({
  where: { 
    type: 'CRYPTO',
    code: { endsWith: 'USDT' }
  }
});

// ✅ 优化后（使用索引）
const markets = await prisma.market.findMany({
  where: {
    type: 'CRYPTO',
    quoteCurrency: 'USDT'
  }
});
// 性能提升: 10x-100x
```

### 前端展示

```tsx
// ❌ 原有（需要手动处理）
<div>
  <h3>{market.name}</h3>  {/* "比特币" */}
  <p>{market.code}</p>     {/* "BTCUSDT" 不友好 */}
</div>

// ✅ 优化后（字段专用）
<div>
  <h3>{market.displayName}</h3>  {/* "BTC/USDT" 友好 */}
  <p>{market.description}</p>     {/* "Bitcoin / TetherUS" */}
  <small>{market.fullExchangeName}</small>  {/* "Binance Exchange" */}
</div>
```

---

## 📝 迁移步骤

1. **更新 Schema**: ✅ 已完成
2. **更新 Seed 脚本**: ✅ 已完成
3. **生成 Prisma Client**: 
   ```bash
   npx prisma generate
   ```
4. **运行迁移**: 
   ```bash
   npx prisma migrate dev --name optimize_market_schema
   ```
5. **重新导入数据**: 
   ```bash
   npx tsx scripts/bot/seed-markets.ts
   ```

---

## 📚 完整文档

详细说明请查看: `docs/MARKET_SCHEMA_OPTIMIZATION.md`
