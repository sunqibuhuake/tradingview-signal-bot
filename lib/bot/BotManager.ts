import { TaskExecutor } from './TaskExecutor';
import prisma from '@/lib/prisma';
import { TaskStatus } from '../../generated/prisma';

/**
 * Bot Manager - 全局机器人管理器
 * 单例模式，管理所有任务的生命周期
 */
class BotManager {
  private static instance: BotManager;
  private executor: TaskExecutor | null = null;
  private isRunning: boolean = false;

  private constructor() {}

  static getInstance(): BotManager {
    if (!BotManager.instance) {
      BotManager.instance = new BotManager();
    }
    return BotManager.instance;
  }

  /**
   * 启动 Bot 服务
   */
  async start(): Promise<void> {
    if (this.isRunning) {
      console.log('Bot 服务已在运行中');
      return;
    }

    console.log('🤖 启动 Bot 服务...');

    try {
      // 创建 TaskExecutor，使用 5 分钟的去重窗口期
      // 这个配置对加密货币实时监控很重要，可以避免频繁触发重复信号
      this.executor = new TaskExecutor(5 * 60 * 1000);

      // 加载所有 ACTIVE 状态的任务
      const activeTasks = await prisma.task.findMany({
        where: {
          status: TaskStatus.ACTIVE,
        },
        include: {
          market: true,
          taskIndicators: {
            include: {
              indicator: true,
            },
          },
        },
      });

      console.log(`找到 ${activeTasks.length} 个活跃任务`);

      // 启动所有任务
      for (const task of activeTasks) {
        try {
          await this.executor.startTask(task.id);
          console.log(`✅ 任务已启动: ${task.name}`);
        } catch (error) {
          console.error(`❌ 启动任务失败: ${task.name}`, error);
          
          // 更新任务状态为 ERROR
          await prisma.task.update({
            where: { id: task.id },
            data: { status: TaskStatus.ERROR },
          });
        }
      }

      this.isRunning = true;
      console.log('✅ Bot 服务启动成功');
    } catch (error) {
      console.error('❌ Bot 服务启动失败:', error);
      throw error;
    }
  }

  /**
   * 停止 Bot 服务
   */
  async stop(): Promise<void> {
    if (!this.isRunning) {
      console.log('Bot 服务未在运行中');
      return;
    }

    console.log('🛑 正在停止 Bot 服务...');

    try {
      if (this.executor) {
        await this.executor.shutdown();
        this.executor = null;
      }

      this.isRunning = false;
      console.log('✅ Bot 服务已停止');
    } catch (error) {
      console.error('❌ 停止 Bot 服务失败:', error);
      throw error;
    }
  }

  /**
   * 强制重启 Bot 服务（忽略当前状态）
   */
  async forceRestart(): Promise<void> {
    console.log('🔄 执行强制重启...');

    try {
      // 强制停止 - 即使出错也继续
      if (this.executor) {
        try {
          await this.executor.shutdown();
        } catch (error) {
          console.warn('停止过程中出现错误，但继续执行:', error);
        }
        this.executor = null;
      }

      // 强制重置状态
      this.isRunning = false;

      // 等待资源释放
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 重新启动
      await this.start();

      console.log('✅ 强制重启完成');
    } catch (error) {
      console.error('❌ 强制重启失败:', error);
      // 确保状态正确
      this.isRunning = false;
      this.executor = null;
      throw error;
    }
  }

  /**
   * 重启 Bot 服务
   */
  async restart(): Promise<void> {
    await this.stop();
    await this.start();
  }

  /**
   * 启动单个任务
   */
  async startTask(taskId: string): Promise<void> {
    if (!this.executor) {
      throw new Error('Bot 服务未启动');
    }

    await this.executor.startTask(taskId);
  }

  /**
   * 停止单个任务
   */
  async stopTask(taskId: string): Promise<void> {
    if (!this.executor) {
      throw new Error('Bot 服务未启动');
    }

    await this.executor.stopTask(taskId);
  }

  /**
   * 获取运行状态
   */
  getStatus(): { isRunning: boolean } {
    return {
      isRunning: this.isRunning,
    };
  }
}

export const botManager = BotManager.getInstance();
