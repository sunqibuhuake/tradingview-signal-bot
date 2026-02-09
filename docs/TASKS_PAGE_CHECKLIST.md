# 任务管理页面 - 安装检查清单

## ✅ 完成进度

### 1. 文件创建 ✅
- [x] `app/admin/tasks/page.tsx` - 主页面
- [x] `app/admin/tasks/types.ts` - 类型定义
- [x] `app/admin/tasks/components/TasksHeader.tsx`
- [x] `app/admin/tasks/components/TasksTable.tsx`
- [x] `app/admin/tasks/components/TasksPagination.tsx`
- [x] `app/admin/tasks/components/CreateTaskDialog.tsx`
- [x] `app/admin/tasks/components/TaskDetailDialog.tsx`
- [x] `app/admin/tasks/components/StatusBadge.tsx`
- [x] `app/admin/tasks/components/ModeBadge.tsx`
- [x] `app/components/EmptyState.tsx`
- [x] `app/components/LoadingSpinner.tsx`

### 2. shadcn 组件安装 ⏳

请执行以下命令安装所需组件：

```bash
npx shadcn@latest add button dialog input label textarea select switch table badge dropdown-menu separator
```

或使用安装脚本：
```bash
chmod +x scripts/install-shadcn.sh
./scripts/install-shadcn.sh
```

### 3. 依赖检查 ⏳

确保以下依赖已安装：

```bash
# 查看 package.json
npm list lucide-react          # 图标库
npm list react-hot-toast       # 通知提示
npm list @tanstack/react-query # 数据获取
```

如果缺少，请安装：
```bash
npm install lucide-react react-hot-toast
```

### 4. API 端点验证 ⏳

确保以下 API 端点已实现：

- [ ] `GET  /api/admin/tasks` - 获取任务列表
- [ ] `POST /api/admin/tasks` - 创建任务
- [ ] `PATCH /api/admin/tasks/:id` - 更新任务
- [ ] `DELETE /api/admin/tasks/:id` - 删除任务
- [ ] `GET  /api/admin/markets` - 获取市场列表
- [ ] `GET  /api/admin/indicators` - 获取指标列表

### 5. 工具函数检查 ⏳

确保存在 `lib/utils.ts` 文件，包含 `cn` 函数：

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

如果缺少：
```bash
npm install clsx tailwind-merge
```

---

## 🚀 快速启动

### 步骤 1: 安装 shadcn 组件
```bash
./scripts/install-shadcn.sh
```

### 步骤 2: 验证安装
```bash
ls -la components/ui/
# 应该看到: button.tsx dialog.tsx input.tsx 等文件
```

### 步骤 3: 启动开发服务器
```bash
npm run dev
```

### 步骤 4: 访问页面
```
http://localhost:3000/admin/tasks
```

---

## 🐛 常见问题

### Q1: 找不到 shadcn 组件
**解决方案**: 
```bash
# 检查 components.json 是否存在
cat components.json

# 如果不存在，初始化 shadcn
npx shadcn@latest init
```

### Q2: 导入路径错误
**解决方案**:
检查 `tsconfig.json` 中的 paths 配置：
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Q3: cn 函数未定义
**解决方案**:
```bash
# 安装依赖
npm install clsx tailwind-merge

# 创建 lib/utils.ts 文件（见上方代码）
```

### Q4: lucide-react 图标不显示
**解决方案**:
```bash
npm install lucide-react
```

### Q5: 样式不生效
**解决方案**:
确保 `tailwind.config.ts` 正确配置：
```typescript
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ...
}
```

---

## ✨ 验证清单

运行以下检查确保一切正常：

### 1. 页面加载
- [ ] 页面正常显示
- [ ] 没有 TypeScript 错误
- [ ] 没有 console 错误

### 2. 功能测试
- [ ] 点击"创建任务"打开对话框
- [ ] 表格正常显示任务列表
- [ ] 下拉菜单操作按钮工作正常
- [ ] 分页功能正常
- [ ] 状态切换正常

### 3. 视觉检查
- [ ] 没有黑色边框
- [ ] Badge 颜色正确（渐变效果）
- [ ] Hover 效果流畅
- [ ] 对话框滚动正常
- [ ] 响应式布局正常

### 4. 交互测试
- [ ] 创建任务流程完整
- [ ] 表单验证工作正常
- [ ] 错误提示友好
- [ ] 成功提示及时
- [ ] 数据刷新正常

---

## 📞 需要帮助？

如果遇到问题，请查看：

1. [完整使用指南](./TASKS_PAGE_GUIDE.md)
2. [shadcn/ui 文档](https://ui.shadcn.com)
3. [项目 README](../README.md)

---

**最后更新**: 2026-02-07  
**状态**: 就绪（需安装 shadcn 组件）
