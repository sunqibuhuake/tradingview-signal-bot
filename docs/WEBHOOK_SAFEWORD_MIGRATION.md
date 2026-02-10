# Webhook 安全词迁移指南

## 概述

本次更新将钉钉 Webhook 的"加签密钥"字段替换为"安全词"字段，并修改通知服务以支持新的安全词机制。

## 变更内容

### 1. 数据库 Schema 变更

**文件**: `prisma/schemas/webhook.prisma`

```prisma
// 移除
- secret String? // 加签密钥（可选）

// 新增
+ safeWord String // 安全词（必填，钉钉自定义关键词）
```

### 2. NotificationService 变更

**文件**: `src/services/NotificationService.ts`

#### 构造函数变更

```typescript
// Before
constructor(webhookUrl: string)

// After
constructor(config: NotificationConfig)

// 新增接口
interface NotificationConfig {
  webhookUrl: string;
  safeWord: string;
}
```

#### 消息格式变更

所有发送的消息会自动在标题前添加安全词：

```typescript
// Before
'A股 Trading Signal'
'Crypto Trading Signal'

// After
'【交易信号】A股 Trading Signal'
'【交易信号】Crypto Trading Signal'
```

### 3. TaskExecutor 变更

**文件**: `lib/bot/TaskExecutor.ts`

```typescript
// Before
return new NotificationService(webhookUrl);

// After
return new NotificationService({ webhookUrl, safeWord });
```

支持从任务配置的 Webhook 或环境变量读取安全词。

### 4. API 路由变更

**文件**: `app/api/admin/webhooks/route.ts`

- `POST /api/admin/webhooks`: 必需字段增加 `safeWord`
- 验证错误消息更新

**文件**: `app/api/admin/webhooks/[id]/route.ts`

- `PATCH /api/admin/webhooks/:id`: 支持更新 `safeWord` 字段

### 5. 前端表单变更

**文件**: `app/admin/webhooks/components/CreateWebhookDialog.tsx`

- 移除"加签密钥"字段（secret）
- 新增"安全词"字段（safeWord）- **必填**
- 更新表单验证和说明文本

## 迁移步骤

### Step 1: 数据库迁移

⚠️ **警告**: 此操作会删除现有的 `secret` 字段数据！请提前备份。

```bash
# 1. 推送 schema 变更到数据库
pnpm prisma:push

# 2. 确认迁移
# Prisma 会提示字段变更，输入 y 确认
```

### Step 2: 更新环境变量

如果使用环境变量配置默认 Webhook，需要添加新的环境变量：

```bash
# .env 文件
DINGTALK_WEBHOOK=https://oapi.dingtalk.com/robot/send?access_token=xxx
DINGTALK_SAFE_WORD=交易信号  # 新增
```

### Step 3: 更新现有 Webhook 配置

由于 `safeWord` 是必填字段，需要为所有现有的 Webhook 添加安全词。

#### 方法 1: 通过后台管理界面

1. 登录后台管理
2. 进入"Webhook 配置"页面
3. 编辑每个 Webhook
4. 填写"安全词"字段（与钉钉机器人设置的自定义关键词一致）
5. 保存更改

#### 方法 2: 通过数据库脚本

如果有多个 Webhook 需要批量更新：

```typescript
// scripts/migrate-webhooks-safeword.ts
import prisma from '../lib/prisma';

async function migrateWebhooks() {
  const defaultSafeWord = '交易信号'; // 设置默认安全词
  
  const webhooks = await prisma.dingTalkWebhook.findMany({
    where: {
      safeWord: null, // 查找没有安全词的 Webhook
    },
  });

  console.log(`找到 ${webhooks.length} 个需要更新的 Webhook`);

  for (const webhook of webhooks) {
    await prisma.dingTalkWebhook.update({
      where: { id: webhook.id },
      data: { safeWord: defaultSafeWord },
    });
    console.log(`✅ 已更新: ${webhook.name}`);
  }

  console.log('迁移完成');
}

migrateWebhooks()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

运行脚本：
```bash
pnpm tsx scripts/migrate-webhooks-safeword.ts
```

### Step 4: 重新生成 Prisma Client

```bash
pnpm prisma:generate
```

### Step 5: 重启应用

```bash
# 开发环境
pnpm dev

