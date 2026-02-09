import { Task, TaskStatus } from '../../generated/prisma';
import prisma from '@/lib/prisma';

/**
 * 托管的 Chart Session
 * 提供健康检查、自动重连、错误处理等功能
 */
export class ManagedChartSession {
  private chart: any;
  private clientIndex: number = 0;
  private lastUpdateTime: number = Date.now();
  private healthCheckInterval: NodeJS.Timeout | null = null;
  private reconnectAttempts: number = 0;
  private readonly maxReconnectAttempts: number = 5;
  private readonly healthCheckIntervalMs: number = 60 * 1000;  // 1分钟
  private readonly noUpdateThreshold: number = 5 * 60 * 1000;  // 5分钟无更新则重连
  private isDestroyed: boolean = false;
  
  constructor(
    private task: Task,
    private createChartFn: () => { chart: any; clientIndex: number },
    private onUpdateCallback: (indItem: any, chartItem: any) => Promise<void>,
    private onReconnect?: () => void
  ) {
    this.initialize();
  }
  
  /**
   * 初始化 Chart Session
   */
  private initialize(): void {
    try {
      const result = this.createChartFn();
      this.chart = result.chart;
      this.clientIndex = result.clientIndex;
      this.lastUpdateTime = Date.now();
      
      console.log(`✅ Chart Session 初始化成功: ${this.task.name}`);
      
      // 启动健康检查
      this.startHealthCheck();
    } catch (error) {
      console.error(`❌ Chart Session 初始化失败: ${this.task.name}`, error);
      this.handleInitError(error);
    }
  }
  
  /**
   * 包装的更新回调（添加错误处理和时间记录）
   */
  async handleUpdate(indItem: any, chartItem: any): Promise<void> {
    if (this.isDestroyed) {
      return;
    }
    
    try {
      // 更新最后更新时间
      this.lastUpdateTime = Date.now();
      
      // 重置重连计数
      this.reconnectAttempts = 0;
      
      // 调用用户回调
      await this.onUpdateCallback(indItem, chartItem);
    } catch (error) {
      console.error(`❌ 任务 ${this.task.name} 处理指标更新失败:`, error);
      await this.logError('UPDATE_ERROR', error);
    }
  }
  
  /**
   * 启动健康检查
   */
  private startHealthCheck(): void {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }
    
    this.healthCheckInterval = setInterval(() => {
      if (this.isDestroyed) {
        this.stopHealthCheck();
        return;
      }
      
      const timeSinceLastUpdate = Date.now() - this.lastUpdateTime;
      
      // 如果超过阈值没有更新，尝试重连
      if (timeSinceLastUpdate > this.noUpdateThreshold) {
        console.warn(
          `⚠️  任务 ${this.task.name} 已 ${Math.floor(timeSinceLastUpdate / 1000)}秒 无更新，尝试重连...`
        );
        this.reconnect();
      }
    }, this.healthCheckIntervalMs);
  }
  
  /**
   * 停止健康检查
   */
  private stopHealthCheck(): void {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
  }
  
  /**
   * 重连逻辑（指数退避）
   */
  private async reconnect(): Promise<void> {
    if (this.isDestroyed) {
      return;
    }
    
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error(
        `❌ 任务 ${this.task.name} 重连失败超过 ${this.maxReconnectAttempts} 次，标记为错误状态`
      );
      
      await this.markTaskAsError('连接断开，自动重连失败');
      this.destroy();
      return;
    }
    
    try {
      this.reconnectAttempts++;
      
      console.log(`🔄 任务 ${this.task.name} 第 ${this.reconnectAttempts} 次重连尝试...`);
      
      // 关闭旧连接
      if (this.chart && this.chart.delete) {
        try {
          this.chart.delete();
        } catch (error) {
          console.warn('关闭旧 Chart 失败:', error);
        }
      }
      
      // 指数退避延迟
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // 重新创建连接
      const result = this.createChartFn();
      this.chart = result.chart;
      this.clientIndex = result.clientIndex;
      this.lastUpdateTime = Date.now();
      
      console.log(`✅ 任务 ${this.task.name} 重连成功`);
      
      // 通知重连成功
      if (this.onReconnect) {
        this.onReconnect();
      }
      
      await this.logError('RECONNECT_SUCCESS', null);
    } catch (error) {
      console.error(`❌ 任务 ${this.task.name} 重连失败:`, error);
      await this.logError('RECONNECT_FAILED', error);
      
      // 继续尝试重连（递归）
      setTimeout(() => this.reconnect(), 5000);
    }
  }
  
  /**
   * 初始化错误处理
   */
  private async handleInitError(error: any): Promise<void> {
    await this.markTaskAsError(`初始化失败: ${error.message}`);
    await this.logError('INIT_ERROR', error);
  }
  
  /**
   * 标记任务为错误状态
   */
  private async markTaskAsError(errorMessage: string): Promise<void> {
    try {
      await prisma.task.update({
        where: { id: this.task.id },
        data: {
          status: TaskStatus.ERROR,
          errorMessage: errorMessage
        }
      });
    } catch (error) {
      console.error('更新任务状态失败:', error);
    }
  }
  
  /**
   * 记录错误日志
   */
  private async logError(action: string, error: any): Promise<void> {
    try {
      await prisma.commonLog.create({
        data: {
          action: `CHART_${action}`,
          detail: `任务 ${this.task.name}: ${error ? error.message : '成功'}`,
          userId: this.task.createdBy || undefined
        }
      });
    } catch (err) {
      console.error('记录日志失败:', err);
    }
  }
  
  /**
   * 获取会话统计信息
   */
  getStats(): {
    taskId: string;
    taskName: string;
    lastUpdateTime: Date;
    timeSinceLastUpdate: number;
    reconnectAttempts: number;
    isHealthy: boolean;
  } {
    const timeSinceLastUpdate = Date.now() - this.lastUpdateTime;
    const isHealthy = timeSinceLastUpdate < this.noUpdateThreshold;
    
    return {
      taskId: this.task.id,
      taskName: this.task.name,
      lastUpdateTime: new Date(this.lastUpdateTime),
      timeSinceLastUpdate,
      reconnectAttempts: this.reconnectAttempts,
      isHealthy
    };
  }
  
  /**
   * 获取 Chart 对象（用于外部操作）
   */
  getChart(): any {
    return this.chart;
  }
  
  /**
   * 获取客户端索引（用于连接池管理）
   */
  getClientIndex(): number {
    return this.clientIndex;
  }
  
  /**
   * 销毁会话
   */
  destroy(): void {
    if (this.isDestroyed) {
      return;
    }
    
    this.isDestroyed = true;
    
    // 停止健康检查
    this.stopHealthCheck();
    
    // 关闭 Chart
    if (this.chart && this.chart.delete) {
      try {
        this.chart.delete();
        console.log(`✅ Chart Session 已销毁: ${this.task.name}`);
      } catch (error) {
        console.error(`❌ Chart Session 销毁失败: ${this.task.name}`, error);
      }
    }
  }
}
