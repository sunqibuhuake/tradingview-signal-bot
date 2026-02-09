# 任务管理页面完善 - 安装指南

## 📦 需要安装的 shadcn 组件

在运行页面之前，请执行以下命令安装所需的 shadcn/ui 组件：

```bash
# 安装所有必需组件
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add switch
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add dropdown-menu
npx shadcn@latest add separator

# 或者一次性安装所有组件
npx shadcn@latest add button dialog input label textarea select switch table badge dropdown-menu separator
```

## 🎨 设计改进

### 优化点

1. **模块化组件结构**
   - `components/` - 页面子组件
   - `app/components/` - 可复用组件
   - 每个组件职责单一，易于维护

2. **去除生硬黑色边框**
   - 使用 `border` (灰色) 替代 `ring-black`
   - 使用 `bg-card` 背景色
   - 使用 shadcn 的颜色系统

3. **改进的视觉层次**
   - 柔和的背景色（`bg-muted/50`）
   - 渐变色 Badge（带透明度和边框）
   - 统一的圆角和间距

4. **更好的交互体验**
   - 下拉菜单操作按钮（只在 hover 时显示）
   - 优雅的对话框设计
   - 完善的表单验证

## 📁 文件结构

```
app/admin/tasks/
├── page.tsx                          # 主页面（简洁）
├── types.ts                          # TypeScript 类型定义
└── components/
    ├── TasksHeader.tsx               # 页面头部
    ├── TasksTable.tsx                # 任务表格
    ├── TasksPagination.tsx           # 分页组件
    ├── CreateTaskDialog.tsx          # 创建任务对话框
    ├── TaskDetailDialog.tsx          # 任务详情对话框
    ├── StatusBadge.tsx               # 状态徽章
    └── ModeBadge.tsx                 # 模式徽章

app/components/
├── EmptyState.tsx                    # 空状态组件（可复用）
└── LoadingSpinner.tsx                # 加载动画（可复用）
```

## 🎯 组件功能

### 1. TasksHeader
- 页面标题和描述
- 创建任务按钮

### 2. TasksTable
- 任务列表展示
- 下拉菜单操作（查看、启动/暂停、删除）
- 优雅的 hover 效果

### 3. CreateTaskDialog
- 完整的表单验证
- 市场和指标下拉选择
- 实时/定时模式切换
- 通知开关

### 4. TaskDetailDialog
- 任务详细信息展示
- 快速启动/暂停
- 分组显示（标的、指标、统计、通知、时间）

### 5. StatusBadge & ModeBadge
- 彩色状态标识
- 带图标的模式徽章

## 🎨 颜色方案

### 状态颜色
```typescript
ACTIVE:  emerald (绿色)  - 运行中
PAUSED:  amber (琥珀色)  - 已暂停
STOPPED: gray (灰色)     - 已停止
ERROR:   red (红色)      - 错误
```

### 模式颜色
```typescript
REALTIME:  blue (蓝色)   - 实时监控
SCHEDULED: purple (紫色) - 定时扫描
```

### 指标颜色
```typescript
Indicators: secondary (紫色) - 指标徽章
```

## 🚀 使用说明

1. **安装依赖**
```bash
npm install lucide-react react-hot-toast
```

2. **安装 shadcn 组件**（见上方命令）

3. **确保已配置**
- `@tanstack/react-query` - 数据获取
- `next-auth` - 身份验证
- `tailwindcss` - 样式系统

4. **API 端点要求**
```
GET  /api/admin/tasks       - 获取任务列表
POST /api/admin/tasks       - 创建任务
PATCH /api/admin/tasks/:id  - 更新任务
DELETE /api/admin/tasks/:id - 删除任务
GET  /api/admin/markets     - 获取市场列表
GET  /api/admin/indicators  - 获取指标列表
```

## 💡 最佳实践

1. **组件拆分**
   - 单个文件不超过 300 行
   - 单一职责原则
   - 可复用组件放在 `app/components/`

2. **类型安全**
   - 所有 props 都有类型定义
   - 使用 TypeScript interface

3. **错误处理**
   - 使用 react-hot-toast 显示错误
   - 优雅的错误状态展示

4. **响应式设计**
   - 使用 Tailwind 响应式类
   - 移动端友好

5. **可访问性**
   - 使用 shadcn/ui 的无障碍组件
   - 语义化 HTML
   - 键盘导航支持

## 🎨 定制化

### 修改颜色主题
编辑 `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      // 自定义颜色
    }
  }
}
```

### 修改组件样式
所有组件使用 Tailwind classes，可以直接修改 className。

## 📚 相关文档

- [shadcn/ui 文档](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [React Query](https://tanstack.com/query)

---

**创建时间**: 2026-02-07  
**设计原则**: 简洁、优雅、易维护
