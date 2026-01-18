import * as path from 'path';
import { config, validateConfig } from '../config';
import { TradingViewService } from '../services/TradingViewService';
import { NotificationService } from '../services/NotificationService';
import { SignalManager } from '../services/SignalManager';
import { logger } from '../utils/logger';
import { loadJsonFile } from '../utils/fileLoader';
import type { Stock, ActionType } from '../types';

/**
 * China Stock Trading Signal Bot
 * Monitors A-share markets and sends trading signals
 */
class ChinaStockBot {
  private tradingViewService: TradingViewService;
  private notificationService: NotificationService;
  private signalManager: SignalManager;
  private stocks: Stock[];

  constructor() {
    validateConfig();

    this.tradingViewService = new TradingViewService();
    this.notificationService = new NotificationService();
    this.signalManager = new SignalManager(); // No duplicate window for stock bot

    // Load stocks configuration
    const stocksFilePath = path.join(__dirname, './stocks/stocks-bank.json');
    this.stocks = loadJsonFile<Stock[]>(stocksFilePath);
    
    logger.info(`已加载 ${this.stocks.length} 只股票进行监控`);
  }

  /**
   * Process a single stock
   */
  private async processStock(stock: Stock, indInfo: any, indic: any): Promise<void> {
    try {
      logger.debug(`处理股票: ${stock.name} (${stock.code})`);

      // Search for market
      const markets = await this.tradingViewService.searchMarkets(`SSE:${stock.code}`, 'stock');
      if (markets.length === 0) {
        logger.warn(`未找到市场: ${stock.code}`);
        return;
      }

      // Read indicator data
      const result = await this.tradingViewService.readIndicator(markets[0], indic, {
        timeframe: config.bot.cn.timeframe,
        range: config.bot.cn.range,
        timeout: config.bot.cn.timeout,
      });

      if (!result || !result.indItem || !result.item) {
        logger.warn(`无法读取指标数据: ${stock.code}`);
        return;
      }

      const { indItem, item } = result;

      // Check for trading signals
      if (indItem.Buy_Alert || indItem.Sell_Alert) {
        const action: ActionType = indItem.Buy_Alert ? 'Buy' : 'Sell';
        const marketName = `${stock.name} ${stock.code}`;

        // Check if signal should be processed
        if (!this.signalManager.shouldProcessSignal(stock.code, action)) {
          logger.debug(`重复信号，跳过: ${marketName} - ${action}`);
          return;
        }

        // Record signal
        this.signalManager.recordSignal(stock.code, action);

        // Send notification
        await this.notificationService.sendChinaStockSignal({
          market: marketName,
          action,
          price: item.close,
          indicatorName: indInfo.name,
          timestamp: new Date(),
        });

        logger.info(`交易信号: ${marketName} - ${action} @ ${item.close}`);
      }
    } catch (error) {
      logger.error(`处理股票失败: ${stock.name}`, error);
    }
  }

  /**
   * Main execution loop
   */
  async run(): Promise<void> {
    try {
      logger.info('启动 A股监控机器人...');

      // Get indicator
      const [indInfo, indic] = await this.tradingViewService.getIndicator();
      logger.info(`使用指标: ${indInfo.name}`);

      // Process all stocks
      for (const stock of this.stocks) {
        await this.processStock(stock, indInfo, indic);
      }

      // Print statistics
      const stats = this.signalManager.getStats();
      logger.info(`扫描完成 - 监控市场: ${stats.totalMarkets}, 信号数: ${stats.totalSignals}`);

      // Schedule next run
      logger.info(`等待下次执行 (${config.bot.cn.checkInterval / 1000 / 60 / 60} 小时)...`);
      setTimeout(() => this.run(), config.bot.cn.checkInterval);
    } catch (error) {
      logger.error('执行失败:', error);
      
      // Retry after 5 minutes on error
      logger.info('5分钟后重试...');
      setTimeout(() => this.run(), 5 * 60 * 1000);
    }
  }

  /**
   * Graceful shutdown
   */
  async shutdown(): Promise<void> {
    logger.info('正在关闭机器人...');
    await this.tradingViewService.close();
    logger.info('机器人已关闭');
  }
}

// Create and run bot
const bot = new ChinaStockBot();

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

// Start bot
bot.run().catch((error) => {
  logger.error('启动失败:', error);
  process.exit(1);
});
