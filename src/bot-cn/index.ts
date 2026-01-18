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
  private totalSignals: number = 0;

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
  private async processStock(stock: Stock, indInfo: any, indic: any, index: number): Promise<void> {
    try {
      logger.progress(index + 1, this.stocks.length, `正在扫描: ${stock.name} (${stock.code})`);

      // Search for market
      const markets = await this.tradingViewService.searchMarkets(`SSE:${stock.code}`, 'stock');
      if (markets.length === 0) {
        logger.debug(`未找到市场: ${stock.code}`);
        return;
      }

      // Read indicator data
      const result = await this.tradingViewService.readIndicator(markets[0], indic, {
        timeframe: config.bot.cn.timeframe,
        range: config.bot.cn.range,
        timeout: config.bot.cn.timeout,
      });

      if (!result || !result.indItem || !result.item) {
        logger.debug(`无法读取指标数据: ${stock.code}`);
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
        this.totalSignals++;

        // Print signal
        logger.signal({
          market: marketName,
          action,
          price: item.close,
          indicator: indInfo.name,
        });

        // Send notification
        try {
          await this.notificationService.sendChinaStockSignal({
            market: marketName,
            action,
            price: item.close,
            indicatorName: indInfo.name,
            timestamp: new Date(),
          });
          logger.success(`通知已发送: ${marketName}`);
        } catch (error) {
          logger.error(`发送通知失败: ${marketName}`, error);
        }
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
      logger.title('A股市场扫描开始');

      // Get indicator
      const spinner = logger.spinner('正在加载指标配置...');
      const [indInfo, indic] = await this.tradingViewService.getIndicator();
      spinner.stop(true, `指标加载成功: ${indInfo.name}`);

      logger.divider();
      logger.info(`开始扫描 ${this.stocks.length} 只股票...`);
      logger.divider();

      const startTime = Date.now();

      // Process all stocks
      for (let i = 0; i < this.stocks.length; i++) {
        await this.processStock(this.stocks[i], indInfo, indic, i);
      }

      const duration = ((Date.now() - startTime) / 1000).toFixed(2);

      logger.divider();
      logger.success(`扫描完成，耗时: ${duration}秒`);

      // Print market overview
      const stats = this.signalManager.getStats();
      logger.marketOverview({
        name: 'A股市场',
        totalMarkets: this.stocks.length,
        activeMarkets: stats.totalMarkets,
        signals: this.totalSignals,
        status: 'running',
      });

      // Print runtime statistics
      logger.printStats();

      // Schedule next run
      const nextRunHours = config.bot.cn.checkInterval / 1000 / 60 / 60;
      logger.info(`下次扫描将在 ${nextRunHours} 小时后执行`);
      logger.divider('═');
      
      setTimeout(() => this.run(), config.bot.cn.checkInterval);
    } catch (error) {
      logger.error('执行失败:', error);
      
      // Retry after 5 minutes on error
      logger.warn('5分钟后将自动重试...');
      setTimeout(() => this.run(), 5 * 60 * 1000);
    }
  }

  /**
   * Graceful shutdown
   */
  async shutdown(): Promise<void> {
    logger.divider('═');
    logger.warn('正在关闭机器人...');
    
    const spinner = logger.spinner('正在清理资源...');
    
    try {
      await this.tradingViewService.close();
      spinner.stop(true, '资源清理完成');
      
      // Final statistics
      logger.marketOverview({
        name: '最终统计',
        totalMarkets: this.stocks.length,
        activeMarkets: this.signalManager.getStats().totalMarkets,
        signals: this.totalSignals,
        status: 'stopped',
      });
      
      logger.success('机器人已安全关闭');
      logger.divider('═');
    } catch (error) {
      spinner.stop(false, '清理资源时发生错误');
      logger.error('关闭失败:', error);
    }
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