# 生产环境
pnpm build
pnpm start
```

## 钉钉机器人配置

在钉钉群设置自定义机器人时，需要启用"自定义关键词"安全设置：

1. 打开钉钉群 → 群设置 → 智能群助手
2. 添加机器人 → 自定义（通过 Webhook 接入自定义服务）
3. **安全设置** → 选择"自定义关键词"
4. 输入关键词（例如：`交易信号`）
5. 复制 Webhook 地址
6. 在后台管理配置时，"安全词"字段填写相同的关键词

⚠️ **重要**: 安全词必须与钉钉机器人设置的自定义关键词完全一致，否则消息发送会失败。

## 兼容性说明

### 向后兼容性

❌ **不兼容**: 此更新不向后兼容

- 移除了 `secret` 字段
- 新增了必填的 `safeWord` 字段
- NotificationService 构造函数参数结构变更

### 升级路径

如果使用了加签验证（secret），需要：

1. 在钉钉机器人设置中改用"自定义关键词"安全设置
2. 移除加签验证配置
3. 配置自定义关键词
4. 在系统中配置对应的安全词

## API 变更对照

### 创建 Webhook

#### Before
```json
POST /api/admin/webhooks
{
  "name": "测试群",
  "webhookUrl": "https://...",
  "secret": "SEC...",  // 可选
  "isActive": true
}
```

#### After
```json
POST /api/admin/webhooks
{
  "name": "测试群",
  "webhookUrl": "https://...",
  "safeWord": "交易信号",  // 必填
  "isActive": true
}
```

### 更新 Webhook

#### Before
```json
PATCH /api/admin/webhooks/:id
{
  "secret": "SEC..."
}
```

#### After
```json
PATCH /api/admin/webhooks/:id
{
  "safeWord": "交易信号"
}
```

## 代码使用示例

### 创建 NotificationService

#### Before
```typescript
const notificationService = new NotificationService(webhookUrl);
```

#### After
```typescript
const notificationService = new NotificationService({
  webhookUrl: 'https://...',
  safeWord: '交易信号',
});
```

### 发送通知

```typescript
// 代码无需修改，安全词自动添加到消息中
await notificationService.sendCryptoSignal({
  market: 'BTC/USDT',
  action: 'Buy',
  price: 50000,
  indicatorName: 'RSI',
  timestamp: new Date(),
});

// 实际发送的消息格式：
// 【交易信号】Crypto Trading Signal
// 交易对：BTC/USDT
// 操作：Buy / Long
// ...
```

## 测试清单

- [ ] 数据库 schema 更新成功
- [ ] Prisma Client 重新生成
- [ ] 环境变量已更新（如使用）
- [ ] 所有现有 Webhook 已添加安全词
- [ ] 创建新 Webhook 功能正常
- [ ] 编辑 Webhook 功能正常
- [ ] 发送测试消息成功
- [ ] 消息内容包含安全词
- [ ] 钉钉群能正常接收消息
- [ ] 任务执行时通知正常发送

## 常见问题

### Q: 为什么要从加签密钥改为安全词？

A: 
1. **简化配置**: 安全词配置更简单，用户友好
2. **统一格式**: 确保所有消息格式一致，包含关键词
3. **易于识别**: 消息标题直接显示安全词，便于区分不同来源

### Q: 现有的加签密钥配置会丢失吗？

A: 是的，`secret` 字段会被删除。如果需要保留，请在迁移前备份数据库。

### Q: 可以不设置安全词吗？

A: 不可以，`safeWord` 是必填字段。这是为了确保所有消息都符合钉钉的自定义关键词验证。

### Q: 如果安全词与钉钉设置不匹配会怎样？

A: 消息发送会失败，钉钉会返回错误。请确保安全词与钉钉机器人的自定义关键词完全一致。

### Q: 可以使用多个关键词吗？

A: 钉钉支持配置多个关键词，但系统目前只支持一个安全词。建议在钉钉设置中只配置一个主要关键词。

### Q: 环境变量配置的 Webhook 如何迁移？

A: 添加 `DINGTALK_SAFE_WORD` 环境变量即可：

```bash
DINGTALK_WEBHOOK=https://...
DINGTALK_SAFE_WORD=交易信号
```

## 回滚方案

如果需要回滚到旧版本：

1. **还原代码**:
   ```bash
   git revert <commit-hash>
   ```

2. **还原数据库**:
   ```bash
   # 从备份还原，或手动执行 SQL
   ALTER TABLE dingtalk_webhooks DROP COLUMN safeWord;
   ALTER TABLE dingtalk_webhooks ADD COLUMN secret VARCHAR(255);
   ```

3. **重新生成 Prisma Client**:
   ```bash
   pnpm prisma:generate
   ```

4. **重启应用**

## 相关文档

- [钉钉机器人开发文档](https://open.dingtalk.com/document/robots/custom-robot-access)
- [Webhook 管理文档](./WEBHOOK_MANAGEMENT.md)
- [项目部署指南](./DEPLOYMENT.md)

## 支持

如有问题，请查看：
- 系统日志中的错误信息
- 钉钉机器人发送失败的返回消息
- Prisma 迁移日志

## 版本历史

- **v2.0.0** (2024-02-09): 从加签密钥迁移到安全词
- **v1.0.0**: 初始版本，使用加签密钥
