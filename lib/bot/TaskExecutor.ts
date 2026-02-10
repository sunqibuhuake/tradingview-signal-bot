import { PrismaClient, MarketType, ExecutionMode, TaskStatus, Timeframe } from '../../generated/prisma';
import TradingView, { SearchMarketResult, TimeFrame as TvTimeFrame } from '@mathieuc/tradingview';
import { TradingViewService } from '@/src/services/TradingViewService';
import { NotificationService } from '@/src/services/NotificationService';
import prisma from '@/lib/prisma';
import { SignalTask, TasksResponse } from '@/app/admin/tasks/types';

/**
 * Task Executor - 执行监控任务
 * 集成原有 bot 功能到 Next.js 应用
 */
export class TaskExecutor {
  private tradingViewService: TradingViewService;
  private activeCharts: Map<string, any>; // taskId -> chart
  private runningTasks: Set<string>; // taskId set

  constructor() {
    this.tradingViewService = new TradingViewService();
    this.activeCharts = new Map();
    this.runningTasks = new Set();
  }

  /**
   * 获取任务对应的通知服务
   * 优先使用任务配置的 Webhook，否则使用环境变量
   */
  private async getNotificationService(task: any): Promise<NotificationService | null> {
    // 获取任务关联的 Webhook
    const taskWithWebhook = await prisma.task.findUnique({
      where: { id: task.id },
      include: { dingTalkWebhook: true },
    });

    let webhookUrl: string | undefined;
    let safeWord: string | undefined;

    if (taskWithWebhook?.dingTalkWebhook?.isActive) {
      webhookUrl = taskWithWebhook.dingTalkWebhook.webhookUrl;
      safeWord = taskWithWebhook.dingTalkWebhook.safeWord;
      console.log(`使用任务配置的 Webhook: ${taskWithWebhook.dingTalkWebhook.name}`);
    } else if (process.env.DINGTALK_WEBHOOK && process.env.DINGTALK_SAFE_WORD) {
      webhookUrl = process.env.DINGTALK_WEBHOOK;
      safeWord = process.env.DINGTALK_SAFE_WORD;
      console.log('使用环境变量配置的 Webhook');
    }

    if (!webhookUrl || !safeWord) {
      console.warn('未配置 Webhook 或安全词，将跳过通知发送');
      return null;
    }

    return new NotificationService({ webhookUrl, safeWord });
  }

