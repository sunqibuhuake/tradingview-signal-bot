# TradingView Signal Bot - 项目技术说明

## 📋 项目概述

TradingView Signal Bot 是一个基于 TypeScript 开发的自动化交易信号监控系统，通过连接 TradingView 的非官方 API，实时监控股票和加密货币市场的技术指标，并在检测到交易信号时通过钉钉机器人发送通知。

### 核心特性
- **双模式运行**：支持 A 股定时扫描和加密货币实时监控两种模式
- **自定义指标**：支持 TradingView 自定义私有指标
- **信号去重**：智能信号去重机制，避免重复通知
- **实时推送**：通过钉钉 Webhook 实时推送交易信号
- **优雅关闭**：支持优雅的进程关闭和资源清理
- **精美日志**：带有进度条、表格、彩色输出的现代化日志系统

---

## 🏗️ 系统架构

### 整体架构图

```
┌─────────────────────────────────────────────────────────────┐
│                      TradingView API                        │
│                  (WebSocket Connection)                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ├─────────────────────────┐
                          │                         │
         ┌────────────────▼─────────┐  ┌────────────▼───────────┐
         │   Bot-CN (A股扫描)        │  │  Bot-Crypto (加密货币)   │
         │   - 定时执行 (24h)        │  │  - 实时监控              │
         │   - 批量扫描              │  │  - WebSocket 订阅        │
         └────────────┬──────────────┘  └────────────┬───────────┘
                      │                              │
         ┌────────────▼──────────────────────────────▼───────────┐
         │            TradingViewService                         │
         │  - 指标加载    - 市场搜索    - 数据读取               │
         └────────────┬──────────────────────────────────────────┘
                      │
         ┌────────────▼──────────────────────────────────────────┐
         │                  SignalManager                        │
         │          信号去重 & 历史记录管理                       │
         └────────────┬──────────────────────────────────────────┘
                      │
         ┌────────────▼──────────────────────────────────────────┐
         │              NotificationService                      │
         │           钉钉 Webhook 消息推送                       │
         └───────────────────────────────────────────────────────┘
```

### 目录结构

```
src/
├── bot-cn/                    # A股机器人
│   ├── index.ts              # 主入口
│   └── stocks/               # 股票配置
│       └── stocks-bank.json  # 银行股票列表
├── bot-crypto/               # 加密货币机器人
│   └── index.ts             # 主入口
├── config/                   # 配置管理
│   └── index.ts             # 统一配置入口
├── services/                 # 核心服务层
│   ├── TradingViewService.ts    # TradingView API 封装
│   ├── NotificationService.ts   # 通知服务
│   └── SignalManager.ts         # 信号管理
├── utils/                    # 工具函数
│   ├── logger.ts            # 日志系统
│   └── fileLoader.ts        # 文件加载工具
└── types/                    # TypeScript 类型定义
    ├── index.ts             # 业务类型
    └── tradingview.d.ts     # TradingView 类型声明
```

---

## 🔑 核心原理

### 1. TradingView API 连接原理

项目使用第三方库 `@mathieuc/tradingview` 来与 TradingView 建立连接，该库通过 WebSocket 与 TradingView 服务器通信。

**认证机制**：
```typescript
// 需要两个关键参数
const client = new TradingView.Client({
  token: SESSION,      // 从浏览器 Cookie 中获取
  signature: SIGNATURE // 从浏览器 Cookie 中获取
});
```

**工作流程**：
1. 通过 session 和 signature 建立 WebSocket 连接
2. 创建 Chart Session（图表会话）
3. 加载自定义指标（Private Indicator）
4. 订阅市场数据和指标更新
5. 实时接收数据推送

### 2. 双模式运行机制

#### A股扫描模式 (bot-cn)

