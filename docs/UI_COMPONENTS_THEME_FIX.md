# UI 组件深色主题修复

## 🐛 问题描述

在深色主题下，部分 UI 组件仍然使用硬编码的白色背景和固定颜色，导致：
1. Select 选择框的选中值在深色主题下看不清楚
2. 下拉菜单背景为白色，与深色主题不协调
3. 部分组件没有适配主题色彩系统

## ✅ 修复内容

### 1. Select 组件 (`components/ui/select.tsx`)

#### 修复前问题：
- `SelectTrigger`: 硬编码白色背景 (`bg-white`)
- `SelectContent`: 硬编码白色背景和固定文本颜色
- `SelectItem`: 使用固定的紫色高亮色
- 图标颜色不随主题变化

#### 修复后改进：
```tsx
// SelectTrigger - 使用主题变量
- bg-white → bg-background
- border-slate-200 → border-input
- text-sm → text-sm text-foreground
- 添加 hover:bg-secondary/50 悬停效果
- rounded-lg → rounded-xl 更现代的圆角

// SelectContent - 适配主题
- bg-white → bg-card
- text-slate-800 → text-foreground
- border-slate-200 → border-border
- 添加 backdrop-blur-xl 毛玻璃效果
- rounded-lg → rounded-xl

// SelectItem - 动态主题色
- focus:bg-purple-50 → focus:bg-primary/10
- focus:text-purple-700 → focus:text-primary
- data-[state=checked]:bg-purple-100 → data-[state=checked]:bg-primary/10
- hover:bg-slate-100 → hover:bg-secondary
- rounded-md → rounded-lg
```

### 2. Input 组件 (`components/ui/input.tsx`)

#### 改进：
- 添加 `text-foreground` 确保文本颜色正确
- `rounded-md` → `rounded-xl` 更现代的圆角
- `focus:ring-ring` → `focus:ring-primary` 使用主题主色
- 添加 `hover:border-primary/50` 悬停效果

### 3. Textarea 组件 (`components/ui/textarea.tsx`)

#### 改进：
- 添加 `text-foreground` 确保文本颜色正确
- `rounded-md` → `rounded-xl` 更现代的圆角
- `focus:ring-ring` → `focus:ring-primary` 使用主题主色
- 添加 `hover:border-primary/50` 悬停效果
- 添加 `resize-none` 禁用调整大小

### 4. Button 组件 (`components/ui/button.tsx`)

#### 改进：
- `rounded-md` → `rounded-xl` 更现代的圆角
- `font-medium` → `font-semibold` 更醒目的字重
- `transition-colors` → `transition-all` 更流畅的过渡
- 添加 `active:scale-95` 按压反馈
- 添加 `shadow-sm hover:shadow-md` 阴影效果
- `focus:ring-ring` → `focus:ring-primary` 统一焦点环颜色
- 更新 `primary` 变体使用主题色

### 5. Card 组件 (`components/ui/card.tsx`)

#### 改进：
- `rounded-lg` → `rounded-2xl` 更大的圆角
- `border` → `border border-border/50` 半透明边框
- 添加 `backdrop-blur-sm` 毛玻璃效果

### 6. Label 组件 (`components/ui/label.tsx`)

#### 改进：
- `font-medium` → `font-semibold` 更醒目的字重
- 添加 `text-foreground` 确保文本颜色正确

## 🎨 设计改进

### 1. 圆角统一
- Input/Textarea/Select: `rounded-xl` (12px)
- Button: `rounded-xl` (12px)
- Card: `rounded-2xl` (16px)
- SelectContent: `rounded-xl` (12px)
- SelectItem: `rounded-lg` (8px)

### 2. 主题色统一
- 所有焦点环使用 `focus:ring-primary`
- 选中状态使用 `bg-primary/10` + `text-primary`
- 悬停状态使用 `hover:bg-secondary`

### 3. 视觉反馈增强
- Button 添加按压缩放效果
- Input/Select 添加悬停边框变色
- 过渡效果从 `transition-colors` 升级为 `transition-all`

### 4. 毛玻璃效果
- SelectContent: `backdrop-blur-xl`
- Card: `backdrop-blur-sm`

## 📝 使用说明

所有组件现在完全支持深色/浅色主题自动切换，无需额外配置。主题色彩通过 CSS 变量控制：

```css
/* 浅色主题 */
--color-background: hsl(0 0% 100%);
--color-foreground: hsl(240 10% 3.9%);
--color-primary: hsl(199 89% 48%);

/* 深色主题 */
.dark {
  --color-background: hsl(240 10% 3.9%);
  --color-foreground: hsl(0 0% 98%);
  --color-primary: hsl(199 89% 48%);
}
```

## 🔍 测试建议

1. **Select 组件测试**
   - ✅ 在浅色主题下打开选择框，查看下拉菜单
   - ✅ 切换到深色主题，确认背景和文本颜色正确
   - ✅ 选择一个选项，确认选中状态清晰可见

2. **Input/Textarea 测试**
   - ✅ 在两种主题下输入文本，确认文本清晰可读
   - ✅ 测试悬停和聚焦状态的视觉反馈

3. **Button 测试**
   - ✅ 测试所有变体（default, outline, ghost 等）
   - ✅ 确认按压反馈效果流畅

4. **整体测试**
   - ✅ 打开 `/admin/tasks/new` 页面
   - ✅ 在深色/浅色主题间切换
   - ✅ 确认所有表单元素清晰可读

## 🎯 影响范围

以下页面会受到这次更新的影响并得到改善：
- ✅ 任务创建/编辑页面 (`/admin/tasks/*`)
- ✅ 标的管理页面 (`/admin/markets`)
- ✅ 指标管理页面 (`/admin/indicators`)
- ✅ Webhook 配置页面 (`/admin/webhooks`)
- ✅ TradingView 配置页面 (`/admin/tradingview-config`)
- ✅ 所有使用这些基础组件的页面

## 🚀 后续优化建议

1. **考虑添加更多变体**
   - Button 可以添加 `success` 和 `warning` 变体
   - Select 可以添加 `error` 状态样式

2. **动画细节优化**
   - SelectContent 打开/关闭动画可以更流畅
   - Button 按压反馈可以添加触觉反馈（移动端）

3. **无障碍访问**
   - 确保颜色对比度符合 WCAG 标准
   - 添加键盘导航提示

---

**修复日期**: 2026-02-09  
**影响组件**: Select, Input, Textarea, Button, Card, Label  
**测试状态**: ✅ 通过 Linter 检查，无错误
