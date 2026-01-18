declare module '@mathieuc/tradingview' {
  import { EventEmitter } from 'events';
  import WebSocket from 'ws';

  // ============= Basic Types =============
  
  export type TimeFrame = '1' | '3' | '5' | '15' | '30' | '45' | '60' | '120' | '180' | '240' | '1D' | '1W' | '1M' | string;
  
  export type Timezone = 'America/New_York' | 'America/Los_Angeles' | 'America/Chicago' | 'America/Phoenix' | 'America/Toronto' | 'America/Vancouver' | 'America/Argentina/Buenos_Aires' | 'America/El_Salvador' | 'America/Sao_Paulo' | 'America/Bogota' | 'America/Caracas' | 'Europe/London' | 'Europe/Paris' | 'Europe/Berlin' | 'Europe/Madrid' | 'Europe/Rome' | 'Europe/Warsaw' | 'Europe/Istanbul' | 'Europe/Moscow' | 'Europe/Athens' | 'Europe/Riga' | 'Asia/Shanghai' | 'Asia/Hong_Kong' | 'Asia/Tokyo' | 'Asia/Seoul' | 'Asia/Singapore' | 'Asia/Bangkok' | 'Asia/Kolkata' | 'Asia/Dubai' | 'Asia/Tel_Aviv' | 'Asia/Qatar' | 'Pacific/Auckland' | 'Pacific/Chatham' | 'Pacific/Fakaofo' | 'Pacific/Honolulu' | 'Australia/Sydney' | 'Australia/Brisbane' | 'Australia/Adelaide' | 'Australia/ACT' | string;

  export type MarketType = 'stock' | 'futures' | 'forex' | 'cfd' | 'crypto' | 'index' | 'economic';

  export type ClientEvent = 'connected' | 'disconnected' | 'logged' | 'ping' | 'data' | 'error' | 'event';

  export type ChartEvent = 'seriesLoaded' | 'symbolLoaded' | 'update' | 'error';

  export type ChartType = 'HeikinAshi' | 'Renko' | 'LineBreak' | 'Kagi' | 'PointAndFigure' | 'Range';

  // ============= Periods & Advice =============
  
  export interface Period {
    Other: number;
    All: number;
    MA: number;
  }

  export interface Periods {
    '1': Period;
    '5': Period;
    '15': Period;
    '60': Period;
    '240': Period;
    '1D': Period;
    '1W': Period;
    '1M': Period;
  }

  // ============= Market Search =============
  
  export interface SearchMarketResult {
    id: string;
    exchange: string;
    fullExchange: string;
    symbol: string;
    description: string;
    type: string;
    getTA: () => Promise<Periods>;
  }

  // ============= Indicator =============
  
  export type IndicatorInputType = 'text' | 'source' | 'integer' | 'float' | 'resolution' | 'bool' | 'color';

  export interface IndicatorInput {
    name: string;
    inline: string;
    internalID?: string;
    tooltip?: string;
    type: IndicatorInputType;
    value: string | number | boolean;
    isHidden: boolean;
    isFake: boolean;
    options?: string[];
  }

  export type IndicatorType = 'Script@tv-scripting-101!' | 'StrategyScript@tv-scripting-101!';

  export type IndicatorAccess = 'open_source' | 'closed_source' | 'invite_only' | 'private' | 'other';

  export interface SearchIndicatorResult {
    id: string;
    version: string;
    name: string;
    author: {
      id: number;
      username: string;
    };
    image: string;
    source: string;
    type: 'study' | 'strategy';
    access: IndicatorAccess;
    get: () => Promise<PineIndicator>;
  }

  export class PineIndicator {
    constructor(options: {
      pineId: string;
      pineVersion: string;
      description: string;
      shortDescription: string;
      inputs: Record<string, IndicatorInput>;
      plots: Record<string, string>;
      script: string;
    });

    get pineId(): string;
    get pineVersion(): string;
    get description(): string;
    get shortDescription(): string;
    get inputs(): Record<string, IndicatorInput>;
    get plots(): Record<string, string>;
    get type(): IndicatorType;
    get script(): string;

    setType(type: IndicatorType): void;
    setOption(key: number | string, value: any): void;
  }

  // ============= Built-in Indicator =============
  
  export type BuiltInIndicatorType = 
    | 'Volume@tv-basicstudies-241'
    | 'VbPFixed@tv-basicstudies-241'
    | 'VbPFixed@tv-basicstudies-241!'
    | 'VbPFixed@tv-volumebyprice-53!'
    | 'VbPSessions@tv-volumebyprice-53'
    | 'VbPSessionsRough@tv-volumebyprice-53!'
    | 'VbPSessionsDetailed@tv-volumebyprice-53!'
    | 'VbPVisible@tv-volumebyprice-53';

  export type BuiltInIndicatorOption = 
    | 'rowsLayout' | 'rows' | 'volume'
    | 'vaVolume' | 'subscribeRealtime'
    | 'first_bar_time' | 'first_visible_bar_time'
    | 'last_bar_time' | 'last_visible_bar_time'
    | 'extendPocRight';

  export class BuiltInIndicator {
    constructor(type: BuiltInIndicatorType);

    get type(): BuiltInIndicatorType;
    get options(): Record<string, any>;

    setOption(key: BuiltInIndicatorOption, value: any, FORCE?: boolean): void;
  }

  // ============= Pine Permission Manager =============
  
  export class PinePermManager {
    constructor(session: string, signature?: string);
  }

  // ============= User =============
  
  export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    reputation: number;
    following: number;
    followers: number;
    notifications: {
      user: number;
      following: number;
    };
    session: string;
    sessionHash: string;
    signature: string;
    privateChannel: string;
    authToken: string;
    joinDate: Date;
  }

  export interface UserCredentials {
    id: number;
    session: string;
    signature?: string;
  }

  // ============= Drawing =============
  
  export interface DrawingPoint {
    time_t: number;
    price: number;
    offset: number;
  }

  export interface Drawing {
    id: string;
    symbol: string;
    ownerSource: string;
    serverUpdateTime: string;
    currencyId: string;
    unitId: any;
    type: string;
    points: DrawingPoint[];
    zorder: number;
    linkKey: string;
    state: any;
  }

  // ============= Chart Period =============
  
  export interface PricePeriod {
    time: number;
    open: number;
    close: number;
    max: number;
    min: number;
    volume: number;
  }

  // ============= Market Info =============
  
  export interface Subsession {
    id: string;
    description: string;
    private: boolean;
    session: string;
    'session-correction': string;
    'session-display': string;
  }

  export interface MarketInfos {
    series_id: string;
    base_currency: string;
    base_currency_id: string;
    name: string;
    full_name: string;
    pro_name: string;
    description: string;
    short_description: string;
    exchange: string;
    listed_exchange: string;
    provider_id: string;
    currency_id: string;
    currency_code: string;
    variable_tick_size: string;
    pricescale: number;
    pointvalue: number;
    session: string;
    session_display: string;
    type: string;
    has_intraday: boolean;
    fractional: boolean;
    is_tradable: boolean;
    minmov: number;
    minmove2: number;
    timezone: string;
    is_replayable: boolean;
    has_adjustment: boolean;
    has_extended_hours: boolean;
    bar_source: string;
    bar_transform: string;
    bar_fillgaps: boolean;
    allowed_adjustment: string;
    subsession_id: string;
    pro_perm: string;
    base_name: any[];
    legs: any[];
    subsessions: Subsession[];
    typespecs: any[];
    resolutions: any[];
    aliases: any[];
    alternatives: any[];
  }

  // ============= Chart Options =============
  
  export interface ChartInputs {
    atrLength?: number;
    source?: 'open' | 'high' | 'low' | 'close' | 'hl2' | 'hlc3' | 'ohlc4';
    style?: 'ATR' | string;
    boxSize?: number;
    reversalAmount?: number;
    sources?: 'Close';
    wicks?: boolean;
    lb?: number;
    oneStepBackBuilding?: boolean;
    phantomBars?: boolean;
    range?: number;
  }

  export interface ChartOptions {
    timeframe?: TimeFrame;
    range?: number;
    to?: number;
    adjustment?: 'splits' | 'dividends';
    backadjustment?: boolean;
    session?: 'regular' | 'extended';
    currency?: string;
    type?: ChartType;
    inputs?: ChartInputs;
    replay?: number;
  }

  // ============= Strategy Report =============
  
  export interface RelAbsValue {
    rel?: number;
    abs?: number;
  }

  export interface TradeReport {
    entry: {
      name: string;
      type: 'long' | 'short';
      value: number;
      time: number;
    };
    exit: {
      name: string;
      value: number;
      time: number;
    };
    quantity: number;
    profit: RelAbsValue;
    cumulative: RelAbsValue;
    runup: RelAbsValue;
    drawdown: RelAbsValue;
  }

  export interface PerfReport {
    avgBarsInTrade: number;
    avgBarsInWinTrade: number;
    avgBarsInLossTrade: number;
    avgTrade: number;
    avgTradePercent: number;
    avgLosTrade: number;
    avgLosTradePercent: number;
    avgWinTrade: number;
    avgWinTradePercent: number;
    commissionPaid: number;
    grossLoss: number;
    grossLossPercent: number;
    grossProfit: number;
    grossProfitPercent: number;
    largestLosTrade: number;
    largestLosTradePercent: number;
    largestWinTrade: number;
    largestWinTradePercent: number;
    marginCalls: number;
    maxContractsHeld: number;
    netProfit: number;
    netProfitPercent: number;
    numberOfLosingTrades: number;
    numberOfWiningTrades: number;
    percentProfitable: number;
    profitFactor: number;
    ratioAvgWinAvgLoss: number;
    totalOpenTrades: number;
    totalTrades: number;
  }

  export interface FromTo {
    from: number;
    to: number;
  }

  export interface StrategyReport {
    currency?: string;
    settings?: {
      dateRange?: {
        backtest: FromTo;
        trade: FromTo;
      };
    };
    trades: TradeReport[];
    history: {
      buyHold?: number[];
      buyHoldPercent?: number[];
      drawDown?: number[];
      drawDownPercent?: number[];
      equity?: number[];
      equityPercent?: number[];
    };
    performance: {
      all?: PerfReport;
      long?: PerfReport;
      short?: PerfReport;
      buyHoldReturn?: number;
      buyHoldReturnPercent?: number;
      maxDrawDown?: number;
      maxDrawDownPercent?: number;
      openPL?: number;
      openPLPercent?: number;
      sharpeRatio?: number;
      sortinoRatio?: number;
    };
  }

  export type UpdateChangeType = 
    | 'plots' 
    | 'report.currency'
    | 'report.settings' 
    | 'report.perf'
    | 'report.trades' 
    | 'report.history'
    | 'graphic';

  // ============= Chart Study =============
  
  export class ChartStudy {
    constructor(indicator: PineIndicator | BuiltInIndicator);

    instance: PineIndicator | BuiltInIndicator;
    
    get periods(): Record<string, any>[];
    get graphic(): any;
    get strategyReport(): StrategyReport;

    setIndicator(indicator: PineIndicator | BuiltInIndicator): void;
    onReady(cb: () => void): void;
    onUpdate(cb: (changes: UpdateChangeType[]) => void): void;
    onError(cb: (...args: any[]) => void): void;
    remove(): void;
  }

  // ============= Chart Session =============
  
  export class ChartSession {
    constructor();

    get periods(): PricePeriod[];
    get infos(): MarketInfos;

    Study: typeof ChartStudy;

    setSeries(timeframe?: TimeFrame, range?: number, reference?: number | null): void;
    setMarket(symbol: string, options?: ChartOptions): void;
    setTimezone(timezone: Timezone): void;
    fetchMore(number?: number): void;
    replayStep(number?: number): Promise<void>;
    replayStart(interval?: number): Promise<void>;
    replayStop(): Promise<void>;

    onSymbolLoaded(cb: () => void): void;
    onUpdate(cb: (changes: ('$prices' | string)[]) => void): void;
    onReplayLoaded(cb: () => void): void;
    onReplayResolution(cb: (timeframe: TimeFrame, index: number) => void): void;
    onReplayEnd(cb: () => void): void;
    onReplayPoint(cb: (index: number) => void): void;
    onError(cb: (...args: any[]) => void): void;

    delete(): void;
  }

  // ============= Quote Session =============
  
  export class QuoteSession {
    constructor();
    // Add methods as needed
  }

  // ============= Socket Session =============
  
  export interface SocketSession {
    session_id: string;
    timestamp: number;
    timestampMs: number;
    release: string;
    studies_metadata_hash: string;
    protocol: 'json' | string;
    javastudies: string;
    auth_scheme_vsn: number;
    via: string;
  }

  // ============= Client =============
  
  export interface ClientOptions {
    token?: string;
    signature?: string;
    DEBUG?: boolean;
    server?: 'data' | 'prodata' | 'widgetdata';
    location?: string;
  }

  export class Client {
    constructor(options?: ClientOptions);

    get isLogged(): boolean;
    get isOpen(): boolean;

    Session: {
      Quote: typeof QuoteSession;
      Chart: typeof ChartSession;
    };

    send(type: string, params?: any[]): void;
    sendQueue(): void;
    end(): Promise<void>;

    onConnected(cb: () => void): void;
    onDisconnected(cb: () => void): void;
    onLogged(cb: (session: SocketSession) => void): void;
    onPing(cb: (i: number) => void): void;
    onData(cb: (...args: any[]) => void): void;
    onError(cb: (...args: any[]) => void): void;
    onEvent(cb: (...args: any[]) => void): void;
  }

  // ============= Misc Requests =============
  
  export function getTA(id: string): Promise<Periods>;

  export function searchMarket(
    search: string,
    filter?: MarketType
  ): Promise<SearchMarketResult[]>;

  export function searchMarketV3(
    search: string,
    filter?: MarketType,
    offset?: number
  ): Promise<SearchMarketResult[]>;

  export function searchIndicator(
    search?: string
  ): Promise<SearchIndicatorResult[]>;

  export function getIndicator(
    id: string,
    version?: 'last' | string,
    session?: string,
    signature?: string
  ): Promise<PineIndicator>;

  export function loginUser(
    username: string,
    password: string,
    remember?: boolean,
    UA?: string
  ): Promise<User>;

  export function getUser(
    session: string,
    signature?: string,
    location?: string
  ): Promise<User>;

  export function getPrivateIndicators(
    session: string,
    signature?: string
  ): Promise<SearchIndicatorResult[]>;

  export function getChartToken(
    layout: string,
    credentials?: UserCredentials
  ): Promise<string>;

  export function getDrawings(
    layout: string,
    symbol?: string,
    credentials?: UserCredentials,
    chartID?: string
  ): Promise<Drawing[]>;

  // ============= Default Export =============
  
  const TradingView: {
    Client: typeof Client;
    BuiltInIndicator: typeof BuiltInIndicator;
    PineIndicator: typeof PineIndicator;
    PinePermManager: typeof PinePermManager;
    getTA: typeof getTA;
    searchMarket: typeof searchMarket;
    searchMarketV3: typeof searchMarketV3;
    searchIndicator: typeof searchIndicator;
    getIndicator: typeof getIndicator;
    loginUser: typeof loginUser;
    getUser: typeof getUser;
    getPrivateIndicators: typeof getPrivateIndicators;
    getChartToken: typeof getChartToken;
    getDrawings: typeof getDrawings;
  };

  export default TradingView;
}