```typescript
// 定时轮询模式
async run() {
  // 1. 加载指标
  const [indInfo, indic] = await this.tradingViewService.getIndicator();
  
  // 2. 遍历股票列表
  for (let i = 0; i < this.stocks.length; i++) {
    const stock = this.stocks[i];
    
    // 3. 搜索市场
    const markets = await this.searchMarkets(`SSE:${stock.code}`, 'stock');
    
    // 4. 读取指标数据（带超时）
    const result = await this.readIndicator(markets[0], indic, {
      timeframe: '1D',
      range: 500,
      timeout: 10000,
    });
    
    // 5. 检查交易信号
    if (result.indItem.Buy_Alert || result.indItem.Sell_Alert) {
      // 发送通知
    }
  }
  
  // 6. 24小时后再次执行
  setTimeout(() => this.run(), 24 * 60 * 60 * 1000);
}
```

**特点**：
- **批量扫描**：一次性扫描所有配置的股票
- **一次性读取**：使用 `readIndicator` 方法读取单次数据
- **定时执行**：每 24 小时执行一次
- **简单去重**：只检查上次操作类型，避免连续相同信号

#### 加密货币实时监控模式 (bot-crypto)

```typescript
// 实时监控模式
async run() {
  // 1. 搜索所有 USDT 交易对
  const markets = await this.searchMarkets('BINANCE:', 'crypto');
  const usdtPairs = markets.filter(m => m.id.endsWith('USDT'));
  
  // 2. 为每个市场创建实时监控会话
  usdtPairs.forEach(market => {
    const chart = this.createChartSession(
      market,
      indic,
      { timeframe: '5', range: 500 },
      (indItem, chartItem) => {
        // 实时回调处理信号
        this.handleIndicatorUpdate(market, indInfo, indItem, chartItem);
      }
    );
    this.activeCharts.add(chart);
  });
}
```

**特点**：
- **持续监控**：创建 WebSocket 连接持续接收数据
- **事件驱动**：通过回调函数处理指标更新
- **并发监控**：同时监控多个市场
- **时间窗口去重**：20 分钟内相同信号只通知一次

### 3. 信号去重机制

```typescript
class SignalManager {
  private signalRecords: Map<string, SignalRecord | ActionType>;
  private duplicateWindow: number; // 去重时间窗口（毫秒）
  
  shouldProcessSignal(marketId: string, action: ActionType, currentTime: number): boolean {
    const lastSignal = this.signalRecords.get(marketId);
    
    // 模式 1：无时间窗口（A股模式）
    if (this.duplicateWindow === 0) {
      // 只要操作类型改变就处理（Buy -> Sell 或 Sell -> Buy）
      return lastSignal !== action;
    }
    
    // 模式 2：带时间窗口（加密货币模式）
    if (lastSignal && typeof lastSignal === 'object') {
      if (lastSignal.action === action) {
        const timeDelta = currentTime - lastSignal.time;
        // 相同操作在时间窗口内 -> 拒绝
        return timeDelta >= this.duplicateWindow;
      }
    }
    
    return true;
  }
}
```

**两种去重策略**：
1. **A股模式**：只要操作类型变化就通知（Buy↔Sell）
2. **加密货币模式**：相同操作在 20 分钟内只通知一次

### 4. 指标数据读取

#### 单次读取（A股）

```typescript
readIndicator(market, indic, options): Promise<Result | null> {
  return new Promise((resolve) => {
    const chart = new this.client.Session.Chart();
    chart.setMarket(market.id, { timeframe, range });
    
    // 设置超时
    const timer = setTimeout(() => {
      indicator.remove();
      resolve(null); // 超时返回 null
    }, timeout);
    
    const indicator = new chart.Study(indic);
    
    indicator.onUpdate(() => {
      // 获取最新数据（periods[0] 是最新的 K 线）
      const indItem = indicator.periods[0];
      const item = chart.periods[0];
      
      // 立即清理
      indicator.remove();
      clearTimeout(timer);
      
      resolve({ indItem, item });
    });
  });
}
```

