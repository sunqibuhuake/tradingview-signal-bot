# Bot 服务集成指南

## 概述

原有的 `src/` 目录下的 bot 功能已经成功集成到 Next.js 应用中，作为后台服务运行。

## 架构设计

### 核心组件

1. **TaskExecutor** (`lib/bot/TaskExecutor.ts`)
   - 负责执行具体的监控任务
   - 支持两种模式：实时监控（加密货币）和定时扫描（A股）
   - 处理指标更新，记录信号，发送通知

2. **BotManager** (`lib/bot/BotManager.ts`)
   - 全局单例管理器
   - 管理所有任务的生命周期
   - 提供启动/停止/重启服务的接口

3. **原有服务复用**
   - `TradingViewService`: TradingView API 交互
   - `NotificationService`: 通知发送（钉钉）
   - `SignalManager`: 信号去重管理

### API 端点

- `GET /api/admin/bot` - 获取 Bot 状态和统计信息
- `POST /api/admin/bot/start` - 启动 Bot 服务
- `POST /api/admin/bot/stop` - 停止 Bot 服务
- `POST /api/admin/bot/restart` - 重启 Bot 服务

### 前端页面

- `/admin/bot` - Bot 控制中心
  - 实时显示服务状态
  - 启动/停止/重启控制
  - 任务统计信息展示

## 工作流程

### 1. 任务启动流程

```mermaid
sequencer
User -> BotManager: 启动服务
BotManager -> DB: 查询 ACTIVE 状态任务
DB -> BotManager: 返回任务列表
BotManager -> TaskExecutor: 启动每个任务
TaskExecutor -> TradingViewService: 创建图表会话
TradingViewService -> TaskExecutor: 返回监控实例
TaskExecutor -> BotManager: 任务启动完成
BotManager -> User: 服务启动成功
```

### 2. 信号处理流程

```
指标更新 → 检测信号 → 去重判断 → 记录数据库 → 发送通知 → 记录日志
```

### 3. 两种执行模式

#### 实时监控模式（REALTIME）
- 适用于加密货币市场
- 建立 WebSocket 连接
- 持续监听指标更新
- 实时处理交易信号

#### 定时扫描模式（SCHEDULED）
- 适用于 A股市场
- 按照设定周期执行
- 批量扫描标的
- 记录执行结果

## 数据流

### 任务执行记录 (TaskExecution)
```typescript
{
  taskId: string;        // 关联的任务ID
  status: 'SUCCESS' | 'FAILED' | 'PARTIAL';
  duration: number;      // 执行耗时（毫秒）
  executedAt: Date;      // 执行时间
}
```

### 指标结果 (IndicatorResult)
```typescript
{
  taskId: string;        // 关联的任务ID
  indicatorId: string;   // 关联的指标ID
  fieldName: string;     // 字段名（如 Buy_Alert）
  fieldValue: string;    // 字段值（如 "1"）
  rawData: Json;         // 原始数据
  createdAt: Date;       // 记录时间
}
```

## 使用指南

### 1. 配置环境变量

确保 `.env` 文件包含以下配置：

```env
# TradingView 认证
SESSION=your_session_token
SIGNATURE=your_signature

# 指标 ID
INDICATOR_ID=USER;d442347285584c9da91f3b74d7875057

# 钉钉通知
DINGTALK_WEBHOOK=your_webhook_url

# 数据库连接
DATABASE_URL=your_database_url
```

### 2. 创建任务

通过管理后台创建监控任务：

1. 选择标的（Market）
2. 选择指标（Indicator）
3. 设置时间周期和执行模式
4. 配置通知渠道

### 3. 启动 Bot 服务

访问 `/admin/bot` 页面，点击"启动服务"按钮。

服务将自动：
- 加载所有 ACTIVE 状态的任务
- 为每个任务建立监控
- 开始处理交易信号

### 4. 监控运行状态

在 Bot 控制页面可以查看：
- 服务运行状态（运行中/已停止）
- 总任务数
- 运行中任务数
- 暂停任务数
- 错误任务数

### 5. 查看执行结果

访问 `/admin/executions` 页面查看：
- 任务执行历史
- 信号触发记录
- 执行统计数据

## 与原有 Bot 的区别

### 原有方式
- 独立进程运行
- 通过命令行启动
- 配置写在代码中
- 固定的标的列表

### 新方式
- 集成到 Next.js 应用
- 通过 Web 界面控制
- 配置存储在数据库
- 动态管理标的和任务

## 故障排查

### 服务无法启动

1. 检查环境变量配置
2. 检查数据库连接
3. 查看控制台错误日志
4. 确认有 ACTIVE 状态的任务

### 任务执行失败

1. 检查市场代码是否正确
2. 检查指标 ID 是否有效
3. 查看 TaskExecution 记录的错误信息
4. 检查 TradingView 认证是否过期

### 通知发送失败

1. 检查钉钉 webhook URL
2. 确认通知渠道已启用
3. 查看 CommonLog 中的错误记录

## 未来扩展

### 计划功能

1. **多指标组合**
   - 支持一个任务关联多个指标
   - 指标间的逻辑组合（AND/OR）

2. **高级通知**
   - 支持更多通知渠道（邮件、Telegram等）
   - 可配置的通知模板
   - 通知频率控制

3. **性能优化**
   - 任务并发控制
   - 资源使用监控
   - 自动重试机制

4. **数据分析**
   - 信号统计分析
   - 胜率计算
   - 回测功能

## 注意事项

1. **资源管理**
   - 避免同时运行过多任务
   - 定期清理旧的执行记录
   - 监控内存使用

2. **数据安全**
   - TradingView 认证信息加密存储
   - API 请求鉴权
   - 日志脱敏

3. **服务稳定性**
   - 异常自动恢复
   - 优雅关闭处理
   - 健康检查机制

## 技术栈

- **Next.js 15**: 应用框架
- **Prisma 7**: ORM 和数据库管理
- **NextAuth**: 身份认证
- **@mathieuc/tradingview**: TradingView API 客户端
- **React Query**: 数据获取和缓存
- **Tailwind CSS**: 样式框架
