# 任务创建强制要求钉钉 Webhook

## 修改概述

修改了任务创建/编辑功能，强制要求选择钉钉 Webhook，确保所有任务都有明确的通知目标。

## 修改文件

### 1. 前端表单 - `app/admin/tasks/components/TaskForm.tsx`

#### 修改点 1: 添加必选验证
```typescript
// 在 handleSubmit 中添加验证
if (!formData.dingTalkWebhookId) {
    toast.error('请选择钉钉 Webhook 通知目标');
    return;
}
```

#### 修改点 2: 确保数据正确传递
```typescript
// 移除了空字符串转 null 的逻辑
const payload = {
    ...formData,
    indicatorIds: [formData.indicatorId],
    indicatorId: undefined,
    dingTalkWebhookId: formData.dingTalkWebhookId, // 直接传递，不转换
};
```

#### 修改点 3: UI 改进
- 添加必填标识 `*`
- 移除"不使用 Webhook"选项
- 移除 `__none__` 特殊值处理
- 添加无可用 Webhook 时的警告提示
- 在选项中显示 Webhook 描述信息

```tsx
<Label htmlFor="webhook">
    钉钉 Webhook <span className="text-destructive">*</span>
</Label>
<Select
    value={formData.dingTalkWebhookId || undefined}
    onValueChange={(value) =>
        setFormData({ 
            ...formData, 
            dingTalkWebhookId: value  // 直接赋值
        })
    }
>
    <SelectTrigger id="webhook">
        <SelectValue placeholder="请选择通知目标" />
    </SelectTrigger>
    <SelectContent>
        {webhooksData?.webhooks?.map((webhook) => (
            <SelectItem key={webhook.id} value={webhook.id}>
                {webhook.name}
                {webhook.description && (
                    <span className="text-xs text-muted-foreground ml-2">
                        - {webhook.description}
                    </span>
                )}
            </SelectItem>
        ))}
    </SelectContent>
</Select>
```

### 2. 后端 API - `app/api/admin/tasks/route.ts` (POST)

#### 修改点: 添加 Webhook 验证和保存

```typescript
const {
    name,
    description,
    marketId,
    indicatorIds,
    dingTalkWebhookId, // 新增
    // ... 其他字段
} = body;

// 验证钉钉 Webhook
if (dingTalkWebhookId) {
    const webhook = await prisma.dingTalkWebhook.findUnique({
        where: { id: dingTalkWebhookId },
    });

    if (!webhook) {
        return NextResponse.json(
            { error: 'DingTalk Webhook not found' },
            { status: 404 }
        );
    }

    if (!webhook.isActive) {
        return NextResponse.json(
            { error: 'Selected DingTalk Webhook is not active' },
            { status: 400 }
        );
    }
}

// 创建任务时保存
const task = await prisma.task.create({
    data: {
        name,
        description,
        marketId,
        dingTalkWebhookId, // 保存 Webhook ID
        // ... 其他字段
    },
    include: {
        market: true,
        dingTalkWebhook: true, // 返回 Webhook 信息
        taskIndicators: {
            include: { indicator: true },
        },
    },
});
```

### 3. 后端 API - `app/api/admin/tasks/[id]/route.ts` (PATCH)

#### 修改点: 更新时也验证和保存 Webhook

```typescript
const { indicatorIds, dingTalkWebhookId, ...updateData } = body;

// 验证钉钉 Webhook（如果提供）
if (dingTalkWebhookId) {
    const webhook = await prisma.dingTalkWebhook.findUnique({
        where: { id: dingTalkWebhookId },
    });

    if (!webhook) {
        return NextResponse.json(
            { error: 'DingTalk Webhook not found' },
            { status: 404 }
        );
    }

    if (!webhook.isActive) {
        return NextResponse.json(
            { error: 'Selected DingTalk Webhook is not active' },
            { status: 400 }
        );
    }
}

// 合并 dingTalkWebhookId 到更新数据中
const finalUpdateData = {
    ...updateData,
    ...(dingTalkWebhookId !== undefined && { dingTalkWebhookId }),
};

const task = await prisma.task.update({
    where: { id },
    data: finalUpdateData,
    include: {
        market: true,
        dingTalkWebhook: true, // 返回 Webhook 信息
        taskIndicators: {
            include: { indicator: true },
        },
    },
});
```

## 修复的问题

### 问题 1: Webhook ID 未保存
**原因**: 
- 前端将空字符串转换为 `null`
- 后端没有接收和处理 `dingTalkWebhookId` 字段

**解决**:
- 前端直接传递 `dingTalkWebhookId`，不做转换
- 后端接收并保存 `dingTalkWebhookId`
- 后端返回时包含 `dingTalkWebhook` 关联信息

### 问题 2: 可以不选择 Webhook
**原因**: 
- 表单允许选择"不使用 Webhook"
- 没有必填验证

**解决**:
- 移除"不使用 Webhook"选项
- 添加必填验证
- 添加必填标识 `*`

## 用户体验改进

1. **明确的必填提示**: 标签上显示红色 `*` 号
2. **友好的占位符**: "请选择通知目标"
3. **详细的选项信息**: 显示 Webhook 名称和描述
4. **清晰的错误提示**: 
   - "请选择钉钉 Webhook 通知目标"
   - "DingTalk Webhook not found"
   - "Selected DingTalk Webhook is not active"
5. **无 Webhook 时的引导**: 提示用户去 Webhook 管理页面创建

## 测试清单

- [ ] 创建新任务时必须选择 Webhook
- [ ] 不选择 Webhook 无法提交，显示错误提示
- [ ] 选择的 Webhook ID 正确保存到数据库
- [ ] 任务详情页正确显示关联的 Webhook
- [ ] 编辑任务时可以修改 Webhook
- [ ] 选择已禁用的 Webhook 时显示错误
- [ ] 选择不存在的 Webhook 时显示错误
- [ ] Webhook 下拉列表只显示已启用的 Webhook

## 数据库影响

无需修改数据库结构，`dingTalkWebhookId` 字段已存在于 `tasks` 表中。

## 向后兼容性

**已存在的任务**: 
- 如果 `dingTalkWebhookId` 为 `null`，需要手动编辑并选择 Webhook
- 建议运行数据迁移脚本，为所有 `null` 的任务设置默认 Webhook

```sql
-- 可选：为没有 Webhook 的任务设置默认值
UPDATE tasks 
SET "dingTalkWebhookId" = (
    SELECT id FROM dingtalk_webhooks 
    WHERE "isActive" = true 
    LIMIT 1
)
WHERE "dingTalkWebhookId" IS NULL;
```

## 相关文档

- [钉钉 Webhook 配置](./DINGTALK_WEBHOOK.md)
- [任务管理](./TASK_MANAGEMENT.md)
