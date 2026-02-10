#!/bin/bash

# TradingView Signal Bot 自动部署脚本
# 使用方法: ./scripts/deploy.sh

set -e  # 遇到错误立即退出

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 开始部署 TradingView Signal Bot"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 检查是否安装了 PM2
if ! command -v pm2 &> /dev/null; then
    echo "❌ 未检测到 PM2，请先安装 PM2"
    echo "   执行: npm install -g pm2"
    exit 1
fi

# 1. 拉取最新代码
echo "📥 [1/7] 拉取最新代码..."
git pull origin main || {
    echo "⚠️  Git pull 失败，继续部署..."
}
echo "✅ 代码拉取完成"
echo ""

# 2. 安装依赖
echo "📦 [2/7] 安装依赖..."
pnpm install || {
    echo "❌ 依赖安装失败"
    exit 1
}
echo "✅ 依赖安装完成"
echo ""

# 3. 生成 Prisma Client
echo "🔧 [3/7] 生成 Prisma Client..."
pnpm prisma:generate || {
    echo "❌ Prisma Client 生成失败"
    exit 1
}
echo "✅ Prisma Client 生成完成"
echo ""

# 4. 同步数据库
echo "💾 [4/7] 同步数据库..."
pnpm prisma:push || {
    echo "⚠️  数据库同步失败，继续部署..."
}
echo "✅ 数据库同步完成"
echo ""

# 5. 构建应用
echo "🔨 [5/7] 构建应用..."
pnpm build || {
    echo "❌ 应用构建失败"
    exit 1
}
echo "✅ 应用构建完成"
echo ""

# 6. 创建日志目录
echo "📁 [6/7] 创建日志目录..."
mkdir -p logs
echo "✅ 日志目录创建完成"
echo ""

# 7. 重启 PM2
echo "🔄 [7/7] 重启服务..."
pm2 restart ecosystem.config.js --update-env || {
    echo "⚠️  重启失败，尝试启动..."
    pm2 start ecosystem.config.js
}
echo "✅ 服务重启完成"
echo ""

# 8. 保存 PM2 配置
echo "💾 保存 PM2 配置..."
pm2 save
echo "✅ PM2 配置已保存"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ 部署完成！"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 服务状态:"
pm2 status
echo ""
echo "💡 常用命令:"
echo "   查看日志: pm2 logs"
echo "   监控状态: pm2 monit"
echo "   重启服务: pm2 restart tradingview-bot-web"
echo "   停止服务: pm2 stop tradingview-bot-web"
echo ""
echo "🌐 访问地址: http://localhost:3000"
echo ""
