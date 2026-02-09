import TradingView, { type Client } from '@mathieuc/tradingview';
import { config } from '../../src/config';

/**
 * TradingView 连接池管理器
 * 解决单 Client 连接数限制问题（~50个）
 * 通过多 Client 实例支持 400+ 并发任务
 */
export class TradingViewConnectionPool {
  private clients: Client[] = [];
  private chartCounts: Map<number, number> = new Map();
  private maxChartsPerClient: number = 40;  // 每个 Client 最多 40 个 Chart（保守值）
  
  constructor(
    private credentials: {
      session: string;
      signature: string;
    }
  ) {
    // 初始化第一个客户端
    this.addClient();
  }
  
  /**
   * 添加新的客户端实例
   */
  private addClient(): void {
    try {
      const client = new TradingView.Client({
        token: this.credentials.session,
        signature: this.credentials.signature,
      });
      
      const index = this.clients.length;
      this.clients.push(client);
      this.chartCounts.set(index, 0);
      
      console.log(`✅ TradingView Client #${index} 创建成功`);
    } catch (error) {
      console.error('❌ 创建 TradingView Client 失败:', error);
      throw error;
    }
  }
  
  /**
   * 获取可用的客户端（自动负载均衡）
   * @returns 负载最低的客户端实例
   */
  getClient(): { client: Client; index: number } {
    // 查找负载最低的 Client
    let minCount = Infinity;
    let selectedIndex = 0;
    
    for (const [index, count] of this.chartCounts) {
      if (count < this.maxChartsPerClient && count < minCount) {
        minCount = count;
        selectedIndex = index;
      }
    }
    
    // 如果所有 Client 都满了，创建新的
    if (minCount >= this.maxChartsPerClient) {
      this.addClient();
      selectedIndex = this.clients.length - 1;
      minCount = 0;
    }
    
    // 增加计数
    this.chartCounts.set(selectedIndex, minCount + 1);
    
    return {
      client: this.clients[selectedIndex],
      index: selectedIndex
    };
  }
  
  /**
   * 释放客户端（Chart 关闭时调用）
   * @param index 客户端索引
   */
  releaseClient(index: number): void {
    const count = this.chartCounts.get(index) || 0;
    this.chartCounts.set(index, Math.max(0, count - 1));
  }
  
  /**
   * 获取连接池统计信息
   */
  getStats(): {
    totalClients: number;
    totalCharts: number;
    clientStats: Array<{ index: number; chartCount: number }>;
  } {
    let totalCharts = 0;
    const clientStats = [];
    
    for (const [index, count] of this.chartCounts) {
      totalCharts += count;
      clientStats.push({ index, chartCount: count });
    }
    
    return {
      totalClients: this.clients.length,
      totalCharts,
      clientStats: clientStats.sort((a, b) => b.chartCount - a.chartCount)
    };
  }
  
  /**
   * 关闭所有客户端连接
   */
  async closeAll(): Promise<void> {
    console.log(`🛑 正在关闭 ${this.clients.length} 个 TradingView Client...`);
    
    for (let i = 0; i < this.clients.length; i++) {
      try {
        await this.clients[i].end();
        console.log(`✅ Client #${i} 已关闭`);
      } catch (error) {
        console.error(`❌ Client #${i} 关闭失败:`, error);
      }
    }
    
    this.clients = [];
    this.chartCounts.clear();
    console.log('✅ 所有 TradingView Client 已关闭');
  }
}