#### 持续监听（加密货币）

```typescript
createChartSession(market, indic, options, onUpdate) {
  const chart = new this.client.Session.Chart();
  chart.setMarket(market.id, { timeframe, range });
  
  const indicator = new chart.Study(indic);
  
  indicator.onUpdate(() => {
    const indItem = indicator.periods[0];
    const item = chart.periods[0];
    // 持续回调，不移除监听器
    onUpdate(indItem, item);
  });
  
  return chart; // 返回 chart 对象用于后续管理
}
```

---

## 💡 重要实现细节

### 1. 配置管理

```typescript
// config/index.ts
export const config = {
  tradingView: {
    session: process.env.SESSION,      // 从环境变量读取
    signature: process.env.SIGNATURE,
    indicatorId: process.env.INDICATOR_ID || 'USER;default_id',
  },
  dingTalk: {
    webhookUrl: process.env.DINGTALK_WEBHOOK,
  },
  bot: {
    cn: {
      timeframe: '1D',    // 日线级别
      range: 500,         // 加载 500 根 K 线
      timeout: 10000,     // 10 秒超时
      checkInterval: 24 * 60 * 60 * 1000, // 24 小时
    },
    crypto: {
      timeframe: '5',     // 5 分钟级别
      range: 500,
      duplicateWindow: 20 * 60 * 1000, // 20 分钟去重窗口
    },
  },
};
```

### 2. 通知服务

```typescript
class NotificationService {
  // A股信号通知
  async sendChinaStockSignal(payload) {
    const content = [
      'A股 Trading Signal',
      `标的：${market}`,
      `操作：${action === 'Buy' ? '买入' : '卖出'}`,
      `价格：${price}`,
      `时间：${dayjs(timestamp).format('YYYY-MM-DD')}`,
      `信号指标：日线-${indicatorName}`,
    ].join('\n');
    
    await axios.post(webhookUrl, {
      msgtype: 'text',
      text: { content },
    });
  }
  
  // 加密货币信号通知
  async sendCryptoSignal(payload) {
    const content = [
      'Crypto Trading Signal',
      `交易对：${market}`,
      `操作：${action} / ${action === 'Buy' ? 'Long' : 'Short'}`,
      `价格：${price}`,
      `时间：${dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}`,
      `信号指标：5min-${indicatorName}`,
    ].join('\n');
    
    await this.send(content);
  }
}
```

### 3. 错误处理与重试

```typescript
async run() {
  try {
    // 主逻辑
  } catch (error) {
    logger.error('执行失败:', error);
    
    // A股机器人：5分钟后重试
    logger.warn('5分钟后将自动重试...');
    setTimeout(() => this.run(), 5 * 60 * 1000);
  }
}
```

### 4. 优雅关闭

```typescript
async shutdown() {
  // 1. 关闭所有图表会话
  this.activeCharts.forEach(chart => {
    chart.delete();
  });
  this.activeCharts.clear();
  
  // 2. 关闭 TradingView 客户端连接
  await this.tradingViewService.close();
  
  // 3. 打印最终统计
  logger.marketOverview({...});
  logger.printStats();
}

// 监听进程信号
process.on('SIGINT', async () => {
  await bot.shutdown();
  process.exit(0);
});
```

### 5. 日志系统

项目实现了一个功能丰富的日志系统：

```typescript
// 标准日志
logger.info('信息');
logger.warn('警告');
logger.error('错误');
logger.success('成功');
logger.debug('调试');

// 特殊格式
logger.title('标题');
logger.divider();
logger.progress(current, total, '进度信息');

// 交易信号展示
logger.signal({
  market: 'BTCUSDT',
  action: 'Buy',
  price: 45000.00,
  indicator: 'Custom EMA',
});

// 市场概览
logger.marketOverview({
  name: '加密货币市场',
  totalMarkets: 20,
  activeMarkets: 15,
  signals: 5,
  status: 'running',
});

// 加载动画
const spinner = logger.spinner('加载中...');
spinner.stop(true, '加载完成');
```

