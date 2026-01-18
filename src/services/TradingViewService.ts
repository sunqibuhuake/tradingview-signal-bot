import TradingView, { 
  type SearchMarketResult, 
  type SearchIndicatorResult,
  type Client,
  type ChartSession,
  type TimeFrame,
} from '@mathieuc/tradingview';
import { config } from '../config';
import type { ReadIndicatorResult } from '../types';

/**
 * TradingView Service - handles all TradingView API interactions
 */
export class TradingViewService {
  private client: Client;

  constructor() {
    this.client = new TradingView.Client({
      token: config.tradingView.session,
      signature: config.tradingView.signature,
    });
  }

  /**
   * Get indicator by ID
   */
  async getIndicator(indicatorId?: string): Promise<[SearchIndicatorResult, any]> {
    const id = indicatorId || config.tradingView.indicatorId;
    const indicList = await TradingView.getPrivateIndicators(
      config.tradingView.session,
      config.tradingView.signature
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
  readIndicator(
    market: SearchMarketResult,
    indic: any,
    options: {
      timeframe: TimeFrame;
      range: number;
      timeout?: number;
    }
  ): Promise<ReadIndicatorResult | null> {
    const { timeframe, range, timeout = 10000 } = options;

    return new Promise((resolve) => {
      const chart = new this.client.Session.Chart();
      
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
  createChartSession(
    market: SearchMarketResult,
    indic: any,
    options: {
      timeframe: TimeFrame;
      range: number;
    },
    onUpdate: (indItem: any, chartItem: any) => void
  ): ChartSession {
    const { timeframe, range } = options;
    const chart = new this.client.Session.Chart();

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
    await this.client.end();
  }
}
