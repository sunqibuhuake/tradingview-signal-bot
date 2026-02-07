# 🚀 快速开始指南

本指南将帮助您在 10 分钟内启动 TradingView Signal Bot SaaS 平台。

## 📋 前置要求

- Node.js >= 18
- PostgreSQL >= 14
- pnpm (推荐) 或 npm

## 🔧 安装步骤

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd tradingview-git
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 配置数据库

确保 PostgreSQL 正在运行，然后创建数据库：

```bash
createdb tradingview
```

### 4. 配置环境变量

```bash
cp .env.example .env
```

编辑 `.env` 文件，设置以下必需的环境变量：

```env
# 数据库连接
DATABASE_URL="postgresql://postgres:password@localhost:5432/tradingview"

# NextAuth 配置
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="生成一个随机密钥"  # 运行: openssl rand -base64 32

# TradingView 配置（可选，如果要运行 Bot）
SESSION=your_session
SIGNATURE=your_signature
```

### 5. 初始化数据库

```bash
# 生成 Prisma Client
pnpm prisma:generate

# 运行数据库迁移
pnpm prisma:migrate

# 填充初始数据（创建管理员等）
pnpm prisma:seed
```

初始化完成后，您将看到：

```
✅ 管理员账户已创建:
   Email: admin@tradingview.bot
   Password: 请使用 admin123456 登录后立即修改密码
```

### 6. 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000

## 🎯 首次登录

1. 打开浏览器访问 http://localhost:3000/admin
2. 使用以下凭据登录：
   - Email: `admin@tradingview.bot`
   - Password: `admin123456`
3. **立即修改密码！**

## 📊 管理后台功能

登录后，您可以访问以下功能：

### 1. 标的管理 (`/admin/markets`)
- 查看、添加、编辑、删除交易标的
- 支持 A股、加密货币、美股等多种类型
- 管理标的状态（启用/禁用）

### 2. 指标管理 (`/admin/indicators`)
- 管理 TradingView 自定义指标
- 配置指标参数和输出字段
- 查看指标使用情况

### 3. 任务管理 (`/admin/tasks`)
- 创建监控任务（标的 + 指标）
- 配置执行模式（实时/定时）
- 设置通知渠道
- 启动/暂停/停止任务

### 4. 执行结果 (`/admin/executions`)
- 查看任务执行历史
- 分析交易信号
- 统计数据展示

## 🔑 获取 TradingView 凭据

如果要使用 Bot 功能，需要 TradingView 凭据：

1. 登录 TradingView 网站
2. 打开浏览器开发者工具（F12）
3. 进入 Application → Cookies
4. 复制以下值：
   - `sessionid` → 环境变量 `SESSION`
   - `sessionid_sign` → 环境变量 `SIGNATURE`
5. 更新 `.env` 文件

## 📝 创建第一个任务

### 方式 1: 使用 UI（推荐）

1. 进入"标的管理"，添加一个标的（如 BINANCE:BTCUSDT）
2. 进入"指标管理"，添加您的 TradingView 指标
3. 进入"任务管理"，点击"创建任务"
4. 选择标的和指标，配置参数
5. 启动任务

### 方式 2: 使用 API

```bash
curl -X POST http://localhost:3000/api/admin/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "name": "BTC 5分钟监控",
    "marketId": "market_id_here",
    "indicatorIds": ["indicator_id_here"],
    "timeframe": "M5",
    "executionMode": "REALTIME"
  }'
```

## 🤖 运行原始 Bot（可选）

如果您想继续使用原始的命令行 Bot：

```bash
# A股 Bot
pnpm dev:cn

# 加密货币 Bot
pnpm dev:crypto
```

## 🛠️ 常用命令

```bash
# 开发
pnpm dev                # 启动 Next.js 开发服务器
pnpm dev:cn             # 启动 A股 Bot
pnpm dev:crypto         # 启动加密货币 Bot

# 构建
pnpm build:next         # 构建 Next.js 应用
pnpm build:bot          # 构建 Bot

# 数据库
pnpm prisma:studio      # 打开 Prisma Studio (数据库 GUI)
pnpm prisma:migrate     # 运行数据库迁移
pnpm prisma:generate    # 生成 Prisma Client
pnpm prisma:seed        # 运行种子数据

# 其他
pnpm lint               # 代码检查
pnpm test               # 运行测试
```

## 🐛 故障排查

### 数据库连接失败

检查：
- PostgreSQL 是否正在运行
- `.env` 中的 `DATABASE_URL` 是否正确
- 数据库是否已创建

```bash
# 检查 PostgreSQL 状态
pg_isready

# 重新创建数据库
dropdb tradingview
createdb tradingview
pnpm prisma:migrate
```

### 无法登录

确保：
- 已运行 `pnpm prisma:seed` 创建管理员账户
- 使用正确的邮箱和密码
- `NEXTAUTH_SECRET` 已设置

### TradingView API 错误

检查：
- SESSION 和 SIGNATURE 是否有效（可能过期）
- 网络连接是否正常
- INDICATOR_ID 是否正确

## 📚 下一步

- 阅读完整文档：[docs/SAAS_UPGRADE_GUIDE.md](./SAAS_UPGRADE_GUIDE.md)
- 查看项目原理：[docs/PROJECT_GUIDE.md](./PROJECT_GUIDE.md)
- 探索 API 文档
- 配置生产环境部署

## 🆘 获取帮助

- 查看文档目录 `docs/`
- 提交 Issue
- 查看代码注释

## 🎉 完成！

现在您可以开始使用 TradingView Signal Bot SaaS 平台了！

Happy Trading! 📈
