# 任务管理页面重构文档

## 概述

将任务的创建和编辑功能从对话框模式改为独立页面模式，提供更好的用户体验和更大的操作空间。

## 变更内容

### 1. 新增文件

#### 1.1 共享任务表单组件
**文件**: `app/admin/tasks/components/TaskForm.tsx`

- 统一的任务表单组件，支持创建和编辑两种模式
- 使用 Card 组件将表单分成 5 个逻辑区块：
  - 基本信息（名称、描述）
  - 标的与指标
  - 时间设置（周期、K线数量）
  - 执行模式
  - 通知设置（Webhook、启用通知）
- 完整的类型定义，无 `any` 类型
- 自动从现有任务数据填充表单（编辑模式）
- 表单验证和错误提示

#### 1.2 创建任务页面
**文件**: `app/admin/tasks/new/page.tsx`

- 路由: `/admin/tasks/new`
- 简洁的页面组件，调用 `TaskForm` 组件
- 模式: `create`

#### 1.3 编辑任务页面
**文件**: `app/admin/tasks/[id]/edit/page.tsx`

- 路由: `/admin/tasks/:id/edit`
- 加载现有任务数据
- 传递给 `TaskForm` 组件
- 模式: `edit`
- 包含加载状态和错误处理

### 2. 修改文件

#### 2.1 任务列表页面
**文件**: `app/admin/tasks/page.tsx`

**变更**:
- ❌ 移除 `CreateTaskDialog` 对话框组件
- ❌ 移除 `showCreateDialog` 状态
- ✅ 添加 `useRouter` 导航
- ✅ `handleCreateClick` 改为路由跳转: `router.push('/admin/tasks/new')`

**影响**:
- 创建任务按钮现在跳转到独立页面
- 简化了列表页面的状态管理

#### 2.2 任务详情页面 Header
**文件**: `app/admin/tasks/[id]/components/TaskDetailHeader.tsx`

**变更**:
- ✅ 添加"编辑任务"按钮
- ✅ 导入 `Edit` 图标
- ✅ 添加 `handleEdit` 函数，跳转到编辑页面

**按钮排列顺序**:
```
[状态徽章] [编辑任务] [启动/暂停] [删除任务]
```

### 3. 保留文件（未删除）

**文件**: `app/admin/tasks/components/CreateTaskDialog.tsx`

- 保留以防后续需要
- 可能用于其他场景（如快速创建、复制任务等）

## 页面路由结构

```
/admin/tasks                    # 任务列表
/admin/tasks/new                # 创建新任务 ✨ 新增
/admin/tasks/:id                # 任务详情
/admin/tasks/:id/edit           # 编辑任务 ✨ 新增
```

## 用户流程

### 创建任务流程

1. 用户在任务列表点击"创建任务"按钮
2. 跳转到 `/admin/tasks/new` 页面
3. 填写表单（分为 5 个区块）
4. 点击"创建任务"按钮
5. 成功后自动跳转到新创建的任务详情页 `/admin/tasks/:id`

### 编辑任务流程

1. 用户在任务详情页点击"编辑任务"按钮
2. 跳转到 `/admin/tasks/:id/edit` 页面
3. 表单自动填充现有数据
4. 修改需要更改的字段
5. 点击"保存更改"按钮
6. 成功后自动跳转回任务详情页 `/admin/tasks/:id`

### 取消操作流程

- **创建模式**: 点击"取消"返回任务列表 `/admin/tasks`
- **编辑模式**: 点击"取消"返回任务详情 `/admin/tasks/:id`

## API 端点

### 现有端点（无变更）

- `POST /api/admin/tasks` - 创建任务
- `PATCH /api/admin/tasks/:id` - 更新任务
- `GET /api/admin/tasks/:id` - 获取任务详情

### API 字段映射

**前端 → 后端**:
```typescript
{
  name: string,
  description: string,
  marketId: string,
  indicatorIds: string[],      // 前端单选转数组
  dingTalkWebhookId: string,
  timeframe: string,
  range: number,
  executionMode: 'REALTIME' | 'SCHEDULED',
  enableNotification: boolean,
}
```

