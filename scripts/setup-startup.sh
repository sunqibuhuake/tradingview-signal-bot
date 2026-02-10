#!/bin/bash

# PM2 开机自启动设置脚本
# 使用方法: sudo ./scripts/setup-startup.sh

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔧 配置 PM2 开机自启动"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 检查是否以 root 权限运行
if [ "$EUID" -ne 0 ]; then 
    echo "❌ 请使用 sudo 运行此脚本"
    echo "   执行: sudo ./scripts/setup-startup.sh"
    exit 1
fi

# 检查是否安装了 PM2
if ! command -v pm2 &> /dev/null; then
    echo "❌ 未检测到 PM2，请先安装 PM2"
    echo "   执行: npm install -g pm2"
    exit 1
fi

echo "1️⃣ 生成启动脚本..."
pm2 startup || {
    echo "⚠️  请按照上方提示手动执行命令"
    exit 1
}
echo ""

echo "2️⃣ 启动应用..."
cd /Users/lilk/projects/tradingview/git
pm2 start ecosystem.config.js
echo ""

echo "3️⃣ 保存进程列表..."
pm2 save
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ 开机自启动配置完成！"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 当前状态:"
pm2 status
echo ""
echo "💡 测试方法:"
echo "   1. 重启系统: sudo reboot"
echo "   2. 系统启动后检查: pm2 status"
echo ""
