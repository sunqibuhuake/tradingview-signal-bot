# TradingView Signal Bot - Makefile
# 快速命令参考

.PHONY: help install dev build start deploy pm2-start pm2-stop pm2-restart pm2-logs pm2-status clean

# 默认显示帮助信息
help:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "TradingView Signal Bot - 快速命令"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo ""
	@echo "📦 安装和初始化:"
	@echo "  make install          - 安装依赖并初始化数据库"
	@echo "  make setup            - 完整设置（安装 + 构建 + PM2）"
	@echo ""
	@echo "🚀 开发:"
	@echo "  make dev              - 启动开发服务器"
	@echo "  make dev-cn           - 启动 A股 Bot"
	@echo "  make dev-crypto       - 启动加密货币 Bot"
	@echo ""
	@echo "🔨 构建:"
	@echo "  make build            - 构建 Next.js 应用"
	@echo "  make build-bot        - 构建 Bot"
	@echo ""
	@echo "▶️  运行:"
	@echo "  make start            - 启动生产服务器（不使用 PM2）"
	@echo ""
	@echo "🚢 PM2 部署:"
	@echo "  make pm2-start        - 启动 PM2"
	@echo "  make pm2-stop         - 停止 PM2"
	@echo "  make pm2-restart      - 重启 PM2"
	@echo "  make pm2-logs         - 查看日志"
	@echo "  make pm2-status       - 查看状态"
	@echo "  make pm2-monit        - 实时监控"
	@echo ""
	@echo "📦 自动化部署:"
	@echo "  make deploy           - 自动部署（拉取、构建、重启）"
	@echo "  make setup-startup    - 配置开机自启动（需要 sudo）"
	@echo ""
	@echo "💾 数据库:"
	@echo "  make db-push          - 同步数据库"
	@echo "  make db-migrate       - 运行迁移"
	@echo "  make db-studio        - 打开 Prisma Studio"
	@echo "  make db-seed          - 初始化数据"
	@echo ""
	@echo "🧹 清理:"
	@echo "  make clean            - 清理构建文件"
	@echo "  make clean-all        - 清理所有（包括 node_modules）"
	@echo ""

# 安装依赖
install:
	@echo "📦 安装依赖..."
	pnpm install
	@echo "🔧 生成 Prisma Client..."
	pnpm prisma:generate
	@echo "💾 同步数据库..."
	pnpm prisma:push
	@echo "✅ 安装完成！"

# 完整设置
setup: install build
	@echo "🚀 设置 PM2..."
	@mkdir -p logs
	@echo "✅ 设置完成！运行 'make pm2-start' 启动服务"

# 开发
dev:
	pnpm dev

dev-cn:
	pnpm dev:cn

dev-crypto:
	pnpm dev:crypto

# 构建
build:
	@echo "🔨 构建应用..."
	pnpm build
	@echo "✅ 构建完成！"

build-bot:
	pnpm build:bot

# 运行
start:
	pnpm start

# PM2 命令
pm2-start:
	@mkdir -p logs
	pnpm pm2:start

pm2-stop:
	pnpm pm2:stop

pm2-restart:
	pnpm pm2:restart

pm2-logs:
	pnpm pm2:logs

pm2-status:
	pnpm pm2:status

pm2-monit:
	pnpm pm2:monit

pm2-delete:
	pnpm pm2:delete

# 自动化部署
deploy:
	@echo "🚀 开始自动部署..."
	@chmod +x scripts/deploy.sh
	@./scripts/deploy.sh

setup-startup:
	@echo "⚠️  需要 sudo 权限"
	@chmod +x scripts/setup-startup.sh
	@sudo ./scripts/setup-startup.sh

# 数据库
db-push:
	pnpm prisma:push

db-migrate:
	pnpm prisma:migrate

db-studio:
	pnpm prisma:studio

db-seed:
	pnpm prisma:seed

db-reset: db-push db-seed

# 清理
clean:
	@echo "🧹 清理构建文件..."
	pnpm clean
	@rm -rf logs/*.log
	@echo "✅ 清理完成！"

clean-all: clean
	@echo "🧹 清理 node_modules..."
	@rm -rf node_modules
	@echo "✅ 完全清理完成！"

# 测试
test:
	pnpm test

lint:
	pnpm lint

lint-fix:
	pnpm lint:fix

# 快速重启（用于开发后快速部署）
quick-restart: build pm2-restart
	@echo "✅ 快速重启完成！"

# 完整重新部署
redeploy: clean install build pm2-restart
	@echo "✅ 重新部署完成！"

# 检查环境
check:
	@echo "🔍 检查环境..."
	@echo ""
	@echo "Node.js 版本:"
	@node --version
	@echo ""
	@echo "pnpm 版本:"
	@pnpm --version
	@echo ""
	@echo "PM2 状态:"
	@pm2 --version 2>/dev/null || echo "❌ PM2 未安装（运行: npm install -g pm2）"
	@echo ""
	@echo "PostgreSQL 连接:"
	@pnpm prisma db pull 2>/dev/null && echo "✅ 数据库连接成功" || echo "❌ 数据库连接失败"
	@echo ""

# 查看日志文件
logs-file:
	@tail -f logs/web-out.log

logs-error:
	@tail -f logs/web-error.log

# 备份数据库
backup:
	@echo "💾 备份数据库..."
	@mkdir -p backups
	@pg_dump $(DATABASE_URL) > backups/backup_$(shell date +%Y%m%d_%H%M%S).sql
	@echo "✅ 备份完成！"

# 生产环境完整部署流程
production: clean install db-push build pm2-restart
	@echo "✅ 生产环境部署完成！"
	@echo ""
	@echo "📊 查看状态: make pm2-status"
	@echo "📝 查看日志: make pm2-logs"
