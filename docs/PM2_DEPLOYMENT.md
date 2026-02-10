# PM2 部署指南

本指南介绍如何使用 PM2 部署和管理 TradingView Signal Bot 应用。

## 目录

- [前置要求](#前置要求)
- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [常用命令](#常用命令)
- [生产环境部署](#生产环境部署)
- [监控和日志](#监控和日志)
- [故障排查](#故障排查)

## 前置要求

### 1. 安装 PM2

```bash
# 全局安装 PM2
npm install -g pm2

# 或使用 pnpm
pnpm add -g pm2

# 验证安装
pm2 --version
```

### 2. 构建项目

```bash
# 安装依赖
pnpm install

# 生成 Prisma Client
pnpm prisma:generate

# 构建 Next.js 应用
pnpm build

# （可选）如果需要独立运行 Bot
pnpm build:bot
```

### 3. 配置环境变量

确保项目根目录有 `.env` 文件，包含所有必要的环境变量：

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/tradingview_bot"

# TradingView (如果使用环境变量作为备用)
SESSION="your_session_token"
SIGNATURE="your_signature"
INDICATOR_ID="USER;your_indicator_id"

# DingTalk (如果使用环境变量作为备用)
DINGTALK_WEBHOOK="https://oapi.dingtalk.com/robot/send?access_token=xxx"
DINGTALK_SAFE_WORD="TRADING"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret"
```

## 快速开始

### 1. 启动应用

```bash
# 使用 npm script
pnpm pm2:start

# 或直接使用 PM2
pm2 start ecosystem.config.js
```

### 2. 查看状态

```bash
pnpm pm2:status
```

输出示例：
```
┌─────┬─────────────────────────┬─────────┬─────────┬──────────┬────────┬──────┐
│ id  │ name                    │ mode    │ ↺      │ status   │ cpu    │ mem  │
├─────┼─────────────────────────┼─────────┼─────────┼──────────┼────────┼──────┤
│ 0   │ tradingview-bot-web     │ fork    │ 0       │ online   │ 0%     │ 85mb │
└─────┴─────────────────────────┴─────────┴─────────┴──────────┴────────┴──────┘
```

### 3. 查看日志

```bash
# 实时查看所有日志
pnpm pm2:logs

# 查看特定应用的日志
pm2 logs tradingview-bot-web

# 查看错误日志
pm2 logs tradingview-bot-web --err

# 清空日志
pm2 flush
```

## 配置说明

### ecosystem.config.js 配置项

```javascript
module.exports = {
  apps: [
    {
      // 应用名称
      name: 'tradingview-bot-web',
      
      // 启动脚本
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      
      // 工作目录
      cwd: './',
      
      // 实例数量（cluster 模式下有效）
      instances: 1,
      
      // 执行模式：fork 或 cluster
      exec_mode: 'fork',
      
      // 环境变量
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      
      // 日志文件路径
      error_file: 'logs/web-error.log',
      out_file: 'logs/web-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      
      // 自动重启
      autorestart: true,
      
      // 文件监听（生产环境建议关闭）
      watch: false,
      
      // 内存限制
      max_memory_restart: '1G',
      
      // 最小运行时间
      min_uptime: '10s',
      
      // 最大重启次数
      max_restarts: 10,
    },
  ],
};
```

### 多实例配置（可选）

如果需要启用 Next.js 集群模式以提高性能：

```javascript
{
  name: 'tradingview-bot-web',
  instances: 'max',  // 使用所有 CPU 核心
  exec_mode: 'cluster',  // 集群模式
  // ... 其他配置
}
```

### 独立 Bot 服务配置（可选）

如果需要将 Bot 作为独立进程运行，在 `ecosystem.config.js` 中取消注释相关配置：

```javascript
{
  name: 'tradingview-bot-crypto',
  script: 'dist/bot-crypto/index.js',
  // ... 其他配置
}
```

## 常用命令

### 进程管理

```bash
# 启动应用
pnpm pm2:start
pm2 start ecosystem.config.js

# 停止应用
pnpm pm2:stop
pm2 stop tradingview-bot-web

# 重启应用
pnpm pm2:restart
pm2 restart tradingview-bot-web

# 重载应用（0 秒停机时间）
pm2 reload tradingview-bot-web

# 删除应用
pnpm pm2:delete
pm2 delete tradingview-bot-web

# 停止所有应用
pm2 stop all

# 删除所有应用
pm2 delete all
```

### 监控

```bash
# 实时监控
pnpm pm2:monit
pm2 monit

# 查看状态
pnpm pm2:status
pm2 status

# 查看详细信息
pm2 show tradingview-bot-web

# 查看日志
pnpm pm2:logs
pm2 logs tradingview-bot-web --lines 100
```

### 日志管理

```bash
# 实时查看日志
pm2 logs

# 查看特定应用日志
pm2 logs tradingview-bot-web

# 只看最后 N 行
pm2 logs --lines 50

# 清空日志
pm2 flush

# 重载日志（日志文件变大时使用）
pm2 reloadLogs
```

### 环境管理

```bash
# 使用不同的环境变量启动
pm2 start ecosystem.config.js --env production

# 更新环境变量
pm2 restart ecosystem.config.js --update-env
```

## 生产环境部署

### 1. 完整部署流程

```bash
# 1. 拉取最新代码
git pull origin main

# 2. 安装依赖
pnpm install

# 3. 生成 Prisma Client
pnpm prisma:generate

# 4. 执行数据库迁移（如有）
pnpm prisma:push

# 5. 构建应用
pnpm build

# 6. 启动/重启 PM2
pm2 restart ecosystem.config.js --update-env

# 7. 保存 PM2 配置
pm2 save
```

### 2. 开机自启动

```bash
# 生成启动脚本
pm2 startup

# 按照提示执行命令（可能需要 sudo）
# 例如：sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u yourusername --hp /home/yourusername

# 保存当前进程列表
pm2 save

# 验证
pm2 list
```

### 3. 自动部署脚本

创建 `scripts/deploy.sh`：

```bash
#!/bin/bash

echo "🚀 开始部署 TradingView Signal Bot..."

# 拉取最新代码
echo "📥 拉取代码..."
git pull origin main

# 安装依赖
echo "📦 安装依赖..."
pnpm install

# 生成 Prisma Client
echo "🔧 生成 Prisma Client..."
pnpm prisma:generate

# 执行数据库迁移
echo "💾 同步数据库..."
pnpm prisma:push

# 构建应用
echo "🔨 构建应用..."
pnpm build

# 重启 PM2
echo "🔄 重启服务..."
pm2 restart ecosystem.config.js --update-env

# 保存配置
pm2 save

echo "✅ 部署完成！"
echo ""
echo "查看状态: pm2 status"
echo "查看日志: pm2 logs"
```

使用：
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## 监控和日志

### 1. PM2 Web Dashboard（可选）

```bash
# 安装 PM2 Web 插件
pm2 install pm2-server-monit

# 访问 http://localhost:9615
```

### 2. 日志轮转

PM2 自带日志轮转功能：

```bash
# 安装日志轮转模块
pm2 install pm2-logrotate

# 配置日志轮转
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
```

### 3. 性能监控

```bash
# 实时监控 CPU 和内存
pm2 monit

# 查看详细指标
pm2 describe tradingview-bot-web
```

## 故障排查

### 应用无法启动

```bash
# 1. 查看错误日志
pm2 logs tradingview-bot-web --err

# 2. 检查环境变量
pm2 show tradingview-bot-web

# 3. 手动运行测试
node node_modules/next/dist/bin/next start

# 4. 检查端口占用
lsof -i :3000
netstat -tulpn | grep 3000
```

### 应用频繁重启

```bash
# 1. 查看重启次数
pm2 status

# 2. 查看错误日志
pm2 logs --err

# 3. 增加最小运行时间
# 在 ecosystem.config.js 中调整 min_uptime

# 4. 检查内存使用
pm2 monit
```

### 内存泄漏

```bash
# 1. 监控内存使用
pm2 monit

# 2. 设置内存限制自动重启
# 在 ecosystem.config.js 中设置 max_memory_restart: '1G'

# 3. 查看堆栈信息
pm2 describe tradingview-bot-web
```

### 日志文件过大

```bash
# 1. 清空日志
pm2 flush

# 2. 安装日志轮转
pm2 install pm2-logrotate

# 3. 手动删除旧日志
rm -rf logs/*.log
```

### 端口冲突

```bash
# 1. 查看端口占用
lsof -i :3000
netstat -tulpn | grep 3000

# 2. 杀死占用进程
kill -9 <PID>

# 3. 或修改端口
# 在 ecosystem.config.js 中修改 env.PORT
```

## 高级配置

### 1. 蓝绿部署

```javascript
module.exports = {
  apps: [
    {
      name: 'tradingview-bot-web-blue',
      script: 'node_modules/next/dist/bin/next',
      env: { PORT: 3000 },
    },
    {
      name: 'tradingview-bot-web-green',
      script: 'node_modules/next/dist/bin/next',
      env: { PORT: 3001 },
    },
  ],
};
```

### 2. 优雅重启

```bash
# 使用 reload 而不是 restart，实现 0 秒停机
pm2 reload ecosystem.config.js
```

### 3. 进程守护

PM2 会自动守护进程，当应用崩溃时自动重启。配置项：

```javascript
{
  autorestart: true,          // 自动重启
  max_restarts: 10,           // 最大重启次数
  min_uptime: '10s',          // 最小运行时间
  restart_delay: 4000,        // 重启延迟（毫秒）
}
```

## 最佳实践

1. **生产环境配置**：
   - 使用 `exec_mode: 'cluster'` 提高性能
   - 设置合理的 `max_memory_restart`
   - 开启日志轮转

2. **监控告警**：
   - 定期检查 `pm2 status`
   - 设置内存/CPU 告警阈值
   - 使用外部监控服务（如 Datadog、New Relic）

3. **日志管理**：
   - 使用结构化日志
   - 定期清理旧日志
   - 考虑使用集中式日志服务

4. **部署策略**：
   - 使用 `pm2 reload` 实现零停机部署
   - 自动化部署流程
   - 保留多个版本以便回滚

5. **安全性**：
   - 不要在配置文件中硬编码敏感信息
   - 使用 `.env` 文件管理环境变量
   - 定期更新依赖包

## 相关资源

- [PM2 官方文档](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [PM2 进程管理教程](https://pm2.keymetrics.io/docs/usage/process-management/)
- [PM2 日志管理](https://pm2.keymetrics.io/docs/usage/log-management/)
- [PM2 监控](https://pm2.keymetrics.io/docs/usage/monitoring/)

## 常见问题

### Q: PM2 和 systemd 的区别？

A: PM2 是进程管理器，提供更丰富的功能（日志、监控、集群）；systemd 是系统级服务管理。在生产环境中可以结合使用：用 systemd 管理 PM2，用 PM2 管理应用进程。

### Q: 如何实现 0 停机部署？

A: 使用 `pm2 reload` 而不是 `pm2 restart`。reload 会等待新进程启动后再关闭旧进程。

### Q: 日志文件位置在哪里？

A: 默认在项目的 `logs/` 目录下，可在 `ecosystem.config.js` 中自定义。

### Q: 如何限制内存使用？

A: 在 `ecosystem.config.js` 中设置 `max_memory_restart: '1G'`，超过限制会自动重启。

## 总结

使用 PM2 部署的主要优势：

- ✅ 进程守护，自动重启
- ✅ 日志管理和轮转
- ✅ 性能监控
- ✅ 集群模式支持
- ✅ 零停机部署
- ✅ 开机自启动

现在你可以开始使用 PM2 部署 TradingView Signal Bot 了！🚀
