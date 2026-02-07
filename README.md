# TradingView Signal Bot - SaaS Platform

> 🚀 **重大更新**: 项目已从单机版 Bot 升级为完整的 SaaS 平台！

一个基于 Next.js + NextAuth + Prisma + PostgreSQL 的专业级交易信号监控 SaaS 平台。

## ✨ 核心特性

### 平台功能
- 🌐 **Web 管理后台**: 完整的管理界面，支持标的、指标、任务管理
- 👥 **多用户系统**: 支持用户注册、角色权限管理
- 📊 **数据可视化**: 执行结果统计与分析
- 🔔 **多渠道通知**: 钉钉、邮件、Webhook 等
- 📈 **实时监控**: WebSocket 实时推送信号
- 🗄️ **数据持久化**: PostgreSQL 存储所有历史数据

### Bot 功能 (保留)
- 🔄 **实时监控**: A股和加密货币市场监控
- 📊 **自定义指标**: 支持 TradingView 私有指标
- 🛡️ **类型安全**: TypeScript 编写
- 🏗️ **模块化架构**: 清晰的代码结构
- 📝 **精美日志**: 彩色日志和进度条
- 🔄 **信号去重**: 防止重复通知

## 📸 Screenshots

### Trading Signal Display
```
╔════════════════════════════════════════════════════════════╗
║  TRADING SIGNAL                                            ║
╠════════════════════════════════════════════════════════════╣
║  Market     : BTCUSDT                                      ║
║  Action     : 📈 BUY                                       ║
║  Price      : 45000.00                                     ║
║  Indicator  : Custom EMA                                   ║
╚════════════════════════════════════════════════════════════╝
```

### Progress Display
```
[████████████████░░░░░░░░░░░░░░] 60% (30/50) 正在扫描: 招商银行 600036
```

## 🚀 快速开始

### 前置要求

- Node.js >= 18
- PostgreSQL >= 14
- pnpm (推荐) 或 npm

### 安装步骤

```bash
# 1. 安装依赖
pnpm install

# 2. 配置环境变量
cp .env.example .env
# 编辑 .env 文件，配置数据库和其他参数

# 3. 初始化数据库
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed

# 4. 启动开发服务器
pnpm dev

# 5. 访问管理后台
# http://localhost:3000/admin
# 默认账户: admin@tradingview.bot / admin123456
```

详细说明请查看 **[快速开始指南](./docs/QUICK_START.md)** 📖

## 📁 项目结构

```
├── app/                      # Next.js App Router
│   ├── api/                 # API 路由
│   │   ├── auth/           # NextAuth 认证
│   │   └── admin/          # 管理后台 API
│   └── admin/              # 管理后台页面
│       ├── markets/        # 标的管理
│       ├── indicators/     # 指标管理
│       ├── tasks/          # 任务管理
│       └── executions/     # 执行结果
├── prisma/                  # Prisma 配置
│   ├── schema.prisma       # 数据库 Schema
│   └── schemas/            # 分模块 Schema
├── src/                     # 原 Bot 代码
│   ├── bot-cn/             # A股 Bot
│   ├── bot-crypto/         # 加密货币 Bot
│   └── services/           # 服务层
├── lib/                     # 工具库
├── components/              # React 组件
└── docs/                    # 文档
    ├── QUICK_START.md      # 快速开始
    ├── ARCHITECTURE.md     # 架构说明
    ├── PROJECT_GUIDE.md    # 项目原理
    └── SAAS_UPGRADE_GUIDE.md  # 升级指南
```

## 🎯 使用方式

### Web 平台模式 (推荐)

```bash
# 开发模式
pnpm dev

# 生产模式
pnpm build:next
pnpm start:next
```

访问管理后台创建和管理任务。

### 独立 Bot 模式 (保留)

原有的命令行 Bot 仍然可用：

```bash
# 开发模式
pnpm dev:cn      # A股 Bot
pnpm dev:crypto  # 加密货币 Bot

# 生产模式
pnpm build:bot
pnpm start:cn
pnpm start:crypto
```

## 🏗️ 技术架构

### 数据库设计

完整的数据库 Schema，支持：
- **Market**: 标的管理（A股、加密货币、美股等）
- **Indicator**: TradingView 指标配置
- **Task**: 监控任务（标的 + 指标 + 配置）
- **TaskExecution**: 执行结果记录
- **IndicatorResult**: 详细的指标输出
- **SignalStatistics**: 信号统计分析

### API 设计

RESTful API 支持：
- 标的 CRUD 操作
- 指标管理
- 任务创建和配置
- 执行结果查询
- 用户认证和授权

### 服务层

原有服务保留并增强：
- **TradingViewService**: TradingView API 封装
- **NotificationService**: 多渠道通知
- **SignalManager**: 信号去重和管理

## Configuration

All configuration is centralized in `src/config/index.ts`:

```typescript
export const config = {
  tradingView: {
    session: string,
    signature: string,
    indicatorId: string,
  },
  dingTalk: {
    webhookUrl: string,
  },
  bot: {
    cn: {
      timeframe: '1D',
      range: 500,
      timeout: 10000,
      checkInterval: 24 * 60 * 60 * 1000,
    },
    crypto: {
      timeframe: '5',
      range: 500,
      duplicateWindow: 20 * 60 * 1000,
    },
  },
};
```

## 📝 常用命令

### 开发
```bash
pnpm dev                # Next.js 开发服务器
pnpm dev:cn             # A股 Bot
pnpm dev:crypto         # 加密货币 Bot
```

### 构建
```bash
pnpm build:next         # 构建 Web 平台
pnpm build:bot          # 构建 Bot
```

### 数据库
```bash
pnpm prisma:studio      # 打开数据库 GUI
pnpm prisma:migrate     # 运行迁移
pnpm prisma:generate    # 生成 Prisma Client
pnpm prisma:seed        # 初始化数据
```

### 其他
```bash
pnpm lint               # 代码检查
pnpm test               # 运行测试
pnpm clean              # 清理构建文件
```

## 📚 文档

- **[快速开始](./docs/QUICK_START.md)** - 10 分钟快速上手
- **[架构说明](./docs/ARCHITECTURE.md)** - 完整技术架构
- **[项目原理](./docs/PROJECT_GUIDE.md)** - 核心实现原理
- **[升级指南](./docs/SAAS_UPGRADE_GUIDE.md)** - SaaS 升级详情
- **[日志功能](./docs/LOGGER_FEATURES.md)** - 日志系统说明

## 🎯 管理后台功能

### 已完成 ✅

1. **标的管理**
   - 查看、添加、编辑、删除标的
   - 支持多种市场类型
   - 启用/禁用控制

2. **指标管理**
   - TradingView 指标配置
   - 输出字段定义
   - 参数管理

3. **任务管理**
   - 创建监控任务
   - 配置执行模式（实时/定时）
   - 关联多个指标

4. **执行结果**
   - 查看历史记录
   - 信号详情展示
   - 数据筛选

### 开发中 🚧

- 任务执行引擎集成
- 实时监控仪表盘
- 数据可视化图表
- 用户功能模块

## 🛣️ 路线图

- [x] 数据库设计
- [x] 管理后台基础功能
- [x] API 设计与实现
- [ ] 任务执行引擎集成
- [ ] 用户功能开发
- [ ] 实时监控仪表盘
- [ ] 多通知渠道支持
- [ ] 信号回测系统
- [ ] 移动端适配

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC

---

**从单机 Bot 到 SaaS 平台，开启交易信号监控的新时代！** 🚀
