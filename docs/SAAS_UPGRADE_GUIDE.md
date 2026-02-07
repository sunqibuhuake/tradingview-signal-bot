# TradingView Signal Bot - SaaS Platform

## 🚀 项目升级说明

本项目已从单机版 Bot 升级为完整的 SaaS 平台，使用 Next.js + NextAuth + Prisma + PostgreSQL 技术栈。

## 📊 数据库结构

### 核心表结构

1. **Market (标的表)**
   - 支持多种市场类型：A股、加密货币、美股、港股、外汇、期货、指数
   - 存储标的的完整信息和元数据
   - 关联到多个任务

2. **Indicator (指标表)**
   - 存储 TradingView 自定义指标信息
   - 定义输出字段结构
   - 支持参数配置和版本管理

3. **Task (任务表)**
   - 关联标的和多个指标
   - 支持实时监控和定时扫描两种模式
   - 灵活的执行配置和通知设置

4. **TaskIndicator (任务-指标关联表)**
   - 多对多关系
   - 支持指标优先级和参数覆盖

5. **TaskExecution (执行结果表)**
   - 记录每次任务执行的详细信息
   - 包含市场数据快照

6. **IndicatorResult (指标结果表)**
   - 存储每个指标的输出数据
   - 灵活的 JSON 结构支持任意指标字段
   - 提取关键信号字段便于查询

7. **SignalStatistics (信号统计表)**
   - 按日统计信号数据
   - 支持后续分析和回测

## 🏗️ 项目结构

```
├── app/                      # Next.js App Router
│   ├── api/                 # API 路由
│   │   ├── auth/           # NextAuth 认证
│   │   └── admin/          # 管理后台 API
│   │       ├── markets/    # 标的管理 API
│   │       ├── indicators/ # 指标管理 API
│   │       ├── tasks/      # 任务管理 API
│   │       └── executions/ # 执行结果 API
│   ├── admin/              # 管理后台页面
│   │   ├── markets/        # 标的管理
│   │   ├── indicators/     # 指标管理
│   │   ├── tasks/          # 任务管理
│   │   └── executions/     # 执行结果
│   ├── layout.tsx          # 根布局
│   ├── providers.tsx       # 全局 Providers
│   └── globals.css         # 全局样式
├── components/              # React 组件
├── lib/                     # 工具库
│   └── prisma.ts           # Prisma 客户端
├── prisma/                  # Prisma 配置
│   ├── schema.prisma       # 主 Schema
│   └── schemas/            # 分模块 Schema
│       ├── user.prisma     # 用户模块
│       ├── log.prisma      # 日志模块
│       ├── market.prisma   # 标的模块
│       ├── indicator.prisma # 指标模块
│       ├── task.prisma     # 任务模块
│       └── execution.prisma # 执行结果模块
├── src/                     # 原 Bot 代码
│   ├── bot-cn/             # A股 Bot
│   ├── bot-crypto/         # 加密货币 Bot
│   └── services/           # 服务层
└── types/                   # TypeScript 类型定义

## 🎯 管理后台功能

### 1. 标的管理 (Markets)
- ✅ 查看标的列表（分页、筛选）
- ✅ 添加新标的
- ✅ 编辑标的信息
- ✅ 删除标的（检查关联任务）
- ✅ 启用/禁用标的
- 📊 显示关联任务数量

### 2. 指标管理 (Indicators)
- ✅ 查看指标列表
- ✅ 添加 TradingView 指标
- ✅ 配置指标参数和输出字段
- ✅ 编辑指标信息
- ✅ 删除指标（检查使用情况）
- 📝 指标文档管理

### 3. 任务管理 (Tasks)
- ✅ 创建任务（选择标的 + 多个指标）
- ✅ 配置执行模式（实时/定时）
- ✅ 设置时间周期和参数
- ✅ 管理任务状态（启用/暂停/停止）
- ✅ 配置通知渠道
- 📊 查看任务执行历史

### 4. 执行结果查看 (Executions)
- ✅ 查看所有执行记录
- ✅ 按任务、状态、时间筛选
- ✅ 查看详细指标输出
- ✅ 信号可视化展示
- 📈 统计分析

## 🔧 安装和运行

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

创建 `.env` 文件：

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/tradingview"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# TradingView (原有配置)
SESSION=your_session_token
SIGNATURE=your_signature
INDICATOR_ID=USER;your_indicator_id

# DingTalk (原有配置)
DINGTALK_WEBHOOK=your_webhook_url
```

