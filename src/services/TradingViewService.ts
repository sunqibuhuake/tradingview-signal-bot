import TradingView, { 
  type SearchMarketResult, 
  type SearchIndicatorResult,
  type Client,
  type ChartSession,
  type TimeFrame,
} from '@mathieuc/tradingview';
import { config } from '../config';
import { getTradingViewCredentials } from '@/lib/tradingview-config';
import type { ReadIndicatorResult } from '../types';

/**
 * TradingView Service - handles all TradingView API interactions
 * 支持从数据库或环境变量动态获取配置
 */
export class TradingViewService {
  private client: Client | null = null;
  private credentials: { session: string; signature: string } | null = null;

  constructor() {
    // 构造函数不再立即初始化客户端
  }

  /**
   * 初始化客户端连接（延迟初始化）
   */
  private async ensureClient(): Promise<void> {
    if (this.client && this.credentials) {
      return; // 已初始化
    }

    // 获取配置
    const config = await getTradingViewCredentials();
    
    console.log(`[TradingViewService] 使用配置源: ${config.source}${config.configName ? ` (${config.configName})` : ''}`);

    this.credentials = {
      session: config.session,
      signature: config.signature,
    };

    this.client = new TradingView.Client({
      token: config.session,
      signature: config.signature,
    });
  }

  /**
   * 获取当前凭据（用于直接 API 调用）
   */
  private async getCredentials(): Promise<{ session: string; signature: string }> {
    await this.ensureClient();
    return this.credentials!;
  }

  /**
   * Get indicator by ID
   */
  async getIndicator(indicatorId?: string): Promise<[SearchIndicatorResult, any]> {
    const credentials = await this.getCredentials();
    const id = indicatorId || config.tradingView.indicatorId;
    
    const indicList = await TradingView.getPrivateIndicators(
      credentials.session,
      credentials.signature
    );
    
    const indic = indicList.find(item => item.id === id);
    if (!indic) {
      throw new Error(`Indicator not found: ${id}`);
    }
    
    const privateIndic = await indic.get();
    return [indic, privateIndic];
  }

  /**
   * Search markets by query
   */
  async searchMarkets(
    query: string,
    filter?: 'stock' | 'crypto' | 'forex' | 'cfd' | 'futures' | 'index' | 'economic'
  ): Promise<SearchMarketResult[]> {
    return await TradingView.searchMarketV3(query, filter);
  }
  /**
   * Read indicator data for a market with timeout
   */
  async readIndicator(
    market: SearchMarketResult,
    indic: any,
    options: {
      timeframe: TimeFrame;
      range: number;
      timeout?: number;
    }
  ): Promise<ReadIndicatorResult | null> {
    await this.ensureClient();
    const { timeframe, range, timeout = 10000 } = options;

    return new Promise((resolve) => {
      const chart = new this.client!.Session.Chart();
      
      chart.setMarket(market.id, {
        timeframe,
        range,
      });

      const timer = setTimeout(() => {
        indicator.remove();
        resolve(null);
      }, timeout);

      const indicator = new chart.Study(indic);

      indicator.onReady(() => {
        // Indicator loaded
      });

      indicator.onUpdate(() => {
        const indItem = indicator.periods[0];
        const item = chart.periods[0];
        
        indicator.remove();
        clearTimeout(timer);
        
        resolve({
          indItem,
          item,
        });
      });
    });
  }

  /**
   * Create a chart session for real-time monitoring
   */
  async createChartSession(
    market: SearchMarketResult,
    indic: any,
    options: {
      timeframe: TimeFrame;
      range: number;
    },
    onUpdate: (indItem: any, chartItem: any) => void
  ): Promise<ChartSession> {
    await this.ensureClient();
    const { timeframe, range } = options;
    const chart = new this.client!.Session.Chart();

    chart.setMarket(market.id, {
      timeframe,
      range,
    });

    const indicator = new chart.Study(indic);

    indicator.onReady(() => {
      // Indicator loaded
    });

    indicator.onUpdate(() => {
      const indItem = indicator.periods[0];
      const item = chart.periods[0];
      onUpdate(indItem, item);
    });

    return chart;
  }

  /**
   * Close the client connection
   */
  async close(): Promise<void> {
    if (this.client) {
      await this.client.end();
      this.client = null;
      this.credentials = null;
    }
  }
}
