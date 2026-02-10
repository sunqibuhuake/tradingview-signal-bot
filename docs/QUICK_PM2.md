# 快速开始 - PM2 部署

这是最简单的部署指南，只需 3 个步骤！

## 🚀 3 步部署

### 1️⃣ 安装 PM2（首次）

```bash
npm install -g pm2
```

### 2️⃣ 构建应用

```bash
# 克隆项目
git clone <your-repo-url>
cd tradingview-bot

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件

# 初始化数据库
pnpm prisma:generate
pnpm prisma:push

# 构建
pnpm build
```

### 3️⃣ 启动服务

```bash
# 启动
pnpm pm2:start

# 查看状态
pnpm pm2:status

# 查看日志
pnpm pm2:logs
```

✅ 完成！访问 http://localhost:3000

---

## 📝 常用命令速查

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

---

## 🔄 更新部署

有新代码时，运行自动部署脚本：

```bash
./scripts/deploy.sh
```

这会自动完成：
- ✅ 拉取代码
- ✅ 安装依赖
- ✅ 构建应用
- ✅ 重启服务

---

## 🚨 故障排查

### 服务无法启动？

```bash
# 查看错误日志
pm2 logs tradingview-bot-web --err

# 手动测试
node node_modules/next/dist/bin/next start
```

### 端口被占用？

```bash
# 查看端口占用
lsof -i :3000

# 杀死进程
kill -9 <PID>
```

### 看不到日志？

```bash
# 查看日志文件
tail -f logs/web-out.log
tail -f logs/web-error.log
```

---

## 🎯 开机自启动（可选）

```bash
sudo ./scripts/setup-startup.sh
```

重启系统后，服务会自动启动。

---

## 📚 更多帮助

- 详细文档: [PM2_DEPLOYMENT.md](./PM2_DEPLOYMENT.md)
- 使用 Makefile: `make help`
- PM2 官网: https://pm2.keymetrics.io

---

**就是这么简单！🎉**
