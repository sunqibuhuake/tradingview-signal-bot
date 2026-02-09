# 钉钉 Webhook 管理功能

## 功能概述

新增的钉钉 Webhook 管理功能允许你：
- 在后台配置多个钉钉群机器人 Webhook
- 为不同的任务绑定不同的通知目标
- 统计每个 Webhook 的消息发送数量
- 动态启用/禁用 Webhook

## 数据库变更

### 新增表：`dingtalk_webhooks`

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String | 主键 |
| name | String | Webhook 名称（如：VIP客户群） |
| description | String? | 描述 |
| webhookUrl | String | 钉钉 Webhook URL |
| secret | String? | 加签密钥（可选） |
| isActive | Boolean | 是否启用 |
| messageCount | Int | 已发送消息数量 |
| lastUsedAt | DateTime? | 最后使用时间 |
| createdAt | DateTime | 创建时间 |
| updatedAt | DateTime | 更新时间 |

### Task 表新增字段

| 字段 | 类型 | 说明 |
|------|------|------|
| dingTalkWebhookId | String? | 关联的 Webhook ID |
| dingTalkWebhook | Relation | Webhook 关联对象 |

## 使用指南

### 1. 添加 Webhook

1. 在钉钉群中添加自定义机器人
2. 复制 Webhook URL
3. 访问后台管理 > **Webhook 配置**
4. 点击"添加 Webhook"
5. 填写名称、描述和 Webhook URL
6. （可选）如果启用了加签，填写密钥
7. 保存

### 2. 绑定任务到 Webhook

创建或编辑任务时：
1. 在"钉钉 Webhook"下拉框中选择目标群
2. 如果不选择，将使用环境变量 `DINGTALK_WEBHOOK` 的默认配置
3. 保存任务

### 3. 通知优先级

系统按以下优先级选择通知目标：
1. **任务绑定的 Webhook**（如果已配置且启用）
2. **环境变量 `DINGTALK_WEBHOOK`**（回退选项）
3. **跳过通知**（如果都未配置）

### 4. 管理 Webhook

在 Webhook 列表页面可以：
- 查看所有 Webhook 及其使用统计
- 启用/禁用 Webhook
- 编辑 Webhook 信息
- 删除未被使用的 Webhook（有关联任务的 Webhook 不能删除）

## API 端点

### Webhook CRUD

- `GET /api/admin/webhooks` - 获取 Webhook 列表
- `POST /api/admin/webhooks` - 创建 Webhook
- `GET /api/admin/webhooks/[id]` - 获取单个 Webhook
- `PATCH /api/admin/webhooks/[id]` - 更新 Webhook
- `DELETE /api/admin/webhooks/[id]` - 删除 Webhook

## 迁移说明

### 现有任务

- 现有任务的 `dingTalkWebhookId` 字段为 `null`
- 系统将自动使用环境变量的 Webhook
- 无需手动迁移，向后兼容

### 推荐迁移步骤

1. 运行数据库迁移：`pnpm prisma:push`
2. 创建默认 Webhook：`pnpm seed:webhooks`
3. 在后台更新 Webhook URL 为实际地址
4. 逐步将任务绑定到对应的 Webhook

## 代码变更

### NotificationService

- 不再从构造函数读取环境变量
- 接收 `webhookUrl` 参数
- 支持动态 Webhook URL

### TaskExecutor

- 新增 `getNotificationService()` 方法
- 优先使用任务关联的 Webhook
- 自动更新 Webhook 使用统计（消息数量、最后使用时间）

### 前端组件

- `app/admin/webhooks/page.tsx` - Webhook 管理页面
- `WebhooksTable` - Webhook 列表表格
- `CreateWebhookDialog` - 创建 Webhook 对话框
- `CreateTaskDialog` - 任务创建表单（新增 Webhook 选择）

## 示例：获取钉钉 Webhook URL

1. 打开钉钉PC端或移动端
2. 进入目标群聊
3. 点击群设置 > 智能群助手
4. 添加机器人 > 自定义（通过 Webhook 接入）
5. 设置机器人名称和头像
6. 选择安全设置：
   - **自定义关键词**：在消息中必须包含关键词
   - **加签**：更安全，复制密钥到系统中
7. 复制 Webhook 地址

格式示例：
```
https://oapi.dingtalk.com/robot/send?access_token=xxxxxxxxxx
```

## 注意事项

1. **Webhook 安全**：
   - 不要在公共场所分享 Webhook URL
   - 建议启用加签验证
   - 定期更换 Webhook

2. **消息频率**：
   - 钉钉机器人有频率限制（每分钟最多20条）
   - 系统会自动处理发送失败的情况

3. **删除保护**：
   - 有关联任务的 Webhook 不能直接删除
   - 需要先解除任务绑定或删除任务

4. **统计数据**：
   - `messageCount`：成功发送的消息数量
   - `lastUsedAt`：最后一次成功发送消息的时间

## 故障排查

### 消息未收到

1. 检查 Webhook 是否启用（`isActive = true`）
2. 检查任务是否启用通知（`enableNotification = true`）
3. 检查 Webhook URL 是否正确
4. 查看日志中的错误信息

### Webhook 删除失败

- 错误提示：`Cannot delete webhook: X task(s) are using it`
- 解决方法：先在任务管理中解除绑定或删除相关任务

## 未来改进

- [ ] 支持多个 Webhook 同时发送
- [ ] 支持 Webhook 模板配置
- [ ] 支持其他通知渠道（企业微信、Slack等）
- [ ] Webhook 健康检查和自动重试
- [ ] 消息发送历史记录
