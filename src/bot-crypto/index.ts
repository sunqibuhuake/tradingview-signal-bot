import { config, validateConfig } from '../config';
import { TradingViewService } from '../services/TradingViewService';
import { NotificationService } from '../services/NotificationService';
import { SignalManager } from '../services/SignalManager';
import { logger } from '../utils/logger';
import type { SearchMarketResult, ActionType } from '../types';

/**
 * Crypto Trading Signal Bot
 * Monitors cryptocurrency markets in real-time and sends trading signals
 */
class CryptoTradingBot {
  private tradingViewService: TradingViewService;
  private notificationService: NotificationService;
  private signalManager: SignalManager;
  private activeCharts: Set<any>;
  private totalSignals: number = 0;
  private monitoredMarkets: number = 0;

  constructor() {
    // Print banner
    logger.banner('1.0.0');
    
    logger.info('正在初始化加密货币监控机器人...');
    
    validateConfig();
    logger.success('配置验证通过');

    this.tradingViewService = new TradingViewService();
    this.notificationService = new NotificationService();
    this.signalManager = new SignalManager(config.bot.crypto.duplicateWindow);
    this.activeCharts = new Set();

    logger.divider();
  }

  /**
   * Monitor a single market in real-time
   */
  private monitorMarket(market: SearchMarketResult, indInfo: any, indic: any): void {
    try {
      const chart = this.tradingViewService.createChartSession(
        market,
        indic,
        {
          timeframe: config.bot.crypto.timeframe,
          range: config.bot.crypto.range,
        },
        (indItem, chartItem) => {
          this.handleIndicatorUpdate(market, indInfo, indItem, chartItem);
        }
      );

      this.activeCharts.add(chart);
      this.monitoredMarkets++;
      logger.debug(`开始监控: ${market.id}`);
    } catch (error) {
      logger.error(`监控市场失败: ${market.id}`, error);
    }
  }

  /**
   * Handle indicator update
   */
  private async handleIndicatorUpdate(
    market: SearchMarketResult,
    indInfo: any,
    indItem: any,
    chartItem: any
  ): Promise<void> {
    try {
      // Check for trading signals
      if (!indItem.Buy_Alert && !indItem.Sell_Alert) {
        return;
      }

      const action: ActionType = indItem.Buy_Alert ? 'Buy' : 'Sell';
      const currentTime = Date.now();

      // Check if signal should be processed
      if (!this.signalManager.shouldProcessSignal(market.id, action, currentTime)) {
        logger.debug(`重复信号，跳过: ${market.id} - ${action}`);
        return;
      }

      // Record signal
      this.signalManager.recordSignal(market.id, action, currentTime);
      this.totalSignals++;

      // Extract symbol from market ID (e.g., "BINANCE:BTCUSDT" -> "BTCUSDT")
      const symbol = market.id.split(':')[1] || market.id;

      // Print signal
      logger.signal({
        market: symbol,
        action,
        price: chartItem.close,
        indicator: indInfo.name,
      });

      // Update market overview
      logger.marketOverview({
        name: '加密货币市场',
        totalMarkets: this.monitoredMarkets,
        activeMarkets: this.signalManager.getStats().totalMarkets,
        signals: this.totalSignals,
        status: 'running',
      });

      // Send notification
      try {
        await this.notificationService.sendCryptoSignal({
          market: symbol,
          action,
          price: chartItem.close,
          indicatorName: indInfo.name,
          timestamp: new Date(),
        });
        logger.success(`通知已发送: ${symbol}`);
      } catch (error) {
        logger.error(`发送通知失败: ${symbol}`, error);
      }
    } catch (error) {
      logger.error(`处理指标更新失败: ${market.id}`, error);
    }
  }

  /**
   * Main execution
   */
  async run(): Promise<void> {
    try {
      logger.info('启动加密货币监控机器人...');

      // Get markets
      const markets = await this.tradingViewService.searchMarkets('BINANCE:', 'crypto');

      console.log('markets', markets);
      // 出于测试目的，只保留20 个标的，实际可以内置一组预设的标的数据
      let filteredMarkets = markets.filter(market => market.id.endsWith('USDT')).slice(0, 20);
      
      logger.info(`找到 ${filteredMarkets.length} 个 USDT 交易对`);

      // Get indicator
      const [indInfo, indic] = await this.tradingViewService.getIndicator();
      logger.info(`使用指标: ${indInfo.name}`);

      // Monitor all markets
      filteredMarkets.forEach(market => {
        this.monitorMarket(market, indInfo, indic);
      });

      logger.info('所有市场监控已启动');
    } catch (error) {
      logger.error('启动失败:', error);
      throw error;
    }
  }

  /**
   * Graceful shutdown
   */
  async shutdown(): Promise<void> {
    logger.divider('═');
    logger.warn('正在关闭机器人...');
    
    const spinner = logger.spinner(`正在关闭 ${this.activeCharts.size} 个监控会话...`);
    
    // Close all chart sessions
    let closed = 0;
    this.activeCharts.forEach(chart => {
      try {
        chart.delete();
        closed++;
      } catch (error) {
        logger.debug('关闭图表会话失败:', error);
      }
    });
    this.activeCharts.clear();
    
    spinner.stop(true, `成功关闭 ${closed} 个监控会话`);

    // Close TradingView service
    const serviceSpinner = logger.spinner('正在关闭 TradingView 服务...');
    await this.tradingViewService.close();
    serviceSpinner.stop(true, 'TradingView 服务已关闭');

    // Print final statistics
    logger.marketOverview({
      name: '最终统计',
      totalMarkets: this.monitoredMarkets,
      activeMarkets: this.signalManager.getStats().totalMarkets,
      signals: this.totalSignals,
      status: 'stopped',
    });
    
    logger.success('机器人已安全关闭');
    logger.divider('═');
  }
}

// Create and run bot
const bot = new CryptoTradingBot();

// Handle graceful shutdown
process.on('SIGINT', async () => {
  logger.info('接收到 SIGINT 信号');
  await bot.shutdown();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  logger.info('接收到 SIGTERM 信号');
  await bot.shutdown();
  process.exit(0);
});

// Handle uncaught errors
process.on('uncaughtException', async (error) => {
  logger.error('未捕获的异常:', error);
  await bot.shutdown();
  process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  logger.error('未处理的 Promise 拒绝:', reason);
  await bot.shutdown();
  process.exit(1);
});

// Start bot
bot.run().catch(async (error) => {
  logger.error('启动失败:', error);
  await bot.shutdown();
  process.exit(1);
});
