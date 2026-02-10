# PM2 启动配置 - 完成总结

## ✅ 已完成的工作

### 1. **核心配置文件**

- ✅ `ecosystem.config.js` - PM2 主配置文件
- ✅ `.gitignore` - 忽略 PM2 日志文件
- ✅ `Makefile` - 快速命令参考

### 2. **NPM Scripts**

在 `package.json` 中添加了以下脚本：

```json
{
  "pm2:start": "pm2 start ecosystem.config.js",
  "pm2:stop": "pm2 stop ecosystem.config.js",
  "pm2:restart": "pm2 restart ecosystem.config.js",
  "pm2:delete": "pm2 delete ecosystem.config.js",
  "pm2:logs": "pm2 logs",
  "pm2:monit": "pm2 monit",
  "pm2:status": "pm2 status"
}
```

### 3. **自动化脚本**

- ✅ `scripts/deploy.sh` - 自动部署脚本（一键拉取、构建、重启）
- ✅ `scripts/setup-startup.sh` - 开机自启动配置脚本

### 4. **文档**

- ✅ `docs/PM2_DEPLOYMENT.md` - 完整的 PM2 部署指南（8000+ 字）
- ✅ `docs/QUICK_PM2.md` - 3 步快速开始指南
- ✅ 更新了 `README.md`，添加 PM2 使用说明

## 📖 使用方法

### 快速开始（3 步）

```bash
# 1. 安装 PM2（首次）
npm install -g pm2

# 2. 构建应用
pnpm install
pnpm build

# 3. 启动服务
pnpm pm2:start
```

### 使用自动部署脚本

```bash
# 一键部署（拉取代码、安装依赖、构建、重启）
./scripts/deploy.sh

# 配置开机自启动（需要 sudo）
sudo ./scripts/setup-startup.sh
```

### 使用 Makefile

```bash
# 查看所有命令
make help

# 完整设置
make setup

# 启动 PM2
make pm2-start

# 查看状态
make pm2-status

# 自动部署
make deploy
```

### 常用命令

```bash
# 查看状态
pnpm pm2:status

# 查看日志
pnpm pm2:logs

# 重启服务
pnpm pm2:restart

# 停止服务
pnpm pm2:stop

# 实时监控
pnpm pm2:monit
```

## 🎯 PM2 配置说明

### ecosystem.config.js 核心配置

```javascript
{
  name: 'tradingview-bot-web',
  script: 'node_modules/next/dist/bin/next',
  args: 'start',
  instances: 1,
  exec_mode: 'fork',
  env: {
    NODE_ENV: 'production',
    PORT: 3000,
  },
  error_file: 'logs/web-error.log',
  out_file: 'logs/web-out.log',
  autorestart: true,
  max_memory_restart: '1G',
}
```

### 可选配置

如需启用集群模式以提高性能：

```javascript
{
  instances: 'max',  // 使用所有 CPU 核心
  exec_mode: 'cluster',
}
```

## 📊 日志管理

### 日志文件位置

```
logs/
├── web-out.log      # 标准输出日志
└── web-error.log    # 错误日志
```

### 查看日志

```bash
# 实时查看所有日志
pm2 logs

# 查看特定应用日志
pm2 logs tradingview-bot-web

# 只看错误日志
pm2 logs tradingview-bot-web --err

# 查看最后 100 行
pm2 logs --lines 100

# 清空日志
pm2 flush
```

### 日志轮转（推荐）

```bash
# 安装日志轮转模块
pm2 install pm2-logrotate

# 配置日志轮转
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
```

## 🚀 生产环境部署流程

### 首次部署

```bash
# 1. 克隆项目
git clone <your-repo-url>
cd tradingview-bot

# 2. 安装依赖
pnpm install

# 3. 配置环境变量
cp .env.example .env
# 编辑 .env 文件

# 4. 初始化数据库
pnpm prisma:generate
pnpm prisma:push
pnpm prisma:seed

# 5. 构建应用
pnpm build

# 6. 启动 PM2
pnpm pm2:start

# 7. 配置开机自启动（可选）
sudo ./scripts/setup-startup.sh

# 8. 保存 PM2 配置
pm2 save
```