### 3. 初始化数据库

```bash
# 生成 Prisma Client
npx prisma generate

# 运行迁移
npx prisma migrate dev --name init

# (可选) 查看数据库
npx prisma studio
```

### 4. 创建管理员账户

```bash
# 使用 Prisma Studio 或脚本创建管理员
# 密码需要使用 bcrypt 加密
```

### 5. 启动开发服务器

```bash
# Next.js 开发服务器
pnpm run dev

# 访问管理后台
# http://localhost:3000/admin
```

### 6. 运行 Bot (可选)

```bash
# 原有 Bot 仍然可以独立运行
pnpm run dev:cn      # A股 Bot
pnpm run dev:crypto  # 加密货币 Bot
```

## 📝 API 文档

### 标的管理 API

```typescript
GET    /api/admin/markets           # 获取标的列表
POST   /api/admin/markets           # 创建标的
GET    /api/admin/markets/[id]      # 获取单个标的
PATCH  /api/admin/markets/[id]      # 更新标的
DELETE /api/admin/markets/[id]      # 删除标的
```

### 指标管理 API

```typescript
GET    /api/admin/indicators        # 获取指标列表
POST   /api/admin/indicators        # 创建指标
GET    /api/admin/indicators/[id]   # 获取单个指标
PATCH  /api/admin/indicators/[id]   # 更新指标
DELETE /api/admin/indicators/[id]   # 删除指标
```

### 任务管理 API

```typescript
GET    /api/admin/tasks             # 获取任务列表
POST   /api/admin/tasks             # 创建任务
GET    /api/admin/tasks/[id]        # 获取单个任务
PATCH  /api/admin/tasks/[id]        # 更新任务
DELETE /api/admin/tasks/[id]        # 删除任务
```

### 执行结果 API

```typescript
GET    /api/admin/executions        # 获取执行结果列表
GET    /api/admin/executions/[id]   # 获取单个执行结果
```

## 🔐 权限控制

- 所有管理后台 API 需要 ADMIN 角色
- 使用 NextAuth Session 进行认证
- 操作日志记录到 CommonLog 表

## 📊 数据流程

### 任务执行流程

1. **任务调度器** 根据配置启动任务
2. **TradingViewService** 连接 API 获取数据
3. **指标计算** 获取所有关联指标的输出
4. **结果存储** 保存到 TaskExecution 和 IndicatorResult
5. **信号检测** 根据规则判断买卖信号
6. **通知发送** 通过配置的渠道发送通知
7. **统计更新** 更新 SignalStatistics

## 🎨 UI 组件

使用 Radix UI + Tailwind CSS：
- 响应式设计
- 深色模式支持
- 无障碍访问
- 现代化界面

## 🚧 待开发功能

### 管理后台
- [ ] 标的创建/编辑表单（模态框）
- [ ] 指标创建/编辑表单
- [ ] 任务创建向导（多步骤表单）
- [ ] 执行结果详情页
- [ ] 数据可视化图表
- [ ] 实时监控仪表盘

### 用户功能
- [ ] 用户注册/登录
- [ ] 用户订阅计划
- [ ] 自定义任务创建
- [ ] 个人通知设置
- [ ] 信号订阅和推送

### Bot 集成
- [ ] 将 Bot 逻辑集成到平台
- [ ] 任务执行引擎
- [ ] 分布式任务调度
- [ ] WebSocket 实时推送

## 📚 技术栈

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI**: Tailwind CSS, Radix UI
- **State**: Zustand, TanStack Query
- **Auth**: NextAuth.js
- **Database**: PostgreSQL + Prisma
- **API**: TradingView API (@mathieuc/tradingview)
- **Notification**: DingTalk, Email (可扩展)

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交变更
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

ISC License