---

## 🔧 技术栈

| 技术 | 用途 | 说明 |
|------|------|------|
| TypeScript | 开发语言 | 类型安全，提升代码质量 |
| @mathieuc/tradingview | TradingView API | 非官方 API，支持 WebSocket |
| axios | HTTP 客户端 | 发送钉钉通知 |
| chalk | 终端样式 | 彩色日志输出 |
| dayjs | 时间处理 | 轻量级日期格式化 |
| dotenv | 环境变量 | 配置管理 |
| ws | WebSocket | TradingView API 依赖 |

---

## 📊 数据流

### A股扫描流程

```
启动 → 加载配置 → 加载指标
  ↓
遍历股票列表
  ↓
搜索市场 (SSE:600036)
  ↓
创建图表会话
  ↓
加载指标到图表
  ↓
等待数据更新（最多10秒）
  ↓
检查 Buy_Alert / Sell_Alert
  ↓
[有信号] → 去重检查 → 发送通知 → 记录信号
  ↓
[无信号] → 跳过
  ↓
下一只股票
  ↓
全部完成 → 打印统计 → 等待24小时 → 重新开始
```

### 加密货币监控流程

```
启动 → 加载配置 → 搜索 USDT 交易对
  ↓
过滤市场 (仅 USDT)
  ↓
加载指标
  ↓
为每个市场创建图表会话（并行）
  ↓
订阅实时数据更新
  ↓
[数据更新] → 回调触发
  ↓
检查 Buy_Alert / Sell_Alert
  ↓
[有信号] → 去重检查（20分钟窗口） → 发送通知 → 记录信号
  ↓
[无信号] → 继续监听
  ↓
持续运行...
```

---

## 🎯 关键算法

### 指标信号检测

```typescript
// 指标数据结构
interface IndicatorPeriod {
  $time?: number;           // K线时间戳
  FAST_EMA?: number;        // 快速 EMA
  SLOW_EMA?: number;        // 慢速 EMA
  Buy_Alert?: number;       // 买入信号（0 或 1）
  Sell_Alert?: number;      // 卖出信号（0 或 1）
  // ... 其他自定义字段
}

// 检测逻辑
if (indItem.Buy_Alert) {
  // 触发买入信号
  action = 'Buy';
} else if (indItem.Sell_Alert) {
  // 触发卖出信号
  action = 'Sell';
}
```

### 去重算法

```typescript
// 算法伪代码
function shouldProcessSignal(marketId, action, currentTime) {
  lastSignal = records[marketId];
  
  if (duplicateWindow == 0) {
    // A股模式：只要动作变化就处理
    return lastSignal.action != action;
  } else {
    // 加密货币模式：时间窗口 + 动作检查
    if (lastSignal.action == action) {
      timeDiff = currentTime - lastSignal.time;
      return timeDiff >= duplicateWindow;
    }
    return true;
  }
}
```

---

## 🚀 运行流程

### 开发环境

```bash
# 1. 安装依赖
pnpm install

# 2. 配置环境变量
cp .env.example .env
# 编辑 .env 填入 SESSION、SIGNATURE、INDICATOR_ID

# 3. 运行 A股机器人
pnpm run dev:cn

# 4. 运行加密货币机器人
pnpm run dev:crypto
```

### 生产环境

```bash
# 1. 编译
pnpm run build

# 2. 运行
pnpm run start:cn      # A股
pnpm run start:crypto  # 加密货币
```

---

## 🔐 安全性考虑

1. **敏感信息保护**：所有凭证通过环境变量注入，不写入代码
2. **连接超时**：所有 API 请求都设置超时时间
3. **错误捕获**：全局错误捕获，避免进程崩溃
4. **优雅关闭**：监听 SIGINT/SIGTERM 信号，正确清理资源
5. **限流控制**：A股模式使用定时扫描，避免频繁请求