## 表单区块说明

### 1. 基本信息
- 任务名称（必填）
- 任务描述（可选）

### 2. 标的与指标
- 选择标的（必填）- 从市场列表中选择
- 选择指标（必填）- 从指标列表中选择

### 3. 时间设置
- 时间周期 - 13 个选项（M1, M3, M5, M15, M30, M45, H1, H2, H3, H4, D1, W1, MN1）
- K线数量 - 范围 50-5000

### 4. 执行模式
- 实时监控（WebSocket）- 适合加密货币市场
- 定时扫描 - 适合股票市场

### 5. 通知设置
- 钉钉 Webhook - 可选，选择通知目标
- 启用通知 - 开关

## 类型安全

所有组件都有完整的 TypeScript 类型定义：

```typescript
// 响应类型
interface MarketsResponse {
  markets: MarketWithCount[];
  pagination: PaginationResponse;
}

interface IndicatorsResponse {
  indicators: IndicatorWithCount[];
  pagination: PaginationResponse;
}

interface WebhooksResponse {
  webhooks: WebhookWithCount[];
  pagination: PaginationResponse;
}

// 表单 Props
interface TaskFormProps {
  task?: SignalTask;
  mode: 'create' | 'edit';
}
```

## UI/UX 改进

### 优势

1. **更大的操作空间**: 独立页面提供完整的视口空间
2. **更好的信息层次**: 使用 Card 组件清晰分组
3. **独立的 URL**: 支持书签、分享、浏览器前进/后退
4. **更好的加载体验**: 编辑页面独立加载数据
5. **减少状态管理**: 列表页面不需要管理对话框状态

### 视觉改进

- ✅ 使用 Card 组件分组表单
- ✅ 每个 Card 有标题和描述
- ✅ 返回按钮位于左上角
- ✅ 操作按钮位于底部右侧
- ✅ 清晰的视觉层次

## 性能优化

1. **按需加载**: 创建/编辑页面只在需要时加载数据
2. **代码分割**: Next.js 自动为新路由分割代码
3. **缓存利用**: React Query 缓存市场、指标、Webhook 数据

## 测试建议

### 功能测试

1. **创建任务**
   - [ ] 所有字段正确提交
   - [ ] 表单验证工作正常
   - [ ] 成功后跳转到详情页
   - [ ] 取消后返回列表页

2. **编辑任务**
   - [ ] 表单正确填充现有数据
   - [ ] 修改后成功保存
   - [ ] 成功后跳转到详情页
   - [ ] 取消后返回详情页

3. **导航**
   - [ ] 列表页创建按钮跳转正确
   - [ ] 详情页编辑按钮跳转正确
   - [ ] 返回按钮功能正常
   - [ ] 浏览器前进/后退按钮工作正常

### 边界测试

1. **错误处理**
   - [ ] API 失败时显示错误提示
   - [ ] 任务不存在时显示友好提示
   - [ ] 网络错误时的降级处理

2. **数据验证**
   - [ ] 必填字段验证
   - [ ] 数值范围验证（K线数量 50-5000）
   - [ ] 重复提交防护

## 后续优化建议

1. **表单增强**
   - 添加"保存草稿"功能
   - 添加"复制任务"功能
   - 支持批量编辑

2. **用户体验**
   - 添加表单自动保存
   - 离开页面前确认未保存的更改
   - 添加键盘快捷键（Ctrl+S 保存）

3. **数据展示**
   - 在编辑页面显示任务历史
   - 显示最后修改时间和修改人
   - 添加变更历史记录

## 兼容性

- ✅ 保留原有 API 接口
- ✅ 不影响现有功能
- ✅ 向后兼容
- ✅ 可以与对话框模式共存

## 总结

此次重构将任务管理从对话框模式升级为独立页面模式，提供了：

- 🎨 更好的用户体验
- 📱 更大的操作空间
- 🔗 独立的 URL 支持
- 🎯 清晰的信息架构
- ⚡ 更好的性能表现
- 🛡️ 完整的类型安全

所有变更向后兼容，不影响现有功能。
