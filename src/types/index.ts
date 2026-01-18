export interface Stock {
  name: string;
  code: string;
}

export interface IndicatorPeriod {
  $time?: number;
  FAST_EMA?: number;
  SLOW_EMA?: number;
  FAST_EMA1?: number;
  SLOW_EMA1?: number;
  FAST_EMA2?: number;
  SLOW_EMA2?: number;
  FAST_EMA3?: number;
  SLOW_EMA3?: number;
  Show_VWAP?: number;
  Previous_Day_High?: number;
  Previous_Day_Low?: number;
  Sell_Signal?: number;
  Buy_Signal?: number;
  Buy_Alert?: number;
  Sell_Alert?: number;
  fill_0_colorer?: number;
  fill_1_colorer?: number;
  fill_2_colorer?: number;
  fill_3_colorer?: number;
  fill_4_colorer?: number;
  fill_5_colorer?: number;
  fill_6_colorer?: number;
  fill_7_colorer?: number;
  [key: string]: any;
}

export interface ReadIndicatorResult {
  indItem: IndicatorPeriod;
  item: {
    time: number;
    open: number;
    close: number;
    max: number;
    min: number;
    volume: number;
  };
}

export interface SignalRecord {
  action: ActionType;
  time: number;
}

export type SignalRecordMap = Record<string, SignalRecord | ActionType>;

export type ActionType = 'Buy' | 'Sell';

// Re-export types from tradingview
export type { SearchMarketResult, SearchIndicatorResult } from '@mathieuc/tradingview';
