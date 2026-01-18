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

  constructor() {
    validateConfig();

    this.tradingViewService = new TradingViewService();
    this.notificationService = new NotificationService();
    this.signalManager = new SignalManager(config.bot.crypto.duplicateWindow);
    this.activeCharts = new Set();
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

      // Extract symbol from market ID (e.g., "BINANCE:BTCUSDT" -> "BTCUSDT")
      const symbol = market.id.split(':')[1] || market.id;

      // Send notification
      await this.notificationService.sendCryptoSignal({
        market: symbol,
        action,
        price: chartItem.close,
        indicatorName: indInfo.name,
        timestamp: new Date(),
      });

      logger.info(`交易信号: ${symbol} - ${action} @ ${chartItem.close}`);
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
    logger.info('正在关闭机器人...');
    
    // Close all chart sessions
    this.activeCharts.forEach(chart => {
      try {
        chart.delete();
      } catch (error) {
        logger.error('关闭图表会话失败:', error);
      }
    });
    this.activeCharts.clear();

    // Close TradingView service
    await this.tradingViewService.close();

    // Print final statistics
    const stats = this.signalManager.getStats();
    logger.info(`最终统计 - 监控市场: ${stats.totalMarkets}, 信号数: ${stats.totalSignals}`);
    
    logger.info('机器人已关闭');
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