---

## 📈 性能优化

1. **批量处理**：A股模式批量扫描，减少连接开销
2. **连接复用**：加密货币模式复用 WebSocket 连接
3. **内存管理**：及时清理不再使用的图表会话
4. **超时控制**：防止因网络问题导致的资源泄漏
5. **日志级别**：生产环境可调整日志级别减少 I/O

---

## 🛠️ 扩展建议

### 添加新的市场监控

```typescript
// 1. 在 bot-crypto/index.ts 中修改搜索条件
const markets = await this.searchMarkets('BINANCE:', 'crypto');
// 改为其他交易所，如 'COINBASE:', 'KRAKEN:' 等

// 2. 调整过滤条件
let filteredMarkets = markets.filter(market => {
  // 自定义过滤逻辑
  return market.id.endsWith('BTC'); // 例如只监控 BTC 交易对
});
```

### 添加新的通知渠道

```typescript
// 1. 在 NotificationService 中添加新方法
async sendToSlack(payload: NotificationPayload) {
  // Slack Webhook 实现
}

async sendToTelegram(payload: NotificationPayload) {
  // Telegram Bot API 实现
}

// 2. 在 bot 中调用
await this.notificationService.sendToSlack(signalData);
```

### 添加更多指标

```typescript
// 1. 在 TradingView 中创建新的私有指标
// 2. 获取指标 ID
// 3. 更新 .env 文件中的 INDICATOR_ID
// 4. 根据新指标的输出字段调整信号检测逻辑

if (indItem.Custom_Signal_1 || indItem.Custom_Signal_2) {
  // 自定义信号处理
}
```

---

## 📝 调试技巧

### 查看完整日志

```typescript
// 设置日志级别为 DEBUG
import { logger, LogLevel } from './utils/logger';
logger.setLevel(LogLevel.DEBUG);
```

### 测试单个股票

```typescript
// 在 bot-cn/stocks/stocks-bank.json 中只保留一个股票
[
  { "name": "招商银行", "code": "600036" }
]
```

### 模拟信号

```typescript
// 在开发环境中手动触发信号
const testSignal = {
  market: 'TEST',
  action: 'Buy',
  price: 100.00,
  indicatorName: 'Test',
  timestamp: new Date(),
};
await notificationService.sendCryptoSignal(testSignal);
```

---

## ⚠️ 常见问题

### 1. 无法连接 TradingView

**原因**：SESSION 或 SIGNATURE 过期

**解决**：
1. 在浏览器中登录 TradingView
2. 打开开发者工具 → Application → Cookies
3. 复制 `sessionid` 和 `sessionid_sign` 的值
4. 更新 `.env` 文件

### 2. 找不到指标

**原因**：INDICATOR_ID 错误或指标未共享

**解决**：
1. 确保指标已保存为私有指标
2. 通过 TradingView API 获取正确的指标 ID
3. 指标 ID 格式：`USER;{hash}`

### 3. 钉钉通知失败

**原因**：Webhook URL 错误或机器人被限流

**解决**：
1. 检查 Webhook URL 是否正确
2. 确认机器人未达到发送频率限制
3. 查看钉钉机器人管理后台的错误信息

### 4. A股扫描超时

**原因**：网络延迟或 TradingView 服务繁忙

**解决**：
1. 增加超时时间（config.bot.cn.timeout）
2. 减少扫描的股票数量
3. 检查网络连接状态

---

## 📚 参考资料

- [@mathieuc/tradingview](https://github.com/Mathieu2301/TradingView-API) - TradingView 非官方 API
- [DingTalk Robot Documentation](https://developers.dingtalk.com/document/app/custom-robot-access) - 钉钉机器人文档
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript 官方文档

---

## 📄 许可证

ISC License

---

**作者**: 开发者
**最后更新**: 2026-01-18
