#!/bin/bash

# 任务管理页面 - shadcn 组件安装脚本

echo "🎨 开始安装 shadcn/ui 组件..."
echo ""

# 检查是否有 npx
if ! command -v npx &> /dev/null; then
    echo "❌ 错误: 未找到 npx 命令"
    echo "请先安装 Node.js: https://nodejs.org"
    exit 1
fi

# 安装组件列表
components=(
    "button"
    "dialog"
    "input"
    "label"
    "textarea"
    "select"
    "switch"
    "table"
    "badge"
    "dropdown-menu"
    "separator"
)

total=${#components[@]}
current=0

echo "📦 需要安装 ${total} 个组件"
echo ""

for component in "${components[@]}"; do
    current=$((current + 1))
    echo "[$current/$total] 正在安装: $component"
    
    # 安装组件
    if npx shadcn@latest add $component -y > /dev/null 2>&1; then
        echo "  ✅ $component 安装成功"
    else
        echo "  ⚠️  $component 安装失败（可能已安装）"
    fi
    
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ 组件安装完成！"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 下一步："
echo "1. 检查 components/ui 目录下的组件"
echo "2. 运行开发服务器: npm run dev"
echo "3. 访问: http://localhost:3000/admin/tasks"
echo ""
