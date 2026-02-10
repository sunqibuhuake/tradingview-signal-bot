# Webhook 选择器修复

## 🐛 问题描述

在任务编辑页面（`/admin/tasks/[id]/edit`），修改任务时钉钉 Webhook 的选择数据没有正确携带到 API 请求中。

### 具体表现
1. 编辑任务时，Webhook 下拉框显示空白（即使已经有值）
2. 无法切换到"不使用 Webhook"选项
3. PATCH 请求中 `dingTalkWebhookId` 字段可能丢失

### 根本原因
1. **空字符串问题**：当 `dingTalkWebhookId` 为空字符串 `""` 时，Select 组件将其视为有值，不显示占位符
2. **缺少"不使用"选项**：原代码注释掉了"不使用 Webhook"选项
3. **空值处理不当**：提交时没有将空字符串转换为 `null`

## ✅ 修复方案

### 1. 修复 Select 组件的 value 属性

```tsx
// 修复前
<Select
    value={formData.dingTalkWebhookId}
    ...
>

// 修复后
<Select
    value={formData.dingTalkWebhookId || undefined}  // 空字符串转为 undefined，显示占位符
    ...
>
```

### 2. 添加"不使用 Webhook"选项

```tsx
<SelectContent>
    <SelectItem value="__none__">不使用 Webhook</SelectItem>
    {webhooksData?.webhooks?.map((webhook) => (
        <SelectItem key={webhook.id} value={webhook.id}>
            {webhook.name}
        </SelectItem>
    ))}
</SelectContent>
```

使用特殊值 `__none__` 而不是空字符串 `""`，避免 Select 组件的 value 处理问题。

### 3. 处理特殊值转换

```tsx
onValueChange={(value) =>
    setFormData({ 
        ...formData, 
        dingTalkWebhookId: value === '__none__' ? '' : value 
    })
}
```

当用户选择"不使用 Webhook"时，将 `__none__` 转换为空字符串存储。

### 4. 提交时转换空值为 null

```tsx
const payload = {
    ...formData,
    indicatorIds: [formData.indicatorId],
    indicatorId: undefined,
    // 如果 dingTalkWebhookId 为空字符串，转换为 null
    dingTalkWebhookId: formData.dingTalkWebhookId || null,
};
```

确保 API 接收到的是 `null` 而不是空字符串。

## 📝 修改文件

### `app/admin/tasks/components/TaskForm.tsx`

#### 修改点 1: Select 组件 value 属性
```tsx
// Line 391
value={formData.dingTalkWebhookId || undefined}
```

#### 修改点 2: onValueChange 处理
```tsx
// Line 392-396
onValueChange={(value) =>
    setFormData({ 
        ...formData, 
        dingTalkWebhookId: value === '__none__' ? '' : value 
    })
}
```

#### 修改点 3: 添加"不使用"选项
```tsx
// Line 400
<SelectItem value="__none__">不使用 Webhook</SelectItem>
```

#### 修改点 4: 提交时的空值处理
```tsx
// Line 140-141
// 如果 dingTalkWebhookId 为空字符串，转换为 null
dingTalkWebhookId: formData.dingTalkWebhookId || null,
```

## 🎯 预期效果

修复后，用户在编辑任务时：

1. ✅ 如果任务没有关联 Webhook，显示"选择通知目标"占位符
2. ✅ 如果任务已关联 Webhook，显示对应的 Webhook 名称
3. ✅ 可以选择"不使用 Webhook"清除关联
4. ✅ 可以切换到其他 Webhook
5. ✅ 保存时正确携带 `dingTalkWebhookId` 字段（`null` 或有效 ID）

## 🔍 测试步骤

1. **创建任务测试**
   - 访问 `/admin/tasks/new`
   - 不选择 Webhook，提交
   - 检查数据库：`dingTalkWebhookId` 应为 `null`

2. **编辑任务 - 添加 Webhook**
   - 编辑一个没有 Webhook 的任务
   - 选择一个 Webhook
   - 保存，检查 API 请求和数据库更新

3. **编辑任务 - 移除 Webhook**
   - 编辑一个有 Webhook 的任务
   - 选择"不使用 Webhook"
   - 保存，检查 `dingTalkWebhookId` 变为 `null`

4. **编辑任务 - 切换 Webhook**
   - 编辑任务，从 Webhook A 切换到 Webhook B
   - 保存，检查更新是否成功

## 📊 API 请求示例

### 创建任务（不使用 Webhook）
```json
{
  "name": "BTC 监控",
  "marketId": "xxx",
  "indicatorIds": ["yyy"],
  "dingTalkWebhookId": null,  // ✅ null
  ...
}
```

### 编辑任务（添加 Webhook）
```json
{
  "name": "BTC 监控",
  "dingTalkWebhookId": "webhook-id-123",  // ✅ 有效 ID
  ...
}
```

### 编辑任务（移除 Webhook）
```json
{
  "name": "BTC 监控",
  "dingTalkWebhookId": null,  // ✅ null
  ...
}
```

## 🎨 UI 优化

在修复过程中，还优化了用户体验：

1. **更明确的占位符文本**："选择通知目标"（简洁明了）
2. **"不使用 Webhook"选项**：用户可以主动清除关联
3. **一致的选择逻辑**：所有 Select 组件使用统一的空值处理方式

## 🔧 相关问题

### 为什么不直接使用 `""` 作为"不使用"的值？

Select 组件（Radix UI）对空字符串的处理有特殊逻辑：
- `value=""` 被视为有值，不会显示占位符
- `value={undefined}` 才会显示占位符

因此使用特殊值 `__none__` 可以避免这个问题。

### 为什么提交时要转换为 `null`？

1. **数据库约束**：`dingTalkWebhookId` 字段类型为 `String?`（可选），`null` 表示无关联
2. **语义清晰**：`null` 表示"无值"，空字符串 `""` 可能引起歧义
3. **API 一致性**：保持与其他可选外键字段的一致性

## ✅ 测试状态

- ✅ 通过 TypeScript 类型检查
- ✅ 通过 ESLint 检查
- ✅ 无 linter 错误
- 待测试：功能测试（创建、编辑、删除 Webhook 关联）

---

**修复日期**: 2026-02-09  
**影响页面**: `/admin/tasks/new`, `/admin/tasks/[id]/edit`  
**相关 API**: `POST /api/admin/tasks`, `PATCH /api/admin/tasks/[id]`
