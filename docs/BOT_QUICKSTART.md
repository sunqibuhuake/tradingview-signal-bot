# Bot 服务快速启动指南

## 🎯 5 分钟快速上手

### 前置条件

- ✅ 数据库已配置（标的数: 47, 指标数: 1）
- ✅ Next.js 开发环境已就绪
- ✅ Bot 服务已集成完成

### 启动步骤

#### 1. 启动开发服务器

```bash
npm run dev
```

#### 2. 访问管理后台

浏览器打开: http://localhost:3000/admin

#### 3. 创建第一个任务

**方式 A: 通过界面创建**

1. 导航到 "任务管理" → "创建任务"
2. 填写任务信息:
   - **任务名称**: 比特币实时监控
   - **标的**: 选择 BTC/USDT
   - **指标**: 选择您的 TradingView 指标
   - **执行模式**: REALTIME（实时监控）
   - **时间周期**: M5（5分钟）
   - **启用通知**: ✓
3. 点击 "创建"

**方式 B: 通过 Prisma Studio 创建**

```bash
npx prisma studio
```

打开 Task 表，手动创建一条记录。

#### 4. 启动 Bot 服务

1. 导航到 "Bot 控制"
2. 点击 **"启动服务"** 按钮
3. 等待服务启动完成（约 2-3 秒）
4. 查看状态变为 **"运行中"** 🟢

#### 5. 监控运行状态

在 Bot 控制页面可以看到:

- **服务状态**: 运行中 🟢
- **总任务数**: 1
- **运行中任务**: 1
- **已暂停任务**: 0
- **错误任务**: 0

### 查看执行结果

#### 执行记录

导航到 "执行记录" 页面:
- 查看任务执行历史
- 查看执行状态和耗时
- 查看错误信息（如有）

#### 指标结果

导航到 "指标结果" 页面:
- 查看具体的信号数据
- 查看买入/卖出警报
- 查看指标输出值

#### 操作日志

导航到 "日志" 页面:
- 查看所有系统操作
- 查看信号触发记录
- 查看错误和警告

### 停止 Bot 服务

1. 导航到 "Bot 控制"
2. 点击 **"停止服务"** 按钮
3. 等待服务停止完成
4. 查看状态变为 **"已停止"** 🔴

### 重启 Bot 服务

1. 导航到 "Bot 控制"
2. 点击 **"重启服务"** 按钮
3. 服务将先停止，然后自动启动
4. 查看状态恢复为 **"运行中"** 🟢

---

## 🔧 示例任务配置

### 加密货币实时监控

```typescript
{
  name: "BTC/USDT 实时监控",
  marketId: "<选择 BTC/USDT 标的>",
  timeframe: "M5",
  range: 500,
  executionMode: "REALTIME",
  status: "ACTIVE",
  enableNotification: true
}
```

### A股定时扫描

```typescript
{
  name: "贵州茅台日线扫描",
  marketId: "<选择贵州茅台标的>",
  timeframe: "D1",
  range: 200,
  executionMode: "SCHEDULED",
  scheduleInterval: 86400000, // 24小时
  status: "ACTIVE",
  enableNotification: true
}
```

---

## 📊 API 调用示例

### 获取 Bot 状态

```bash
curl http://localhost:3000/api/admin/bot
```

### 启动服务

```bash
curl -X POST http://localhost:3000/api/admin/bot/start
```

### 停止服务

```bash
curl -X POST http://localhost:3000/api/admin/bot/stop
```

### 重启服务

```bash
curl -X POST http://localhost:3000/api/admin/bot/restart
```

---

## 🐛 常见问题

### 1. 服务启动失败

**可能原因**:
- 没有活跃任务
- 数据库连接失败
- TradingView 凭证无效

**解决方法**:
```bash
# 检查日志
npm run dev

# 查看控制台输出
# 检查 .env 文件配置
```

### 2. 任务无法启动

**可能原因**:
- 任务状态不是 ACTIVE
- 没有关联指标
- 标的不存在

**解决方法**:
- 检查任务配置
- 确认指标已正确关联
- 验证标的数据

### 3. 没有收到通知

**可能原因**:
- 通知未启用
- 钉钉 webhook 配置错误
- 没有触发交易信号

**解决方法**:
- 检查任务的 `enableNotification` 字段
- 验证 .env 中的通知配置
- 查看执行记录确认是否有信号

---

## 📚 相关文档

- [Bot 集成完整文档](./BOT_INTEGRATION.md)
- [Bot 集成状态报告](./BOT_INTEGRATION_STATUS.md)
- [架构设计文档](./ARCHITECTURE.md)

---

## 💡 提示

- Bot 服务会自动加载所有 `ACTIVE` 状态的任务
- 实时监控任务会保持 WebSocket 连接
- 定时扫描任务按配置的间隔执行
- 所有执行结果都会记录到数据库
- 信号会自动去重，防止重复通知

**开始使用吧！祝交易顺利！** 🚀