  /**
   * 启动一个任务
   */
  async startTask(taskId: string): Promise<void> {
    if (this.runningTasks.has(taskId)) {
      console.log(`任务 ${taskId} 已在运行中`);
      return;
    }

    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: {
        market: true,
        taskIndicators: {
          include: {
            indicator: true,
          },
        },
      },
    });

    if (!task) {
      throw new Error(`任务不存在: ${taskId}`);
    }

    if (task.status !== TaskStatus.ACTIVE) {
      throw new Error(`任务状态不是 ACTIVE: ${taskId}`);
    }

    // 获取指标
    const indicator = task.taskIndicators[0]?.indicator;
    if (!indicator) {
      throw new Error(`任务没有关联指标: ${taskId}`);
    }

    const [indInfo, indic] = await this.tradingViewService.getIndicator(
      indicator.tradingViewId
    );

    // 根据执行模式启动任务
    if (task.executionMode === ExecutionMode.REALTIME) {
      await this.startRealtimeTask(task as any as SignalTask, indInfo, indic);
    } else {
      await this.startScheduledTask(task as any, indInfo, indic);
    }

    this.runningTasks.add(taskId);
  }

    private mapTimeframe(timeframe: Timeframe): TvTimeFrame {
  // export type TvTimeFrame = '1' | '3' | '5' | '15' | '30' | '45' | '60' | '120' | '180' | '240' | '1D' | '1W' | '1M' | string;

    const mapping: Record<Timeframe, TvTimeFrame> = {
      'M1': '1',
      'M3': '3',
      'M5': '5',
      'M15': '15',
      'M30': '30',
      'M45': '45',
      'H1': '60',
      'H2': '120',
      'H3': '180',
      'H4': '240',
      'D1': '1D',
      'W1': '1W',
      'MN1': '1M',
    };
    return (mapping[timeframe] || '5') as TvTimeFrame;
  }

  /**
   * 启动实时监控任务（加密货币）
   */
  private async startRealtimeTask(task: SignalTask, indInfo: any, indic: any): Promise<void> {
    try {
      // 搜索市场
      const markets = await this.tradingViewService.searchMarkets(
        task.market.symbol,
        this.getMarketFilter(task.market.type)
      );

      if (markets.length === 0) {
        throw new Error(`未找到市场: ${task.market.symbol}`);
      }

      console.log(`搜索到 ${markets.length} 个市场: ${task.market.symbol}`);

      console.log(`market ===>`,markets[0])
      console.log(`indic ===>`,indic)
      console.log(`settings===>`,{
          timeframe: task.timeframe as any,
          range: task.range,
        })

      // 创建图表会话
      const chart = this.tradingViewService.createChartSession(
        markets[0],
        indic,
        {
          timeframe: this.mapTimeframe(task.timeframe),
          range: task.range,
        },
        async (indItem, chartItem) => {
          await this.handleIndicatorUpdate(task, indInfo, indItem, chartItem);
        }
      );

      this.activeCharts.set(task.id, chart);
      console.log(`实时监控已启动: ${task.name}`);
    } catch (error) {
      console.error(`启动实时监控失败: ${task.name}`, error);
      throw error;
    }
  }

  /**
   * 启动定时扫描任务（A股）
   */
  private async startScheduledTask(task: any, indInfo: any, indic: any): Promise<void> {
    const execute = async () => {
      try {
        const startTime = Date.now();

        // 创建执行记录
        const execution = await prisma.taskExecution.create({
          data: {
            taskId: task.id,
            status: 'SUCCESS',
            duration: 0,
            executedAt: new Date(),
          },
        });

        // 搜索市场
        const markets = await this.tradingViewService.searchMarkets(
          task.market.symbol,
          this.getMarketFilter(task.market.type)
        );

        if (markets.length === 0) {
          console.log(`未找到市场: ${task.market.symbol}`);
          return;
        }

        // 读取指标数据
        const result = await this.tradingViewService.readIndicator(markets[0], indic, {
          timeframe: task.timeframe as any,
          range: task.range,
          timeout: 10000,
        });

        if (!result || !result.indItem || !result.item) {
          console.log(`无法读取指标数据: ${task.market.symbol}`);
          return;
        }

        const { indItem, item } = result;

        // 检查信号
        if (indItem.Buy_Alert || indItem.Sell_Alert) {
          await this.handleIndicatorUpdate(task, indInfo, indItem, item);
        }

        // 更新执行记录
        const duration = Date.now() - startTime;
        await prisma.taskExecution.update({
          where: { id: execution.id },
          data: {
            duration,
            status: 'SUCCESS',
          },
        });

        // 更新任务最后执行时间
        await prisma.task.update({
          where: { id: task.id },
          data: { lastExecutedAt: new Date() },
        });
      } catch (error) {
        console.error(`定时扫描执行失败: ${task.name}`, error);
      }
    };

    // 立即执行一次
    await execute();

    // 设置定时执行
    const interval = this.getScheduleInterval(task.schedule);
    const timer = setInterval(execute, interval);

    this.activeCharts.set(task.id, { type: 'scheduled', timer });
    console.log(`定时扫描已启动: ${task.name}`);
  }

  /**
   * 处理指标更新
   */
  private async handleIndicatorUpdate(
    task: any,
    indInfo: any,
    indItem: any,
    chartItem: any
  ): Promise<void> {
    try {
      // 提取信号数据
      const action = indItem.Buy_Alert ? 'Buy' : 'Sell';
      const price = chartItem.close;

      // 创建执行记录
      const execution = await prisma.taskExecution.create({
        data: {
          taskId: task.id,
          status: 'SUCCESS',
          duration: 0,
          executedAt: new Date(),
        },
      });

      // 创建指标结果记录
      await prisma.indicatorResult.create({
        data: {
          executionId: execution.id,
          indicatorId: task.taskIndicators[0].indicatorId,
          indicatorName: indInfo.name,
          outputs: {
            ...indItem,
            chartItem: {
              close: chartItem.close,
              time: chartItem.time,
            },
          },
          buyAlert: indItem.Buy_Alert || false,
          sellAlert: indItem.Sell_Alert || false,
          signal: indItem.Buy_Alert ? 'BUY' : indItem.Sell_Alert ? 'SELL' : 'NEUTRAL',
        },
      });

      console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 交易信号
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
标的: ${task.market.name} (${task.market.code})
操作: ${action === 'Buy' ? '🟢 买入' : '🔴 卖出'}
价格: ${price}
指标: ${indInfo.name}
时间: ${new Date().toLocaleString('zh-CN')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);

      // 发送通知
      if (task.enableNotification) {
        try {
          const notificationService = await this.getNotificationService(task);
          
          if (notificationService) {
            if (task.market.type === MarketType.CRYPTO) {
              await notificationService.sendCryptoSignal({
                market: task.market.name,
                action,
                price,
                indicatorName: indInfo.name,
                timestamp: new Date(),
              });
            } else {
              await notificationService.sendChinaStockSignal({
                market: `${task.market.name} ${task.market.code}`,
                action,
                price,
                indicatorName: indInfo.name,
                timestamp: new Date(),
              });
            }
            
            // 更新 Webhook 使用统计
            const taskWithWebhook = await prisma.task.findUnique({
              where: { id: task.id },
              include: { dingTalkWebhook: true },
            });
            
            if (taskWithWebhook?.dingTalkWebhook) {
              await prisma.dingTalkWebhook.update({
                where: { id: taskWithWebhook.dingTalkWebhook.id },
                data: {
                  messageCount: { increment: 1 },
                  lastUsedAt: new Date(),
                },
              });
            }
          }
        } catch (error) {
          console.error(`发送通知失败: ${task.name}`, error);
        }
      }

      // 记录到 CommonLog
      await prisma.commonLog.create({
        data: {
          action: `SIGNAL_${action.toUpperCase()}`,
          detail: `${task.market.name} - ${action === 'Buy' ? '买入' : '卖出'}信号，价格: ${price}`,
          userId: task.createdBy,
        },
      });
    } catch (error) {
      console.error(`处理指标更新失败: ${task.name}`, error);
    }
  }

  /**
   * 停止任务
   */
  async stopTask(taskId: string): Promise<void> {
    if (!this.runningTasks.has(taskId)) {
      console.log(`任务 ${taskId} 未在运行中`);
      return;
    }

    const chart = this.activeCharts.get(taskId);
    if (chart) {
      if (chart.type === 'scheduled') {
        clearInterval(chart.timer);
      } else {
        chart.delete();
      }
      this.activeCharts.delete(taskId);
    }

    this.runningTasks.delete(taskId);
    console.log(`任务已停止: ${taskId}`);
  }

  /**
   * 停止所有任务
   */
  async stopAll(): Promise<void> {
    const taskIds = Array.from(this.runningTasks);
    for (const taskId of taskIds) {
      await this.stopTask(taskId);
    }
  }

  /**
   * 获取市场过滤器
   */
  private getMarketFilter(
    marketType: MarketType
  ): 'stock' | 'crypto' | 'forex' | 'cfd' | 'futures' | 'index' | 'economic' | undefined {
    const mapping: Record<MarketType, any> = {
      [MarketType.A_STOCK]: 'stock',
      [MarketType.US_STOCK]: 'stock',
      [MarketType.HK_STOCK]: 'stock',
      [MarketType.CRYPTO]: 'crypto',
      [MarketType.FOREX]: 'forex',
      [MarketType.FUTURES]: 'futures',
      [MarketType.INDEX]: 'index',
    };
    return mapping[marketType];
  }

  /**
   * 获取定时执行间隔
   */
  private getScheduleInterval(schedule: any): number {
    // 默认 24 小时
    return 24 * 60 * 60 * 1000;
  }

  /**
   * 关闭服务
   */
  async shutdown(): Promise<void> {
    await this.stopAll();
    await this.tradingViewService.close();
  }
}