### 后续更新

```bash
# 使用自动部署脚本（推荐）
./scripts/deploy.sh

# 或手动执行
git pull origin main
pnpm install
pnpm build
pnpm pm2:restart
```

## 🔍 监控和维护

### 实时监控

```bash
# PM2 内置监控
pm2 monit

# 查看详细信息
pm2 show tradingview-bot-web

# 查看进程列表
pm2 list
```

### 性能优化建议

1. **内存限制**：设置 `max_memory_restart: '1G'` 自动重启
2. **集群模式**：使用 `instances: 'max'` 充分利用多核 CPU
3. **日志轮转**：避免日志文件过大
4. **定期监控**：使用 `pm2 monit` 观察资源使用

## 🚨 故障排查

### 常见问题

1. **服务无法启动**
   ```bash
   pm2 logs --err
   ```

2. **端口被占用**
   ```bash
   lsof -i :3000
   kill -9 <PID>
   ```

3. **频繁重启**
   ```bash
   pm2 status  # 查看重启次数
   pm2 logs --err  # 查看错误原因
   ```

4. **内存泄漏**
   ```bash
   pm2 monit  # 监控内存使用
   # 调整 max_memory_restart 配置
   ```

## 📚 相关文档

- [PM2 完整部署指南](./PM2_DEPLOYMENT.md) - 详细文档
- [快速开始指南](./QUICK_PM2.md) - 3 步上手
- [信号去重机制](./SIGNAL_DEDUPLICATION.md) - 避免频繁触发
- [快速开始](./QUICK_START.md) - 项目快速入门

## 🎓 学习资源

- [PM2 官方文档](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [PM2 进程管理](https://pm2.keymetrics.io/docs/usage/process-management/)
- [PM2 日志管理](https://pm2.keymetrics.io/docs/usage/log-management/)

## ✨ 特点和优势

使用 PM2 部署的优势：

- ✅ **进程守护**：应用崩溃自动重启
- ✅ **日志管理**：统一的日志收集和轮转
- ✅ **性能监控**：实时查看 CPU、内存使用
- ✅ **集群模式**：充分利用多核 CPU
- ✅ **零停机部署**：使用 `pm2 reload` 实现
- ✅ **开机自启**：系统重启后自动启动
- ✅ **简单易用**：丰富的 CLI 命令

## 🔄 版本更新

### v1.0.0 (当前版本)

- ✅ 基础 PM2 配置
- ✅ 自动化部署脚本
- ✅ 完整文档
- ✅ Makefile 快捷命令
- ✅ 日志管理配置

### 未来计划

- [ ] Docker 部署支持
- [ ] CI/CD 集成
- [ ] 监控告警配置
- [ ] 性能优化指南

## 🤝 贡献

如有问题或建议，欢迎提交 Issue！

---

**现在你可以使用 PM2 轻松部署和管理 TradingView Signal Bot 了！🚀**

## 快速命令参考卡片

```bash
# ============ 启动和管理 ============
pnpm pm2:start          # 启动服务
pnpm pm2:stop           # 停止服务
pnpm pm2:restart        # 重启服务
pnpm pm2:status         # 查看状态

# ============ 日志和监控 ============
pnpm pm2:logs           # 查看日志
pnpm pm2:monit          # 实时监控
pm2 flush               # 清空日志

# ============ 自动化 ============
./scripts/deploy.sh            # 一键部署
sudo ./scripts/setup-startup.sh  # 开机自启

# ============ Makefile ============
make help               # 查看所有命令
make pm2-start          # 启动 PM2
make deploy             # 自动部署
make check              # 环境检查

# ============ 故障排查 ============
pm2 logs --err          # 查看错误
pm2 describe <app>      # 查看详情
pm2 reset <app>         # 重置计数器
```

保存这个命令卡片，随时参考！📋
