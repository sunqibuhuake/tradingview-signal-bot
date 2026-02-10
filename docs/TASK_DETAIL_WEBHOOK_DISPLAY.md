# 任务详情页 Webhook 配置显示

## 📋 改进内容

在任务详情页面增强"通知配置"部分，显示具体使用的钉钉 Webhook 配置信息。

## 🎯 改进目标

之前的任务详情页面只显示"启用通知"或"已禁用"，用户无法知道：
- 任务使用的是哪个 Webhook 配置
- Webhook 是否处于活跃状态
- Webhook 的使用统计信息

改进后可以清楚地看到：
- ✅ 具体的 Webhook 配置名称和描述
- ✅ Webhook 是否处于活跃状态
- ✅ 已发送消息数量和最后使用时间
- ✅ 未配置时显示提示信息（使用环境变量）

## 📝 修改文件

### 1. API 路由 - `app/api/admin/tasks/[id]/route.ts`

在查询任务详情时，增加 `dingTalkWebhook` 关联查询：

```typescript
const task = await prisma.task.findUnique({
  where: { id },
  include: {
    market: true,
    dingTalkWebhook: true,  // ✅ 新增
    taskIndicators: {
      include: {
        indicator: true,
      },
    },
    _count: {
      select: { executions: true },
    },
  },
});
```

### 2. 类型定义 - `app/admin/tasks/types.ts`

更新 `SignalTask` 类型，添加 `dingTalkWebhook` 字段：

```typescript
import { DingTalkWebhook } from "@/generated/prisma";  // 导入类型

export type SignalTask = PrismaTask & {
  market: Market;
  dingTalkWebhook?: DingTalkWebhook | null;  // ✅ 新增
  taskIndicators: Array<PrismaTaskIndicator & { indicator: Indicator }>;
  _count: {
    executions: number;
  };
}
```

### 3. UI 组件 - `app/admin/tasks/[id]/components/TaskDetailContent.tsx`

#### 修改 1: 添加 Webhook 图标导入
```typescript
import { 
  AlertCircle,
  TrendingUp,
  Activity,
  Clock,
  Calendar,
  Bell,
  Webhook,  // ✅ 新增
} from 'lucide-react';
```

#### 修改 2: 增强通知配置卡片

```tsx
{/* 通知配置 */}
<div className="space-y-3">
  <h3 className="text-lg font-semibold flex items-center gap-2">
    <Bell className="h-5 w-5" />
    通知配置
  </h3>
  <div className="rounded-lg border bg-card p-4 space-y-3">
    {/* 启用状态 */}
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">启用通知</span>
      <Badge variant={...}>...</Badge>
    </div>
    
    <Separator />
    
    {/* Webhook 详情 - 新增 */}
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Webhook className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">钉钉 Webhook</span>
      </div>
      
      {task.dingTalkWebhook ? (
        // 已配置 Webhook - 显示详细信息
        <div className="rounded-lg bg-secondary/50 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{task.dingTalkWebhook.name}</span>
            <Badge variant={...}>
              {task.dingTalkWebhook.isActive ? '活跃' : '停用'}
            </Badge>
          </div>
          {task.dingTalkWebhook.description && (
            <p className="text-xs text-muted-foreground">
              {task.dingTalkWebhook.description}
            </p>
          )}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>已发送 {task.dingTalkWebhook.messageCount} 条消息</span>
            {task.dingTalkWebhook.lastUsedAt && (
              <span>最后使用: {formatDate}</span>
            )}
          </div>
        </div>
      ) : (
        // 未配置 Webhook - 显示提示
        <div className="rounded-lg border border-dashed bg-muted/30 p-3">
          <p className="text-sm text-muted-foreground">
            未配置 Webhook，将使用环境变量中的默认配置
          </p>
        </div>
      )}
    </div>
  </div>
</div>
```

## 🎨 UI 效果

### 已配置 Webhook 时
显示一个高亮卡片，包含：
- **名称**: 醒目显示 Webhook 配置名称
- **状态徽章**: "活跃"（绿色）或"停用"（灰色）
- **描述**: 如果有描述信息则显示
- **统计信息**: 
  - 已发送消息数量
  - 最后使用时间

### 未配置 Webhook 时
显示一个虚线边框的提示框，说明将使用环境变量中的默认配置。

## 📊 数据展示

### Webhook 卡片内容

| 字段 | 说明 | 示例 |
|------|------|------|
| name | Webhook 配置名称 | "交易团队群" |
| isActive | 是否活跃 | 活跃 / 停用 |
| description | 描述信息（可选） | "用于接收加密货币交易信号" |
| messageCount | 已发送消息数量 | "已发送 1,234 条消息" |
| lastUsedAt | 最后使用时间 | "最后使用: 2026-02-09" |

## 🎯 用户价值

1. **透明度提升**
   - 清楚知道任务使用的通知渠道
   - 了解 Webhook 的活跃状态

2. **问题排查**
   - 如果没收到通知，可以快速检查 Webhook 配置
   - 查看 Webhook 是否停用或失效

3. **使用追踪**
   - 查看消息发送统计
   - 了解配置的使用频率

4. **配置管理**
   - 一目了然地看到配置关联关系
   - 方便进行配置调整

## 🔍 测试场景

### 场景 1: 任务已配置 Webhook
1. 访问任务详情页
2. 查看"通知配置"卡片
3. ✅ 应该显示 Webhook 名称、状态和统计信息

### 场景 2: 任务未配置 Webhook
1. 访问未设置 Webhook 的任务详情页
2. 查看"通知配置"卡片
3. ✅ 应该显示提示文本（使用环境变量）

### 场景 3: Webhook 已停用
1. 访问使用已停用 Webhook 的任务
2. 查看"通知配置"卡片
3. ✅ 状态徽章应显示"停用"（灰色）

### 场景 4: 切换主题
1. 在深色/浅色主题间切换
2. ✅ Webhook 卡片样式适配主题
3. ✅ 文本清晰可读

## 🎨 设计细节

### 配色方案
- **已配置卡片背景**: `bg-secondary/50` - 半透明次要色
- **未配置卡片边框**: `border-dashed` - 虚线边框
- **未配置卡片背景**: `bg-muted/30` - 淡灰色
- **活跃徽章**: `variant="default"` - 主题色
- **停用徽章**: `variant="secondary"` - 次要色

### 间距与布局
- 卡片内边距: `p-3`
- 元素间距: `space-y-2`
- 图标大小: `h-4 w-4`
- 文本大小: 
  - 主标题: `text-sm font-medium`
  - 描述: `text-xs text-muted-foreground`

### 响应式适配
- 统计信息使用 `flex justify-between`
- 移动端自动换行
- 所有元素保持良好可读性

## 🚀 后续优化建议

1. **点击跳转**
   - Webhook 名称可点击跳转到 Webhook 配置页面
   
2. **快速切换**
   - 在任务详情页直接切换 Webhook 配置
   
3. **健康检查**
   - 显示 Webhook 的健康状态（最近是否有发送失败）
   
4. **通知预览**
   - 显示最近一次通知的内容示例

---

**改进日期**: 2026-02-09  
**影响页面**: `/admin/tasks/[id]`  
**相关 API**: `GET /api/admin/tasks/[id]`  
**测试状态**: ✅ 通过 Linter 检查
