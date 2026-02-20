
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TaskExecution
 * 
 */
export type TaskExecution = $Result.DefaultSelection<Prisma.$TaskExecutionPayload>
/**
 * Model IndicatorResult
 * 
 */
export type IndicatorResult = $Result.DefaultSelection<Prisma.$IndicatorResultPayload>
/**
 * Model SignalStatistics
 * 
 */
export type SignalStatistics = $Result.DefaultSelection<Prisma.$SignalStatisticsPayload>
/**
 * Model Indicator
 * 
 */
export type Indicator = $Result.DefaultSelection<Prisma.$IndicatorPayload>
/**
 * Model UserLoginIp
 * 
 */
export type UserLoginIp = $Result.DefaultSelection<Prisma.$UserLoginIpPayload>
/**
 * Model CommonLog
 * 
 */
export type CommonLog = $Result.DefaultSelection<Prisma.$CommonLogPayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskIndicator
 * 
 */
export type TaskIndicator = $Result.DefaultSelection<Prisma.$TaskIndicatorPayload>
/**
 * Model TradingViewConfig
 * 
 */
export type TradingViewConfig = $Result.DefaultSelection<Prisma.$TradingViewConfigPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model DingTalkWebhook
 * 
 */
export type DingTalkWebhook = $Result.DefaultSelection<Prisma.$DingTalkWebhookPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ExecutionStatus: {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  TIMEOUT: 'TIMEOUT',
  PARTIAL: 'PARTIAL'
};

export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus]


export const SignalType: {
  BUY: 'BUY',
  SELL: 'SELL',
  NEUTRAL: 'NEUTRAL'
};

export type SignalType = (typeof SignalType)[keyof typeof SignalType]


export const MarketType: {
  A_STOCK: 'A_STOCK',
  CRYPTO: 'CRYPTO',
  US_STOCK: 'US_STOCK',
  HK_STOCK: 'HK_STOCK',
  FOREX: 'FOREX',
  FUTURES: 'FUTURES',
  INDEX: 'INDEX'
};

export type MarketType = (typeof MarketType)[keyof typeof MarketType]


export const CryptoType: {
  SPOT: 'SPOT',
  PERPETUAL: 'PERPETUAL',
  FUTURES: 'FUTURES'
};

export type CryptoType = (typeof CryptoType)[keyof typeof CryptoType]


export const TaskStatus: {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  STOPPED: 'STOPPED',
  ERROR: 'ERROR'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const ExecutionMode: {
  REALTIME: 'REALTIME',
  SCHEDULED: 'SCHEDULED'
};

export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode]


export const Timeframe: {
  M1: 'M1',
  M3: 'M3',
  M5: 'M5',
  M15: 'M15',
  M30: 'M30',
  M45: 'M45',
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  D1: 'D1',
  W1: 'W1',
  MN1: 'MN1'
};

export type Timeframe = (typeof Timeframe)[keyof typeof Timeframe]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type ExecutionStatus = $Enums.ExecutionStatus

export const ExecutionStatus: typeof $Enums.ExecutionStatus

export type SignalType = $Enums.SignalType

export const SignalType: typeof $Enums.SignalType

export type MarketType = $Enums.MarketType

export const MarketType: typeof $Enums.MarketType

export type CryptoType = $Enums.CryptoType

export const CryptoType: typeof $Enums.CryptoType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type ExecutionMode = $Enums.ExecutionMode

export const ExecutionMode: typeof $Enums.ExecutionMode

export type Timeframe = $Enums.Timeframe

export const Timeframe: typeof $Enums.Timeframe

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TaskExecutions
 * const taskExecutions = await prisma.taskExecution.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TaskExecutions
   * const taskExecutions = await prisma.taskExecution.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.taskExecution`: Exposes CRUD operations for the **TaskExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskExecutions
    * const taskExecutions = await prisma.taskExecution.findMany()
    * ```
    */
  get taskExecution(): Prisma.TaskExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indicatorResult`: Exposes CRUD operations for the **IndicatorResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndicatorResults
    * const indicatorResults = await prisma.indicatorResult.findMany()
    * ```
    */
  get indicatorResult(): Prisma.IndicatorResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signalStatistics`: Exposes CRUD operations for the **SignalStatistics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SignalStatistics
    * const signalStatistics = await prisma.signalStatistics.findMany()
    * ```
    */
  get signalStatistics(): Prisma.SignalStatisticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indicator`: Exposes CRUD operations for the **Indicator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indicators
    * const indicators = await prisma.indicator.findMany()
    * ```
    */
  get indicator(): Prisma.IndicatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLoginIp`: Exposes CRUD operations for the **UserLoginIp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLoginIps
    * const userLoginIps = await prisma.userLoginIp.findMany()
    * ```
    */
  get userLoginIp(): Prisma.UserLoginIpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commonLog`: Exposes CRUD operations for the **CommonLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommonLogs
    * const commonLogs = await prisma.commonLog.findMany()
    * ```
    */
  get commonLog(): Prisma.CommonLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskIndicator`: Exposes CRUD operations for the **TaskIndicator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskIndicators
    * const taskIndicators = await prisma.taskIndicator.findMany()
    * ```
    */
  get taskIndicator(): Prisma.TaskIndicatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradingViewConfig`: Exposes CRUD operations for the **TradingViewConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradingViewConfigs
    * const tradingViewConfigs = await prisma.tradingViewConfig.findMany()
    * ```
    */
  get tradingViewConfig(): Prisma.TradingViewConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dingTalkWebhook`: Exposes CRUD operations for the **DingTalkWebhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DingTalkWebhooks
    * const dingTalkWebhooks = await prisma.dingTalkWebhook.findMany()
    * ```
    */
  get dingTalkWebhook(): Prisma.DingTalkWebhookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TaskExecution: 'TaskExecution',
    IndicatorResult: 'IndicatorResult',
    SignalStatistics: 'SignalStatistics',
    Indicator: 'Indicator',
    UserLoginIp: 'UserLoginIp',
    CommonLog: 'CommonLog',
    Market: 'Market',
    Task: 'Task',
    TaskIndicator: 'TaskIndicator',
    TradingViewConfig: 'TradingViewConfig',
    User: 'User',
    Session: 'Session',
    DingTalkWebhook: 'DingTalkWebhook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "taskExecution" | "indicatorResult" | "signalStatistics" | "indicator" | "userLoginIp" | "commonLog" | "market" | "task" | "taskIndicator" | "tradingViewConfig" | "user" | "session" | "dingTalkWebhook"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TaskExecution: {
        payload: Prisma.$TaskExecutionPayload<ExtArgs>
        fields: Prisma.TaskExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          findFirst: {
            args: Prisma.TaskExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          findMany: {
            args: Prisma.TaskExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>[]
          }
          create: {
            args: Prisma.TaskExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          createMany: {
            args: Prisma.TaskExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>[]
          }
          delete: {
            args: Prisma.TaskExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          update: {
            args: Prisma.TaskExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          deleteMany: {
            args: Prisma.TaskExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>[]
          }
          upsert: {
            args: Prisma.TaskExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          aggregate: {
            args: Prisma.TaskExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskExecution>
          }
          groupBy: {
            args: Prisma.TaskExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskExecutionCountAggregateOutputType> | number
          }
        }
      }
      IndicatorResult: {
        payload: Prisma.$IndicatorResultPayload<ExtArgs>
        fields: Prisma.IndicatorResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndicatorResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndicatorResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>
          }
          findFirst: {
            args: Prisma.IndicatorResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndicatorResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>
          }
          findMany: {
            args: Prisma.IndicatorResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>[]
          }
          create: {
            args: Prisma.IndicatorResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>
          }
          createMany: {
            args: Prisma.IndicatorResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndicatorResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>[]
          }
          delete: {
            args: Prisma.IndicatorResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>
          }
          update: {
            args: Prisma.IndicatorResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>
          }
          deleteMany: {
            args: Prisma.IndicatorResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndicatorResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndicatorResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>[]
          }
          upsert: {
            args: Prisma.IndicatorResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorResultPayload>
          }
          aggregate: {
            args: Prisma.IndicatorResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndicatorResult>
          }
          groupBy: {
            args: Prisma.IndicatorResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndicatorResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndicatorResultCountArgs<ExtArgs>
            result: $Utils.Optional<IndicatorResultCountAggregateOutputType> | number
          }
        }
      }
      SignalStatistics: {
        payload: Prisma.$SignalStatisticsPayload<ExtArgs>
        fields: Prisma.SignalStatisticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalStatisticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalStatisticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>
          }
          findFirst: {
            args: Prisma.SignalStatisticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalStatisticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>
          }
          findMany: {
            args: Prisma.SignalStatisticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>[]
          }
          create: {
            args: Prisma.SignalStatisticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>
          }
          createMany: {
            args: Prisma.SignalStatisticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalStatisticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>[]
          }
          delete: {
            args: Prisma.SignalStatisticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>
          }
          update: {
            args: Prisma.SignalStatisticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>
          }
          deleteMany: {
            args: Prisma.SignalStatisticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalStatisticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalStatisticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>[]
          }
          upsert: {
            args: Prisma.SignalStatisticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalStatisticsPayload>
          }
          aggregate: {
            args: Prisma.SignalStatisticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignalStatistics>
          }
          groupBy: {
            args: Prisma.SignalStatisticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalStatisticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalStatisticsCountArgs<ExtArgs>
            result: $Utils.Optional<SignalStatisticsCountAggregateOutputType> | number
          }
        }
      }
      Indicator: {
        payload: Prisma.$IndicatorPayload<ExtArgs>
        fields: Prisma.IndicatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndicatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndicatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          findFirst: {
            args: Prisma.IndicatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndicatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          findMany: {
            args: Prisma.IndicatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>[]
          }
          create: {
            args: Prisma.IndicatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          createMany: {
            args: Prisma.IndicatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndicatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>[]
          }
          delete: {
            args: Prisma.IndicatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          update: {
            args: Prisma.IndicatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          deleteMany: {
            args: Prisma.IndicatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndicatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndicatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>[]
          }
          upsert: {
            args: Prisma.IndicatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          aggregate: {
            args: Prisma.IndicatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndicator>
          }
          groupBy: {
            args: Prisma.IndicatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndicatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndicatorCountArgs<ExtArgs>
            result: $Utils.Optional<IndicatorCountAggregateOutputType> | number
          }
        }
      }
      UserLoginIp: {
        payload: Prisma.$UserLoginIpPayload<ExtArgs>
        fields: Prisma.UserLoginIpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLoginIpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLoginIpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>
          }
          findFirst: {
            args: Prisma.UserLoginIpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLoginIpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>
          }
          findMany: {
            args: Prisma.UserLoginIpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>[]
          }
          create: {
            args: Prisma.UserLoginIpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>
          }
          createMany: {
            args: Prisma.UserLoginIpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLoginIpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>[]
          }
          delete: {
            args: Prisma.UserLoginIpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>
          }
          update: {
            args: Prisma.UserLoginIpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>
          }
          deleteMany: {
            args: Prisma.UserLoginIpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLoginIpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLoginIpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>[]
          }
          upsert: {
            args: Prisma.UserLoginIpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginIpPayload>
          }
          aggregate: {
            args: Prisma.UserLoginIpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLoginIp>
          }
          groupBy: {
            args: Prisma.UserLoginIpGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLoginIpGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLoginIpCountArgs<ExtArgs>
            result: $Utils.Optional<UserLoginIpCountAggregateOutputType> | number
          }
        }
      }
      CommonLog: {
        payload: Prisma.$CommonLogPayload<ExtArgs>
        fields: Prisma.CommonLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommonLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommonLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>
          }
          findFirst: {
            args: Prisma.CommonLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommonLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>
          }
          findMany: {
            args: Prisma.CommonLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>[]
          }
          create: {
            args: Prisma.CommonLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>
          }
          createMany: {
            args: Prisma.CommonLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommonLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>[]
          }
          delete: {
            args: Prisma.CommonLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>
          }
          update: {
            args: Prisma.CommonLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>
          }
          deleteMany: {
            args: Prisma.CommonLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommonLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommonLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>[]
          }
          upsert: {
            args: Prisma.CommonLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommonLogPayload>
          }
          aggregate: {
            args: Prisma.CommonLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommonLog>
          }
          groupBy: {
            args: Prisma.CommonLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommonLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommonLogCountArgs<ExtArgs>
            result: $Utils.Optional<CommonLogCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskIndicator: {
        payload: Prisma.$TaskIndicatorPayload<ExtArgs>
        fields: Prisma.TaskIndicatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskIndicatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskIndicatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>
          }
          findFirst: {
            args: Prisma.TaskIndicatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskIndicatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>
          }
          findMany: {
            args: Prisma.TaskIndicatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>[]
          }
          create: {
            args: Prisma.TaskIndicatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>
          }
          createMany: {
            args: Prisma.TaskIndicatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskIndicatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>[]
          }
          delete: {
            args: Prisma.TaskIndicatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>
          }
          update: {
            args: Prisma.TaskIndicatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>
          }
          deleteMany: {
            args: Prisma.TaskIndicatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskIndicatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskIndicatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>[]
          }
          upsert: {
            args: Prisma.TaskIndicatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskIndicatorPayload>
          }
          aggregate: {
            args: Prisma.TaskIndicatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskIndicator>
          }
          groupBy: {
            args: Prisma.TaskIndicatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskIndicatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskIndicatorCountArgs<ExtArgs>
            result: $Utils.Optional<TaskIndicatorCountAggregateOutputType> | number
          }
        }
      }
      TradingViewConfig: {
        payload: Prisma.$TradingViewConfigPayload<ExtArgs>
        fields: Prisma.TradingViewConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradingViewConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradingViewConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>
          }
          findFirst: {
            args: Prisma.TradingViewConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradingViewConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>
          }
          findMany: {
            args: Prisma.TradingViewConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>[]
          }
          create: {
            args: Prisma.TradingViewConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>
          }
          createMany: {
            args: Prisma.TradingViewConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradingViewConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>[]
          }
          delete: {
            args: Prisma.TradingViewConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>
          }
          update: {
            args: Prisma.TradingViewConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>
          }
          deleteMany: {
            args: Prisma.TradingViewConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradingViewConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradingViewConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>[]
          }
          upsert: {
            args: Prisma.TradingViewConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingViewConfigPayload>
          }
          aggregate: {
            args: Prisma.TradingViewConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradingViewConfig>
          }
          groupBy: {
            args: Prisma.TradingViewConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradingViewConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradingViewConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TradingViewConfigCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      DingTalkWebhook: {
        payload: Prisma.$DingTalkWebhookPayload<ExtArgs>
        fields: Prisma.DingTalkWebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DingTalkWebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DingTalkWebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>
          }
          findFirst: {
            args: Prisma.DingTalkWebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DingTalkWebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>
          }
          findMany: {
            args: Prisma.DingTalkWebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>[]
          }
          create: {
            args: Prisma.DingTalkWebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>
          }
          createMany: {
            args: Prisma.DingTalkWebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DingTalkWebhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>[]
          }
          delete: {
            args: Prisma.DingTalkWebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>
          }
          update: {
            args: Prisma.DingTalkWebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>
          }
          deleteMany: {
            args: Prisma.DingTalkWebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DingTalkWebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DingTalkWebhookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>[]
          }
          upsert: {
            args: Prisma.DingTalkWebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DingTalkWebhookPayload>
          }
          aggregate: {
            args: Prisma.DingTalkWebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDingTalkWebhook>
          }
          groupBy: {
            args: Prisma.DingTalkWebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<DingTalkWebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.DingTalkWebhookCountArgs<ExtArgs>
            result: $Utils.Optional<DingTalkWebhookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    taskExecution?: TaskExecutionOmit
    indicatorResult?: IndicatorResultOmit
    signalStatistics?: SignalStatisticsOmit
    indicator?: IndicatorOmit
    userLoginIp?: UserLoginIpOmit
    commonLog?: CommonLogOmit
    market?: MarketOmit
    task?: TaskOmit
    taskIndicator?: TaskIndicatorOmit
    tradingViewConfig?: TradingViewConfigOmit
    user?: UserOmit
    session?: SessionOmit
    dingTalkWebhook?: DingTalkWebhookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TaskExecutionCountOutputType
   */

  export type TaskExecutionCountOutputType = {
    indicatorResults: number
  }

  export type TaskExecutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    indicatorResults?: boolean | TaskExecutionCountOutputTypeCountIndicatorResultsArgs
  }

  // Custom InputTypes
  /**
   * TaskExecutionCountOutputType without action
   */
  export type TaskExecutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecutionCountOutputType
     */
    select?: TaskExecutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskExecutionCountOutputType without action
   */
  export type TaskExecutionCountOutputTypeCountIndicatorResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndicatorResultWhereInput
  }


  /**
   * Count Type IndicatorCountOutputType
   */

  export type IndicatorCountOutputType = {
    taskIndicators: number
  }

  export type IndicatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskIndicators?: boolean | IndicatorCountOutputTypeCountTaskIndicatorsArgs
  }

  // Custom InputTypes
  /**
   * IndicatorCountOutputType without action
   */
  export type IndicatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorCountOutputType
     */
    select?: IndicatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndicatorCountOutputType without action
   */
  export type IndicatorCountOutputTypeCountTaskIndicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskIndicatorWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    tasks: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | MarketCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    taskIndicators: number
    executions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskIndicators?: boolean | TaskCountOutputTypeCountTaskIndicatorsArgs
    executions?: boolean | TaskCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskIndicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskIndicatorWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskExecutionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type DingTalkWebhookCountOutputType
   */

  export type DingTalkWebhookCountOutputType = {
    tasks: number
  }

  export type DingTalkWebhookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | DingTalkWebhookCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * DingTalkWebhookCountOutputType without action
   */
  export type DingTalkWebhookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhookCountOutputType
     */
    select?: DingTalkWebhookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DingTalkWebhookCountOutputType without action
   */
  export type DingTalkWebhookCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TaskExecution
   */

  export type AggregateTaskExecution = {
    _count: TaskExecutionCountAggregateOutputType | null
    _avg: TaskExecutionAvgAggregateOutputType | null
    _sum: TaskExecutionSumAggregateOutputType | null
    _min: TaskExecutionMinAggregateOutputType | null
    _max: TaskExecutionMaxAggregateOutputType | null
  }

  export type TaskExecutionAvgAggregateOutputType = {
    duration: number | null
    marketPrice: number | null
    marketVolume: number | null
  }

  export type TaskExecutionSumAggregateOutputType = {
    duration: number | null
    marketPrice: number | null
    marketVolume: number | null
  }

  export type TaskExecutionMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    status: $Enums.ExecutionStatus | null
    executedAt: Date | null
    duration: number | null
    marketPrice: number | null
    marketVolume: number | null
    errorMessage: string | null
    errorStack: string | null
    notificationSent: boolean | null
    notificationError: string | null
    createdAt: Date | null
  }

  export type TaskExecutionMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    status: $Enums.ExecutionStatus | null
    executedAt: Date | null
    duration: number | null
    marketPrice: number | null
    marketVolume: number | null
    errorMessage: string | null
    errorStack: string | null
    notificationSent: boolean | null
    notificationError: string | null
    createdAt: Date | null
  }

  export type TaskExecutionCountAggregateOutputType = {
    id: number
    taskId: number
    status: number
    executedAt: number
    duration: number
    marketPrice: number
    marketVolume: number
    marketData: number
    errorMessage: number
    errorStack: number
    notificationSent: number
    notificationError: number
    createdAt: number
    _all: number
  }


  export type TaskExecutionAvgAggregateInputType = {
    duration?: true
    marketPrice?: true
    marketVolume?: true
  }

  export type TaskExecutionSumAggregateInputType = {
    duration?: true
    marketPrice?: true
    marketVolume?: true
  }

  export type TaskExecutionMinAggregateInputType = {
    id?: true
    taskId?: true
    status?: true
    executedAt?: true
    duration?: true
    marketPrice?: true
    marketVolume?: true
    errorMessage?: true
    errorStack?: true
    notificationSent?: true
    notificationError?: true
    createdAt?: true
  }

  export type TaskExecutionMaxAggregateInputType = {
    id?: true
    taskId?: true
    status?: true
    executedAt?: true
    duration?: true
    marketPrice?: true
    marketVolume?: true
    errorMessage?: true
    errorStack?: true
    notificationSent?: true
    notificationError?: true
    createdAt?: true
  }

  export type TaskExecutionCountAggregateInputType = {
    id?: true
    taskId?: true
    status?: true
    executedAt?: true
    duration?: true
    marketPrice?: true
    marketVolume?: true
    marketData?: true
    errorMessage?: true
    errorStack?: true
    notificationSent?: true
    notificationError?: true
    createdAt?: true
    _all?: true
  }

  export type TaskExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskExecution to aggregate.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskExecutions
    **/
    _count?: true | TaskExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskExecutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskExecutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskExecutionMaxAggregateInputType
  }

  export type GetTaskExecutionAggregateType<T extends TaskExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskExecution[P]>
      : GetScalarType<T[P], AggregateTaskExecution[P]>
  }




  export type TaskExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskExecutionWhereInput
    orderBy?: TaskExecutionOrderByWithAggregationInput | TaskExecutionOrderByWithAggregationInput[]
    by: TaskExecutionScalarFieldEnum[] | TaskExecutionScalarFieldEnum
    having?: TaskExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskExecutionCountAggregateInputType | true
    _avg?: TaskExecutionAvgAggregateInputType
    _sum?: TaskExecutionSumAggregateInputType
    _min?: TaskExecutionMinAggregateInputType
    _max?: TaskExecutionMaxAggregateInputType
  }

  export type TaskExecutionGroupByOutputType = {
    id: string
    taskId: string
    status: $Enums.ExecutionStatus
    executedAt: Date
    duration: number | null
    marketPrice: number | null
    marketVolume: number | null
    marketData: JsonValue | null
    errorMessage: string | null
    errorStack: string | null
    notificationSent: boolean
    notificationError: string | null
    createdAt: Date
    _count: TaskExecutionCountAggregateOutputType | null
    _avg: TaskExecutionAvgAggregateOutputType | null
    _sum: TaskExecutionSumAggregateOutputType | null
    _min: TaskExecutionMinAggregateOutputType | null
    _max: TaskExecutionMaxAggregateOutputType | null
  }

  type GetTaskExecutionGroupByPayload<T extends TaskExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskExecutionGroupByOutputType[P]>
        }
      >
    >


  export type TaskExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    status?: boolean
    executedAt?: boolean
    duration?: boolean
    marketPrice?: boolean
    marketVolume?: boolean
    marketData?: boolean
    errorMessage?: boolean
    errorStack?: boolean
    notificationSent?: boolean
    notificationError?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicatorResults?: boolean | TaskExecution$indicatorResultsArgs<ExtArgs>
    _count?: boolean | TaskExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskExecution"]>

  export type TaskExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    status?: boolean
    executedAt?: boolean
    duration?: boolean
    marketPrice?: boolean
    marketVolume?: boolean
    marketData?: boolean
    errorMessage?: boolean
    errorStack?: boolean
    notificationSent?: boolean
    notificationError?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskExecution"]>

  export type TaskExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    status?: boolean
    executedAt?: boolean
    duration?: boolean
    marketPrice?: boolean
    marketVolume?: boolean
    marketData?: boolean
    errorMessage?: boolean
    errorStack?: boolean
    notificationSent?: boolean
    notificationError?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskExecution"]>

  export type TaskExecutionSelectScalar = {
    id?: boolean
    taskId?: boolean
    status?: boolean
    executedAt?: boolean
    duration?: boolean
    marketPrice?: boolean
    marketVolume?: boolean
    marketData?: boolean
    errorMessage?: boolean
    errorStack?: boolean
    notificationSent?: boolean
    notificationError?: boolean
    createdAt?: boolean
  }

  export type TaskExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "status" | "executedAt" | "duration" | "marketPrice" | "marketVolume" | "marketData" | "errorMessage" | "errorStack" | "notificationSent" | "notificationError" | "createdAt", ExtArgs["result"]["taskExecution"]>
  export type TaskExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicatorResults?: boolean | TaskExecution$indicatorResultsArgs<ExtArgs>
    _count?: boolean | TaskExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskExecution"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      indicatorResults: Prisma.$IndicatorResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      status: $Enums.ExecutionStatus
      executedAt: Date
      duration: number | null
      marketPrice: number | null
      marketVolume: number | null
      marketData: Prisma.JsonValue | null
      errorMessage: string | null
      errorStack: string | null
      notificationSent: boolean
      notificationError: string | null
      createdAt: Date
    }, ExtArgs["result"]["taskExecution"]>
    composites: {}
  }

  type TaskExecutionGetPayload<S extends boolean | null | undefined | TaskExecutionDefaultArgs> = $Result.GetResult<Prisma.$TaskExecutionPayload, S>

  type TaskExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TaskExecutionCountAggregateInputType | true
    }

  export interface TaskExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskExecution'], meta: { name: 'TaskExecution' } }
    /**
     * Find zero or one TaskExecution that matches the filter.
     * @param {TaskExecutionFindUniqueArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskExecutionFindUniqueArgs>(args: SelectSubset<T, TaskExecutionFindUniqueArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskExecutionFindUniqueOrThrowArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionFindFirstArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskExecutionFindFirstArgs>(args?: SelectSubset<T, TaskExecutionFindFirstArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionFindFirstOrThrowArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskExecutions
     * const taskExecutions = await prisma.taskExecution.findMany()
     * 
     * // Get first 10 TaskExecutions
     * const taskExecutions = await prisma.taskExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskExecutionWithIdOnly = await prisma.taskExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskExecutionFindManyArgs>(args?: SelectSubset<T, TaskExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskExecution.
     * @param {TaskExecutionCreateArgs} args - Arguments to create a TaskExecution.
     * @example
     * // Create one TaskExecution
     * const TaskExecution = await prisma.taskExecution.create({
     *   data: {
     *     // ... data to create a TaskExecution
     *   }
     * })
     * 
     */
    create<T extends TaskExecutionCreateArgs>(args: SelectSubset<T, TaskExecutionCreateArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskExecutions.
     * @param {TaskExecutionCreateManyArgs} args - Arguments to create many TaskExecutions.
     * @example
     * // Create many TaskExecutions
     * const taskExecution = await prisma.taskExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskExecutionCreateManyArgs>(args?: SelectSubset<T, TaskExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskExecutions and returns the data saved in the database.
     * @param {TaskExecutionCreateManyAndReturnArgs} args - Arguments to create many TaskExecutions.
     * @example
     * // Create many TaskExecutions
     * const taskExecution = await prisma.taskExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskExecutions and only return the `id`
     * const taskExecutionWithIdOnly = await prisma.taskExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskExecution.
     * @param {TaskExecutionDeleteArgs} args - Arguments to delete one TaskExecution.
     * @example
     * // Delete one TaskExecution
     * const TaskExecution = await prisma.taskExecution.delete({
     *   where: {
     *     // ... filter to delete one TaskExecution
     *   }
     * })
     * 
     */
    delete<T extends TaskExecutionDeleteArgs>(args: SelectSubset<T, TaskExecutionDeleteArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskExecution.
     * @param {TaskExecutionUpdateArgs} args - Arguments to update one TaskExecution.
     * @example
     * // Update one TaskExecution
     * const taskExecution = await prisma.taskExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskExecutionUpdateArgs>(args: SelectSubset<T, TaskExecutionUpdateArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskExecutions.
     * @param {TaskExecutionDeleteManyArgs} args - Arguments to filter TaskExecutions to delete.
     * @example
     * // Delete a few TaskExecutions
     * const { count } = await prisma.taskExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskExecutionDeleteManyArgs>(args?: SelectSubset<T, TaskExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskExecutions
     * const taskExecution = await prisma.taskExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskExecutionUpdateManyArgs>(args: SelectSubset<T, TaskExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskExecutions and returns the data updated in the database.
     * @param {TaskExecutionUpdateManyAndReturnArgs} args - Arguments to update many TaskExecutions.
     * @example
     * // Update many TaskExecutions
     * const taskExecution = await prisma.taskExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskExecutions and only return the `id`
     * const taskExecutionWithIdOnly = await prisma.taskExecution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskExecution.
     * @param {TaskExecutionUpsertArgs} args - Arguments to update or create a TaskExecution.
     * @example
     * // Update or create a TaskExecution
     * const taskExecution = await prisma.taskExecution.upsert({
     *   create: {
     *     // ... data to create a TaskExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskExecution we want to update
     *   }
     * })
     */
    upsert<T extends TaskExecutionUpsertArgs>(args: SelectSubset<T, TaskExecutionUpsertArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionCountArgs} args - Arguments to filter TaskExecutions to count.
     * @example
     * // Count the number of TaskExecutions
     * const count = await prisma.taskExecution.count({
     *   where: {
     *     // ... the filter for the TaskExecutions we want to count
     *   }
     * })
    **/
    count<T extends TaskExecutionCountArgs>(
      args?: Subset<T, TaskExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskExecutionAggregateArgs>(args: Subset<T, TaskExecutionAggregateArgs>): Prisma.PrismaPromise<GetTaskExecutionAggregateType<T>>

    /**
     * Group by TaskExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskExecutionGroupByArgs['orderBy'] }
        : { orderBy?: TaskExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskExecution model
   */
  readonly fields: TaskExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    indicatorResults<T extends TaskExecution$indicatorResultsArgs<ExtArgs> = {}>(args?: Subset<T, TaskExecution$indicatorResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskExecution model
   */
  interface TaskExecutionFieldRefs {
    readonly id: FieldRef<"TaskExecution", 'String'>
    readonly taskId: FieldRef<"TaskExecution", 'String'>
    readonly status: FieldRef<"TaskExecution", 'ExecutionStatus'>
    readonly executedAt: FieldRef<"TaskExecution", 'DateTime'>
    readonly duration: FieldRef<"TaskExecution", 'Int'>
    readonly marketPrice: FieldRef<"TaskExecution", 'Float'>
    readonly marketVolume: FieldRef<"TaskExecution", 'Float'>
    readonly marketData: FieldRef<"TaskExecution", 'Json'>
    readonly errorMessage: FieldRef<"TaskExecution", 'String'>
    readonly errorStack: FieldRef<"TaskExecution", 'String'>
    readonly notificationSent: FieldRef<"TaskExecution", 'Boolean'>
    readonly notificationError: FieldRef<"TaskExecution", 'String'>
    readonly createdAt: FieldRef<"TaskExecution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskExecution findUnique
   */
  export type TaskExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where: TaskExecutionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution findUniqueOrThrow
   */
  export type TaskExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where: TaskExecutionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution findFirst
   */
  export type TaskExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskExecutions.
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskExecutions.
     */
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution findFirstOrThrow
   */
  export type TaskExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskExecutions.
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskExecutions.
     */
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution findMany
   */
  export type TaskExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecutions to fetch.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskExecutions.
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution create
   */
  export type TaskExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskExecution.
     */
    data: XOR<TaskExecutionCreateInput, TaskExecutionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution createMany
   */
  export type TaskExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskExecutions.
     */
    data: TaskExecutionCreateManyInput | TaskExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskExecution createManyAndReturn
   */
  export type TaskExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many TaskExecutions.
     */
    data: TaskExecutionCreateManyInput | TaskExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskExecution update
   */
  export type TaskExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskExecution.
     */
    data: XOR<TaskExecutionUpdateInput, TaskExecutionUncheckedUpdateInput>
    /**
     * Choose, which TaskExecution to update.
     */
    where: TaskExecutionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution updateMany
   */
  export type TaskExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskExecutions.
     */
    data: XOR<TaskExecutionUpdateManyMutationInput, TaskExecutionUncheckedUpdateManyInput>
    /**
     * Filter which TaskExecutions to update
     */
    where?: TaskExecutionWhereInput
    /**
     * Limit how many TaskExecutions to update.
     */
    limit?: number
  }

  /**
   * TaskExecution updateManyAndReturn
   */
  export type TaskExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * The data used to update TaskExecutions.
     */
    data: XOR<TaskExecutionUpdateManyMutationInput, TaskExecutionUncheckedUpdateManyInput>
    /**
     * Filter which TaskExecutions to update
     */
    where?: TaskExecutionWhereInput
    /**
     * Limit how many TaskExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskExecution upsert
   */
  export type TaskExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskExecution to update in case it exists.
     */
    where: TaskExecutionWhereUniqueInput
    /**
     * In case the TaskExecution found by the `where` argument doesn't exist, create a new TaskExecution with this data.
     */
    create: XOR<TaskExecutionCreateInput, TaskExecutionUncheckedCreateInput>
    /**
     * In case the TaskExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskExecutionUpdateInput, TaskExecutionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution delete
   */
  export type TaskExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter which TaskExecution to delete.
     */
    where: TaskExecutionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskExecution deleteMany
   */
  export type TaskExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskExecutions to delete
     */
    where?: TaskExecutionWhereInput
    /**
     * Limit how many TaskExecutions to delete.
     */
    limit?: number
  }

  /**
   * TaskExecution.indicatorResults
   */
  export type TaskExecution$indicatorResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    where?: IndicatorResultWhereInput
    orderBy?: IndicatorResultOrderByWithRelationInput | IndicatorResultOrderByWithRelationInput[]
    cursor?: IndicatorResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndicatorResultScalarFieldEnum | IndicatorResultScalarFieldEnum[]
  }

  /**
   * TaskExecution without action
   */
  export type TaskExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
  }


  /**
   * Model IndicatorResult
   */

  export type AggregateIndicatorResult = {
    _count: IndicatorResultCountAggregateOutputType | null
    _avg: IndicatorResultAvgAggregateOutputType | null
    _sum: IndicatorResultSumAggregateOutputType | null
    _min: IndicatorResultMinAggregateOutputType | null
    _max: IndicatorResultMaxAggregateOutputType | null
  }

  export type IndicatorResultAvgAggregateOutputType = {
    signalStrength: number | null
  }

  export type IndicatorResultSumAggregateOutputType = {
    signalStrength: number | null
  }

  export type IndicatorResultMinAggregateOutputType = {
    id: string | null
    executionId: string | null
    indicatorId: string | null
    indicatorName: string | null
    signal: $Enums.SignalType | null
    signalTitle: string | null
    signalMessage: string | null
    signalStrength: number | null
    buyAlert: boolean | null
    sellAlert: boolean | null
    createdAt: Date | null
  }

  export type IndicatorResultMaxAggregateOutputType = {
    id: string | null
    executionId: string | null
    indicatorId: string | null
    indicatorName: string | null
    signal: $Enums.SignalType | null
    signalTitle: string | null
    signalMessage: string | null
    signalStrength: number | null
    buyAlert: boolean | null
    sellAlert: boolean | null
    createdAt: Date | null
  }

  export type IndicatorResultCountAggregateOutputType = {
    id: number
    executionId: number
    indicatorId: number
    indicatorName: number
    outputs: number
    signal: number
    signalTitle: number
    signalMessage: number
    signalStrength: number
    buyAlert: number
    sellAlert: number
    customValues: number
    createdAt: number
    _all: number
  }


  export type IndicatorResultAvgAggregateInputType = {
    signalStrength?: true
  }

  export type IndicatorResultSumAggregateInputType = {
    signalStrength?: true
  }

  export type IndicatorResultMinAggregateInputType = {
    id?: true
    executionId?: true
    indicatorId?: true
    indicatorName?: true
    signal?: true
    signalTitle?: true
    signalMessage?: true
    signalStrength?: true
    buyAlert?: true
    sellAlert?: true
    createdAt?: true
  }

  export type IndicatorResultMaxAggregateInputType = {
    id?: true
    executionId?: true
    indicatorId?: true
    indicatorName?: true
    signal?: true
    signalTitle?: true
    signalMessage?: true
    signalStrength?: true
    buyAlert?: true
    sellAlert?: true
    createdAt?: true
  }

  export type IndicatorResultCountAggregateInputType = {
    id?: true
    executionId?: true
    indicatorId?: true
    indicatorName?: true
    outputs?: true
    signal?: true
    signalTitle?: true
    signalMessage?: true
    signalStrength?: true
    buyAlert?: true
    sellAlert?: true
    customValues?: true
    createdAt?: true
    _all?: true
  }

  export type IndicatorResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndicatorResult to aggregate.
     */
    where?: IndicatorResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndicatorResults to fetch.
     */
    orderBy?: IndicatorResultOrderByWithRelationInput | IndicatorResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndicatorResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndicatorResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndicatorResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndicatorResults
    **/
    _count?: true | IndicatorResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndicatorResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndicatorResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndicatorResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndicatorResultMaxAggregateInputType
  }

  export type GetIndicatorResultAggregateType<T extends IndicatorResultAggregateArgs> = {
        [P in keyof T & keyof AggregateIndicatorResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndicatorResult[P]>
      : GetScalarType<T[P], AggregateIndicatorResult[P]>
  }




  export type IndicatorResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndicatorResultWhereInput
    orderBy?: IndicatorResultOrderByWithAggregationInput | IndicatorResultOrderByWithAggregationInput[]
    by: IndicatorResultScalarFieldEnum[] | IndicatorResultScalarFieldEnum
    having?: IndicatorResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndicatorResultCountAggregateInputType | true
    _avg?: IndicatorResultAvgAggregateInputType
    _sum?: IndicatorResultSumAggregateInputType
    _min?: IndicatorResultMinAggregateInputType
    _max?: IndicatorResultMaxAggregateInputType
  }

  export type IndicatorResultGroupByOutputType = {
    id: string
    executionId: string
    indicatorId: string
    indicatorName: string
    outputs: JsonValue
    signal: $Enums.SignalType | null
    signalTitle: string | null
    signalMessage: string | null
    signalStrength: number | null
    buyAlert: boolean | null
    sellAlert: boolean | null
    customValues: JsonValue | null
    createdAt: Date
    _count: IndicatorResultCountAggregateOutputType | null
    _avg: IndicatorResultAvgAggregateOutputType | null
    _sum: IndicatorResultSumAggregateOutputType | null
    _min: IndicatorResultMinAggregateOutputType | null
    _max: IndicatorResultMaxAggregateOutputType | null
  }

  type GetIndicatorResultGroupByPayload<T extends IndicatorResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndicatorResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndicatorResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndicatorResultGroupByOutputType[P]>
            : GetScalarType<T[P], IndicatorResultGroupByOutputType[P]>
        }
      >
    >


  export type IndicatorResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionId?: boolean
    indicatorId?: boolean
    indicatorName?: boolean
    outputs?: boolean
    signal?: boolean
    signalTitle?: boolean
    signalMessage?: boolean
    signalStrength?: boolean
    buyAlert?: boolean
    sellAlert?: boolean
    customValues?: boolean
    createdAt?: boolean
    execution?: boolean | TaskExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicatorResult"]>

  export type IndicatorResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionId?: boolean
    indicatorId?: boolean
    indicatorName?: boolean
    outputs?: boolean
    signal?: boolean
    signalTitle?: boolean
    signalMessage?: boolean
    signalStrength?: boolean
    buyAlert?: boolean
    sellAlert?: boolean
    customValues?: boolean
    createdAt?: boolean
    execution?: boolean | TaskExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicatorResult"]>

  export type IndicatorResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionId?: boolean
    indicatorId?: boolean
    indicatorName?: boolean
    outputs?: boolean
    signal?: boolean
    signalTitle?: boolean
    signalMessage?: boolean
    signalStrength?: boolean
    buyAlert?: boolean
    sellAlert?: boolean
    customValues?: boolean
    createdAt?: boolean
    execution?: boolean | TaskExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicatorResult"]>

  export type IndicatorResultSelectScalar = {
    id?: boolean
    executionId?: boolean
    indicatorId?: boolean
    indicatorName?: boolean
    outputs?: boolean
    signal?: boolean
    signalTitle?: boolean
    signalMessage?: boolean
    signalStrength?: boolean
    buyAlert?: boolean
    sellAlert?: boolean
    customValues?: boolean
    createdAt?: boolean
  }

  export type IndicatorResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "executionId" | "indicatorId" | "indicatorName" | "outputs" | "signal" | "signalTitle" | "signalMessage" | "signalStrength" | "buyAlert" | "sellAlert" | "customValues" | "createdAt", ExtArgs["result"]["indicatorResult"]>
  export type IndicatorResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | TaskExecutionDefaultArgs<ExtArgs>
  }
  export type IndicatorResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | TaskExecutionDefaultArgs<ExtArgs>
  }
  export type IndicatorResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | TaskExecutionDefaultArgs<ExtArgs>
  }

  export type $IndicatorResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndicatorResult"
    objects: {
      execution: Prisma.$TaskExecutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      executionId: string
      indicatorId: string
      indicatorName: string
      outputs: Prisma.JsonValue
      signal: $Enums.SignalType | null
      signalTitle: string | null
      signalMessage: string | null
      signalStrength: number | null
      buyAlert: boolean | null
      sellAlert: boolean | null
      customValues: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["indicatorResult"]>
    composites: {}
  }

  type IndicatorResultGetPayload<S extends boolean | null | undefined | IndicatorResultDefaultArgs> = $Result.GetResult<Prisma.$IndicatorResultPayload, S>

  type IndicatorResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndicatorResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: IndicatorResultCountAggregateInputType | true
    }

  export interface IndicatorResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndicatorResult'], meta: { name: 'IndicatorResult' } }
    /**
     * Find zero or one IndicatorResult that matches the filter.
     * @param {IndicatorResultFindUniqueArgs} args - Arguments to find a IndicatorResult
     * @example
     * // Get one IndicatorResult
     * const indicatorResult = await prisma.indicatorResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndicatorResultFindUniqueArgs>(args: SelectSubset<T, IndicatorResultFindUniqueArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndicatorResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndicatorResultFindUniqueOrThrowArgs} args - Arguments to find a IndicatorResult
     * @example
     * // Get one IndicatorResult
     * const indicatorResult = await prisma.indicatorResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndicatorResultFindUniqueOrThrowArgs>(args: SelectSubset<T, IndicatorResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndicatorResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorResultFindFirstArgs} args - Arguments to find a IndicatorResult
     * @example
     * // Get one IndicatorResult
     * const indicatorResult = await prisma.indicatorResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndicatorResultFindFirstArgs>(args?: SelectSubset<T, IndicatorResultFindFirstArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndicatorResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorResultFindFirstOrThrowArgs} args - Arguments to find a IndicatorResult
     * @example
     * // Get one IndicatorResult
     * const indicatorResult = await prisma.indicatorResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndicatorResultFindFirstOrThrowArgs>(args?: SelectSubset<T, IndicatorResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndicatorResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndicatorResults
     * const indicatorResults = await prisma.indicatorResult.findMany()
     * 
     * // Get first 10 IndicatorResults
     * const indicatorResults = await prisma.indicatorResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indicatorResultWithIdOnly = await prisma.indicatorResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndicatorResultFindManyArgs>(args?: SelectSubset<T, IndicatorResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndicatorResult.
     * @param {IndicatorResultCreateArgs} args - Arguments to create a IndicatorResult.
     * @example
     * // Create one IndicatorResult
     * const IndicatorResult = await prisma.indicatorResult.create({
     *   data: {
     *     // ... data to create a IndicatorResult
     *   }
     * })
     * 
     */
    create<T extends IndicatorResultCreateArgs>(args: SelectSubset<T, IndicatorResultCreateArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndicatorResults.
     * @param {IndicatorResultCreateManyArgs} args - Arguments to create many IndicatorResults.
     * @example
     * // Create many IndicatorResults
     * const indicatorResult = await prisma.indicatorResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndicatorResultCreateManyArgs>(args?: SelectSubset<T, IndicatorResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndicatorResults and returns the data saved in the database.
     * @param {IndicatorResultCreateManyAndReturnArgs} args - Arguments to create many IndicatorResults.
     * @example
     * // Create many IndicatorResults
     * const indicatorResult = await prisma.indicatorResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndicatorResults and only return the `id`
     * const indicatorResultWithIdOnly = await prisma.indicatorResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndicatorResultCreateManyAndReturnArgs>(args?: SelectSubset<T, IndicatorResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndicatorResult.
     * @param {IndicatorResultDeleteArgs} args - Arguments to delete one IndicatorResult.
     * @example
     * // Delete one IndicatorResult
     * const IndicatorResult = await prisma.indicatorResult.delete({
     *   where: {
     *     // ... filter to delete one IndicatorResult
     *   }
     * })
     * 
     */
    delete<T extends IndicatorResultDeleteArgs>(args: SelectSubset<T, IndicatorResultDeleteArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndicatorResult.
     * @param {IndicatorResultUpdateArgs} args - Arguments to update one IndicatorResult.
     * @example
     * // Update one IndicatorResult
     * const indicatorResult = await prisma.indicatorResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndicatorResultUpdateArgs>(args: SelectSubset<T, IndicatorResultUpdateArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndicatorResults.
     * @param {IndicatorResultDeleteManyArgs} args - Arguments to filter IndicatorResults to delete.
     * @example
     * // Delete a few IndicatorResults
     * const { count } = await prisma.indicatorResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndicatorResultDeleteManyArgs>(args?: SelectSubset<T, IndicatorResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndicatorResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndicatorResults
     * const indicatorResult = await prisma.indicatorResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndicatorResultUpdateManyArgs>(args: SelectSubset<T, IndicatorResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndicatorResults and returns the data updated in the database.
     * @param {IndicatorResultUpdateManyAndReturnArgs} args - Arguments to update many IndicatorResults.
     * @example
     * // Update many IndicatorResults
     * const indicatorResult = await prisma.indicatorResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndicatorResults and only return the `id`
     * const indicatorResultWithIdOnly = await prisma.indicatorResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndicatorResultUpdateManyAndReturnArgs>(args: SelectSubset<T, IndicatorResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndicatorResult.
     * @param {IndicatorResultUpsertArgs} args - Arguments to update or create a IndicatorResult.
     * @example
     * // Update or create a IndicatorResult
     * const indicatorResult = await prisma.indicatorResult.upsert({
     *   create: {
     *     // ... data to create a IndicatorResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndicatorResult we want to update
     *   }
     * })
     */
    upsert<T extends IndicatorResultUpsertArgs>(args: SelectSubset<T, IndicatorResultUpsertArgs<ExtArgs>>): Prisma__IndicatorResultClient<$Result.GetResult<Prisma.$IndicatorResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndicatorResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorResultCountArgs} args - Arguments to filter IndicatorResults to count.
     * @example
     * // Count the number of IndicatorResults
     * const count = await prisma.indicatorResult.count({
     *   where: {
     *     // ... the filter for the IndicatorResults we want to count
     *   }
     * })
    **/
    count<T extends IndicatorResultCountArgs>(
      args?: Subset<T, IndicatorResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndicatorResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndicatorResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndicatorResultAggregateArgs>(args: Subset<T, IndicatorResultAggregateArgs>): Prisma.PrismaPromise<GetIndicatorResultAggregateType<T>>

    /**
     * Group by IndicatorResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndicatorResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndicatorResultGroupByArgs['orderBy'] }
        : { orderBy?: IndicatorResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndicatorResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndicatorResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndicatorResult model
   */
  readonly fields: IndicatorResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndicatorResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndicatorResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    execution<T extends TaskExecutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskExecutionDefaultArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndicatorResult model
   */
  interface IndicatorResultFieldRefs {
    readonly id: FieldRef<"IndicatorResult", 'String'>
    readonly executionId: FieldRef<"IndicatorResult", 'String'>
    readonly indicatorId: FieldRef<"IndicatorResult", 'String'>
    readonly indicatorName: FieldRef<"IndicatorResult", 'String'>
    readonly outputs: FieldRef<"IndicatorResult", 'Json'>
    readonly signal: FieldRef<"IndicatorResult", 'SignalType'>
    readonly signalTitle: FieldRef<"IndicatorResult", 'String'>
    readonly signalMessage: FieldRef<"IndicatorResult", 'String'>
    readonly signalStrength: FieldRef<"IndicatorResult", 'Float'>
    readonly buyAlert: FieldRef<"IndicatorResult", 'Boolean'>
    readonly sellAlert: FieldRef<"IndicatorResult", 'Boolean'>
    readonly customValues: FieldRef<"IndicatorResult", 'Json'>
    readonly createdAt: FieldRef<"IndicatorResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndicatorResult findUnique
   */
  export type IndicatorResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * Filter, which IndicatorResult to fetch.
     */
    where: IndicatorResultWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult findUniqueOrThrow
   */
  export type IndicatorResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * Filter, which IndicatorResult to fetch.
     */
    where: IndicatorResultWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult findFirst
   */
  export type IndicatorResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * Filter, which IndicatorResult to fetch.
     */
    where?: IndicatorResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndicatorResults to fetch.
     */
    orderBy?: IndicatorResultOrderByWithRelationInput | IndicatorResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndicatorResults.
     */
    cursor?: IndicatorResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndicatorResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndicatorResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndicatorResults.
     */
    distinct?: IndicatorResultScalarFieldEnum | IndicatorResultScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult findFirstOrThrow
   */
  export type IndicatorResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * Filter, which IndicatorResult to fetch.
     */
    where?: IndicatorResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndicatorResults to fetch.
     */
    orderBy?: IndicatorResultOrderByWithRelationInput | IndicatorResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndicatorResults.
     */
    cursor?: IndicatorResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndicatorResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndicatorResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndicatorResults.
     */
    distinct?: IndicatorResultScalarFieldEnum | IndicatorResultScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult findMany
   */
  export type IndicatorResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * Filter, which IndicatorResults to fetch.
     */
    where?: IndicatorResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndicatorResults to fetch.
     */
    orderBy?: IndicatorResultOrderByWithRelationInput | IndicatorResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndicatorResults.
     */
    cursor?: IndicatorResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndicatorResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndicatorResults.
     */
    skip?: number
    distinct?: IndicatorResultScalarFieldEnum | IndicatorResultScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult create
   */
  export type IndicatorResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * The data needed to create a IndicatorResult.
     */
    data: XOR<IndicatorResultCreateInput, IndicatorResultUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult createMany
   */
  export type IndicatorResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndicatorResults.
     */
    data: IndicatorResultCreateManyInput | IndicatorResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndicatorResult createManyAndReturn
   */
  export type IndicatorResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * The data used to create many IndicatorResults.
     */
    data: IndicatorResultCreateManyInput | IndicatorResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndicatorResult update
   */
  export type IndicatorResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * The data needed to update a IndicatorResult.
     */
    data: XOR<IndicatorResultUpdateInput, IndicatorResultUncheckedUpdateInput>
    /**
     * Choose, which IndicatorResult to update.
     */
    where: IndicatorResultWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult updateMany
   */
  export type IndicatorResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndicatorResults.
     */
    data: XOR<IndicatorResultUpdateManyMutationInput, IndicatorResultUncheckedUpdateManyInput>
    /**
     * Filter which IndicatorResults to update
     */
    where?: IndicatorResultWhereInput
    /**
     * Limit how many IndicatorResults to update.
     */
    limit?: number
  }

  /**
   * IndicatorResult updateManyAndReturn
   */
  export type IndicatorResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * The data used to update IndicatorResults.
     */
    data: XOR<IndicatorResultUpdateManyMutationInput, IndicatorResultUncheckedUpdateManyInput>
    /**
     * Filter which IndicatorResults to update
     */
    where?: IndicatorResultWhereInput
    /**
     * Limit how many IndicatorResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndicatorResult upsert
   */
  export type IndicatorResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * The filter to search for the IndicatorResult to update in case it exists.
     */
    where: IndicatorResultWhereUniqueInput
    /**
     * In case the IndicatorResult found by the `where` argument doesn't exist, create a new IndicatorResult with this data.
     */
    create: XOR<IndicatorResultCreateInput, IndicatorResultUncheckedCreateInput>
    /**
     * In case the IndicatorResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndicatorResultUpdateInput, IndicatorResultUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult delete
   */
  export type IndicatorResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
    /**
     * Filter which IndicatorResult to delete.
     */
    where: IndicatorResultWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IndicatorResult deleteMany
   */
  export type IndicatorResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndicatorResults to delete
     */
    where?: IndicatorResultWhereInput
    /**
     * Limit how many IndicatorResults to delete.
     */
    limit?: number
  }

  /**
   * IndicatorResult without action
   */
  export type IndicatorResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatorResult
     */
    select?: IndicatorResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndicatorResult
     */
    omit?: IndicatorResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorResultInclude<ExtArgs> | null
  }


  /**
   * Model SignalStatistics
   */

  export type AggregateSignalStatistics = {
    _count: SignalStatisticsCountAggregateOutputType | null
    _avg: SignalStatisticsAvgAggregateOutputType | null
    _sum: SignalStatisticsSumAggregateOutputType | null
    _min: SignalStatisticsMinAggregateOutputType | null
    _max: SignalStatisticsMaxAggregateOutputType | null
  }

  export type SignalStatisticsAvgAggregateOutputType = {
    totalSignals: number | null
    buySignals: number | null
    sellSignals: number | null
    successRate: number | null
    avgPrice: number | null
    minPrice: number | null
    maxPrice: number | null
  }

  export type SignalStatisticsSumAggregateOutputType = {
    totalSignals: number | null
    buySignals: number | null
    sellSignals: number | null
    successRate: number | null
    avgPrice: number | null
    minPrice: number | null
    maxPrice: number | null
  }

  export type SignalStatisticsMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    indicatorId: string | null
    timeframe: string | null
    date: Date | null
    totalSignals: number | null
    buySignals: number | null
    sellSignals: number | null
    successRate: number | null
    avgPrice: number | null
    minPrice: number | null
    maxPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SignalStatisticsMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    indicatorId: string | null
    timeframe: string | null
    date: Date | null
    totalSignals: number | null
    buySignals: number | null
    sellSignals: number | null
    successRate: number | null
    avgPrice: number | null
    minPrice: number | null
    maxPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SignalStatisticsCountAggregateOutputType = {
    id: number
    marketId: number
    indicatorId: number
    timeframe: number
    date: number
    totalSignals: number
    buySignals: number
    sellSignals: number
    successRate: number
    avgPrice: number
    minPrice: number
    maxPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SignalStatisticsAvgAggregateInputType = {
    totalSignals?: true
    buySignals?: true
    sellSignals?: true
    successRate?: true
    avgPrice?: true
    minPrice?: true
    maxPrice?: true
  }

  export type SignalStatisticsSumAggregateInputType = {
    totalSignals?: true
    buySignals?: true
    sellSignals?: true
    successRate?: true
    avgPrice?: true
    minPrice?: true
    maxPrice?: true
  }

  export type SignalStatisticsMinAggregateInputType = {
    id?: true
    marketId?: true
    indicatorId?: true
    timeframe?: true
    date?: true
    totalSignals?: true
    buySignals?: true
    sellSignals?: true
    successRate?: true
    avgPrice?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SignalStatisticsMaxAggregateInputType = {
    id?: true
    marketId?: true
    indicatorId?: true
    timeframe?: true
    date?: true
    totalSignals?: true
    buySignals?: true
    sellSignals?: true
    successRate?: true
    avgPrice?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SignalStatisticsCountAggregateInputType = {
    id?: true
    marketId?: true
    indicatorId?: true
    timeframe?: true
    date?: true
    totalSignals?: true
    buySignals?: true
    sellSignals?: true
    successRate?: true
    avgPrice?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SignalStatisticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignalStatistics to aggregate.
     */
    where?: SignalStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalStatistics to fetch.
     */
    orderBy?: SignalStatisticsOrderByWithRelationInput | SignalStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SignalStatistics
    **/
    _count?: true | SignalStatisticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignalStatisticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignalStatisticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalStatisticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalStatisticsMaxAggregateInputType
  }

  export type GetSignalStatisticsAggregateType<T extends SignalStatisticsAggregateArgs> = {
        [P in keyof T & keyof AggregateSignalStatistics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignalStatistics[P]>
      : GetScalarType<T[P], AggregateSignalStatistics[P]>
  }




  export type SignalStatisticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalStatisticsWhereInput
    orderBy?: SignalStatisticsOrderByWithAggregationInput | SignalStatisticsOrderByWithAggregationInput[]
    by: SignalStatisticsScalarFieldEnum[] | SignalStatisticsScalarFieldEnum
    having?: SignalStatisticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalStatisticsCountAggregateInputType | true
    _avg?: SignalStatisticsAvgAggregateInputType
    _sum?: SignalStatisticsSumAggregateInputType
    _min?: SignalStatisticsMinAggregateInputType
    _max?: SignalStatisticsMaxAggregateInputType
  }

  export type SignalStatisticsGroupByOutputType = {
    id: string
    marketId: string
    indicatorId: string
    timeframe: string
    date: Date
    totalSignals: number
    buySignals: number
    sellSignals: number
    successRate: number | null
    avgPrice: number | null
    minPrice: number | null
    maxPrice: number | null
    createdAt: Date
    updatedAt: Date
    _count: SignalStatisticsCountAggregateOutputType | null
    _avg: SignalStatisticsAvgAggregateOutputType | null
    _sum: SignalStatisticsSumAggregateOutputType | null
    _min: SignalStatisticsMinAggregateOutputType | null
    _max: SignalStatisticsMaxAggregateOutputType | null
  }

  type GetSignalStatisticsGroupByPayload<T extends SignalStatisticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalStatisticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalStatisticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalStatisticsGroupByOutputType[P]>
            : GetScalarType<T[P], SignalStatisticsGroupByOutputType[P]>
        }
      >
    >


  export type SignalStatisticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    indicatorId?: boolean
    timeframe?: boolean
    date?: boolean
    totalSignals?: boolean
    buySignals?: boolean
    sellSignals?: boolean
    successRate?: boolean
    avgPrice?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["signalStatistics"]>

  export type SignalStatisticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    indicatorId?: boolean
    timeframe?: boolean
    date?: boolean
    totalSignals?: boolean
    buySignals?: boolean
    sellSignals?: boolean
    successRate?: boolean
    avgPrice?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["signalStatistics"]>

  export type SignalStatisticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    indicatorId?: boolean
    timeframe?: boolean
    date?: boolean
    totalSignals?: boolean
    buySignals?: boolean
    sellSignals?: boolean
    successRate?: boolean
    avgPrice?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["signalStatistics"]>

  export type SignalStatisticsSelectScalar = {
    id?: boolean
    marketId?: boolean
    indicatorId?: boolean
    timeframe?: boolean
    date?: boolean
    totalSignals?: boolean
    buySignals?: boolean
    sellSignals?: boolean
    successRate?: boolean
    avgPrice?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SignalStatisticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "indicatorId" | "timeframe" | "date" | "totalSignals" | "buySignals" | "sellSignals" | "successRate" | "avgPrice" | "minPrice" | "maxPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["signalStatistics"]>

  export type $SignalStatisticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SignalStatistics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      indicatorId: string
      timeframe: string
      date: Date
      totalSignals: number
      buySignals: number
      sellSignals: number
      successRate: number | null
      avgPrice: number | null
      minPrice: number | null
      maxPrice: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["signalStatistics"]>
    composites: {}
  }

  type SignalStatisticsGetPayload<S extends boolean | null | undefined | SignalStatisticsDefaultArgs> = $Result.GetResult<Prisma.$SignalStatisticsPayload, S>

  type SignalStatisticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalStatisticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SignalStatisticsCountAggregateInputType | true
    }

  export interface SignalStatisticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SignalStatistics'], meta: { name: 'SignalStatistics' } }
    /**
     * Find zero or one SignalStatistics that matches the filter.
     * @param {SignalStatisticsFindUniqueArgs} args - Arguments to find a SignalStatistics
     * @example
     * // Get one SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalStatisticsFindUniqueArgs>(args: SelectSubset<T, SignalStatisticsFindUniqueArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SignalStatistics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalStatisticsFindUniqueOrThrowArgs} args - Arguments to find a SignalStatistics
     * @example
     * // Get one SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalStatisticsFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalStatisticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignalStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalStatisticsFindFirstArgs} args - Arguments to find a SignalStatistics
     * @example
     * // Get one SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalStatisticsFindFirstArgs>(args?: SelectSubset<T, SignalStatisticsFindFirstArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignalStatistics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalStatisticsFindFirstOrThrowArgs} args - Arguments to find a SignalStatistics
     * @example
     * // Get one SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalStatisticsFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalStatisticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SignalStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalStatisticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.findMany()
     * 
     * // Get first 10 SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalStatisticsWithIdOnly = await prisma.signalStatistics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalStatisticsFindManyArgs>(args?: SelectSubset<T, SignalStatisticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SignalStatistics.
     * @param {SignalStatisticsCreateArgs} args - Arguments to create a SignalStatistics.
     * @example
     * // Create one SignalStatistics
     * const SignalStatistics = await prisma.signalStatistics.create({
     *   data: {
     *     // ... data to create a SignalStatistics
     *   }
     * })
     * 
     */
    create<T extends SignalStatisticsCreateArgs>(args: SelectSubset<T, SignalStatisticsCreateArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SignalStatistics.
     * @param {SignalStatisticsCreateManyArgs} args - Arguments to create many SignalStatistics.
     * @example
     * // Create many SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalStatisticsCreateManyArgs>(args?: SelectSubset<T, SignalStatisticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SignalStatistics and returns the data saved in the database.
     * @param {SignalStatisticsCreateManyAndReturnArgs} args - Arguments to create many SignalStatistics.
     * @example
     * // Create many SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SignalStatistics and only return the `id`
     * const signalStatisticsWithIdOnly = await prisma.signalStatistics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalStatisticsCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalStatisticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SignalStatistics.
     * @param {SignalStatisticsDeleteArgs} args - Arguments to delete one SignalStatistics.
     * @example
     * // Delete one SignalStatistics
     * const SignalStatistics = await prisma.signalStatistics.delete({
     *   where: {
     *     // ... filter to delete one SignalStatistics
     *   }
     * })
     * 
     */
    delete<T extends SignalStatisticsDeleteArgs>(args: SelectSubset<T, SignalStatisticsDeleteArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SignalStatistics.
     * @param {SignalStatisticsUpdateArgs} args - Arguments to update one SignalStatistics.
     * @example
     * // Update one SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalStatisticsUpdateArgs>(args: SelectSubset<T, SignalStatisticsUpdateArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SignalStatistics.
     * @param {SignalStatisticsDeleteManyArgs} args - Arguments to filter SignalStatistics to delete.
     * @example
     * // Delete a few SignalStatistics
     * const { count } = await prisma.signalStatistics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalStatisticsDeleteManyArgs>(args?: SelectSubset<T, SignalStatisticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignalStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalStatisticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalStatisticsUpdateManyArgs>(args: SelectSubset<T, SignalStatisticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignalStatistics and returns the data updated in the database.
     * @param {SignalStatisticsUpdateManyAndReturnArgs} args - Arguments to update many SignalStatistics.
     * @example
     * // Update many SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SignalStatistics and only return the `id`
     * const signalStatisticsWithIdOnly = await prisma.signalStatistics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignalStatisticsUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalStatisticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SignalStatistics.
     * @param {SignalStatisticsUpsertArgs} args - Arguments to update or create a SignalStatistics.
     * @example
     * // Update or create a SignalStatistics
     * const signalStatistics = await prisma.signalStatistics.upsert({
     *   create: {
     *     // ... data to create a SignalStatistics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SignalStatistics we want to update
     *   }
     * })
     */
    upsert<T extends SignalStatisticsUpsertArgs>(args: SelectSubset<T, SignalStatisticsUpsertArgs<ExtArgs>>): Prisma__SignalStatisticsClient<$Result.GetResult<Prisma.$SignalStatisticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SignalStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalStatisticsCountArgs} args - Arguments to filter SignalStatistics to count.
     * @example
     * // Count the number of SignalStatistics
     * const count = await prisma.signalStatistics.count({
     *   where: {
     *     // ... the filter for the SignalStatistics we want to count
     *   }
     * })
    **/
    count<T extends SignalStatisticsCountArgs>(
      args?: Subset<T, SignalStatisticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalStatisticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SignalStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalStatisticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignalStatisticsAggregateArgs>(args: Subset<T, SignalStatisticsAggregateArgs>): Prisma.PrismaPromise<GetSignalStatisticsAggregateType<T>>

    /**
     * Group by SignalStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalStatisticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignalStatisticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalStatisticsGroupByArgs['orderBy'] }
        : { orderBy?: SignalStatisticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignalStatisticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalStatisticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SignalStatistics model
   */
  readonly fields: SignalStatisticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SignalStatistics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalStatisticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SignalStatistics model
   */
  interface SignalStatisticsFieldRefs {
    readonly id: FieldRef<"SignalStatistics", 'String'>
    readonly marketId: FieldRef<"SignalStatistics", 'String'>
    readonly indicatorId: FieldRef<"SignalStatistics", 'String'>
    readonly timeframe: FieldRef<"SignalStatistics", 'String'>
    readonly date: FieldRef<"SignalStatistics", 'DateTime'>
    readonly totalSignals: FieldRef<"SignalStatistics", 'Int'>
    readonly buySignals: FieldRef<"SignalStatistics", 'Int'>
    readonly sellSignals: FieldRef<"SignalStatistics", 'Int'>
    readonly successRate: FieldRef<"SignalStatistics", 'Float'>
    readonly avgPrice: FieldRef<"SignalStatistics", 'Float'>
    readonly minPrice: FieldRef<"SignalStatistics", 'Float'>
    readonly maxPrice: FieldRef<"SignalStatistics", 'Float'>
    readonly createdAt: FieldRef<"SignalStatistics", 'DateTime'>
    readonly updatedAt: FieldRef<"SignalStatistics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SignalStatistics findUnique
   */
  export type SignalStatisticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which SignalStatistics to fetch.
     */
    where: SignalStatisticsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics findUniqueOrThrow
   */
  export type SignalStatisticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which SignalStatistics to fetch.
     */
    where: SignalStatisticsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics findFirst
   */
  export type SignalStatisticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which SignalStatistics to fetch.
     */
    where?: SignalStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalStatistics to fetch.
     */
    orderBy?: SignalStatisticsOrderByWithRelationInput | SignalStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignalStatistics.
     */
    cursor?: SignalStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignalStatistics.
     */
    distinct?: SignalStatisticsScalarFieldEnum | SignalStatisticsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics findFirstOrThrow
   */
  export type SignalStatisticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which SignalStatistics to fetch.
     */
    where?: SignalStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalStatistics to fetch.
     */
    orderBy?: SignalStatisticsOrderByWithRelationInput | SignalStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignalStatistics.
     */
    cursor?: SignalStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignalStatistics.
     */
    distinct?: SignalStatisticsScalarFieldEnum | SignalStatisticsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics findMany
   */
  export type SignalStatisticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which SignalStatistics to fetch.
     */
    where?: SignalStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalStatistics to fetch.
     */
    orderBy?: SignalStatisticsOrderByWithRelationInput | SignalStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SignalStatistics.
     */
    cursor?: SignalStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalStatistics.
     */
    skip?: number
    distinct?: SignalStatisticsScalarFieldEnum | SignalStatisticsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics create
   */
  export type SignalStatisticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * The data needed to create a SignalStatistics.
     */
    data: XOR<SignalStatisticsCreateInput, SignalStatisticsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics createMany
   */
  export type SignalStatisticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SignalStatistics.
     */
    data: SignalStatisticsCreateManyInput | SignalStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignalStatistics createManyAndReturn
   */
  export type SignalStatisticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * The data used to create many SignalStatistics.
     */
    data: SignalStatisticsCreateManyInput | SignalStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignalStatistics update
   */
  export type SignalStatisticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * The data needed to update a SignalStatistics.
     */
    data: XOR<SignalStatisticsUpdateInput, SignalStatisticsUncheckedUpdateInput>
    /**
     * Choose, which SignalStatistics to update.
     */
    where: SignalStatisticsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics updateMany
   */
  export type SignalStatisticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SignalStatistics.
     */
    data: XOR<SignalStatisticsUpdateManyMutationInput, SignalStatisticsUncheckedUpdateManyInput>
    /**
     * Filter which SignalStatistics to update
     */
    where?: SignalStatisticsWhereInput
    /**
     * Limit how many SignalStatistics to update.
     */
    limit?: number
  }

  /**
   * SignalStatistics updateManyAndReturn
   */
  export type SignalStatisticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * The data used to update SignalStatistics.
     */
    data: XOR<SignalStatisticsUpdateManyMutationInput, SignalStatisticsUncheckedUpdateManyInput>
    /**
     * Filter which SignalStatistics to update
     */
    where?: SignalStatisticsWhereInput
    /**
     * Limit how many SignalStatistics to update.
     */
    limit?: number
  }

  /**
   * SignalStatistics upsert
   */
  export type SignalStatisticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * The filter to search for the SignalStatistics to update in case it exists.
     */
    where: SignalStatisticsWhereUniqueInput
    /**
     * In case the SignalStatistics found by the `where` argument doesn't exist, create a new SignalStatistics with this data.
     */
    create: XOR<SignalStatisticsCreateInput, SignalStatisticsUncheckedCreateInput>
    /**
     * In case the SignalStatistics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalStatisticsUpdateInput, SignalStatisticsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics delete
   */
  export type SignalStatisticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
    /**
     * Filter which SignalStatistics to delete.
     */
    where: SignalStatisticsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignalStatistics deleteMany
   */
  export type SignalStatisticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignalStatistics to delete
     */
    where?: SignalStatisticsWhereInput
    /**
     * Limit how many SignalStatistics to delete.
     */
    limit?: number
  }

  /**
   * SignalStatistics without action
   */
  export type SignalStatisticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalStatistics
     */
    select?: SignalStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalStatistics
     */
    omit?: SignalStatisticsOmit<ExtArgs> | null
  }


  /**
   * Model Indicator
   */

  export type AggregateIndicator = {
    _count: IndicatorCountAggregateOutputType | null
    _min: IndicatorMinAggregateOutputType | null
    _max: IndicatorMaxAggregateOutputType | null
  }

  export type IndicatorMinAggregateOutputType = {
    id: string | null
    name: string | null
    tradingViewId: string | null
    description: string | null
    author: string | null
    version: string | null
    documentation: string | null
    isActive: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndicatorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tradingViewId: string | null
    description: string | null
    author: string | null
    version: string | null
    documentation: string | null
    isActive: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndicatorCountAggregateOutputType = {
    id: number
    name: number
    tradingViewId: number
    description: number
    author: number
    version: number
    parameters: number
    outputFields: number
    documentation: number
    isActive: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndicatorMinAggregateInputType = {
    id?: true
    name?: true
    tradingViewId?: true
    description?: true
    author?: true
    version?: true
    documentation?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndicatorMaxAggregateInputType = {
    id?: true
    name?: true
    tradingViewId?: true
    description?: true
    author?: true
    version?: true
    documentation?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndicatorCountAggregateInputType = {
    id?: true
    name?: true
    tradingViewId?: true
    description?: true
    author?: true
    version?: true
    parameters?: true
    outputFields?: true
    documentation?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndicatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicator to aggregate.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Indicators
    **/
    _count?: true | IndicatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndicatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndicatorMaxAggregateInputType
  }

  export type GetIndicatorAggregateType<T extends IndicatorAggregateArgs> = {
        [P in keyof T & keyof AggregateIndicator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndicator[P]>
      : GetScalarType<T[P], AggregateIndicator[P]>
  }




  export type IndicatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndicatorWhereInput
    orderBy?: IndicatorOrderByWithAggregationInput | IndicatorOrderByWithAggregationInput[]
    by: IndicatorScalarFieldEnum[] | IndicatorScalarFieldEnum
    having?: IndicatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndicatorCountAggregateInputType | true
    _min?: IndicatorMinAggregateInputType
    _max?: IndicatorMaxAggregateInputType
  }

  export type IndicatorGroupByOutputType = {
    id: string
    name: string
    tradingViewId: string
    description: string | null
    author: string | null
    version: string | null
    parameters: JsonValue | null
    outputFields: JsonValue
    documentation: string | null
    isActive: boolean
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: IndicatorCountAggregateOutputType | null
    _min: IndicatorMinAggregateOutputType | null
    _max: IndicatorMaxAggregateOutputType | null
  }

  type GetIndicatorGroupByPayload<T extends IndicatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndicatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndicatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndicatorGroupByOutputType[P]>
            : GetScalarType<T[P], IndicatorGroupByOutputType[P]>
        }
      >
    >


  export type IndicatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tradingViewId?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    parameters?: boolean
    outputFields?: boolean
    documentation?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskIndicators?: boolean | Indicator$taskIndicatorsArgs<ExtArgs>
    _count?: boolean | IndicatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicator"]>

  export type IndicatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tradingViewId?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    parameters?: boolean
    outputFields?: boolean
    documentation?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["indicator"]>

  export type IndicatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tradingViewId?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    parameters?: boolean
    outputFields?: boolean
    documentation?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["indicator"]>

  export type IndicatorSelectScalar = {
    id?: boolean
    name?: boolean
    tradingViewId?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    parameters?: boolean
    outputFields?: boolean
    documentation?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndicatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tradingViewId" | "description" | "author" | "version" | "parameters" | "outputFields" | "documentation" | "isActive" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["indicator"]>
  export type IndicatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskIndicators?: boolean | Indicator$taskIndicatorsArgs<ExtArgs>
    _count?: boolean | IndicatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndicatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndicatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndicatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Indicator"
    objects: {
      taskIndicators: Prisma.$TaskIndicatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tradingViewId: string
      description: string | null
      author: string | null
      version: string | null
      parameters: Prisma.JsonValue | null
      outputFields: Prisma.JsonValue
      documentation: string | null
      isActive: boolean
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["indicator"]>
    composites: {}
  }

  type IndicatorGetPayload<S extends boolean | null | undefined | IndicatorDefaultArgs> = $Result.GetResult<Prisma.$IndicatorPayload, S>

  type IndicatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndicatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: IndicatorCountAggregateInputType | true
    }

  export interface IndicatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Indicator'], meta: { name: 'Indicator' } }
    /**
     * Find zero or one Indicator that matches the filter.
     * @param {IndicatorFindUniqueArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndicatorFindUniqueArgs>(args: SelectSubset<T, IndicatorFindUniqueArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Indicator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndicatorFindUniqueOrThrowArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndicatorFindUniqueOrThrowArgs>(args: SelectSubset<T, IndicatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorFindFirstArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndicatorFindFirstArgs>(args?: SelectSubset<T, IndicatorFindFirstArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorFindFirstOrThrowArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndicatorFindFirstOrThrowArgs>(args?: SelectSubset<T, IndicatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indicators
     * const indicators = await prisma.indicator.findMany()
     * 
     * // Get first 10 Indicators
     * const indicators = await prisma.indicator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indicatorWithIdOnly = await prisma.indicator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndicatorFindManyArgs>(args?: SelectSubset<T, IndicatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Indicator.
     * @param {IndicatorCreateArgs} args - Arguments to create a Indicator.
     * @example
     * // Create one Indicator
     * const Indicator = await prisma.indicator.create({
     *   data: {
     *     // ... data to create a Indicator
     *   }
     * })
     * 
     */
    create<T extends IndicatorCreateArgs>(args: SelectSubset<T, IndicatorCreateArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Indicators.
     * @param {IndicatorCreateManyArgs} args - Arguments to create many Indicators.
     * @example
     * // Create many Indicators
     * const indicator = await prisma.indicator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndicatorCreateManyArgs>(args?: SelectSubset<T, IndicatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Indicators and returns the data saved in the database.
     * @param {IndicatorCreateManyAndReturnArgs} args - Arguments to create many Indicators.
     * @example
     * // Create many Indicators
     * const indicator = await prisma.indicator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Indicators and only return the `id`
     * const indicatorWithIdOnly = await prisma.indicator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndicatorCreateManyAndReturnArgs>(args?: SelectSubset<T, IndicatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Indicator.
     * @param {IndicatorDeleteArgs} args - Arguments to delete one Indicator.
     * @example
     * // Delete one Indicator
     * const Indicator = await prisma.indicator.delete({
     *   where: {
     *     // ... filter to delete one Indicator
     *   }
     * })
     * 
     */
    delete<T extends IndicatorDeleteArgs>(args: SelectSubset<T, IndicatorDeleteArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Indicator.
     * @param {IndicatorUpdateArgs} args - Arguments to update one Indicator.
     * @example
     * // Update one Indicator
     * const indicator = await prisma.indicator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndicatorUpdateArgs>(args: SelectSubset<T, IndicatorUpdateArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Indicators.
     * @param {IndicatorDeleteManyArgs} args - Arguments to filter Indicators to delete.
     * @example
     * // Delete a few Indicators
     * const { count } = await prisma.indicator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndicatorDeleteManyArgs>(args?: SelectSubset<T, IndicatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indicators
     * const indicator = await prisma.indicator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndicatorUpdateManyArgs>(args: SelectSubset<T, IndicatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicators and returns the data updated in the database.
     * @param {IndicatorUpdateManyAndReturnArgs} args - Arguments to update many Indicators.
     * @example
     * // Update many Indicators
     * const indicator = await prisma.indicator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Indicators and only return the `id`
     * const indicatorWithIdOnly = await prisma.indicator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndicatorUpdateManyAndReturnArgs>(args: SelectSubset<T, IndicatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Indicator.
     * @param {IndicatorUpsertArgs} args - Arguments to update or create a Indicator.
     * @example
     * // Update or create a Indicator
     * const indicator = await prisma.indicator.upsert({
     *   create: {
     *     // ... data to create a Indicator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indicator we want to update
     *   }
     * })
     */
    upsert<T extends IndicatorUpsertArgs>(args: SelectSubset<T, IndicatorUpsertArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorCountArgs} args - Arguments to filter Indicators to count.
     * @example
     * // Count the number of Indicators
     * const count = await prisma.indicator.count({
     *   where: {
     *     // ... the filter for the Indicators we want to count
     *   }
     * })
    **/
    count<T extends IndicatorCountArgs>(
      args?: Subset<T, IndicatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndicatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indicator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndicatorAggregateArgs>(args: Subset<T, IndicatorAggregateArgs>): Prisma.PrismaPromise<GetIndicatorAggregateType<T>>

    /**
     * Group by Indicator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndicatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndicatorGroupByArgs['orderBy'] }
        : { orderBy?: IndicatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndicatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndicatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Indicator model
   */
  readonly fields: IndicatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Indicator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndicatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskIndicators<T extends Indicator$taskIndicatorsArgs<ExtArgs> = {}>(args?: Subset<T, Indicator$taskIndicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Indicator model
   */
  interface IndicatorFieldRefs {
    readonly id: FieldRef<"Indicator", 'String'>
    readonly name: FieldRef<"Indicator", 'String'>
    readonly tradingViewId: FieldRef<"Indicator", 'String'>
    readonly description: FieldRef<"Indicator", 'String'>
    readonly author: FieldRef<"Indicator", 'String'>
    readonly version: FieldRef<"Indicator", 'String'>
    readonly parameters: FieldRef<"Indicator", 'Json'>
    readonly outputFields: FieldRef<"Indicator", 'Json'>
    readonly documentation: FieldRef<"Indicator", 'String'>
    readonly isActive: FieldRef<"Indicator", 'Boolean'>
    readonly isPublic: FieldRef<"Indicator", 'Boolean'>
    readonly createdAt: FieldRef<"Indicator", 'DateTime'>
    readonly updatedAt: FieldRef<"Indicator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Indicator findUnique
   */
  export type IndicatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where: IndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator findUniqueOrThrow
   */
  export type IndicatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where: IndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator findFirst
   */
  export type IndicatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicators.
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicators.
     */
    distinct?: IndicatorScalarFieldEnum | IndicatorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator findFirstOrThrow
   */
  export type IndicatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicators.
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicators.
     */
    distinct?: IndicatorScalarFieldEnum | IndicatorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator findMany
   */
  export type IndicatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicators to fetch.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Indicators.
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    distinct?: IndicatorScalarFieldEnum | IndicatorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator create
   */
  export type IndicatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Indicator.
     */
    data: XOR<IndicatorCreateInput, IndicatorUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator createMany
   */
  export type IndicatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Indicators.
     */
    data: IndicatorCreateManyInput | IndicatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Indicator createManyAndReturn
   */
  export type IndicatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * The data used to create many Indicators.
     */
    data: IndicatorCreateManyInput | IndicatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Indicator update
   */
  export type IndicatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Indicator.
     */
    data: XOR<IndicatorUpdateInput, IndicatorUncheckedUpdateInput>
    /**
     * Choose, which Indicator to update.
     */
    where: IndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator updateMany
   */
  export type IndicatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Indicators.
     */
    data: XOR<IndicatorUpdateManyMutationInput, IndicatorUncheckedUpdateManyInput>
    /**
     * Filter which Indicators to update
     */
    where?: IndicatorWhereInput
    /**
     * Limit how many Indicators to update.
     */
    limit?: number
  }

  /**
   * Indicator updateManyAndReturn
   */
  export type IndicatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * The data used to update Indicators.
     */
    data: XOR<IndicatorUpdateManyMutationInput, IndicatorUncheckedUpdateManyInput>
    /**
     * Filter which Indicators to update
     */
    where?: IndicatorWhereInput
    /**
     * Limit how many Indicators to update.
     */
    limit?: number
  }

  /**
   * Indicator upsert
   */
  export type IndicatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Indicator to update in case it exists.
     */
    where: IndicatorWhereUniqueInput
    /**
     * In case the Indicator found by the `where` argument doesn't exist, create a new Indicator with this data.
     */
    create: XOR<IndicatorCreateInput, IndicatorUncheckedCreateInput>
    /**
     * In case the Indicator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndicatorUpdateInput, IndicatorUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator delete
   */
  export type IndicatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter which Indicator to delete.
     */
    where: IndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Indicator deleteMany
   */
  export type IndicatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicators to delete
     */
    where?: IndicatorWhereInput
    /**
     * Limit how many Indicators to delete.
     */
    limit?: number
  }

  /**
   * Indicator.taskIndicators
   */
  export type Indicator$taskIndicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    where?: TaskIndicatorWhereInput
    orderBy?: TaskIndicatorOrderByWithRelationInput | TaskIndicatorOrderByWithRelationInput[]
    cursor?: TaskIndicatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskIndicatorScalarFieldEnum | TaskIndicatorScalarFieldEnum[]
  }

  /**
   * Indicator without action
   */
  export type IndicatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
  }


  /**
   * Model UserLoginIp
   */

  export type AggregateUserLoginIp = {
    _count: UserLoginIpCountAggregateOutputType | null
    _min: UserLoginIpMinAggregateOutputType | null
    _max: UserLoginIpMaxAggregateOutputType | null
  }

  export type UserLoginIpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    createdAt: Date | null
  }

  export type UserLoginIpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    createdAt: Date | null
  }

  export type UserLoginIpCountAggregateOutputType = {
    id: number
    userId: number
    ipAddress: number
    userAgent: number
    location: number
    createdAt: number
    _all: number
  }


  export type UserLoginIpMinAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    createdAt?: true
  }

  export type UserLoginIpMaxAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    createdAt?: true
  }

  export type UserLoginIpCountAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type UserLoginIpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLoginIp to aggregate.
     */
    where?: UserLoginIpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginIps to fetch.
     */
    orderBy?: UserLoginIpOrderByWithRelationInput | UserLoginIpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLoginIpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginIps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginIps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLoginIps
    **/
    _count?: true | UserLoginIpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLoginIpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLoginIpMaxAggregateInputType
  }

  export type GetUserLoginIpAggregateType<T extends UserLoginIpAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLoginIp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLoginIp[P]>
      : GetScalarType<T[P], AggregateUserLoginIp[P]>
  }




  export type UserLoginIpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLoginIpWhereInput
    orderBy?: UserLoginIpOrderByWithAggregationInput | UserLoginIpOrderByWithAggregationInput[]
    by: UserLoginIpScalarFieldEnum[] | UserLoginIpScalarFieldEnum
    having?: UserLoginIpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLoginIpCountAggregateInputType | true
    _min?: UserLoginIpMinAggregateInputType
    _max?: UserLoginIpMaxAggregateInputType
  }

  export type UserLoginIpGroupByOutputType = {
    id: string
    userId: string
    ipAddress: string
    userAgent: string | null
    location: string | null
    createdAt: Date
    _count: UserLoginIpCountAggregateOutputType | null
    _min: UserLoginIpMinAggregateOutputType | null
    _max: UserLoginIpMaxAggregateOutputType | null
  }

  type GetUserLoginIpGroupByPayload<T extends UserLoginIpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLoginIpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLoginIpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLoginIpGroupByOutputType[P]>
            : GetScalarType<T[P], UserLoginIpGroupByOutputType[P]>
        }
      >
    >


  export type UserLoginIpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLoginIp"]>

  export type UserLoginIpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLoginIp"]>

  export type UserLoginIpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLoginIp"]>

  export type UserLoginIpSelectScalar = {
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type UserLoginIpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ipAddress" | "userAgent" | "location" | "createdAt", ExtArgs["result"]["userLoginIp"]>

  export type $UserLoginIpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLoginIp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ipAddress: string
      userAgent: string | null
      location: string | null
      createdAt: Date
    }, ExtArgs["result"]["userLoginIp"]>
    composites: {}
  }

  type UserLoginIpGetPayload<S extends boolean | null | undefined | UserLoginIpDefaultArgs> = $Result.GetResult<Prisma.$UserLoginIpPayload, S>

  type UserLoginIpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLoginIpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserLoginIpCountAggregateInputType | true
    }

  export interface UserLoginIpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLoginIp'], meta: { name: 'UserLoginIp' } }
    /**
     * Find zero or one UserLoginIp that matches the filter.
     * @param {UserLoginIpFindUniqueArgs} args - Arguments to find a UserLoginIp
     * @example
     * // Get one UserLoginIp
     * const userLoginIp = await prisma.userLoginIp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLoginIpFindUniqueArgs>(args: SelectSubset<T, UserLoginIpFindUniqueArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLoginIp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLoginIpFindUniqueOrThrowArgs} args - Arguments to find a UserLoginIp
     * @example
     * // Get one UserLoginIp
     * const userLoginIp = await prisma.userLoginIp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLoginIpFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLoginIpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLoginIp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginIpFindFirstArgs} args - Arguments to find a UserLoginIp
     * @example
     * // Get one UserLoginIp
     * const userLoginIp = await prisma.userLoginIp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLoginIpFindFirstArgs>(args?: SelectSubset<T, UserLoginIpFindFirstArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLoginIp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginIpFindFirstOrThrowArgs} args - Arguments to find a UserLoginIp
     * @example
     * // Get one UserLoginIp
     * const userLoginIp = await prisma.userLoginIp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLoginIpFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLoginIpFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLoginIps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginIpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLoginIps
     * const userLoginIps = await prisma.userLoginIp.findMany()
     * 
     * // Get first 10 UserLoginIps
     * const userLoginIps = await prisma.userLoginIp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLoginIpWithIdOnly = await prisma.userLoginIp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLoginIpFindManyArgs>(args?: SelectSubset<T, UserLoginIpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLoginIp.
     * @param {UserLoginIpCreateArgs} args - Arguments to create a UserLoginIp.
     * @example
     * // Create one UserLoginIp
     * const UserLoginIp = await prisma.userLoginIp.create({
     *   data: {
     *     // ... data to create a UserLoginIp
     *   }
     * })
     * 
     */
    create<T extends UserLoginIpCreateArgs>(args: SelectSubset<T, UserLoginIpCreateArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLoginIps.
     * @param {UserLoginIpCreateManyArgs} args - Arguments to create many UserLoginIps.
     * @example
     * // Create many UserLoginIps
     * const userLoginIp = await prisma.userLoginIp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLoginIpCreateManyArgs>(args?: SelectSubset<T, UserLoginIpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLoginIps and returns the data saved in the database.
     * @param {UserLoginIpCreateManyAndReturnArgs} args - Arguments to create many UserLoginIps.
     * @example
     * // Create many UserLoginIps
     * const userLoginIp = await prisma.userLoginIp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLoginIps and only return the `id`
     * const userLoginIpWithIdOnly = await prisma.userLoginIp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLoginIpCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLoginIpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLoginIp.
     * @param {UserLoginIpDeleteArgs} args - Arguments to delete one UserLoginIp.
     * @example
     * // Delete one UserLoginIp
     * const UserLoginIp = await prisma.userLoginIp.delete({
     *   where: {
     *     // ... filter to delete one UserLoginIp
     *   }
     * })
     * 
     */
    delete<T extends UserLoginIpDeleteArgs>(args: SelectSubset<T, UserLoginIpDeleteArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLoginIp.
     * @param {UserLoginIpUpdateArgs} args - Arguments to update one UserLoginIp.
     * @example
     * // Update one UserLoginIp
     * const userLoginIp = await prisma.userLoginIp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLoginIpUpdateArgs>(args: SelectSubset<T, UserLoginIpUpdateArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLoginIps.
     * @param {UserLoginIpDeleteManyArgs} args - Arguments to filter UserLoginIps to delete.
     * @example
     * // Delete a few UserLoginIps
     * const { count } = await prisma.userLoginIp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLoginIpDeleteManyArgs>(args?: SelectSubset<T, UserLoginIpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLoginIps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginIpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLoginIps
     * const userLoginIp = await prisma.userLoginIp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLoginIpUpdateManyArgs>(args: SelectSubset<T, UserLoginIpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLoginIps and returns the data updated in the database.
     * @param {UserLoginIpUpdateManyAndReturnArgs} args - Arguments to update many UserLoginIps.
     * @example
     * // Update many UserLoginIps
     * const userLoginIp = await prisma.userLoginIp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLoginIps and only return the `id`
     * const userLoginIpWithIdOnly = await prisma.userLoginIp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLoginIpUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLoginIpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLoginIp.
     * @param {UserLoginIpUpsertArgs} args - Arguments to update or create a UserLoginIp.
     * @example
     * // Update or create a UserLoginIp
     * const userLoginIp = await prisma.userLoginIp.upsert({
     *   create: {
     *     // ... data to create a UserLoginIp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLoginIp we want to update
     *   }
     * })
     */
    upsert<T extends UserLoginIpUpsertArgs>(args: SelectSubset<T, UserLoginIpUpsertArgs<ExtArgs>>): Prisma__UserLoginIpClient<$Result.GetResult<Prisma.$UserLoginIpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLoginIps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginIpCountArgs} args - Arguments to filter UserLoginIps to count.
     * @example
     * // Count the number of UserLoginIps
     * const count = await prisma.userLoginIp.count({
     *   where: {
     *     // ... the filter for the UserLoginIps we want to count
     *   }
     * })
    **/
    count<T extends UserLoginIpCountArgs>(
      args?: Subset<T, UserLoginIpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLoginIpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLoginIp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginIpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLoginIpAggregateArgs>(args: Subset<T, UserLoginIpAggregateArgs>): Prisma.PrismaPromise<GetUserLoginIpAggregateType<T>>

    /**
     * Group by UserLoginIp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginIpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLoginIpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLoginIpGroupByArgs['orderBy'] }
        : { orderBy?: UserLoginIpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLoginIpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLoginIpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLoginIp model
   */
  readonly fields: UserLoginIpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLoginIp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLoginIpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLoginIp model
   */
  interface UserLoginIpFieldRefs {
    readonly id: FieldRef<"UserLoginIp", 'String'>
    readonly userId: FieldRef<"UserLoginIp", 'String'>
    readonly ipAddress: FieldRef<"UserLoginIp", 'String'>
    readonly userAgent: FieldRef<"UserLoginIp", 'String'>
    readonly location: FieldRef<"UserLoginIp", 'String'>
    readonly createdAt: FieldRef<"UserLoginIp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLoginIp findUnique
   */
  export type UserLoginIpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * Filter, which UserLoginIp to fetch.
     */
    where: UserLoginIpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp findUniqueOrThrow
   */
  export type UserLoginIpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * Filter, which UserLoginIp to fetch.
     */
    where: UserLoginIpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp findFirst
   */
  export type UserLoginIpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * Filter, which UserLoginIp to fetch.
     */
    where?: UserLoginIpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginIps to fetch.
     */
    orderBy?: UserLoginIpOrderByWithRelationInput | UserLoginIpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLoginIps.
     */
    cursor?: UserLoginIpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginIps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginIps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLoginIps.
     */
    distinct?: UserLoginIpScalarFieldEnum | UserLoginIpScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp findFirstOrThrow
   */
  export type UserLoginIpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * Filter, which UserLoginIp to fetch.
     */
    where?: UserLoginIpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginIps to fetch.
     */
    orderBy?: UserLoginIpOrderByWithRelationInput | UserLoginIpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLoginIps.
     */
    cursor?: UserLoginIpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginIps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginIps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLoginIps.
     */
    distinct?: UserLoginIpScalarFieldEnum | UserLoginIpScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp findMany
   */
  export type UserLoginIpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * Filter, which UserLoginIps to fetch.
     */
    where?: UserLoginIpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginIps to fetch.
     */
    orderBy?: UserLoginIpOrderByWithRelationInput | UserLoginIpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLoginIps.
     */
    cursor?: UserLoginIpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginIps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginIps.
     */
    skip?: number
    distinct?: UserLoginIpScalarFieldEnum | UserLoginIpScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp create
   */
  export type UserLoginIpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * The data needed to create a UserLoginIp.
     */
    data: XOR<UserLoginIpCreateInput, UserLoginIpUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp createMany
   */
  export type UserLoginIpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLoginIps.
     */
    data: UserLoginIpCreateManyInput | UserLoginIpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLoginIp createManyAndReturn
   */
  export type UserLoginIpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * The data used to create many UserLoginIps.
     */
    data: UserLoginIpCreateManyInput | UserLoginIpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLoginIp update
   */
  export type UserLoginIpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * The data needed to update a UserLoginIp.
     */
    data: XOR<UserLoginIpUpdateInput, UserLoginIpUncheckedUpdateInput>
    /**
     * Choose, which UserLoginIp to update.
     */
    where: UserLoginIpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp updateMany
   */
  export type UserLoginIpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLoginIps.
     */
    data: XOR<UserLoginIpUpdateManyMutationInput, UserLoginIpUncheckedUpdateManyInput>
    /**
     * Filter which UserLoginIps to update
     */
    where?: UserLoginIpWhereInput
    /**
     * Limit how many UserLoginIps to update.
     */
    limit?: number
  }

  /**
   * UserLoginIp updateManyAndReturn
   */
  export type UserLoginIpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * The data used to update UserLoginIps.
     */
    data: XOR<UserLoginIpUpdateManyMutationInput, UserLoginIpUncheckedUpdateManyInput>
    /**
     * Filter which UserLoginIps to update
     */
    where?: UserLoginIpWhereInput
    /**
     * Limit how many UserLoginIps to update.
     */
    limit?: number
  }

  /**
   * UserLoginIp upsert
   */
  export type UserLoginIpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * The filter to search for the UserLoginIp to update in case it exists.
     */
    where: UserLoginIpWhereUniqueInput
    /**
     * In case the UserLoginIp found by the `where` argument doesn't exist, create a new UserLoginIp with this data.
     */
    create: XOR<UserLoginIpCreateInput, UserLoginIpUncheckedCreateInput>
    /**
     * In case the UserLoginIp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLoginIpUpdateInput, UserLoginIpUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp delete
   */
  export type UserLoginIpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
    /**
     * Filter which UserLoginIp to delete.
     */
    where: UserLoginIpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLoginIp deleteMany
   */
  export type UserLoginIpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLoginIps to delete
     */
    where?: UserLoginIpWhereInput
    /**
     * Limit how many UserLoginIps to delete.
     */
    limit?: number
  }

  /**
   * UserLoginIp without action
   */
  export type UserLoginIpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginIp
     */
    select?: UserLoginIpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLoginIp
     */
    omit?: UserLoginIpOmit<ExtArgs> | null
  }


  /**
   * Model CommonLog
   */

  export type AggregateCommonLog = {
    _count: CommonLogCountAggregateOutputType | null
    _min: CommonLogMinAggregateOutputType | null
    _max: CommonLogMaxAggregateOutputType | null
  }

  export type CommonLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    detail: string | null
    createdAt: Date | null
  }

  export type CommonLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    detail: string | null
    createdAt: Date | null
  }

  export type CommonLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    detail: number
    createdAt: number
    _all: number
  }


  export type CommonLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    detail?: true
    createdAt?: true
  }

  export type CommonLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    detail?: true
    createdAt?: true
  }

  export type CommonLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    detail?: true
    createdAt?: true
    _all?: true
  }

  export type CommonLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommonLog to aggregate.
     */
    where?: CommonLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommonLogs to fetch.
     */
    orderBy?: CommonLogOrderByWithRelationInput | CommonLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommonLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommonLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommonLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommonLogs
    **/
    _count?: true | CommonLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommonLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommonLogMaxAggregateInputType
  }

  export type GetCommonLogAggregateType<T extends CommonLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCommonLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommonLog[P]>
      : GetScalarType<T[P], AggregateCommonLog[P]>
  }




  export type CommonLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommonLogWhereInput
    orderBy?: CommonLogOrderByWithAggregationInput | CommonLogOrderByWithAggregationInput[]
    by: CommonLogScalarFieldEnum[] | CommonLogScalarFieldEnum
    having?: CommonLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommonLogCountAggregateInputType | true
    _min?: CommonLogMinAggregateInputType
    _max?: CommonLogMaxAggregateInputType
  }

  export type CommonLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    detail: string | null
    createdAt: Date
    _count: CommonLogCountAggregateOutputType | null
    _min: CommonLogMinAggregateOutputType | null
    _max: CommonLogMaxAggregateOutputType | null
  }

  type GetCommonLogGroupByPayload<T extends CommonLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommonLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommonLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommonLogGroupByOutputType[P]>
            : GetScalarType<T[P], CommonLogGroupByOutputType[P]>
        }
      >
    >


  export type CommonLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["commonLog"]>

  export type CommonLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["commonLog"]>

  export type CommonLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["commonLog"]>

  export type CommonLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
  }

  export type CommonLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "detail" | "createdAt", ExtArgs["result"]["commonLog"]>

  export type $CommonLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommonLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      detail: string | null
      createdAt: Date
    }, ExtArgs["result"]["commonLog"]>
    composites: {}
  }

  type CommonLogGetPayload<S extends boolean | null | undefined | CommonLogDefaultArgs> = $Result.GetResult<Prisma.$CommonLogPayload, S>

  type CommonLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommonLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CommonLogCountAggregateInputType | true
    }

  export interface CommonLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommonLog'], meta: { name: 'CommonLog' } }
    /**
     * Find zero or one CommonLog that matches the filter.
     * @param {CommonLogFindUniqueArgs} args - Arguments to find a CommonLog
     * @example
     * // Get one CommonLog
     * const commonLog = await prisma.commonLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommonLogFindUniqueArgs>(args: SelectSubset<T, CommonLogFindUniqueArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommonLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommonLogFindUniqueOrThrowArgs} args - Arguments to find a CommonLog
     * @example
     * // Get one CommonLog
     * const commonLog = await prisma.commonLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommonLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CommonLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommonLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommonLogFindFirstArgs} args - Arguments to find a CommonLog
     * @example
     * // Get one CommonLog
     * const commonLog = await prisma.commonLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommonLogFindFirstArgs>(args?: SelectSubset<T, CommonLogFindFirstArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommonLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommonLogFindFirstOrThrowArgs} args - Arguments to find a CommonLog
     * @example
     * // Get one CommonLog
     * const commonLog = await prisma.commonLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommonLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CommonLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommonLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommonLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommonLogs
     * const commonLogs = await prisma.commonLog.findMany()
     * 
     * // Get first 10 CommonLogs
     * const commonLogs = await prisma.commonLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commonLogWithIdOnly = await prisma.commonLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommonLogFindManyArgs>(args?: SelectSubset<T, CommonLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommonLog.
     * @param {CommonLogCreateArgs} args - Arguments to create a CommonLog.
     * @example
     * // Create one CommonLog
     * const CommonLog = await prisma.commonLog.create({
     *   data: {
     *     // ... data to create a CommonLog
     *   }
     * })
     * 
     */
    create<T extends CommonLogCreateArgs>(args: SelectSubset<T, CommonLogCreateArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommonLogs.
     * @param {CommonLogCreateManyArgs} args - Arguments to create many CommonLogs.
     * @example
     * // Create many CommonLogs
     * const commonLog = await prisma.commonLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommonLogCreateManyArgs>(args?: SelectSubset<T, CommonLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommonLogs and returns the data saved in the database.
     * @param {CommonLogCreateManyAndReturnArgs} args - Arguments to create many CommonLogs.
     * @example
     * // Create many CommonLogs
     * const commonLog = await prisma.commonLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommonLogs and only return the `id`
     * const commonLogWithIdOnly = await prisma.commonLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommonLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CommonLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommonLog.
     * @param {CommonLogDeleteArgs} args - Arguments to delete one CommonLog.
     * @example
     * // Delete one CommonLog
     * const CommonLog = await prisma.commonLog.delete({
     *   where: {
     *     // ... filter to delete one CommonLog
     *   }
     * })
     * 
     */
    delete<T extends CommonLogDeleteArgs>(args: SelectSubset<T, CommonLogDeleteArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommonLog.
     * @param {CommonLogUpdateArgs} args - Arguments to update one CommonLog.
     * @example
     * // Update one CommonLog
     * const commonLog = await prisma.commonLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommonLogUpdateArgs>(args: SelectSubset<T, CommonLogUpdateArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommonLogs.
     * @param {CommonLogDeleteManyArgs} args - Arguments to filter CommonLogs to delete.
     * @example
     * // Delete a few CommonLogs
     * const { count } = await prisma.commonLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommonLogDeleteManyArgs>(args?: SelectSubset<T, CommonLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommonLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommonLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommonLogs
     * const commonLog = await prisma.commonLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommonLogUpdateManyArgs>(args: SelectSubset<T, CommonLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommonLogs and returns the data updated in the database.
     * @param {CommonLogUpdateManyAndReturnArgs} args - Arguments to update many CommonLogs.
     * @example
     * // Update many CommonLogs
     * const commonLog = await prisma.commonLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommonLogs and only return the `id`
     * const commonLogWithIdOnly = await prisma.commonLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommonLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CommonLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommonLog.
     * @param {CommonLogUpsertArgs} args - Arguments to update or create a CommonLog.
     * @example
     * // Update or create a CommonLog
     * const commonLog = await prisma.commonLog.upsert({
     *   create: {
     *     // ... data to create a CommonLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommonLog we want to update
     *   }
     * })
     */
    upsert<T extends CommonLogUpsertArgs>(args: SelectSubset<T, CommonLogUpsertArgs<ExtArgs>>): Prisma__CommonLogClient<$Result.GetResult<Prisma.$CommonLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommonLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommonLogCountArgs} args - Arguments to filter CommonLogs to count.
     * @example
     * // Count the number of CommonLogs
     * const count = await prisma.commonLog.count({
     *   where: {
     *     // ... the filter for the CommonLogs we want to count
     *   }
     * })
    **/
    count<T extends CommonLogCountArgs>(
      args?: Subset<T, CommonLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommonLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommonLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommonLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommonLogAggregateArgs>(args: Subset<T, CommonLogAggregateArgs>): Prisma.PrismaPromise<GetCommonLogAggregateType<T>>

    /**
     * Group by CommonLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommonLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommonLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommonLogGroupByArgs['orderBy'] }
        : { orderBy?: CommonLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommonLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommonLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommonLog model
   */
  readonly fields: CommonLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommonLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommonLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommonLog model
   */
  interface CommonLogFieldRefs {
    readonly id: FieldRef<"CommonLog", 'String'>
    readonly userId: FieldRef<"CommonLog", 'String'>
    readonly action: FieldRef<"CommonLog", 'String'>
    readonly detail: FieldRef<"CommonLog", 'String'>
    readonly createdAt: FieldRef<"CommonLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommonLog findUnique
   */
  export type CommonLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * Filter, which CommonLog to fetch.
     */
    where: CommonLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog findUniqueOrThrow
   */
  export type CommonLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * Filter, which CommonLog to fetch.
     */
    where: CommonLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog findFirst
   */
  export type CommonLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * Filter, which CommonLog to fetch.
     */
    where?: CommonLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommonLogs to fetch.
     */
    orderBy?: CommonLogOrderByWithRelationInput | CommonLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommonLogs.
     */
    cursor?: CommonLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommonLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommonLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommonLogs.
     */
    distinct?: CommonLogScalarFieldEnum | CommonLogScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog findFirstOrThrow
   */
  export type CommonLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * Filter, which CommonLog to fetch.
     */
    where?: CommonLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommonLogs to fetch.
     */
    orderBy?: CommonLogOrderByWithRelationInput | CommonLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommonLogs.
     */
    cursor?: CommonLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommonLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommonLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommonLogs.
     */
    distinct?: CommonLogScalarFieldEnum | CommonLogScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog findMany
   */
  export type CommonLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * Filter, which CommonLogs to fetch.
     */
    where?: CommonLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommonLogs to fetch.
     */
    orderBy?: CommonLogOrderByWithRelationInput | CommonLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommonLogs.
     */
    cursor?: CommonLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommonLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommonLogs.
     */
    skip?: number
    distinct?: CommonLogScalarFieldEnum | CommonLogScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog create
   */
  export type CommonLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * The data needed to create a CommonLog.
     */
    data: XOR<CommonLogCreateInput, CommonLogUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog createMany
   */
  export type CommonLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommonLogs.
     */
    data: CommonLogCreateManyInput | CommonLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommonLog createManyAndReturn
   */
  export type CommonLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * The data used to create many CommonLogs.
     */
    data: CommonLogCreateManyInput | CommonLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommonLog update
   */
  export type CommonLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * The data needed to update a CommonLog.
     */
    data: XOR<CommonLogUpdateInput, CommonLogUncheckedUpdateInput>
    /**
     * Choose, which CommonLog to update.
     */
    where: CommonLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog updateMany
   */
  export type CommonLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommonLogs.
     */
    data: XOR<CommonLogUpdateManyMutationInput, CommonLogUncheckedUpdateManyInput>
    /**
     * Filter which CommonLogs to update
     */
    where?: CommonLogWhereInput
    /**
     * Limit how many CommonLogs to update.
     */
    limit?: number
  }

  /**
   * CommonLog updateManyAndReturn
   */
  export type CommonLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * The data used to update CommonLogs.
     */
    data: XOR<CommonLogUpdateManyMutationInput, CommonLogUncheckedUpdateManyInput>
    /**
     * Filter which CommonLogs to update
     */
    where?: CommonLogWhereInput
    /**
     * Limit how many CommonLogs to update.
     */
    limit?: number
  }

  /**
   * CommonLog upsert
   */
  export type CommonLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * The filter to search for the CommonLog to update in case it exists.
     */
    where: CommonLogWhereUniqueInput
    /**
     * In case the CommonLog found by the `where` argument doesn't exist, create a new CommonLog with this data.
     */
    create: XOR<CommonLogCreateInput, CommonLogUncheckedCreateInput>
    /**
     * In case the CommonLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommonLogUpdateInput, CommonLogUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog delete
   */
  export type CommonLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
    /**
     * Filter which CommonLog to delete.
     */
    where: CommonLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CommonLog deleteMany
   */
  export type CommonLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommonLogs to delete
     */
    where?: CommonLogWhereInput
    /**
     * Limit how many CommonLogs to delete.
     */
    limit?: number
  }

  /**
   * CommonLog without action
   */
  export type CommonLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommonLog
     */
    select?: CommonLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommonLog
     */
    omit?: CommonLogOmit<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type MarketSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type MarketMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    symbol: string | null
    type: $Enums.MarketType | null
    exchange: string | null
    fullExchangeName: string | null
    displayName: string | null
    description: string | null
    icon: string | null
    cryptoType: $Enums.CryptoType | null
    baseCurrency: string | null
    quoteCurrency: string | null
    industry: string | null
    sector: string | null
    isActive: boolean | null
    isPriority: boolean | null
    sortOrder: number | null
    lastSyncAt: Date | null
    syncStatus: string | null
    syncError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    symbol: string | null
    type: $Enums.MarketType | null
    exchange: string | null
    fullExchangeName: string | null
    displayName: string | null
    description: string | null
    icon: string | null
    cryptoType: $Enums.CryptoType | null
    baseCurrency: string | null
    quoteCurrency: string | null
    industry: string | null
    sector: string | null
    isActive: boolean | null
    isPriority: boolean | null
    sortOrder: number | null
    lastSyncAt: Date | null
    syncStatus: string | null
    syncError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    name: number
    code: number
    symbol: number
    type: number
    exchange: number
    fullExchangeName: number
    displayName: number
    description: number
    icon: number
    cryptoType: number
    baseCurrency: number
    quoteCurrency: number
    industry: number
    sector: number
    isActive: number
    isPriority: number
    sortOrder: number
    lastSyncAt: number
    syncStatus: number
    syncError: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketAvgAggregateInputType = {
    sortOrder?: true
  }

  export type MarketSumAggregateInputType = {
    sortOrder?: true
  }

  export type MarketMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    type?: true
    exchange?: true
    fullExchangeName?: true
    displayName?: true
    description?: true
    icon?: true
    cryptoType?: true
    baseCurrency?: true
    quoteCurrency?: true
    industry?: true
    sector?: true
    isActive?: true
    isPriority?: true
    sortOrder?: true
    lastSyncAt?: true
    syncStatus?: true
    syncError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    type?: true
    exchange?: true
    fullExchangeName?: true
    displayName?: true
    description?: true
    icon?: true
    cryptoType?: true
    baseCurrency?: true
    quoteCurrency?: true
    industry?: true
    sector?: true
    isActive?: true
    isPriority?: true
    sortOrder?: true
    lastSyncAt?: true
    syncStatus?: true
    syncError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    type?: true
    exchange?: true
    fullExchangeName?: true
    displayName?: true
    description?: true
    icon?: true
    cryptoType?: true
    baseCurrency?: true
    quoteCurrency?: true
    industry?: true
    sector?: true
    isActive?: true
    isPriority?: true
    sortOrder?: true
    lastSyncAt?: true
    syncStatus?: true
    syncError?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _avg?: MarketAvgAggregateInputType
    _sum?: MarketSumAggregateInputType
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: string
    name: string
    code: string
    symbol: string
    type: $Enums.MarketType
    exchange: string | null
    fullExchangeName: string | null
    displayName: string | null
    description: string | null
    icon: string | null
    cryptoType: $Enums.CryptoType | null
    baseCurrency: string | null
    quoteCurrency: string | null
    industry: string | null
    sector: string | null
    isActive: boolean
    isPriority: boolean
    sortOrder: number
    lastSyncAt: Date | null
    syncStatus: string | null
    syncError: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    exchange?: boolean
    fullExchangeName?: boolean
    displayName?: boolean
    description?: boolean
    icon?: boolean
    cryptoType?: boolean
    baseCurrency?: boolean
    quoteCurrency?: boolean
    industry?: boolean
    sector?: boolean
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | Market$tasksArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    exchange?: boolean
    fullExchangeName?: boolean
    displayName?: boolean
    description?: boolean
    icon?: boolean
    cryptoType?: boolean
    baseCurrency?: boolean
    quoteCurrency?: boolean
    industry?: boolean
    sector?: boolean
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    exchange?: boolean
    fullExchangeName?: boolean
    displayName?: boolean
    description?: boolean
    icon?: boolean
    cryptoType?: boolean
    baseCurrency?: boolean
    quoteCurrency?: boolean
    industry?: boolean
    sector?: boolean
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    exchange?: boolean
    fullExchangeName?: boolean
    displayName?: boolean
    description?: boolean
    icon?: boolean
    cryptoType?: boolean
    baseCurrency?: boolean
    quoteCurrency?: boolean
    industry?: boolean
    sector?: boolean
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "symbol" | "type" | "exchange" | "fullExchangeName" | "displayName" | "description" | "icon" | "cryptoType" | "baseCurrency" | "quoteCurrency" | "industry" | "sector" | "isActive" | "isPriority" | "sortOrder" | "lastSyncAt" | "syncStatus" | "syncError" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Market$tasksArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      symbol: string
      type: $Enums.MarketType
      exchange: string | null
      fullExchangeName: string | null
      displayName: string | null
      description: string | null
      icon: string | null
      cryptoType: $Enums.CryptoType | null
      baseCurrency: string | null
      quoteCurrency: string | null
      industry: string | null
      sector: string | null
      isActive: boolean
      isPriority: boolean
      sortOrder: number
      lastSyncAt: Date | null
      syncStatus: string | null
      syncError: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Market$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Market$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'String'>
    readonly name: FieldRef<"Market", 'String'>
    readonly code: FieldRef<"Market", 'String'>
    readonly symbol: FieldRef<"Market", 'String'>
    readonly type: FieldRef<"Market", 'MarketType'>
    readonly exchange: FieldRef<"Market", 'String'>
    readonly fullExchangeName: FieldRef<"Market", 'String'>
    readonly displayName: FieldRef<"Market", 'String'>
    readonly description: FieldRef<"Market", 'String'>
    readonly icon: FieldRef<"Market", 'String'>
    readonly cryptoType: FieldRef<"Market", 'CryptoType'>
    readonly baseCurrency: FieldRef<"Market", 'String'>
    readonly quoteCurrency: FieldRef<"Market", 'String'>
    readonly industry: FieldRef<"Market", 'String'>
    readonly sector: FieldRef<"Market", 'String'>
    readonly isActive: FieldRef<"Market", 'Boolean'>
    readonly isPriority: FieldRef<"Market", 'Boolean'>
    readonly sortOrder: FieldRef<"Market", 'Int'>
    readonly lastSyncAt: FieldRef<"Market", 'DateTime'>
    readonly syncStatus: FieldRef<"Market", 'String'>
    readonly syncError: FieldRef<"Market", 'String'>
    readonly metadata: FieldRef<"Market", 'Json'>
    readonly createdAt: FieldRef<"Market", 'DateTime'>
    readonly updatedAt: FieldRef<"Market", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.tasks
   */
  export type Market$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    range: number | null
    scheduleInterval: number | null
  }

  export type TaskSumAggregateOutputType = {
    range: number | null
    scheduleInterval: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    marketId: string | null
    timeframe: $Enums.Timeframe | null
    range: number | null
    executionMode: $Enums.ExecutionMode | null
    cronExpression: string | null
    scheduleInterval: number | null
    status: $Enums.TaskStatus | null
    lastExecutedAt: Date | null
    nextExecutionAt: Date | null
    errorMessage: string | null
    enableNotification: boolean | null
    dingTalkWebhookId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    marketId: string | null
    timeframe: $Enums.Timeframe | null
    range: number | null
    executionMode: $Enums.ExecutionMode | null
    cronExpression: string | null
    scheduleInterval: number | null
    status: $Enums.TaskStatus | null
    lastExecutedAt: Date | null
    nextExecutionAt: Date | null
    errorMessage: string | null
    enableNotification: boolean | null
    dingTalkWebhookId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    name: number
    description: number
    marketId: number
    timeframe: number
    range: number
    executionMode: number
    cronExpression: number
    scheduleInterval: number
    status: number
    lastExecutedAt: number
    nextExecutionAt: number
    errorMessage: number
    enableNotification: number
    notificationChannels: number
    dingTalkWebhookId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    range?: true
    scheduleInterval?: true
  }

  export type TaskSumAggregateInputType = {
    range?: true
    scheduleInterval?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    marketId?: true
    timeframe?: true
    range?: true
    executionMode?: true
    cronExpression?: true
    scheduleInterval?: true
    status?: true
    lastExecutedAt?: true
    nextExecutionAt?: true
    errorMessage?: true
    enableNotification?: true
    dingTalkWebhookId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    marketId?: true
    timeframe?: true
    range?: true
    executionMode?: true
    cronExpression?: true
    scheduleInterval?: true
    status?: true
    lastExecutedAt?: true
    nextExecutionAt?: true
    errorMessage?: true
    enableNotification?: true
    dingTalkWebhookId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    marketId?: true
    timeframe?: true
    range?: true
    executionMode?: true
    cronExpression?: true
    scheduleInterval?: true
    status?: true
    lastExecutedAt?: true
    nextExecutionAt?: true
    errorMessage?: true
    enableNotification?: true
    notificationChannels?: true
    dingTalkWebhookId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    name: string
    description: string | null
    marketId: string
    timeframe: $Enums.Timeframe
    range: number
    executionMode: $Enums.ExecutionMode
    cronExpression: string | null
    scheduleInterval: number | null
    status: $Enums.TaskStatus
    lastExecutedAt: Date | null
    nextExecutionAt: Date | null
    errorMessage: string | null
    enableNotification: boolean
    notificationChannels: JsonValue | null
    dingTalkWebhookId: string | null
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    marketId?: boolean
    timeframe?: boolean
    range?: boolean
    executionMode?: boolean
    cronExpression?: boolean
    scheduleInterval?: boolean
    status?: boolean
    lastExecutedAt?: boolean
    nextExecutionAt?: boolean
    errorMessage?: boolean
    enableNotification?: boolean
    notificationChannels?: boolean
    dingTalkWebhookId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    dingTalkWebhook?: boolean | Task$dingTalkWebhookArgs<ExtArgs>
    taskIndicators?: boolean | Task$taskIndicatorsArgs<ExtArgs>
    executions?: boolean | Task$executionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    marketId?: boolean
    timeframe?: boolean
    range?: boolean
    executionMode?: boolean
    cronExpression?: boolean
    scheduleInterval?: boolean
    status?: boolean
    lastExecutedAt?: boolean
    nextExecutionAt?: boolean
    errorMessage?: boolean
    enableNotification?: boolean
    notificationChannels?: boolean
    dingTalkWebhookId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    dingTalkWebhook?: boolean | Task$dingTalkWebhookArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    marketId?: boolean
    timeframe?: boolean
    range?: boolean
    executionMode?: boolean
    cronExpression?: boolean
    scheduleInterval?: boolean
    status?: boolean
    lastExecutedAt?: boolean
    nextExecutionAt?: boolean
    errorMessage?: boolean
    enableNotification?: boolean
    notificationChannels?: boolean
    dingTalkWebhookId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    dingTalkWebhook?: boolean | Task$dingTalkWebhookArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    marketId?: boolean
    timeframe?: boolean
    range?: boolean
    executionMode?: boolean
    cronExpression?: boolean
    scheduleInterval?: boolean
    status?: boolean
    lastExecutedAt?: boolean
    nextExecutionAt?: boolean
    errorMessage?: boolean
    enableNotification?: boolean
    notificationChannels?: boolean
    dingTalkWebhookId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "marketId" | "timeframe" | "range" | "executionMode" | "cronExpression" | "scheduleInterval" | "status" | "lastExecutedAt" | "nextExecutionAt" | "errorMessage" | "enableNotification" | "notificationChannels" | "dingTalkWebhookId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    dingTalkWebhook?: boolean | Task$dingTalkWebhookArgs<ExtArgs>
    taskIndicators?: boolean | Task$taskIndicatorsArgs<ExtArgs>
    executions?: boolean | Task$executionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    dingTalkWebhook?: boolean | Task$dingTalkWebhookArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    dingTalkWebhook?: boolean | Task$dingTalkWebhookArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
      dingTalkWebhook: Prisma.$DingTalkWebhookPayload<ExtArgs> | null
      taskIndicators: Prisma.$TaskIndicatorPayload<ExtArgs>[]
      executions: Prisma.$TaskExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      marketId: string
      timeframe: $Enums.Timeframe
      range: number
      executionMode: $Enums.ExecutionMode
      cronExpression: string | null
      scheduleInterval: number | null
      status: $Enums.TaskStatus
      lastExecutedAt: Date | null
      nextExecutionAt: Date | null
      errorMessage: string | null
      enableNotification: boolean
      notificationChannels: Prisma.JsonValue | null
      dingTalkWebhookId: string | null
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dingTalkWebhook<T extends Task$dingTalkWebhookArgs<ExtArgs> = {}>(args?: Subset<T, Task$dingTalkWebhookArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    taskIndicators<T extends Task$taskIndicatorsArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskIndicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    executions<T extends Task$executionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly name: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly marketId: FieldRef<"Task", 'String'>
    readonly timeframe: FieldRef<"Task", 'Timeframe'>
    readonly range: FieldRef<"Task", 'Int'>
    readonly executionMode: FieldRef<"Task", 'ExecutionMode'>
    readonly cronExpression: FieldRef<"Task", 'String'>
    readonly scheduleInterval: FieldRef<"Task", 'Int'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly lastExecutedAt: FieldRef<"Task", 'DateTime'>
    readonly nextExecutionAt: FieldRef<"Task", 'DateTime'>
    readonly errorMessage: FieldRef<"Task", 'String'>
    readonly enableNotification: FieldRef<"Task", 'Boolean'>
    readonly notificationChannels: FieldRef<"Task", 'Json'>
    readonly dingTalkWebhookId: FieldRef<"Task", 'String'>
    readonly createdBy: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.dingTalkWebhook
   */
  export type Task$dingTalkWebhookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    where?: DingTalkWebhookWhereInput
  }

  /**
   * Task.taskIndicators
   */
  export type Task$taskIndicatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    where?: TaskIndicatorWhereInput
    orderBy?: TaskIndicatorOrderByWithRelationInput | TaskIndicatorOrderByWithRelationInput[]
    cursor?: TaskIndicatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskIndicatorScalarFieldEnum | TaskIndicatorScalarFieldEnum[]
  }

  /**
   * Task.executions
   */
  export type Task$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    where?: TaskExecutionWhereInput
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    cursor?: TaskExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskIndicator
   */

  export type AggregateTaskIndicator = {
    _count: TaskIndicatorCountAggregateOutputType | null
    _avg: TaskIndicatorAvgAggregateOutputType | null
    _sum: TaskIndicatorSumAggregateOutputType | null
    _min: TaskIndicatorMinAggregateOutputType | null
    _max: TaskIndicatorMaxAggregateOutputType | null
  }

  export type TaskIndicatorAvgAggregateOutputType = {
    priority: number | null
  }

  export type TaskIndicatorSumAggregateOutputType = {
    priority: number | null
  }

  export type TaskIndicatorMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    indicatorId: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type TaskIndicatorMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    indicatorId: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type TaskIndicatorCountAggregateOutputType = {
    id: number
    taskId: number
    indicatorId: number
    priority: number
    overrideParameters: number
    createdAt: number
    _all: number
  }


  export type TaskIndicatorAvgAggregateInputType = {
    priority?: true
  }

  export type TaskIndicatorSumAggregateInputType = {
    priority?: true
  }

  export type TaskIndicatorMinAggregateInputType = {
    id?: true
    taskId?: true
    indicatorId?: true
    priority?: true
    createdAt?: true
  }

  export type TaskIndicatorMaxAggregateInputType = {
    id?: true
    taskId?: true
    indicatorId?: true
    priority?: true
    createdAt?: true
  }

  export type TaskIndicatorCountAggregateInputType = {
    id?: true
    taskId?: true
    indicatorId?: true
    priority?: true
    overrideParameters?: true
    createdAt?: true
    _all?: true
  }

  export type TaskIndicatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskIndicator to aggregate.
     */
    where?: TaskIndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskIndicators to fetch.
     */
    orderBy?: TaskIndicatorOrderByWithRelationInput | TaskIndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskIndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskIndicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskIndicators
    **/
    _count?: true | TaskIndicatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskIndicatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskIndicatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskIndicatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskIndicatorMaxAggregateInputType
  }

  export type GetTaskIndicatorAggregateType<T extends TaskIndicatorAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskIndicator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskIndicator[P]>
      : GetScalarType<T[P], AggregateTaskIndicator[P]>
  }




  export type TaskIndicatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskIndicatorWhereInput
    orderBy?: TaskIndicatorOrderByWithAggregationInput | TaskIndicatorOrderByWithAggregationInput[]
    by: TaskIndicatorScalarFieldEnum[] | TaskIndicatorScalarFieldEnum
    having?: TaskIndicatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskIndicatorCountAggregateInputType | true
    _avg?: TaskIndicatorAvgAggregateInputType
    _sum?: TaskIndicatorSumAggregateInputType
    _min?: TaskIndicatorMinAggregateInputType
    _max?: TaskIndicatorMaxAggregateInputType
  }

  export type TaskIndicatorGroupByOutputType = {
    id: string
    taskId: string
    indicatorId: string
    priority: number
    overrideParameters: JsonValue | null
    createdAt: Date
    _count: TaskIndicatorCountAggregateOutputType | null
    _avg: TaskIndicatorAvgAggregateOutputType | null
    _sum: TaskIndicatorSumAggregateOutputType | null
    _min: TaskIndicatorMinAggregateOutputType | null
    _max: TaskIndicatorMaxAggregateOutputType | null
  }

  type GetTaskIndicatorGroupByPayload<T extends TaskIndicatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskIndicatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskIndicatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskIndicatorGroupByOutputType[P]>
            : GetScalarType<T[P], TaskIndicatorGroupByOutputType[P]>
        }
      >
    >


  export type TaskIndicatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    indicatorId?: boolean
    priority?: boolean
    overrideParameters?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicator?: boolean | IndicatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskIndicator"]>

  export type TaskIndicatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    indicatorId?: boolean
    priority?: boolean
    overrideParameters?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicator?: boolean | IndicatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskIndicator"]>

  export type TaskIndicatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    indicatorId?: boolean
    priority?: boolean
    overrideParameters?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicator?: boolean | IndicatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskIndicator"]>

  export type TaskIndicatorSelectScalar = {
    id?: boolean
    taskId?: boolean
    indicatorId?: boolean
    priority?: boolean
    overrideParameters?: boolean
    createdAt?: boolean
  }

  export type TaskIndicatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "indicatorId" | "priority" | "overrideParameters" | "createdAt", ExtArgs["result"]["taskIndicator"]>
  export type TaskIndicatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicator?: boolean | IndicatorDefaultArgs<ExtArgs>
  }
  export type TaskIndicatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicator?: boolean | IndicatorDefaultArgs<ExtArgs>
  }
  export type TaskIndicatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    indicator?: boolean | IndicatorDefaultArgs<ExtArgs>
  }

  export type $TaskIndicatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskIndicator"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      indicator: Prisma.$IndicatorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      indicatorId: string
      priority: number
      overrideParameters: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["taskIndicator"]>
    composites: {}
  }

  type TaskIndicatorGetPayload<S extends boolean | null | undefined | TaskIndicatorDefaultArgs> = $Result.GetResult<Prisma.$TaskIndicatorPayload, S>

  type TaskIndicatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskIndicatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TaskIndicatorCountAggregateInputType | true
    }

  export interface TaskIndicatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskIndicator'], meta: { name: 'TaskIndicator' } }
    /**
     * Find zero or one TaskIndicator that matches the filter.
     * @param {TaskIndicatorFindUniqueArgs} args - Arguments to find a TaskIndicator
     * @example
     * // Get one TaskIndicator
     * const taskIndicator = await prisma.taskIndicator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskIndicatorFindUniqueArgs>(args: SelectSubset<T, TaskIndicatorFindUniqueArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskIndicator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskIndicatorFindUniqueOrThrowArgs} args - Arguments to find a TaskIndicator
     * @example
     * // Get one TaskIndicator
     * const taskIndicator = await prisma.taskIndicator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskIndicatorFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskIndicatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskIndicator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskIndicatorFindFirstArgs} args - Arguments to find a TaskIndicator
     * @example
     * // Get one TaskIndicator
     * const taskIndicator = await prisma.taskIndicator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskIndicatorFindFirstArgs>(args?: SelectSubset<T, TaskIndicatorFindFirstArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskIndicator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskIndicatorFindFirstOrThrowArgs} args - Arguments to find a TaskIndicator
     * @example
     * // Get one TaskIndicator
     * const taskIndicator = await prisma.taskIndicator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskIndicatorFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskIndicatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskIndicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskIndicatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskIndicators
     * const taskIndicators = await prisma.taskIndicator.findMany()
     * 
     * // Get first 10 TaskIndicators
     * const taskIndicators = await prisma.taskIndicator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskIndicatorWithIdOnly = await prisma.taskIndicator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskIndicatorFindManyArgs>(args?: SelectSubset<T, TaskIndicatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskIndicator.
     * @param {TaskIndicatorCreateArgs} args - Arguments to create a TaskIndicator.
     * @example
     * // Create one TaskIndicator
     * const TaskIndicator = await prisma.taskIndicator.create({
     *   data: {
     *     // ... data to create a TaskIndicator
     *   }
     * })
     * 
     */
    create<T extends TaskIndicatorCreateArgs>(args: SelectSubset<T, TaskIndicatorCreateArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskIndicators.
     * @param {TaskIndicatorCreateManyArgs} args - Arguments to create many TaskIndicators.
     * @example
     * // Create many TaskIndicators
     * const taskIndicator = await prisma.taskIndicator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskIndicatorCreateManyArgs>(args?: SelectSubset<T, TaskIndicatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskIndicators and returns the data saved in the database.
     * @param {TaskIndicatorCreateManyAndReturnArgs} args - Arguments to create many TaskIndicators.
     * @example
     * // Create many TaskIndicators
     * const taskIndicator = await prisma.taskIndicator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskIndicators and only return the `id`
     * const taskIndicatorWithIdOnly = await prisma.taskIndicator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskIndicatorCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskIndicatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskIndicator.
     * @param {TaskIndicatorDeleteArgs} args - Arguments to delete one TaskIndicator.
     * @example
     * // Delete one TaskIndicator
     * const TaskIndicator = await prisma.taskIndicator.delete({
     *   where: {
     *     // ... filter to delete one TaskIndicator
     *   }
     * })
     * 
     */
    delete<T extends TaskIndicatorDeleteArgs>(args: SelectSubset<T, TaskIndicatorDeleteArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskIndicator.
     * @param {TaskIndicatorUpdateArgs} args - Arguments to update one TaskIndicator.
     * @example
     * // Update one TaskIndicator
     * const taskIndicator = await prisma.taskIndicator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskIndicatorUpdateArgs>(args: SelectSubset<T, TaskIndicatorUpdateArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskIndicators.
     * @param {TaskIndicatorDeleteManyArgs} args - Arguments to filter TaskIndicators to delete.
     * @example
     * // Delete a few TaskIndicators
     * const { count } = await prisma.taskIndicator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskIndicatorDeleteManyArgs>(args?: SelectSubset<T, TaskIndicatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskIndicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskIndicatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskIndicators
     * const taskIndicator = await prisma.taskIndicator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskIndicatorUpdateManyArgs>(args: SelectSubset<T, TaskIndicatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskIndicators and returns the data updated in the database.
     * @param {TaskIndicatorUpdateManyAndReturnArgs} args - Arguments to update many TaskIndicators.
     * @example
     * // Update many TaskIndicators
     * const taskIndicator = await prisma.taskIndicator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskIndicators and only return the `id`
     * const taskIndicatorWithIdOnly = await prisma.taskIndicator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskIndicatorUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskIndicatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskIndicator.
     * @param {TaskIndicatorUpsertArgs} args - Arguments to update or create a TaskIndicator.
     * @example
     * // Update or create a TaskIndicator
     * const taskIndicator = await prisma.taskIndicator.upsert({
     *   create: {
     *     // ... data to create a TaskIndicator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskIndicator we want to update
     *   }
     * })
     */
    upsert<T extends TaskIndicatorUpsertArgs>(args: SelectSubset<T, TaskIndicatorUpsertArgs<ExtArgs>>): Prisma__TaskIndicatorClient<$Result.GetResult<Prisma.$TaskIndicatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskIndicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskIndicatorCountArgs} args - Arguments to filter TaskIndicators to count.
     * @example
     * // Count the number of TaskIndicators
     * const count = await prisma.taskIndicator.count({
     *   where: {
     *     // ... the filter for the TaskIndicators we want to count
     *   }
     * })
    **/
    count<T extends TaskIndicatorCountArgs>(
      args?: Subset<T, TaskIndicatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskIndicatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskIndicator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskIndicatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskIndicatorAggregateArgs>(args: Subset<T, TaskIndicatorAggregateArgs>): Prisma.PrismaPromise<GetTaskIndicatorAggregateType<T>>

    /**
     * Group by TaskIndicator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskIndicatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskIndicatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskIndicatorGroupByArgs['orderBy'] }
        : { orderBy?: TaskIndicatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskIndicatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskIndicatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskIndicator model
   */
  readonly fields: TaskIndicatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskIndicator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskIndicatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    indicator<T extends IndicatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndicatorDefaultArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskIndicator model
   */
  interface TaskIndicatorFieldRefs {
    readonly id: FieldRef<"TaskIndicator", 'String'>
    readonly taskId: FieldRef<"TaskIndicator", 'String'>
    readonly indicatorId: FieldRef<"TaskIndicator", 'String'>
    readonly priority: FieldRef<"TaskIndicator", 'Int'>
    readonly overrideParameters: FieldRef<"TaskIndicator", 'Json'>
    readonly createdAt: FieldRef<"TaskIndicator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskIndicator findUnique
   */
  export type TaskIndicatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * Filter, which TaskIndicator to fetch.
     */
    where: TaskIndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator findUniqueOrThrow
   */
  export type TaskIndicatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * Filter, which TaskIndicator to fetch.
     */
    where: TaskIndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator findFirst
   */
  export type TaskIndicatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * Filter, which TaskIndicator to fetch.
     */
    where?: TaskIndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskIndicators to fetch.
     */
    orderBy?: TaskIndicatorOrderByWithRelationInput | TaskIndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskIndicators.
     */
    cursor?: TaskIndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskIndicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskIndicators.
     */
    distinct?: TaskIndicatorScalarFieldEnum | TaskIndicatorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator findFirstOrThrow
   */
  export type TaskIndicatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * Filter, which TaskIndicator to fetch.
     */
    where?: TaskIndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskIndicators to fetch.
     */
    orderBy?: TaskIndicatorOrderByWithRelationInput | TaskIndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskIndicators.
     */
    cursor?: TaskIndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskIndicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskIndicators.
     */
    distinct?: TaskIndicatorScalarFieldEnum | TaskIndicatorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator findMany
   */
  export type TaskIndicatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * Filter, which TaskIndicators to fetch.
     */
    where?: TaskIndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskIndicators to fetch.
     */
    orderBy?: TaskIndicatorOrderByWithRelationInput | TaskIndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskIndicators.
     */
    cursor?: TaskIndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskIndicators.
     */
    skip?: number
    distinct?: TaskIndicatorScalarFieldEnum | TaskIndicatorScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator create
   */
  export type TaskIndicatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskIndicator.
     */
    data: XOR<TaskIndicatorCreateInput, TaskIndicatorUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator createMany
   */
  export type TaskIndicatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskIndicators.
     */
    data: TaskIndicatorCreateManyInput | TaskIndicatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskIndicator createManyAndReturn
   */
  export type TaskIndicatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * The data used to create many TaskIndicators.
     */
    data: TaskIndicatorCreateManyInput | TaskIndicatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskIndicator update
   */
  export type TaskIndicatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskIndicator.
     */
    data: XOR<TaskIndicatorUpdateInput, TaskIndicatorUncheckedUpdateInput>
    /**
     * Choose, which TaskIndicator to update.
     */
    where: TaskIndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator updateMany
   */
  export type TaskIndicatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskIndicators.
     */
    data: XOR<TaskIndicatorUpdateManyMutationInput, TaskIndicatorUncheckedUpdateManyInput>
    /**
     * Filter which TaskIndicators to update
     */
    where?: TaskIndicatorWhereInput
    /**
     * Limit how many TaskIndicators to update.
     */
    limit?: number
  }

  /**
   * TaskIndicator updateManyAndReturn
   */
  export type TaskIndicatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * The data used to update TaskIndicators.
     */
    data: XOR<TaskIndicatorUpdateManyMutationInput, TaskIndicatorUncheckedUpdateManyInput>
    /**
     * Filter which TaskIndicators to update
     */
    where?: TaskIndicatorWhereInput
    /**
     * Limit how many TaskIndicators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskIndicator upsert
   */
  export type TaskIndicatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskIndicator to update in case it exists.
     */
    where: TaskIndicatorWhereUniqueInput
    /**
     * In case the TaskIndicator found by the `where` argument doesn't exist, create a new TaskIndicator with this data.
     */
    create: XOR<TaskIndicatorCreateInput, TaskIndicatorUncheckedCreateInput>
    /**
     * In case the TaskIndicator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskIndicatorUpdateInput, TaskIndicatorUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator delete
   */
  export type TaskIndicatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
    /**
     * Filter which TaskIndicator to delete.
     */
    where: TaskIndicatorWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TaskIndicator deleteMany
   */
  export type TaskIndicatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskIndicators to delete
     */
    where?: TaskIndicatorWhereInput
    /**
     * Limit how many TaskIndicators to delete.
     */
    limit?: number
  }

  /**
   * TaskIndicator without action
   */
  export type TaskIndicatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskIndicator
     */
    select?: TaskIndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskIndicator
     */
    omit?: TaskIndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIndicatorInclude<ExtArgs> | null
  }


  /**
   * Model TradingViewConfig
   */

  export type AggregateTradingViewConfig = {
    _count: TradingViewConfigCountAggregateOutputType | null
    _min: TradingViewConfigMinAggregateOutputType | null
    _max: TradingViewConfigMaxAggregateOutputType | null
  }

  export type TradingViewConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    session: string | null
    signature: string | null
    isActive: boolean | null
    isPrimary: boolean | null
    lastUsedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradingViewConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    session: string | null
    signature: string | null
    isActive: boolean | null
    isPrimary: boolean | null
    lastUsedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradingViewConfigCountAggregateOutputType = {
    id: number
    name: number
    description: number
    session: number
    signature: number
    isActive: number
    isPrimary: number
    lastUsedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TradingViewConfigMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    session?: true
    signature?: true
    isActive?: true
    isPrimary?: true
    lastUsedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradingViewConfigMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    session?: true
    signature?: true
    isActive?: true
    isPrimary?: true
    lastUsedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradingViewConfigCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    session?: true
    signature?: true
    isActive?: true
    isPrimary?: true
    lastUsedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TradingViewConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingViewConfig to aggregate.
     */
    where?: TradingViewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingViewConfigs to fetch.
     */
    orderBy?: TradingViewConfigOrderByWithRelationInput | TradingViewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradingViewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingViewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingViewConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradingViewConfigs
    **/
    _count?: true | TradingViewConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradingViewConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradingViewConfigMaxAggregateInputType
  }

  export type GetTradingViewConfigAggregateType<T extends TradingViewConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTradingViewConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradingViewConfig[P]>
      : GetScalarType<T[P], AggregateTradingViewConfig[P]>
  }




  export type TradingViewConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradingViewConfigWhereInput
    orderBy?: TradingViewConfigOrderByWithAggregationInput | TradingViewConfigOrderByWithAggregationInput[]
    by: TradingViewConfigScalarFieldEnum[] | TradingViewConfigScalarFieldEnum
    having?: TradingViewConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradingViewConfigCountAggregateInputType | true
    _min?: TradingViewConfigMinAggregateInputType
    _max?: TradingViewConfigMaxAggregateInputType
  }

  export type TradingViewConfigGroupByOutputType = {
    id: string
    name: string
    description: string | null
    session: string
    signature: string
    isActive: boolean
    isPrimary: boolean
    lastUsedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TradingViewConfigCountAggregateOutputType | null
    _min: TradingViewConfigMinAggregateOutputType | null
    _max: TradingViewConfigMaxAggregateOutputType | null
  }

  type GetTradingViewConfigGroupByPayload<T extends TradingViewConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradingViewConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradingViewConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradingViewConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TradingViewConfigGroupByOutputType[P]>
        }
      >
    >


  export type TradingViewConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    session?: boolean
    signature?: boolean
    isActive?: boolean
    isPrimary?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tradingViewConfig"]>

  export type TradingViewConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    session?: boolean
    signature?: boolean
    isActive?: boolean
    isPrimary?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tradingViewConfig"]>

  export type TradingViewConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    session?: boolean
    signature?: boolean
    isActive?: boolean
    isPrimary?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tradingViewConfig"]>

  export type TradingViewConfigSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    session?: boolean
    signature?: boolean
    isActive?: boolean
    isPrimary?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TradingViewConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "session" | "signature" | "isActive" | "isPrimary" | "lastUsedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["tradingViewConfig"]>

  export type $TradingViewConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradingViewConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      session: string
      signature: string
      isActive: boolean
      isPrimary: boolean
      lastUsedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tradingViewConfig"]>
    composites: {}
  }

  type TradingViewConfigGetPayload<S extends boolean | null | undefined | TradingViewConfigDefaultArgs> = $Result.GetResult<Prisma.$TradingViewConfigPayload, S>

  type TradingViewConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradingViewConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TradingViewConfigCountAggregateInputType | true
    }

  export interface TradingViewConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradingViewConfig'], meta: { name: 'TradingViewConfig' } }
    /**
     * Find zero or one TradingViewConfig that matches the filter.
     * @param {TradingViewConfigFindUniqueArgs} args - Arguments to find a TradingViewConfig
     * @example
     * // Get one TradingViewConfig
     * const tradingViewConfig = await prisma.tradingViewConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradingViewConfigFindUniqueArgs>(args: SelectSubset<T, TradingViewConfigFindUniqueArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradingViewConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradingViewConfigFindUniqueOrThrowArgs} args - Arguments to find a TradingViewConfig
     * @example
     * // Get one TradingViewConfig
     * const tradingViewConfig = await prisma.tradingViewConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradingViewConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TradingViewConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingViewConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingViewConfigFindFirstArgs} args - Arguments to find a TradingViewConfig
     * @example
     * // Get one TradingViewConfig
     * const tradingViewConfig = await prisma.tradingViewConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradingViewConfigFindFirstArgs>(args?: SelectSubset<T, TradingViewConfigFindFirstArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingViewConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingViewConfigFindFirstOrThrowArgs} args - Arguments to find a TradingViewConfig
     * @example
     * // Get one TradingViewConfig
     * const tradingViewConfig = await prisma.tradingViewConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradingViewConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TradingViewConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradingViewConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingViewConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradingViewConfigs
     * const tradingViewConfigs = await prisma.tradingViewConfig.findMany()
     * 
     * // Get first 10 TradingViewConfigs
     * const tradingViewConfigs = await prisma.tradingViewConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradingViewConfigWithIdOnly = await prisma.tradingViewConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradingViewConfigFindManyArgs>(args?: SelectSubset<T, TradingViewConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradingViewConfig.
     * @param {TradingViewConfigCreateArgs} args - Arguments to create a TradingViewConfig.
     * @example
     * // Create one TradingViewConfig
     * const TradingViewConfig = await prisma.tradingViewConfig.create({
     *   data: {
     *     // ... data to create a TradingViewConfig
     *   }
     * })
     * 
     */
    create<T extends TradingViewConfigCreateArgs>(args: SelectSubset<T, TradingViewConfigCreateArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradingViewConfigs.
     * @param {TradingViewConfigCreateManyArgs} args - Arguments to create many TradingViewConfigs.
     * @example
     * // Create many TradingViewConfigs
     * const tradingViewConfig = await prisma.tradingViewConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradingViewConfigCreateManyArgs>(args?: SelectSubset<T, TradingViewConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradingViewConfigs and returns the data saved in the database.
     * @param {TradingViewConfigCreateManyAndReturnArgs} args - Arguments to create many TradingViewConfigs.
     * @example
     * // Create many TradingViewConfigs
     * const tradingViewConfig = await prisma.tradingViewConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradingViewConfigs and only return the `id`
     * const tradingViewConfigWithIdOnly = await prisma.tradingViewConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradingViewConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TradingViewConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradingViewConfig.
     * @param {TradingViewConfigDeleteArgs} args - Arguments to delete one TradingViewConfig.
     * @example
     * // Delete one TradingViewConfig
     * const TradingViewConfig = await prisma.tradingViewConfig.delete({
     *   where: {
     *     // ... filter to delete one TradingViewConfig
     *   }
     * })
     * 
     */
    delete<T extends TradingViewConfigDeleteArgs>(args: SelectSubset<T, TradingViewConfigDeleteArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradingViewConfig.
     * @param {TradingViewConfigUpdateArgs} args - Arguments to update one TradingViewConfig.
     * @example
     * // Update one TradingViewConfig
     * const tradingViewConfig = await prisma.tradingViewConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradingViewConfigUpdateArgs>(args: SelectSubset<T, TradingViewConfigUpdateArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradingViewConfigs.
     * @param {TradingViewConfigDeleteManyArgs} args - Arguments to filter TradingViewConfigs to delete.
     * @example
     * // Delete a few TradingViewConfigs
     * const { count } = await prisma.tradingViewConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradingViewConfigDeleteManyArgs>(args?: SelectSubset<T, TradingViewConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingViewConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingViewConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradingViewConfigs
     * const tradingViewConfig = await prisma.tradingViewConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradingViewConfigUpdateManyArgs>(args: SelectSubset<T, TradingViewConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingViewConfigs and returns the data updated in the database.
     * @param {TradingViewConfigUpdateManyAndReturnArgs} args - Arguments to update many TradingViewConfigs.
     * @example
     * // Update many TradingViewConfigs
     * const tradingViewConfig = await prisma.tradingViewConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradingViewConfigs and only return the `id`
     * const tradingViewConfigWithIdOnly = await prisma.tradingViewConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradingViewConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, TradingViewConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradingViewConfig.
     * @param {TradingViewConfigUpsertArgs} args - Arguments to update or create a TradingViewConfig.
     * @example
     * // Update or create a TradingViewConfig
     * const tradingViewConfig = await prisma.tradingViewConfig.upsert({
     *   create: {
     *     // ... data to create a TradingViewConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradingViewConfig we want to update
     *   }
     * })
     */
    upsert<T extends TradingViewConfigUpsertArgs>(args: SelectSubset<T, TradingViewConfigUpsertArgs<ExtArgs>>): Prisma__TradingViewConfigClient<$Result.GetResult<Prisma.$TradingViewConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradingViewConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingViewConfigCountArgs} args - Arguments to filter TradingViewConfigs to count.
     * @example
     * // Count the number of TradingViewConfigs
     * const count = await prisma.tradingViewConfig.count({
     *   where: {
     *     // ... the filter for the TradingViewConfigs we want to count
     *   }
     * })
    **/
    count<T extends TradingViewConfigCountArgs>(
      args?: Subset<T, TradingViewConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradingViewConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradingViewConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingViewConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradingViewConfigAggregateArgs>(args: Subset<T, TradingViewConfigAggregateArgs>): Prisma.PrismaPromise<GetTradingViewConfigAggregateType<T>>

    /**
     * Group by TradingViewConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingViewConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradingViewConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradingViewConfigGroupByArgs['orderBy'] }
        : { orderBy?: TradingViewConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradingViewConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradingViewConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradingViewConfig model
   */
  readonly fields: TradingViewConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradingViewConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradingViewConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TradingViewConfig model
   */
  interface TradingViewConfigFieldRefs {
    readonly id: FieldRef<"TradingViewConfig", 'String'>
    readonly name: FieldRef<"TradingViewConfig", 'String'>
    readonly description: FieldRef<"TradingViewConfig", 'String'>
    readonly session: FieldRef<"TradingViewConfig", 'String'>
    readonly signature: FieldRef<"TradingViewConfig", 'String'>
    readonly isActive: FieldRef<"TradingViewConfig", 'Boolean'>
    readonly isPrimary: FieldRef<"TradingViewConfig", 'Boolean'>
    readonly lastUsedAt: FieldRef<"TradingViewConfig", 'DateTime'>
    readonly createdAt: FieldRef<"TradingViewConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"TradingViewConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TradingViewConfig findUnique
   */
  export type TradingViewConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * Filter, which TradingViewConfig to fetch.
     */
    where: TradingViewConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig findUniqueOrThrow
   */
  export type TradingViewConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * Filter, which TradingViewConfig to fetch.
     */
    where: TradingViewConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig findFirst
   */
  export type TradingViewConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * Filter, which TradingViewConfig to fetch.
     */
    where?: TradingViewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingViewConfigs to fetch.
     */
    orderBy?: TradingViewConfigOrderByWithRelationInput | TradingViewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingViewConfigs.
     */
    cursor?: TradingViewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingViewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingViewConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingViewConfigs.
     */
    distinct?: TradingViewConfigScalarFieldEnum | TradingViewConfigScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig findFirstOrThrow
   */
  export type TradingViewConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * Filter, which TradingViewConfig to fetch.
     */
    where?: TradingViewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingViewConfigs to fetch.
     */
    orderBy?: TradingViewConfigOrderByWithRelationInput | TradingViewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingViewConfigs.
     */
    cursor?: TradingViewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingViewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingViewConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingViewConfigs.
     */
    distinct?: TradingViewConfigScalarFieldEnum | TradingViewConfigScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig findMany
   */
  export type TradingViewConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * Filter, which TradingViewConfigs to fetch.
     */
    where?: TradingViewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingViewConfigs to fetch.
     */
    orderBy?: TradingViewConfigOrderByWithRelationInput | TradingViewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradingViewConfigs.
     */
    cursor?: TradingViewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingViewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingViewConfigs.
     */
    skip?: number
    distinct?: TradingViewConfigScalarFieldEnum | TradingViewConfigScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig create
   */
  export type TradingViewConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a TradingViewConfig.
     */
    data: XOR<TradingViewConfigCreateInput, TradingViewConfigUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig createMany
   */
  export type TradingViewConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradingViewConfigs.
     */
    data: TradingViewConfigCreateManyInput | TradingViewConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradingViewConfig createManyAndReturn
   */
  export type TradingViewConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * The data used to create many TradingViewConfigs.
     */
    data: TradingViewConfigCreateManyInput | TradingViewConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradingViewConfig update
   */
  export type TradingViewConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a TradingViewConfig.
     */
    data: XOR<TradingViewConfigUpdateInput, TradingViewConfigUncheckedUpdateInput>
    /**
     * Choose, which TradingViewConfig to update.
     */
    where: TradingViewConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig updateMany
   */
  export type TradingViewConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradingViewConfigs.
     */
    data: XOR<TradingViewConfigUpdateManyMutationInput, TradingViewConfigUncheckedUpdateManyInput>
    /**
     * Filter which TradingViewConfigs to update
     */
    where?: TradingViewConfigWhereInput
    /**
     * Limit how many TradingViewConfigs to update.
     */
    limit?: number
  }

  /**
   * TradingViewConfig updateManyAndReturn
   */
  export type TradingViewConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * The data used to update TradingViewConfigs.
     */
    data: XOR<TradingViewConfigUpdateManyMutationInput, TradingViewConfigUncheckedUpdateManyInput>
    /**
     * Filter which TradingViewConfigs to update
     */
    where?: TradingViewConfigWhereInput
    /**
     * Limit how many TradingViewConfigs to update.
     */
    limit?: number
  }

  /**
   * TradingViewConfig upsert
   */
  export type TradingViewConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the TradingViewConfig to update in case it exists.
     */
    where: TradingViewConfigWhereUniqueInput
    /**
     * In case the TradingViewConfig found by the `where` argument doesn't exist, create a new TradingViewConfig with this data.
     */
    create: XOR<TradingViewConfigCreateInput, TradingViewConfigUncheckedCreateInput>
    /**
     * In case the TradingViewConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradingViewConfigUpdateInput, TradingViewConfigUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig delete
   */
  export type TradingViewConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
    /**
     * Filter which TradingViewConfig to delete.
     */
    where: TradingViewConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TradingViewConfig deleteMany
   */
  export type TradingViewConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingViewConfigs to delete
     */
    where?: TradingViewConfigWhereInput
    /**
     * Limit how many TradingViewConfigs to delete.
     */
    limit?: number
  }

  /**
   * TradingViewConfig without action
   */
  export type TradingViewConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingViewConfig
     */
    select?: TradingViewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingViewConfig
     */
    omit?: TradingViewConfigOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    name: string | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    name: string | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    credits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    name: string | null
    credits: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "name" | "credits" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      name: string | null
      credits: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly name: FieldRef<"User", 'String'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model DingTalkWebhook
   */

  export type AggregateDingTalkWebhook = {
    _count: DingTalkWebhookCountAggregateOutputType | null
    _avg: DingTalkWebhookAvgAggregateOutputType | null
    _sum: DingTalkWebhookSumAggregateOutputType | null
    _min: DingTalkWebhookMinAggregateOutputType | null
    _max: DingTalkWebhookMaxAggregateOutputType | null
  }

  export type DingTalkWebhookAvgAggregateOutputType = {
    messageCount: number | null
  }

  export type DingTalkWebhookSumAggregateOutputType = {
    messageCount: number | null
  }

  export type DingTalkWebhookMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    webhookUrl: string | null
    safeWord: string | null
    isActive: boolean | null
    messageCount: number | null
    lastUsedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DingTalkWebhookMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    webhookUrl: string | null
    safeWord: string | null
    isActive: boolean | null
    messageCount: number | null
    lastUsedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DingTalkWebhookCountAggregateOutputType = {
    id: number
    name: number
    description: number
    webhookUrl: number
    safeWord: number
    isActive: number
    messageCount: number
    lastUsedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DingTalkWebhookAvgAggregateInputType = {
    messageCount?: true
  }

  export type DingTalkWebhookSumAggregateInputType = {
    messageCount?: true
  }

  export type DingTalkWebhookMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    webhookUrl?: true
    safeWord?: true
    isActive?: true
    messageCount?: true
    lastUsedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DingTalkWebhookMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    webhookUrl?: true
    safeWord?: true
    isActive?: true
    messageCount?: true
    lastUsedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DingTalkWebhookCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    webhookUrl?: true
    safeWord?: true
    isActive?: true
    messageCount?: true
    lastUsedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DingTalkWebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DingTalkWebhook to aggregate.
     */
    where?: DingTalkWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DingTalkWebhooks to fetch.
     */
    orderBy?: DingTalkWebhookOrderByWithRelationInput | DingTalkWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DingTalkWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DingTalkWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DingTalkWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DingTalkWebhooks
    **/
    _count?: true | DingTalkWebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DingTalkWebhookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DingTalkWebhookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DingTalkWebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DingTalkWebhookMaxAggregateInputType
  }

  export type GetDingTalkWebhookAggregateType<T extends DingTalkWebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateDingTalkWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDingTalkWebhook[P]>
      : GetScalarType<T[P], AggregateDingTalkWebhook[P]>
  }




  export type DingTalkWebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DingTalkWebhookWhereInput
    orderBy?: DingTalkWebhookOrderByWithAggregationInput | DingTalkWebhookOrderByWithAggregationInput[]
    by: DingTalkWebhookScalarFieldEnum[] | DingTalkWebhookScalarFieldEnum
    having?: DingTalkWebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DingTalkWebhookCountAggregateInputType | true
    _avg?: DingTalkWebhookAvgAggregateInputType
    _sum?: DingTalkWebhookSumAggregateInputType
    _min?: DingTalkWebhookMinAggregateInputType
    _max?: DingTalkWebhookMaxAggregateInputType
  }

  export type DingTalkWebhookGroupByOutputType = {
    id: string
    name: string
    description: string | null
    webhookUrl: string
    safeWord: string
    isActive: boolean
    messageCount: number
    lastUsedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DingTalkWebhookCountAggregateOutputType | null
    _avg: DingTalkWebhookAvgAggregateOutputType | null
    _sum: DingTalkWebhookSumAggregateOutputType | null
    _min: DingTalkWebhookMinAggregateOutputType | null
    _max: DingTalkWebhookMaxAggregateOutputType | null
  }

  type GetDingTalkWebhookGroupByPayload<T extends DingTalkWebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DingTalkWebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DingTalkWebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DingTalkWebhookGroupByOutputType[P]>
            : GetScalarType<T[P], DingTalkWebhookGroupByOutputType[P]>
        }
      >
    >


  export type DingTalkWebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    safeWord?: boolean
    isActive?: boolean
    messageCount?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | DingTalkWebhook$tasksArgs<ExtArgs>
    _count?: boolean | DingTalkWebhookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dingTalkWebhook"]>

  export type DingTalkWebhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    safeWord?: boolean
    isActive?: boolean
    messageCount?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dingTalkWebhook"]>

  export type DingTalkWebhookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    safeWord?: boolean
    isActive?: boolean
    messageCount?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dingTalkWebhook"]>

  export type DingTalkWebhookSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    safeWord?: boolean
    isActive?: boolean
    messageCount?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DingTalkWebhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "webhookUrl" | "safeWord" | "isActive" | "messageCount" | "lastUsedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["dingTalkWebhook"]>
  export type DingTalkWebhookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | DingTalkWebhook$tasksArgs<ExtArgs>
    _count?: boolean | DingTalkWebhookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DingTalkWebhookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DingTalkWebhookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DingTalkWebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DingTalkWebhook"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      webhookUrl: string
      safeWord: string
      isActive: boolean
      messageCount: number
      lastUsedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dingTalkWebhook"]>
    composites: {}
  }

  type DingTalkWebhookGetPayload<S extends boolean | null | undefined | DingTalkWebhookDefaultArgs> = $Result.GetResult<Prisma.$DingTalkWebhookPayload, S>

  type DingTalkWebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DingTalkWebhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DingTalkWebhookCountAggregateInputType | true
    }

  export interface DingTalkWebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DingTalkWebhook'], meta: { name: 'DingTalkWebhook' } }
    /**
     * Find zero or one DingTalkWebhook that matches the filter.
     * @param {DingTalkWebhookFindUniqueArgs} args - Arguments to find a DingTalkWebhook
     * @example
     * // Get one DingTalkWebhook
     * const dingTalkWebhook = await prisma.dingTalkWebhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DingTalkWebhookFindUniqueArgs>(args: SelectSubset<T, DingTalkWebhookFindUniqueArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DingTalkWebhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DingTalkWebhookFindUniqueOrThrowArgs} args - Arguments to find a DingTalkWebhook
     * @example
     * // Get one DingTalkWebhook
     * const dingTalkWebhook = await prisma.dingTalkWebhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DingTalkWebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, DingTalkWebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DingTalkWebhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DingTalkWebhookFindFirstArgs} args - Arguments to find a DingTalkWebhook
     * @example
     * // Get one DingTalkWebhook
     * const dingTalkWebhook = await prisma.dingTalkWebhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DingTalkWebhookFindFirstArgs>(args?: SelectSubset<T, DingTalkWebhookFindFirstArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DingTalkWebhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DingTalkWebhookFindFirstOrThrowArgs} args - Arguments to find a DingTalkWebhook
     * @example
     * // Get one DingTalkWebhook
     * const dingTalkWebhook = await prisma.dingTalkWebhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DingTalkWebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, DingTalkWebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DingTalkWebhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DingTalkWebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DingTalkWebhooks
     * const dingTalkWebhooks = await prisma.dingTalkWebhook.findMany()
     * 
     * // Get first 10 DingTalkWebhooks
     * const dingTalkWebhooks = await prisma.dingTalkWebhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dingTalkWebhookWithIdOnly = await prisma.dingTalkWebhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DingTalkWebhookFindManyArgs>(args?: SelectSubset<T, DingTalkWebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DingTalkWebhook.
     * @param {DingTalkWebhookCreateArgs} args - Arguments to create a DingTalkWebhook.
     * @example
     * // Create one DingTalkWebhook
     * const DingTalkWebhook = await prisma.dingTalkWebhook.create({
     *   data: {
     *     // ... data to create a DingTalkWebhook
     *   }
     * })
     * 
     */
    create<T extends DingTalkWebhookCreateArgs>(args: SelectSubset<T, DingTalkWebhookCreateArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DingTalkWebhooks.
     * @param {DingTalkWebhookCreateManyArgs} args - Arguments to create many DingTalkWebhooks.
     * @example
     * // Create many DingTalkWebhooks
     * const dingTalkWebhook = await prisma.dingTalkWebhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DingTalkWebhookCreateManyArgs>(args?: SelectSubset<T, DingTalkWebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DingTalkWebhooks and returns the data saved in the database.
     * @param {DingTalkWebhookCreateManyAndReturnArgs} args - Arguments to create many DingTalkWebhooks.
     * @example
     * // Create many DingTalkWebhooks
     * const dingTalkWebhook = await prisma.dingTalkWebhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DingTalkWebhooks and only return the `id`
     * const dingTalkWebhookWithIdOnly = await prisma.dingTalkWebhook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DingTalkWebhookCreateManyAndReturnArgs>(args?: SelectSubset<T, DingTalkWebhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DingTalkWebhook.
     * @param {DingTalkWebhookDeleteArgs} args - Arguments to delete one DingTalkWebhook.
     * @example
     * // Delete one DingTalkWebhook
     * const DingTalkWebhook = await prisma.dingTalkWebhook.delete({
     *   where: {
     *     // ... filter to delete one DingTalkWebhook
     *   }
     * })
     * 
     */
    delete<T extends DingTalkWebhookDeleteArgs>(args: SelectSubset<T, DingTalkWebhookDeleteArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DingTalkWebhook.
     * @param {DingTalkWebhookUpdateArgs} args - Arguments to update one DingTalkWebhook.
     * @example
     * // Update one DingTalkWebhook
     * const dingTalkWebhook = await prisma.dingTalkWebhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DingTalkWebhookUpdateArgs>(args: SelectSubset<T, DingTalkWebhookUpdateArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DingTalkWebhooks.
     * @param {DingTalkWebhookDeleteManyArgs} args - Arguments to filter DingTalkWebhooks to delete.
     * @example
     * // Delete a few DingTalkWebhooks
     * const { count } = await prisma.dingTalkWebhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DingTalkWebhookDeleteManyArgs>(args?: SelectSubset<T, DingTalkWebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DingTalkWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DingTalkWebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DingTalkWebhooks
     * const dingTalkWebhook = await prisma.dingTalkWebhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DingTalkWebhookUpdateManyArgs>(args: SelectSubset<T, DingTalkWebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DingTalkWebhooks and returns the data updated in the database.
     * @param {DingTalkWebhookUpdateManyAndReturnArgs} args - Arguments to update many DingTalkWebhooks.
     * @example
     * // Update many DingTalkWebhooks
     * const dingTalkWebhook = await prisma.dingTalkWebhook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DingTalkWebhooks and only return the `id`
     * const dingTalkWebhookWithIdOnly = await prisma.dingTalkWebhook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DingTalkWebhookUpdateManyAndReturnArgs>(args: SelectSubset<T, DingTalkWebhookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DingTalkWebhook.
     * @param {DingTalkWebhookUpsertArgs} args - Arguments to update or create a DingTalkWebhook.
     * @example
     * // Update or create a DingTalkWebhook
     * const dingTalkWebhook = await prisma.dingTalkWebhook.upsert({
     *   create: {
     *     // ... data to create a DingTalkWebhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DingTalkWebhook we want to update
     *   }
     * })
     */
    upsert<T extends DingTalkWebhookUpsertArgs>(args: SelectSubset<T, DingTalkWebhookUpsertArgs<ExtArgs>>): Prisma__DingTalkWebhookClient<$Result.GetResult<Prisma.$DingTalkWebhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DingTalkWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DingTalkWebhookCountArgs} args - Arguments to filter DingTalkWebhooks to count.
     * @example
     * // Count the number of DingTalkWebhooks
     * const count = await prisma.dingTalkWebhook.count({
     *   where: {
     *     // ... the filter for the DingTalkWebhooks we want to count
     *   }
     * })
    **/
    count<T extends DingTalkWebhookCountArgs>(
      args?: Subset<T, DingTalkWebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DingTalkWebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DingTalkWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DingTalkWebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DingTalkWebhookAggregateArgs>(args: Subset<T, DingTalkWebhookAggregateArgs>): Prisma.PrismaPromise<GetDingTalkWebhookAggregateType<T>>

    /**
     * Group by DingTalkWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DingTalkWebhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DingTalkWebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DingTalkWebhookGroupByArgs['orderBy'] }
        : { orderBy?: DingTalkWebhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DingTalkWebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDingTalkWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DingTalkWebhook model
   */
  readonly fields: DingTalkWebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DingTalkWebhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DingTalkWebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends DingTalkWebhook$tasksArgs<ExtArgs> = {}>(args?: Subset<T, DingTalkWebhook$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DingTalkWebhook model
   */
  interface DingTalkWebhookFieldRefs {
    readonly id: FieldRef<"DingTalkWebhook", 'String'>
    readonly name: FieldRef<"DingTalkWebhook", 'String'>
    readonly description: FieldRef<"DingTalkWebhook", 'String'>
    readonly webhookUrl: FieldRef<"DingTalkWebhook", 'String'>
    readonly safeWord: FieldRef<"DingTalkWebhook", 'String'>
    readonly isActive: FieldRef<"DingTalkWebhook", 'Boolean'>
    readonly messageCount: FieldRef<"DingTalkWebhook", 'Int'>
    readonly lastUsedAt: FieldRef<"DingTalkWebhook", 'DateTime'>
    readonly createdAt: FieldRef<"DingTalkWebhook", 'DateTime'>
    readonly updatedAt: FieldRef<"DingTalkWebhook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DingTalkWebhook findUnique
   */
  export type DingTalkWebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DingTalkWebhook to fetch.
     */
    where: DingTalkWebhookWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook findUniqueOrThrow
   */
  export type DingTalkWebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DingTalkWebhook to fetch.
     */
    where: DingTalkWebhookWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook findFirst
   */
  export type DingTalkWebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DingTalkWebhook to fetch.
     */
    where?: DingTalkWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DingTalkWebhooks to fetch.
     */
    orderBy?: DingTalkWebhookOrderByWithRelationInput | DingTalkWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DingTalkWebhooks.
     */
    cursor?: DingTalkWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DingTalkWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DingTalkWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DingTalkWebhooks.
     */
    distinct?: DingTalkWebhookScalarFieldEnum | DingTalkWebhookScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook findFirstOrThrow
   */
  export type DingTalkWebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DingTalkWebhook to fetch.
     */
    where?: DingTalkWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DingTalkWebhooks to fetch.
     */
    orderBy?: DingTalkWebhookOrderByWithRelationInput | DingTalkWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DingTalkWebhooks.
     */
    cursor?: DingTalkWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DingTalkWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DingTalkWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DingTalkWebhooks.
     */
    distinct?: DingTalkWebhookScalarFieldEnum | DingTalkWebhookScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook findMany
   */
  export type DingTalkWebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DingTalkWebhooks to fetch.
     */
    where?: DingTalkWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DingTalkWebhooks to fetch.
     */
    orderBy?: DingTalkWebhookOrderByWithRelationInput | DingTalkWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DingTalkWebhooks.
     */
    cursor?: DingTalkWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DingTalkWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DingTalkWebhooks.
     */
    skip?: number
    distinct?: DingTalkWebhookScalarFieldEnum | DingTalkWebhookScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook create
   */
  export type DingTalkWebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * The data needed to create a DingTalkWebhook.
     */
    data: XOR<DingTalkWebhookCreateInput, DingTalkWebhookUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook createMany
   */
  export type DingTalkWebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DingTalkWebhooks.
     */
    data: DingTalkWebhookCreateManyInput | DingTalkWebhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DingTalkWebhook createManyAndReturn
   */
  export type DingTalkWebhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * The data used to create many DingTalkWebhooks.
     */
    data: DingTalkWebhookCreateManyInput | DingTalkWebhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DingTalkWebhook update
   */
  export type DingTalkWebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * The data needed to update a DingTalkWebhook.
     */
    data: XOR<DingTalkWebhookUpdateInput, DingTalkWebhookUncheckedUpdateInput>
    /**
     * Choose, which DingTalkWebhook to update.
     */
    where: DingTalkWebhookWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook updateMany
   */
  export type DingTalkWebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DingTalkWebhooks.
     */
    data: XOR<DingTalkWebhookUpdateManyMutationInput, DingTalkWebhookUncheckedUpdateManyInput>
    /**
     * Filter which DingTalkWebhooks to update
     */
    where?: DingTalkWebhookWhereInput
    /**
     * Limit how many DingTalkWebhooks to update.
     */
    limit?: number
  }

  /**
   * DingTalkWebhook updateManyAndReturn
   */
  export type DingTalkWebhookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * The data used to update DingTalkWebhooks.
     */
    data: XOR<DingTalkWebhookUpdateManyMutationInput, DingTalkWebhookUncheckedUpdateManyInput>
    /**
     * Filter which DingTalkWebhooks to update
     */
    where?: DingTalkWebhookWhereInput
    /**
     * Limit how many DingTalkWebhooks to update.
     */
    limit?: number
  }

  /**
   * DingTalkWebhook upsert
   */
  export type DingTalkWebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * The filter to search for the DingTalkWebhook to update in case it exists.
     */
    where: DingTalkWebhookWhereUniqueInput
    /**
     * In case the DingTalkWebhook found by the `where` argument doesn't exist, create a new DingTalkWebhook with this data.
     */
    create: XOR<DingTalkWebhookCreateInput, DingTalkWebhookUncheckedCreateInput>
    /**
     * In case the DingTalkWebhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DingTalkWebhookUpdateInput, DingTalkWebhookUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook delete
   */
  export type DingTalkWebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
    /**
     * Filter which DingTalkWebhook to delete.
     */
    where: DingTalkWebhookWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DingTalkWebhook deleteMany
   */
  export type DingTalkWebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DingTalkWebhooks to delete
     */
    where?: DingTalkWebhookWhereInput
    /**
     * Limit how many DingTalkWebhooks to delete.
     */
    limit?: number
  }

  /**
   * DingTalkWebhook.tasks
   */
  export type DingTalkWebhook$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * DingTalkWebhook without action
   */
  export type DingTalkWebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DingTalkWebhook
     */
    select?: DingTalkWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DingTalkWebhook
     */
    omit?: DingTalkWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DingTalkWebhookInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TaskExecutionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    status: 'status',
    executedAt: 'executedAt',
    duration: 'duration',
    marketPrice: 'marketPrice',
    marketVolume: 'marketVolume',
    marketData: 'marketData',
    errorMessage: 'errorMessage',
    errorStack: 'errorStack',
    notificationSent: 'notificationSent',
    notificationError: 'notificationError',
    createdAt: 'createdAt'
  };

  export type TaskExecutionScalarFieldEnum = (typeof TaskExecutionScalarFieldEnum)[keyof typeof TaskExecutionScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const IndicatorResultScalarFieldEnum: {
    id: 'id',
    executionId: 'executionId',
    indicatorId: 'indicatorId',
    indicatorName: 'indicatorName',
    outputs: 'outputs',
    signal: 'signal',
    signalTitle: 'signalTitle',
    signalMessage: 'signalMessage',
    signalStrength: 'signalStrength',
    buyAlert: 'buyAlert',
    sellAlert: 'sellAlert',
    customValues: 'customValues',
    createdAt: 'createdAt'
  };

  export type IndicatorResultScalarFieldEnum = (typeof IndicatorResultScalarFieldEnum)[keyof typeof IndicatorResultScalarFieldEnum]


  export const SignalStatisticsScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    indicatorId: 'indicatorId',
    timeframe: 'timeframe',
    date: 'date',
    totalSignals: 'totalSignals',
    buySignals: 'buySignals',
    sellSignals: 'sellSignals',
    successRate: 'successRate',
    avgPrice: 'avgPrice',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SignalStatisticsScalarFieldEnum = (typeof SignalStatisticsScalarFieldEnum)[keyof typeof SignalStatisticsScalarFieldEnum]


  export const IndicatorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tradingViewId: 'tradingViewId',
    description: 'description',
    author: 'author',
    version: 'version',
    parameters: 'parameters',
    outputFields: 'outputFields',
    documentation: 'documentation',
    isActive: 'isActive',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndicatorScalarFieldEnum = (typeof IndicatorScalarFieldEnum)[keyof typeof IndicatorScalarFieldEnum]


  export const UserLoginIpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type UserLoginIpScalarFieldEnum = (typeof UserLoginIpScalarFieldEnum)[keyof typeof UserLoginIpScalarFieldEnum]


  export const CommonLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    detail: 'detail',
    createdAt: 'createdAt'
  };

  export type CommonLogScalarFieldEnum = (typeof CommonLogScalarFieldEnum)[keyof typeof CommonLogScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    symbol: 'symbol',
    type: 'type',
    exchange: 'exchange',
    fullExchangeName: 'fullExchangeName',
    displayName: 'displayName',
    description: 'description',
    icon: 'icon',
    cryptoType: 'cryptoType',
    baseCurrency: 'baseCurrency',
    quoteCurrency: 'quoteCurrency',
    industry: 'industry',
    sector: 'sector',
    isActive: 'isActive',
    isPriority: 'isPriority',
    sortOrder: 'sortOrder',
    lastSyncAt: 'lastSyncAt',
    syncStatus: 'syncStatus',
    syncError: 'syncError',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    marketId: 'marketId',
    timeframe: 'timeframe',
    range: 'range',
    executionMode: 'executionMode',
    cronExpression: 'cronExpression',
    scheduleInterval: 'scheduleInterval',
    status: 'status',
    lastExecutedAt: 'lastExecutedAt',
    nextExecutionAt: 'nextExecutionAt',
    errorMessage: 'errorMessage',
    enableNotification: 'enableNotification',
    notificationChannels: 'notificationChannels',
    dingTalkWebhookId: 'dingTalkWebhookId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskIndicatorScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    indicatorId: 'indicatorId',
    priority: 'priority',
    overrideParameters: 'overrideParameters',
    createdAt: 'createdAt'
  };

  export type TaskIndicatorScalarFieldEnum = (typeof TaskIndicatorScalarFieldEnum)[keyof typeof TaskIndicatorScalarFieldEnum]


  export const TradingViewConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    session: 'session',
    signature: 'signature',
    isActive: 'isActive',
    isPrimary: 'isPrimary',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TradingViewConfigScalarFieldEnum = (typeof TradingViewConfigScalarFieldEnum)[keyof typeof TradingViewConfigScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name',
    credits: 'credits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const DingTalkWebhookScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    webhookUrl: 'webhookUrl',
    safeWord: 'safeWord',
    isActive: 'isActive',
    messageCount: 'messageCount',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DingTalkWebhookScalarFieldEnum = (typeof DingTalkWebhookScalarFieldEnum)[keyof typeof DingTalkWebhookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ExecutionStatus'
   */
  export type EnumExecutionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExecutionStatus'>
    


  /**
   * Reference to a field of type 'ExecutionStatus[]'
   */
  export type ListEnumExecutionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExecutionStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SignalType'
   */
  export type EnumSignalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignalType'>
    


  /**
   * Reference to a field of type 'SignalType[]'
   */
  export type ListEnumSignalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignalType[]'>
    


  /**
   * Reference to a field of type 'MarketType'
   */
  export type EnumMarketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketType'>
    


  /**
   * Reference to a field of type 'MarketType[]'
   */
  export type ListEnumMarketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketType[]'>
    


  /**
   * Reference to a field of type 'CryptoType'
   */
  export type EnumCryptoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CryptoType'>
    


  /**
   * Reference to a field of type 'CryptoType[]'
   */
  export type ListEnumCryptoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CryptoType[]'>
    


  /**
   * Reference to a field of type 'Timeframe'
   */
  export type EnumTimeframeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Timeframe'>
    


  /**
   * Reference to a field of type 'Timeframe[]'
   */
  export type ListEnumTimeframeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Timeframe[]'>
    


  /**
   * Reference to a field of type 'ExecutionMode'
   */
  export type EnumExecutionModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExecutionMode'>
    


  /**
   * Reference to a field of type 'ExecutionMode[]'
   */
  export type ListEnumExecutionModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExecutionMode[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type TaskExecutionWhereInput = {
    AND?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    OR?: TaskExecutionWhereInput[]
    NOT?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    id?: StringFilter<"TaskExecution"> | string
    taskId?: StringFilter<"TaskExecution"> | string
    status?: EnumExecutionStatusFilter<"TaskExecution"> | $Enums.ExecutionStatus
    executedAt?: DateTimeFilter<"TaskExecution"> | Date | string
    duration?: IntNullableFilter<"TaskExecution"> | number | null
    marketPrice?: FloatNullableFilter<"TaskExecution"> | number | null
    marketVolume?: FloatNullableFilter<"TaskExecution"> | number | null
    marketData?: JsonNullableFilter<"TaskExecution">
    errorMessage?: StringNullableFilter<"TaskExecution"> | string | null
    errorStack?: StringNullableFilter<"TaskExecution"> | string | null
    notificationSent?: BoolFilter<"TaskExecution"> | boolean
    notificationError?: StringNullableFilter<"TaskExecution"> | string | null
    createdAt?: DateTimeFilter<"TaskExecution"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    indicatorResults?: IndicatorResultListRelationFilter
  }

  export type TaskExecutionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    duration?: SortOrderInput | SortOrder
    marketPrice?: SortOrderInput | SortOrder
    marketVolume?: SortOrderInput | SortOrder
    marketData?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    errorStack?: SortOrderInput | SortOrder
    notificationSent?: SortOrder
    notificationError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    indicatorResults?: IndicatorResultOrderByRelationAggregateInput
  }

  export type TaskExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    OR?: TaskExecutionWhereInput[]
    NOT?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    taskId?: StringFilter<"TaskExecution"> | string
    status?: EnumExecutionStatusFilter<"TaskExecution"> | $Enums.ExecutionStatus
    executedAt?: DateTimeFilter<"TaskExecution"> | Date | string
    duration?: IntNullableFilter<"TaskExecution"> | number | null
    marketPrice?: FloatNullableFilter<"TaskExecution"> | number | null
    marketVolume?: FloatNullableFilter<"TaskExecution"> | number | null
    marketData?: JsonNullableFilter<"TaskExecution">
    errorMessage?: StringNullableFilter<"TaskExecution"> | string | null
    errorStack?: StringNullableFilter<"TaskExecution"> | string | null
    notificationSent?: BoolFilter<"TaskExecution"> | boolean
    notificationError?: StringNullableFilter<"TaskExecution"> | string | null
    createdAt?: DateTimeFilter<"TaskExecution"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    indicatorResults?: IndicatorResultListRelationFilter
  }, "id">

  export type TaskExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    duration?: SortOrderInput | SortOrder
    marketPrice?: SortOrderInput | SortOrder
    marketVolume?: SortOrderInput | SortOrder
    marketData?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    errorStack?: SortOrderInput | SortOrder
    notificationSent?: SortOrder
    notificationError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskExecutionCountOrderByAggregateInput
    _avg?: TaskExecutionAvgOrderByAggregateInput
    _max?: TaskExecutionMaxOrderByAggregateInput
    _min?: TaskExecutionMinOrderByAggregateInput
    _sum?: TaskExecutionSumOrderByAggregateInput
  }

  export type TaskExecutionScalarWhereWithAggregatesInput = {
    AND?: TaskExecutionScalarWhereWithAggregatesInput | TaskExecutionScalarWhereWithAggregatesInput[]
    OR?: TaskExecutionScalarWhereWithAggregatesInput[]
    NOT?: TaskExecutionScalarWhereWithAggregatesInput | TaskExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskExecution"> | string
    taskId?: StringWithAggregatesFilter<"TaskExecution"> | string
    status?: EnumExecutionStatusWithAggregatesFilter<"TaskExecution"> | $Enums.ExecutionStatus
    executedAt?: DateTimeWithAggregatesFilter<"TaskExecution"> | Date | string
    duration?: IntNullableWithAggregatesFilter<"TaskExecution"> | number | null
    marketPrice?: FloatNullableWithAggregatesFilter<"TaskExecution"> | number | null
    marketVolume?: FloatNullableWithAggregatesFilter<"TaskExecution"> | number | null
    marketData?: JsonNullableWithAggregatesFilter<"TaskExecution">
    errorMessage?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    errorStack?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    notificationSent?: BoolWithAggregatesFilter<"TaskExecution"> | boolean
    notificationError?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaskExecution"> | Date | string
  }

  export type IndicatorResultWhereInput = {
    AND?: IndicatorResultWhereInput | IndicatorResultWhereInput[]
    OR?: IndicatorResultWhereInput[]
    NOT?: IndicatorResultWhereInput | IndicatorResultWhereInput[]
    id?: StringFilter<"IndicatorResult"> | string
    executionId?: StringFilter<"IndicatorResult"> | string
    indicatorId?: StringFilter<"IndicatorResult"> | string
    indicatorName?: StringFilter<"IndicatorResult"> | string
    outputs?: JsonFilter<"IndicatorResult">
    signal?: EnumSignalTypeNullableFilter<"IndicatorResult"> | $Enums.SignalType | null
    signalTitle?: StringNullableFilter<"IndicatorResult"> | string | null
    signalMessage?: StringNullableFilter<"IndicatorResult"> | string | null
    signalStrength?: FloatNullableFilter<"IndicatorResult"> | number | null
    buyAlert?: BoolNullableFilter<"IndicatorResult"> | boolean | null
    sellAlert?: BoolNullableFilter<"IndicatorResult"> | boolean | null
    customValues?: JsonNullableFilter<"IndicatorResult">
    createdAt?: DateTimeFilter<"IndicatorResult"> | Date | string
    execution?: XOR<TaskExecutionScalarRelationFilter, TaskExecutionWhereInput>
  }

  export type IndicatorResultOrderByWithRelationInput = {
    id?: SortOrder
    executionId?: SortOrder
    indicatorId?: SortOrder
    indicatorName?: SortOrder
    outputs?: SortOrder
    signal?: SortOrderInput | SortOrder
    signalTitle?: SortOrderInput | SortOrder
    signalMessage?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    buyAlert?: SortOrderInput | SortOrder
    sellAlert?: SortOrderInput | SortOrder
    customValues?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    execution?: TaskExecutionOrderByWithRelationInput
  }

  export type IndicatorResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IndicatorResultWhereInput | IndicatorResultWhereInput[]
    OR?: IndicatorResultWhereInput[]
    NOT?: IndicatorResultWhereInput | IndicatorResultWhereInput[]
    executionId?: StringFilter<"IndicatorResult"> | string
    indicatorId?: StringFilter<"IndicatorResult"> | string
    indicatorName?: StringFilter<"IndicatorResult"> | string
    outputs?: JsonFilter<"IndicatorResult">
    signal?: EnumSignalTypeNullableFilter<"IndicatorResult"> | $Enums.SignalType | null
    signalTitle?: StringNullableFilter<"IndicatorResult"> | string | null
    signalMessage?: StringNullableFilter<"IndicatorResult"> | string | null
    signalStrength?: FloatNullableFilter<"IndicatorResult"> | number | null
    buyAlert?: BoolNullableFilter<"IndicatorResult"> | boolean | null
    sellAlert?: BoolNullableFilter<"IndicatorResult"> | boolean | null
    customValues?: JsonNullableFilter<"IndicatorResult">
    createdAt?: DateTimeFilter<"IndicatorResult"> | Date | string
    execution?: XOR<TaskExecutionScalarRelationFilter, TaskExecutionWhereInput>
  }, "id">

  export type IndicatorResultOrderByWithAggregationInput = {
    id?: SortOrder
    executionId?: SortOrder
    indicatorId?: SortOrder
    indicatorName?: SortOrder
    outputs?: SortOrder
    signal?: SortOrderInput | SortOrder
    signalTitle?: SortOrderInput | SortOrder
    signalMessage?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    buyAlert?: SortOrderInput | SortOrder
    sellAlert?: SortOrderInput | SortOrder
    customValues?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IndicatorResultCountOrderByAggregateInput
    _avg?: IndicatorResultAvgOrderByAggregateInput
    _max?: IndicatorResultMaxOrderByAggregateInput
    _min?: IndicatorResultMinOrderByAggregateInput
    _sum?: IndicatorResultSumOrderByAggregateInput
  }

  export type IndicatorResultScalarWhereWithAggregatesInput = {
    AND?: IndicatorResultScalarWhereWithAggregatesInput | IndicatorResultScalarWhereWithAggregatesInput[]
    OR?: IndicatorResultScalarWhereWithAggregatesInput[]
    NOT?: IndicatorResultScalarWhereWithAggregatesInput | IndicatorResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndicatorResult"> | string
    executionId?: StringWithAggregatesFilter<"IndicatorResult"> | string
    indicatorId?: StringWithAggregatesFilter<"IndicatorResult"> | string
    indicatorName?: StringWithAggregatesFilter<"IndicatorResult"> | string
    outputs?: JsonWithAggregatesFilter<"IndicatorResult">
    signal?: EnumSignalTypeNullableWithAggregatesFilter<"IndicatorResult"> | $Enums.SignalType | null
    signalTitle?: StringNullableWithAggregatesFilter<"IndicatorResult"> | string | null
    signalMessage?: StringNullableWithAggregatesFilter<"IndicatorResult"> | string | null
    signalStrength?: FloatNullableWithAggregatesFilter<"IndicatorResult"> | number | null
    buyAlert?: BoolNullableWithAggregatesFilter<"IndicatorResult"> | boolean | null
    sellAlert?: BoolNullableWithAggregatesFilter<"IndicatorResult"> | boolean | null
    customValues?: JsonNullableWithAggregatesFilter<"IndicatorResult">
    createdAt?: DateTimeWithAggregatesFilter<"IndicatorResult"> | Date | string
  }

  export type SignalStatisticsWhereInput = {
    AND?: SignalStatisticsWhereInput | SignalStatisticsWhereInput[]
    OR?: SignalStatisticsWhereInput[]
    NOT?: SignalStatisticsWhereInput | SignalStatisticsWhereInput[]
    id?: StringFilter<"SignalStatistics"> | string
    marketId?: StringFilter<"SignalStatistics"> | string
    indicatorId?: StringFilter<"SignalStatistics"> | string
    timeframe?: StringFilter<"SignalStatistics"> | string
    date?: DateTimeFilter<"SignalStatistics"> | Date | string
    totalSignals?: IntFilter<"SignalStatistics"> | number
    buySignals?: IntFilter<"SignalStatistics"> | number
    sellSignals?: IntFilter<"SignalStatistics"> | number
    successRate?: FloatNullableFilter<"SignalStatistics"> | number | null
    avgPrice?: FloatNullableFilter<"SignalStatistics"> | number | null
    minPrice?: FloatNullableFilter<"SignalStatistics"> | number | null
    maxPrice?: FloatNullableFilter<"SignalStatistics"> | number | null
    createdAt?: DateTimeFilter<"SignalStatistics"> | Date | string
    updatedAt?: DateTimeFilter<"SignalStatistics"> | Date | string
  }

  export type SignalStatisticsOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    indicatorId?: SortOrder
    timeframe?: SortOrder
    date?: SortOrder
    totalSignals?: SortOrder
    buySignals?: SortOrder
    sellSignals?: SortOrder
    successRate?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalStatisticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SignalStatisticsWhereInput | SignalStatisticsWhereInput[]
    OR?: SignalStatisticsWhereInput[]
    NOT?: SignalStatisticsWhereInput | SignalStatisticsWhereInput[]
    marketId?: StringFilter<"SignalStatistics"> | string
    indicatorId?: StringFilter<"SignalStatistics"> | string
    timeframe?: StringFilter<"SignalStatistics"> | string
    date?: DateTimeFilter<"SignalStatistics"> | Date | string
    totalSignals?: IntFilter<"SignalStatistics"> | number
    buySignals?: IntFilter<"SignalStatistics"> | number
    sellSignals?: IntFilter<"SignalStatistics"> | number
    successRate?: FloatNullableFilter<"SignalStatistics"> | number | null
    avgPrice?: FloatNullableFilter<"SignalStatistics"> | number | null
    minPrice?: FloatNullableFilter<"SignalStatistics"> | number | null
    maxPrice?: FloatNullableFilter<"SignalStatistics"> | number | null
    createdAt?: DateTimeFilter<"SignalStatistics"> | Date | string
    updatedAt?: DateTimeFilter<"SignalStatistics"> | Date | string
  }, "id">

  export type SignalStatisticsOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    indicatorId?: SortOrder
    timeframe?: SortOrder
    date?: SortOrder
    totalSignals?: SortOrder
    buySignals?: SortOrder
    sellSignals?: SortOrder
    successRate?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SignalStatisticsCountOrderByAggregateInput
    _avg?: SignalStatisticsAvgOrderByAggregateInput
    _max?: SignalStatisticsMaxOrderByAggregateInput
    _min?: SignalStatisticsMinOrderByAggregateInput
    _sum?: SignalStatisticsSumOrderByAggregateInput
  }

  export type SignalStatisticsScalarWhereWithAggregatesInput = {
    AND?: SignalStatisticsScalarWhereWithAggregatesInput | SignalStatisticsScalarWhereWithAggregatesInput[]
    OR?: SignalStatisticsScalarWhereWithAggregatesInput[]
    NOT?: SignalStatisticsScalarWhereWithAggregatesInput | SignalStatisticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SignalStatistics"> | string
    marketId?: StringWithAggregatesFilter<"SignalStatistics"> | string
    indicatorId?: StringWithAggregatesFilter<"SignalStatistics"> | string
    timeframe?: StringWithAggregatesFilter<"SignalStatistics"> | string
    date?: DateTimeWithAggregatesFilter<"SignalStatistics"> | Date | string
    totalSignals?: IntWithAggregatesFilter<"SignalStatistics"> | number
    buySignals?: IntWithAggregatesFilter<"SignalStatistics"> | number
    sellSignals?: IntWithAggregatesFilter<"SignalStatistics"> | number
    successRate?: FloatNullableWithAggregatesFilter<"SignalStatistics"> | number | null
    avgPrice?: FloatNullableWithAggregatesFilter<"SignalStatistics"> | number | null
    minPrice?: FloatNullableWithAggregatesFilter<"SignalStatistics"> | number | null
    maxPrice?: FloatNullableWithAggregatesFilter<"SignalStatistics"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SignalStatistics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SignalStatistics"> | Date | string
  }

  export type IndicatorWhereInput = {
    AND?: IndicatorWhereInput | IndicatorWhereInput[]
    OR?: IndicatorWhereInput[]
    NOT?: IndicatorWhereInput | IndicatorWhereInput[]
    id?: StringFilter<"Indicator"> | string
    name?: StringFilter<"Indicator"> | string
    tradingViewId?: StringFilter<"Indicator"> | string
    description?: StringNullableFilter<"Indicator"> | string | null
    author?: StringNullableFilter<"Indicator"> | string | null
    version?: StringNullableFilter<"Indicator"> | string | null
    parameters?: JsonNullableFilter<"Indicator">
    outputFields?: JsonFilter<"Indicator">
    documentation?: StringNullableFilter<"Indicator"> | string | null
    isActive?: BoolFilter<"Indicator"> | boolean
    isPublic?: BoolFilter<"Indicator"> | boolean
    createdAt?: DateTimeFilter<"Indicator"> | Date | string
    updatedAt?: DateTimeFilter<"Indicator"> | Date | string
    taskIndicators?: TaskIndicatorListRelationFilter
  }

  export type IndicatorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tradingViewId?: SortOrder
    description?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    outputFields?: SortOrder
    documentation?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskIndicators?: TaskIndicatorOrderByRelationAggregateInput
  }

  export type IndicatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tradingViewId?: string
    AND?: IndicatorWhereInput | IndicatorWhereInput[]
    OR?: IndicatorWhereInput[]
    NOT?: IndicatorWhereInput | IndicatorWhereInput[]
    name?: StringFilter<"Indicator"> | string
    description?: StringNullableFilter<"Indicator"> | string | null
    author?: StringNullableFilter<"Indicator"> | string | null
    version?: StringNullableFilter<"Indicator"> | string | null
    parameters?: JsonNullableFilter<"Indicator">
    outputFields?: JsonFilter<"Indicator">
    documentation?: StringNullableFilter<"Indicator"> | string | null
    isActive?: BoolFilter<"Indicator"> | boolean
    isPublic?: BoolFilter<"Indicator"> | boolean
    createdAt?: DateTimeFilter<"Indicator"> | Date | string
    updatedAt?: DateTimeFilter<"Indicator"> | Date | string
    taskIndicators?: TaskIndicatorListRelationFilter
  }, "id" | "tradingViewId">

  export type IndicatorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tradingViewId?: SortOrder
    description?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    outputFields?: SortOrder
    documentation?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndicatorCountOrderByAggregateInput
    _max?: IndicatorMaxOrderByAggregateInput
    _min?: IndicatorMinOrderByAggregateInput
  }

  export type IndicatorScalarWhereWithAggregatesInput = {
    AND?: IndicatorScalarWhereWithAggregatesInput | IndicatorScalarWhereWithAggregatesInput[]
    OR?: IndicatorScalarWhereWithAggregatesInput[]
    NOT?: IndicatorScalarWhereWithAggregatesInput | IndicatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Indicator"> | string
    name?: StringWithAggregatesFilter<"Indicator"> | string
    tradingViewId?: StringWithAggregatesFilter<"Indicator"> | string
    description?: StringNullableWithAggregatesFilter<"Indicator"> | string | null
    author?: StringNullableWithAggregatesFilter<"Indicator"> | string | null
    version?: StringNullableWithAggregatesFilter<"Indicator"> | string | null
    parameters?: JsonNullableWithAggregatesFilter<"Indicator">
    outputFields?: JsonWithAggregatesFilter<"Indicator">
    documentation?: StringNullableWithAggregatesFilter<"Indicator"> | string | null
    isActive?: BoolWithAggregatesFilter<"Indicator"> | boolean
    isPublic?: BoolWithAggregatesFilter<"Indicator"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Indicator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Indicator"> | Date | string
  }

  export type UserLoginIpWhereInput = {
    AND?: UserLoginIpWhereInput | UserLoginIpWhereInput[]
    OR?: UserLoginIpWhereInput[]
    NOT?: UserLoginIpWhereInput | UserLoginIpWhereInput[]
    id?: StringFilter<"UserLoginIp"> | string
    userId?: StringFilter<"UserLoginIp"> | string
    ipAddress?: StringFilter<"UserLoginIp"> | string
    userAgent?: StringNullableFilter<"UserLoginIp"> | string | null
    location?: StringNullableFilter<"UserLoginIp"> | string | null
    createdAt?: DateTimeFilter<"UserLoginIp"> | Date | string
  }

  export type UserLoginIpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type UserLoginIpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserLoginIpWhereInput | UserLoginIpWhereInput[]
    OR?: UserLoginIpWhereInput[]
    NOT?: UserLoginIpWhereInput | UserLoginIpWhereInput[]
    userId?: StringFilter<"UserLoginIp"> | string
    ipAddress?: StringFilter<"UserLoginIp"> | string
    userAgent?: StringNullableFilter<"UserLoginIp"> | string | null
    location?: StringNullableFilter<"UserLoginIp"> | string | null
    createdAt?: DateTimeFilter<"UserLoginIp"> | Date | string
  }, "id">

  export type UserLoginIpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserLoginIpCountOrderByAggregateInput
    _max?: UserLoginIpMaxOrderByAggregateInput
    _min?: UserLoginIpMinOrderByAggregateInput
  }

  export type UserLoginIpScalarWhereWithAggregatesInput = {
    AND?: UserLoginIpScalarWhereWithAggregatesInput | UserLoginIpScalarWhereWithAggregatesInput[]
    OR?: UserLoginIpScalarWhereWithAggregatesInput[]
    NOT?: UserLoginIpScalarWhereWithAggregatesInput | UserLoginIpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLoginIp"> | string
    userId?: StringWithAggregatesFilter<"UserLoginIp"> | string
    ipAddress?: StringWithAggregatesFilter<"UserLoginIp"> | string
    userAgent?: StringNullableWithAggregatesFilter<"UserLoginIp"> | string | null
    location?: StringNullableWithAggregatesFilter<"UserLoginIp"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserLoginIp"> | Date | string
  }

  export type CommonLogWhereInput = {
    AND?: CommonLogWhereInput | CommonLogWhereInput[]
    OR?: CommonLogWhereInput[]
    NOT?: CommonLogWhereInput | CommonLogWhereInput[]
    id?: StringFilter<"CommonLog"> | string
    userId?: StringNullableFilter<"CommonLog"> | string | null
    action?: StringFilter<"CommonLog"> | string
    detail?: StringNullableFilter<"CommonLog"> | string | null
    createdAt?: DateTimeFilter<"CommonLog"> | Date | string
  }

  export type CommonLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CommonLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommonLogWhereInput | CommonLogWhereInput[]
    OR?: CommonLogWhereInput[]
    NOT?: CommonLogWhereInput | CommonLogWhereInput[]
    userId?: StringNullableFilter<"CommonLog"> | string | null
    action?: StringFilter<"CommonLog"> | string
    detail?: StringNullableFilter<"CommonLog"> | string | null
    createdAt?: DateTimeFilter<"CommonLog"> | Date | string
  }, "id">

  export type CommonLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommonLogCountOrderByAggregateInput
    _max?: CommonLogMaxOrderByAggregateInput
    _min?: CommonLogMinOrderByAggregateInput
  }

  export type CommonLogScalarWhereWithAggregatesInput = {
    AND?: CommonLogScalarWhereWithAggregatesInput | CommonLogScalarWhereWithAggregatesInput[]
    OR?: CommonLogScalarWhereWithAggregatesInput[]
    NOT?: CommonLogScalarWhereWithAggregatesInput | CommonLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommonLog"> | string
    userId?: StringNullableWithAggregatesFilter<"CommonLog"> | string | null
    action?: StringWithAggregatesFilter<"CommonLog"> | string
    detail?: StringNullableWithAggregatesFilter<"CommonLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommonLog"> | Date | string
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: StringFilter<"Market"> | string
    name?: StringFilter<"Market"> | string
    code?: StringFilter<"Market"> | string
    symbol?: StringFilter<"Market"> | string
    type?: EnumMarketTypeFilter<"Market"> | $Enums.MarketType
    exchange?: StringNullableFilter<"Market"> | string | null
    fullExchangeName?: StringNullableFilter<"Market"> | string | null
    displayName?: StringNullableFilter<"Market"> | string | null
    description?: StringNullableFilter<"Market"> | string | null
    icon?: StringNullableFilter<"Market"> | string | null
    cryptoType?: EnumCryptoTypeNullableFilter<"Market"> | $Enums.CryptoType | null
    baseCurrency?: StringNullableFilter<"Market"> | string | null
    quoteCurrency?: StringNullableFilter<"Market"> | string | null
    industry?: StringNullableFilter<"Market"> | string | null
    sector?: StringNullableFilter<"Market"> | string | null
    isActive?: BoolFilter<"Market"> | boolean
    isPriority?: BoolFilter<"Market"> | boolean
    sortOrder?: IntFilter<"Market"> | number
    lastSyncAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    syncStatus?: StringNullableFilter<"Market"> | string | null
    syncError?: StringNullableFilter<"Market"> | string | null
    metadata?: JsonNullableFilter<"Market">
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    tasks?: TaskListRelationFilter
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    exchange?: SortOrderInput | SortOrder
    fullExchangeName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    cryptoType?: SortOrderInput | SortOrder
    baseCurrency?: SortOrderInput | SortOrder
    quoteCurrency?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    sector?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isPriority?: SortOrder
    sortOrder?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    syncStatus?: SortOrderInput | SortOrder
    syncError?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol?: string
    exchange_code?: MarketExchangeCodeCompoundUniqueInput
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    name?: StringFilter<"Market"> | string
    code?: StringFilter<"Market"> | string
    type?: EnumMarketTypeFilter<"Market"> | $Enums.MarketType
    exchange?: StringNullableFilter<"Market"> | string | null
    fullExchangeName?: StringNullableFilter<"Market"> | string | null
    displayName?: StringNullableFilter<"Market"> | string | null
    description?: StringNullableFilter<"Market"> | string | null
    icon?: StringNullableFilter<"Market"> | string | null
    cryptoType?: EnumCryptoTypeNullableFilter<"Market"> | $Enums.CryptoType | null
    baseCurrency?: StringNullableFilter<"Market"> | string | null
    quoteCurrency?: StringNullableFilter<"Market"> | string | null
    industry?: StringNullableFilter<"Market"> | string | null
    sector?: StringNullableFilter<"Market"> | string | null
    isActive?: BoolFilter<"Market"> | boolean
    isPriority?: BoolFilter<"Market"> | boolean
    sortOrder?: IntFilter<"Market"> | number
    lastSyncAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    syncStatus?: StringNullableFilter<"Market"> | string | null
    syncError?: StringNullableFilter<"Market"> | string | null
    metadata?: JsonNullableFilter<"Market">
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    tasks?: TaskListRelationFilter
  }, "id" | "symbol" | "exchange_code">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    exchange?: SortOrderInput | SortOrder
    fullExchangeName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    cryptoType?: SortOrderInput | SortOrder
    baseCurrency?: SortOrderInput | SortOrder
    quoteCurrency?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    sector?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isPriority?: SortOrder
    sortOrder?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    syncStatus?: SortOrderInput | SortOrder
    syncError?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketCountOrderByAggregateInput
    _avg?: MarketAvgOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
    _sum?: MarketSumOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Market"> | string
    name?: StringWithAggregatesFilter<"Market"> | string
    code?: StringWithAggregatesFilter<"Market"> | string
    symbol?: StringWithAggregatesFilter<"Market"> | string
    type?: EnumMarketTypeWithAggregatesFilter<"Market"> | $Enums.MarketType
    exchange?: StringNullableWithAggregatesFilter<"Market"> | string | null
    fullExchangeName?: StringNullableWithAggregatesFilter<"Market"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"Market"> | string | null
    description?: StringNullableWithAggregatesFilter<"Market"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Market"> | string | null
    cryptoType?: EnumCryptoTypeNullableWithAggregatesFilter<"Market"> | $Enums.CryptoType | null
    baseCurrency?: StringNullableWithAggregatesFilter<"Market"> | string | null
    quoteCurrency?: StringNullableWithAggregatesFilter<"Market"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Market"> | string | null
    sector?: StringNullableWithAggregatesFilter<"Market"> | string | null
    isActive?: BoolWithAggregatesFilter<"Market"> | boolean
    isPriority?: BoolWithAggregatesFilter<"Market"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Market"> | number
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
    syncStatus?: StringNullableWithAggregatesFilter<"Market"> | string | null
    syncError?: StringNullableWithAggregatesFilter<"Market"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Market">
    createdAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    marketId?: StringFilter<"Task"> | string
    timeframe?: EnumTimeframeFilter<"Task"> | $Enums.Timeframe
    range?: IntFilter<"Task"> | number
    executionMode?: EnumExecutionModeFilter<"Task"> | $Enums.ExecutionMode
    cronExpression?: StringNullableFilter<"Task"> | string | null
    scheduleInterval?: IntNullableFilter<"Task"> | number | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    lastExecutedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    nextExecutionAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    errorMessage?: StringNullableFilter<"Task"> | string | null
    enableNotification?: BoolFilter<"Task"> | boolean
    notificationChannels?: JsonNullableFilter<"Task">
    dingTalkWebhookId?: StringNullableFilter<"Task"> | string | null
    createdBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    dingTalkWebhook?: XOR<DingTalkWebhookNullableScalarRelationFilter, DingTalkWebhookWhereInput> | null
    taskIndicators?: TaskIndicatorListRelationFilter
    executions?: TaskExecutionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    marketId?: SortOrder
    timeframe?: SortOrder
    range?: SortOrder
    executionMode?: SortOrder
    cronExpression?: SortOrderInput | SortOrder
    scheduleInterval?: SortOrderInput | SortOrder
    status?: SortOrder
    lastExecutedAt?: SortOrderInput | SortOrder
    nextExecutionAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    enableNotification?: SortOrder
    notificationChannels?: SortOrderInput | SortOrder
    dingTalkWebhookId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    market?: MarketOrderByWithRelationInput
    dingTalkWebhook?: DingTalkWebhookOrderByWithRelationInput
    taskIndicators?: TaskIndicatorOrderByRelationAggregateInput
    executions?: TaskExecutionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    marketId?: StringFilter<"Task"> | string
    timeframe?: EnumTimeframeFilter<"Task"> | $Enums.Timeframe
    range?: IntFilter<"Task"> | number
    executionMode?: EnumExecutionModeFilter<"Task"> | $Enums.ExecutionMode
    cronExpression?: StringNullableFilter<"Task"> | string | null
    scheduleInterval?: IntNullableFilter<"Task"> | number | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    lastExecutedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    nextExecutionAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    errorMessage?: StringNullableFilter<"Task"> | string | null
    enableNotification?: BoolFilter<"Task"> | boolean
    notificationChannels?: JsonNullableFilter<"Task">
    dingTalkWebhookId?: StringNullableFilter<"Task"> | string | null
    createdBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    dingTalkWebhook?: XOR<DingTalkWebhookNullableScalarRelationFilter, DingTalkWebhookWhereInput> | null
    taskIndicators?: TaskIndicatorListRelationFilter
    executions?: TaskExecutionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    marketId?: SortOrder
    timeframe?: SortOrder
    range?: SortOrder
    executionMode?: SortOrder
    cronExpression?: SortOrderInput | SortOrder
    scheduleInterval?: SortOrderInput | SortOrder
    status?: SortOrder
    lastExecutedAt?: SortOrderInput | SortOrder
    nextExecutionAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    enableNotification?: SortOrder
    notificationChannels?: SortOrderInput | SortOrder
    dingTalkWebhookId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    name?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    marketId?: StringWithAggregatesFilter<"Task"> | string
    timeframe?: EnumTimeframeWithAggregatesFilter<"Task"> | $Enums.Timeframe
    range?: IntWithAggregatesFilter<"Task"> | number
    executionMode?: EnumExecutionModeWithAggregatesFilter<"Task"> | $Enums.ExecutionMode
    cronExpression?: StringNullableWithAggregatesFilter<"Task"> | string | null
    scheduleInterval?: IntNullableWithAggregatesFilter<"Task"> | number | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    lastExecutedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    nextExecutionAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Task"> | string | null
    enableNotification?: BoolWithAggregatesFilter<"Task"> | boolean
    notificationChannels?: JsonNullableWithAggregatesFilter<"Task">
    dingTalkWebhookId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskIndicatorWhereInput = {
    AND?: TaskIndicatorWhereInput | TaskIndicatorWhereInput[]
    OR?: TaskIndicatorWhereInput[]
    NOT?: TaskIndicatorWhereInput | TaskIndicatorWhereInput[]
    id?: StringFilter<"TaskIndicator"> | string
    taskId?: StringFilter<"TaskIndicator"> | string
    indicatorId?: StringFilter<"TaskIndicator"> | string
    priority?: IntFilter<"TaskIndicator"> | number
    overrideParameters?: JsonNullableFilter<"TaskIndicator">
    createdAt?: DateTimeFilter<"TaskIndicator"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    indicator?: XOR<IndicatorScalarRelationFilter, IndicatorWhereInput>
  }

  export type TaskIndicatorOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    indicatorId?: SortOrder
    priority?: SortOrder
    overrideParameters?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    indicator?: IndicatorOrderByWithRelationInput
  }

  export type TaskIndicatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskIndicatorWhereInput | TaskIndicatorWhereInput[]
    OR?: TaskIndicatorWhereInput[]
    NOT?: TaskIndicatorWhereInput | TaskIndicatorWhereInput[]
    taskId?: StringFilter<"TaskIndicator"> | string
    indicatorId?: StringFilter<"TaskIndicator"> | string
    priority?: IntFilter<"TaskIndicator"> | number
    overrideParameters?: JsonNullableFilter<"TaskIndicator">
    createdAt?: DateTimeFilter<"TaskIndicator"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    indicator?: XOR<IndicatorScalarRelationFilter, IndicatorWhereInput>
  }, "id">

  export type TaskIndicatorOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    indicatorId?: SortOrder
    priority?: SortOrder
    overrideParameters?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskIndicatorCountOrderByAggregateInput
    _avg?: TaskIndicatorAvgOrderByAggregateInput
    _max?: TaskIndicatorMaxOrderByAggregateInput
    _min?: TaskIndicatorMinOrderByAggregateInput
    _sum?: TaskIndicatorSumOrderByAggregateInput
  }

  export type TaskIndicatorScalarWhereWithAggregatesInput = {
    AND?: TaskIndicatorScalarWhereWithAggregatesInput | TaskIndicatorScalarWhereWithAggregatesInput[]
    OR?: TaskIndicatorScalarWhereWithAggregatesInput[]
    NOT?: TaskIndicatorScalarWhereWithAggregatesInput | TaskIndicatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskIndicator"> | string
    taskId?: StringWithAggregatesFilter<"TaskIndicator"> | string
    indicatorId?: StringWithAggregatesFilter<"TaskIndicator"> | string
    priority?: IntWithAggregatesFilter<"TaskIndicator"> | number
    overrideParameters?: JsonNullableWithAggregatesFilter<"TaskIndicator">
    createdAt?: DateTimeWithAggregatesFilter<"TaskIndicator"> | Date | string
  }

  export type TradingViewConfigWhereInput = {
    AND?: TradingViewConfigWhereInput | TradingViewConfigWhereInput[]
    OR?: TradingViewConfigWhereInput[]
    NOT?: TradingViewConfigWhereInput | TradingViewConfigWhereInput[]
    id?: StringFilter<"TradingViewConfig"> | string
    name?: StringFilter<"TradingViewConfig"> | string
    description?: StringNullableFilter<"TradingViewConfig"> | string | null
    session?: StringFilter<"TradingViewConfig"> | string
    signature?: StringFilter<"TradingViewConfig"> | string
    isActive?: BoolFilter<"TradingViewConfig"> | boolean
    isPrimary?: BoolFilter<"TradingViewConfig"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"TradingViewConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"TradingViewConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TradingViewConfig"> | Date | string
  }

  export type TradingViewConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    session?: SortOrder
    signature?: SortOrder
    isActive?: SortOrder
    isPrimary?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradingViewConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TradingViewConfigWhereInput | TradingViewConfigWhereInput[]
    OR?: TradingViewConfigWhereInput[]
    NOT?: TradingViewConfigWhereInput | TradingViewConfigWhereInput[]
    description?: StringNullableFilter<"TradingViewConfig"> | string | null
    session?: StringFilter<"TradingViewConfig"> | string
    signature?: StringFilter<"TradingViewConfig"> | string
    isActive?: BoolFilter<"TradingViewConfig"> | boolean
    isPrimary?: BoolFilter<"TradingViewConfig"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"TradingViewConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"TradingViewConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TradingViewConfig"> | Date | string
  }, "id" | "name">

  export type TradingViewConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    session?: SortOrder
    signature?: SortOrder
    isActive?: SortOrder
    isPrimary?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TradingViewConfigCountOrderByAggregateInput
    _max?: TradingViewConfigMaxOrderByAggregateInput
    _min?: TradingViewConfigMinOrderByAggregateInput
  }

  export type TradingViewConfigScalarWhereWithAggregatesInput = {
    AND?: TradingViewConfigScalarWhereWithAggregatesInput | TradingViewConfigScalarWhereWithAggregatesInput[]
    OR?: TradingViewConfigScalarWhereWithAggregatesInput[]
    NOT?: TradingViewConfigScalarWhereWithAggregatesInput | TradingViewConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradingViewConfig"> | string
    name?: StringWithAggregatesFilter<"TradingViewConfig"> | string
    description?: StringNullableWithAggregatesFilter<"TradingViewConfig"> | string | null
    session?: StringWithAggregatesFilter<"TradingViewConfig"> | string
    signature?: StringWithAggregatesFilter<"TradingViewConfig"> | string
    isActive?: BoolWithAggregatesFilter<"TradingViewConfig"> | boolean
    isPrimary?: BoolWithAggregatesFilter<"TradingViewConfig"> | boolean
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"TradingViewConfig"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TradingViewConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TradingViewConfig"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    credits?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type DingTalkWebhookWhereInput = {
    AND?: DingTalkWebhookWhereInput | DingTalkWebhookWhereInput[]
    OR?: DingTalkWebhookWhereInput[]
    NOT?: DingTalkWebhookWhereInput | DingTalkWebhookWhereInput[]
    id?: StringFilter<"DingTalkWebhook"> | string
    name?: StringFilter<"DingTalkWebhook"> | string
    description?: StringNullableFilter<"DingTalkWebhook"> | string | null
    webhookUrl?: StringFilter<"DingTalkWebhook"> | string
    safeWord?: StringFilter<"DingTalkWebhook"> | string
    isActive?: BoolFilter<"DingTalkWebhook"> | boolean
    messageCount?: IntFilter<"DingTalkWebhook"> | number
    lastUsedAt?: DateTimeNullableFilter<"DingTalkWebhook"> | Date | string | null
    createdAt?: DateTimeFilter<"DingTalkWebhook"> | Date | string
    updatedAt?: DateTimeFilter<"DingTalkWebhook"> | Date | string
    tasks?: TaskListRelationFilter
  }

  export type DingTalkWebhookOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    webhookUrl?: SortOrder
    safeWord?: SortOrder
    isActive?: SortOrder
    messageCount?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type DingTalkWebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DingTalkWebhookWhereInput | DingTalkWebhookWhereInput[]
    OR?: DingTalkWebhookWhereInput[]
    NOT?: DingTalkWebhookWhereInput | DingTalkWebhookWhereInput[]
    name?: StringFilter<"DingTalkWebhook"> | string
    description?: StringNullableFilter<"DingTalkWebhook"> | string | null
    webhookUrl?: StringFilter<"DingTalkWebhook"> | string
    safeWord?: StringFilter<"DingTalkWebhook"> | string
    isActive?: BoolFilter<"DingTalkWebhook"> | boolean
    messageCount?: IntFilter<"DingTalkWebhook"> | number
    lastUsedAt?: DateTimeNullableFilter<"DingTalkWebhook"> | Date | string | null
    createdAt?: DateTimeFilter<"DingTalkWebhook"> | Date | string
    updatedAt?: DateTimeFilter<"DingTalkWebhook"> | Date | string
    tasks?: TaskListRelationFilter
  }, "id">

  export type DingTalkWebhookOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    webhookUrl?: SortOrder
    safeWord?: SortOrder
    isActive?: SortOrder
    messageCount?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DingTalkWebhookCountOrderByAggregateInput
    _avg?: DingTalkWebhookAvgOrderByAggregateInput
    _max?: DingTalkWebhookMaxOrderByAggregateInput
    _min?: DingTalkWebhookMinOrderByAggregateInput
    _sum?: DingTalkWebhookSumOrderByAggregateInput
  }

  export type DingTalkWebhookScalarWhereWithAggregatesInput = {
    AND?: DingTalkWebhookScalarWhereWithAggregatesInput | DingTalkWebhookScalarWhereWithAggregatesInput[]
    OR?: DingTalkWebhookScalarWhereWithAggregatesInput[]
    NOT?: DingTalkWebhookScalarWhereWithAggregatesInput | DingTalkWebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DingTalkWebhook"> | string
    name?: StringWithAggregatesFilter<"DingTalkWebhook"> | string
    description?: StringNullableWithAggregatesFilter<"DingTalkWebhook"> | string | null
    webhookUrl?: StringWithAggregatesFilter<"DingTalkWebhook"> | string
    safeWord?: StringWithAggregatesFilter<"DingTalkWebhook"> | string
    isActive?: BoolWithAggregatesFilter<"DingTalkWebhook"> | boolean
    messageCount?: IntWithAggregatesFilter<"DingTalkWebhook"> | number
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"DingTalkWebhook"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DingTalkWebhook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DingTalkWebhook"> | Date | string
  }

  export type TaskExecutionCreateInput = {
    id?: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutExecutionsInput
    indicatorResults?: IndicatorResultCreateNestedManyWithoutExecutionInput
  }

  export type TaskExecutionUncheckedCreateInput = {
    id?: string
    taskId: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
    indicatorResults?: IndicatorResultUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type TaskExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutExecutionsNestedInput
    indicatorResults?: IndicatorResultUpdateManyWithoutExecutionNestedInput
  }

  export type TaskExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indicatorResults?: IndicatorResultUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type TaskExecutionCreateManyInput = {
    id?: string
    taskId: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
  }

  export type TaskExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorResultCreateInput = {
    id?: string
    indicatorId: string
    indicatorName: string
    outputs: JsonNullValueInput | InputJsonValue
    signal?: $Enums.SignalType | null
    signalTitle?: string | null
    signalMessage?: string | null
    signalStrength?: number | null
    buyAlert?: boolean | null
    sellAlert?: boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    execution: TaskExecutionCreateNestedOneWithoutIndicatorResultsInput
  }

  export type IndicatorResultUncheckedCreateInput = {
    id?: string
    executionId: string
    indicatorId: string
    indicatorName: string
    outputs: JsonNullValueInput | InputJsonValue
    signal?: $Enums.SignalType | null
    signalTitle?: string | null
    signalMessage?: string | null
    signalStrength?: number | null
    buyAlert?: boolean | null
    sellAlert?: boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IndicatorResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    indicatorName?: StringFieldUpdateOperationsInput | string
    outputs?: JsonNullValueInput | InputJsonValue
    signal?: NullableEnumSignalTypeFieldUpdateOperationsInput | $Enums.SignalType | null
    signalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    signalMessage?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    buyAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sellAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    execution?: TaskExecutionUpdateOneRequiredWithoutIndicatorResultsNestedInput
  }

  export type IndicatorResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    indicatorName?: StringFieldUpdateOperationsInput | string
    outputs?: JsonNullValueInput | InputJsonValue
    signal?: NullableEnumSignalTypeFieldUpdateOperationsInput | $Enums.SignalType | null
    signalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    signalMessage?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    buyAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sellAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorResultCreateManyInput = {
    id?: string
    executionId: string
    indicatorId: string
    indicatorName: string
    outputs: JsonNullValueInput | InputJsonValue
    signal?: $Enums.SignalType | null
    signalTitle?: string | null
    signalMessage?: string | null
    signalStrength?: number | null
    buyAlert?: boolean | null
    sellAlert?: boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IndicatorResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    indicatorName?: StringFieldUpdateOperationsInput | string
    outputs?: JsonNullValueInput | InputJsonValue
    signal?: NullableEnumSignalTypeFieldUpdateOperationsInput | $Enums.SignalType | null
    signalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    signalMessage?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    buyAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sellAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    indicatorName?: StringFieldUpdateOperationsInput | string
    outputs?: JsonNullValueInput | InputJsonValue
    signal?: NullableEnumSignalTypeFieldUpdateOperationsInput | $Enums.SignalType | null
    signalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    signalMessage?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    buyAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sellAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalStatisticsCreateInput = {
    id?: string
    marketId: string
    indicatorId: string
    timeframe: string
    date: Date | string
    totalSignals?: number
    buySignals?: number
    sellSignals?: number
    successRate?: number | null
    avgPrice?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SignalStatisticsUncheckedCreateInput = {
    id?: string
    marketId: string
    indicatorId: string
    timeframe: string
    date: Date | string
    totalSignals?: number
    buySignals?: number
    sellSignals?: number
    successRate?: number | null
    avgPrice?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SignalStatisticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSignals?: IntFieldUpdateOperationsInput | number
    buySignals?: IntFieldUpdateOperationsInput | number
    sellSignals?: IntFieldUpdateOperationsInput | number
    successRate?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalStatisticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSignals?: IntFieldUpdateOperationsInput | number
    buySignals?: IntFieldUpdateOperationsInput | number
    sellSignals?: IntFieldUpdateOperationsInput | number
    successRate?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalStatisticsCreateManyInput = {
    id?: string
    marketId: string
    indicatorId: string
    timeframe: string
    date: Date | string
    totalSignals?: number
    buySignals?: number
    sellSignals?: number
    successRate?: number | null
    avgPrice?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SignalStatisticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSignals?: IntFieldUpdateOperationsInput | number
    buySignals?: IntFieldUpdateOperationsInput | number
    sellSignals?: IntFieldUpdateOperationsInput | number
    successRate?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalStatisticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSignals?: IntFieldUpdateOperationsInput | number
    buySignals?: IntFieldUpdateOperationsInput | number
    sellSignals?: IntFieldUpdateOperationsInput | number
    successRate?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorCreateInput = {
    id?: string
    name: string
    tradingViewId: string
    description?: string | null
    author?: string | null
    version?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields: JsonNullValueInput | InputJsonValue
    documentation?: string | null
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    taskIndicators?: TaskIndicatorCreateNestedManyWithoutIndicatorInput
  }

  export type IndicatorUncheckedCreateInput = {
    id?: string
    name: string
    tradingViewId: string
    description?: string | null
    author?: string | null
    version?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields: JsonNullValueInput | InputJsonValue
    documentation?: string | null
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    taskIndicators?: TaskIndicatorUncheckedCreateNestedManyWithoutIndicatorInput
  }

  export type IndicatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tradingViewId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields?: JsonNullValueInput | InputJsonValue
    documentation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskIndicators?: TaskIndicatorUpdateManyWithoutIndicatorNestedInput
  }

  export type IndicatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tradingViewId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields?: JsonNullValueInput | InputJsonValue
    documentation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskIndicators?: TaskIndicatorUncheckedUpdateManyWithoutIndicatorNestedInput
  }

  export type IndicatorCreateManyInput = {
    id?: string
    name: string
    tradingViewId: string
    description?: string | null
    author?: string | null
    version?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields: JsonNullValueInput | InputJsonValue
    documentation?: string | null
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndicatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tradingViewId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields?: JsonNullValueInput | InputJsonValue
    documentation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tradingViewId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields?: JsonNullValueInput | InputJsonValue
    documentation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginIpCreateInput = {
    id?: string
    userId: string
    ipAddress: string
    userAgent?: string | null
    location?: string | null
    createdAt?: Date | string
  }

  export type UserLoginIpUncheckedCreateInput = {
    id?: string
    userId: string
    ipAddress: string
    userAgent?: string | null
    location?: string | null
    createdAt?: Date | string
  }

  export type UserLoginIpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginIpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginIpCreateManyInput = {
    id?: string
    userId: string
    ipAddress: string
    userAgent?: string | null
    location?: string | null
    createdAt?: Date | string
  }

  export type UserLoginIpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginIpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommonLogCreateInput = {
    id?: string
    userId?: string | null
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type CommonLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type CommonLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommonLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommonLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type CommonLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommonLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.MarketType
    exchange?: string | null
    fullExchangeName?: string | null
    displayName?: string | null
    description?: string | null
    icon?: string | null
    cryptoType?: $Enums.CryptoType | null
    baseCurrency?: string | null
    quoteCurrency?: string | null
    industry?: string | null
    sector?: string | null
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: number
    lastSyncAt?: Date | string | null
    syncStatus?: string | null
    syncError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.MarketType
    exchange?: string | null
    fullExchangeName?: string | null
    displayName?: string | null
    description?: string | null
    icon?: string | null
    cryptoType?: $Enums.CryptoType | null
    baseCurrency?: string | null
    quoteCurrency?: string | null
    industry?: string | null
    sector?: string | null
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: number
    lastSyncAt?: Date | string | null
    syncStatus?: string | null
    syncError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    fullExchangeName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    cryptoType?: NullableEnumCryptoTypeFieldUpdateOperationsInput | $Enums.CryptoType | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    quoteCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: NullableStringFieldUpdateOperationsInput | string | null
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    fullExchangeName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    cryptoType?: NullableEnumCryptoTypeFieldUpdateOperationsInput | $Enums.CryptoType | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    quoteCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: NullableStringFieldUpdateOperationsInput | string | null
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.MarketType
    exchange?: string | null
    fullExchangeName?: string | null
    displayName?: string | null
    description?: string | null
    icon?: string | null
    cryptoType?: $Enums.CryptoType | null
    baseCurrency?: string | null
    quoteCurrency?: string | null
    industry?: string | null
    sector?: string | null
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: number
    lastSyncAt?: Date | string | null
    syncStatus?: string | null
    syncError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    fullExchangeName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    cryptoType?: NullableEnumCryptoTypeFieldUpdateOperationsInput | $Enums.CryptoType | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    quoteCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: NullableStringFieldUpdateOperationsInput | string | null
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    fullExchangeName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    cryptoType?: NullableEnumCryptoTypeFieldUpdateOperationsInput | $Enums.CryptoType | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    quoteCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: NullableStringFieldUpdateOperationsInput | string | null
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    name: string
    description?: string | null
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    market: MarketCreateNestedOneWithoutTasksInput
    dingTalkWebhook?: DingTalkWebhookCreateNestedOneWithoutTasksInput
    taskIndicators?: TaskIndicatorCreateNestedManyWithoutTaskInput
    executions?: TaskExecutionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    marketId: string
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskIndicators?: TaskIndicatorUncheckedCreateNestedManyWithoutTaskInput
    executions?: TaskExecutionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutTasksNestedInput
    dingTalkWebhook?: DingTalkWebhookUpdateOneWithoutTasksNestedInput
    taskIndicators?: TaskIndicatorUpdateManyWithoutTaskNestedInput
    executions?: TaskExecutionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketId?: StringFieldUpdateOperationsInput | string
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskIndicators?: TaskIndicatorUncheckedUpdateManyWithoutTaskNestedInput
    executions?: TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    marketId: string
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketId?: StringFieldUpdateOperationsInput | string
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorCreateInput = {
    id?: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutTaskIndicatorsInput
    indicator: IndicatorCreateNestedOneWithoutTaskIndicatorsInput
  }

  export type TaskIndicatorUncheckedCreateInput = {
    id?: string
    taskId: string
    indicatorId: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskIndicatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutTaskIndicatorsNestedInput
    indicator?: IndicatorUpdateOneRequiredWithoutTaskIndicatorsNestedInput
  }

  export type TaskIndicatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorCreateManyInput = {
    id?: string
    taskId: string
    indicatorId: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskIndicatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingViewConfigCreateInput = {
    id?: string
    name: string
    description?: string | null
    session: string
    signature: string
    isActive?: boolean
    isPrimary?: boolean
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingViewConfigUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    session: string
    signature: string
    isActive?: boolean
    isPrimary?: boolean
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingViewConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingViewConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingViewConfigCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    session: string
    signature: string
    isActive?: boolean
    isPrimary?: boolean
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingViewConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingViewConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    name?: string | null
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    name?: string | null
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    name?: string | null
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DingTalkWebhookCreateInput = {
    id?: string
    name: string
    description?: string | null
    webhookUrl: string
    safeWord?: string
    isActive?: boolean
    messageCount?: number
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutDingTalkWebhookInput
  }

  export type DingTalkWebhookUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    webhookUrl: string
    safeWord?: string
    isActive?: boolean
    messageCount?: number
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutDingTalkWebhookInput
  }

  export type DingTalkWebhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: StringFieldUpdateOperationsInput | string
    safeWord?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messageCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutDingTalkWebhookNestedInput
  }

  export type DingTalkWebhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: StringFieldUpdateOperationsInput | string
    safeWord?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messageCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutDingTalkWebhookNestedInput
  }

  export type DingTalkWebhookCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    webhookUrl: string
    safeWord?: string
    isActive?: boolean
    messageCount?: number
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DingTalkWebhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: StringFieldUpdateOperationsInput | string
    safeWord?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messageCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DingTalkWebhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: StringFieldUpdateOperationsInput | string
    safeWord?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messageCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumExecutionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusFilter<$PrismaModel> | $Enums.ExecutionStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type IndicatorResultListRelationFilter = {
    every?: IndicatorResultWhereInput
    some?: IndicatorResultWhereInput
    none?: IndicatorResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IndicatorResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    duration?: SortOrder
    marketPrice?: SortOrder
    marketVolume?: SortOrder
    marketData?: SortOrder
    errorMessage?: SortOrder
    errorStack?: SortOrder
    notificationSent?: SortOrder
    notificationError?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskExecutionAvgOrderByAggregateInput = {
    duration?: SortOrder
    marketPrice?: SortOrder
    marketVolume?: SortOrder
  }

  export type TaskExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    duration?: SortOrder
    marketPrice?: SortOrder
    marketVolume?: SortOrder
    errorMessage?: SortOrder
    errorStack?: SortOrder
    notificationSent?: SortOrder
    notificationError?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    duration?: SortOrder
    marketPrice?: SortOrder
    marketVolume?: SortOrder
    errorMessage?: SortOrder
    errorStack?: SortOrder
    notificationSent?: SortOrder
    notificationError?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskExecutionSumOrderByAggregateInput = {
    duration?: SortOrder
    marketPrice?: SortOrder
    marketVolume?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumExecutionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExecutionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExecutionStatusFilter<$PrismaModel>
    _max?: NestedEnumExecutionStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumSignalTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalType | EnumSignalTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalTypeNullableFilter<$PrismaModel> | $Enums.SignalType | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TaskExecutionScalarRelationFilter = {
    is?: TaskExecutionWhereInput
    isNot?: TaskExecutionWhereInput
  }

  export type IndicatorResultCountOrderByAggregateInput = {
    id?: SortOrder
    executionId?: SortOrder
    indicatorId?: SortOrder
    indicatorName?: SortOrder
    outputs?: SortOrder
    signal?: SortOrder
    signalTitle?: SortOrder
    signalMessage?: SortOrder
    signalStrength?: SortOrder
    buyAlert?: SortOrder
    sellAlert?: SortOrder
    customValues?: SortOrder
    createdAt?: SortOrder
  }

  export type IndicatorResultAvgOrderByAggregateInput = {
    signalStrength?: SortOrder
  }

  export type IndicatorResultMaxOrderByAggregateInput = {
    id?: SortOrder
    executionId?: SortOrder
    indicatorId?: SortOrder
    indicatorName?: SortOrder
    signal?: SortOrder
    signalTitle?: SortOrder
    signalMessage?: SortOrder
    signalStrength?: SortOrder
    buyAlert?: SortOrder
    sellAlert?: SortOrder
    createdAt?: SortOrder
  }

  export type IndicatorResultMinOrderByAggregateInput = {
    id?: SortOrder
    executionId?: SortOrder
    indicatorId?: SortOrder
    indicatorName?: SortOrder
    signal?: SortOrder
    signalTitle?: SortOrder
    signalMessage?: SortOrder
    signalStrength?: SortOrder
    buyAlert?: SortOrder
    sellAlert?: SortOrder
    createdAt?: SortOrder
  }

  export type IndicatorResultSumOrderByAggregateInput = {
    signalStrength?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumSignalTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalType | EnumSignalTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SignalType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSignalTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSignalTypeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SignalStatisticsCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    indicatorId?: SortOrder
    timeframe?: SortOrder
    date?: SortOrder
    totalSignals?: SortOrder
    buySignals?: SortOrder
    sellSignals?: SortOrder
    successRate?: SortOrder
    avgPrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalStatisticsAvgOrderByAggregateInput = {
    totalSignals?: SortOrder
    buySignals?: SortOrder
    sellSignals?: SortOrder
    successRate?: SortOrder
    avgPrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type SignalStatisticsMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    indicatorId?: SortOrder
    timeframe?: SortOrder
    date?: SortOrder
    totalSignals?: SortOrder
    buySignals?: SortOrder
    sellSignals?: SortOrder
    successRate?: SortOrder
    avgPrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalStatisticsMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    indicatorId?: SortOrder
    timeframe?: SortOrder
    date?: SortOrder
    totalSignals?: SortOrder
    buySignals?: SortOrder
    sellSignals?: SortOrder
    successRate?: SortOrder
    avgPrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalStatisticsSumOrderByAggregateInput = {
    totalSignals?: SortOrder
    buySignals?: SortOrder
    sellSignals?: SortOrder
    successRate?: SortOrder
    avgPrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TaskIndicatorListRelationFilter = {
    every?: TaskIndicatorWhereInput
    some?: TaskIndicatorWhereInput
    none?: TaskIndicatorWhereInput
  }

  export type TaskIndicatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndicatorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tradingViewId?: SortOrder
    description?: SortOrder
    author?: SortOrder
    version?: SortOrder
    parameters?: SortOrder
    outputFields?: SortOrder
    documentation?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndicatorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tradingViewId?: SortOrder
    description?: SortOrder
    author?: SortOrder
    version?: SortOrder
    documentation?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndicatorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tradingViewId?: SortOrder
    description?: SortOrder
    author?: SortOrder
    version?: SortOrder
    documentation?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLoginIpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLoginIpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLoginIpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type CommonLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type CommonLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type CommonLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMarketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeFilter<$PrismaModel> | $Enums.MarketType
  }

  export type EnumCryptoTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoType | EnumCryptoTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCryptoTypeNullableFilter<$PrismaModel> | $Enums.CryptoType | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketExchangeCodeCompoundUniqueInput = {
    exchange: string
    code: string
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    exchange?: SortOrder
    fullExchangeName?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    cryptoType?: SortOrder
    baseCurrency?: SortOrder
    quoteCurrency?: SortOrder
    industry?: SortOrder
    sector?: SortOrder
    isActive?: SortOrder
    isPriority?: SortOrder
    sortOrder?: SortOrder
    lastSyncAt?: SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    exchange?: SortOrder
    fullExchangeName?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    cryptoType?: SortOrder
    baseCurrency?: SortOrder
    quoteCurrency?: SortOrder
    industry?: SortOrder
    sector?: SortOrder
    isActive?: SortOrder
    isPriority?: SortOrder
    sortOrder?: SortOrder
    lastSyncAt?: SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    exchange?: SortOrder
    fullExchangeName?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    cryptoType?: SortOrder
    baseCurrency?: SortOrder
    quoteCurrency?: SortOrder
    industry?: SortOrder
    sector?: SortOrder
    isActive?: SortOrder
    isPriority?: SortOrder
    sortOrder?: SortOrder
    lastSyncAt?: SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumMarketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketTypeFilter<$PrismaModel>
    _max?: NestedEnumMarketTypeFilter<$PrismaModel>
  }

  export type EnumCryptoTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoType | EnumCryptoTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCryptoTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CryptoType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCryptoTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCryptoTypeNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTimeframeFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeframe | EnumTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeframeFilter<$PrismaModel> | $Enums.Timeframe
  }

  export type EnumExecutionModeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionMode | EnumExecutionModeFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionModeFilter<$PrismaModel> | $Enums.ExecutionMode
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type MarketScalarRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type DingTalkWebhookNullableScalarRelationFilter = {
    is?: DingTalkWebhookWhereInput | null
    isNot?: DingTalkWebhookWhereInput | null
  }

  export type TaskExecutionListRelationFilter = {
    every?: TaskExecutionWhereInput
    some?: TaskExecutionWhereInput
    none?: TaskExecutionWhereInput
  }

  export type TaskExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    marketId?: SortOrder
    timeframe?: SortOrder
    range?: SortOrder
    executionMode?: SortOrder
    cronExpression?: SortOrder
    scheduleInterval?: SortOrder
    status?: SortOrder
    lastExecutedAt?: SortOrder
    nextExecutionAt?: SortOrder
    errorMessage?: SortOrder
    enableNotification?: SortOrder
    notificationChannels?: SortOrder
    dingTalkWebhookId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    range?: SortOrder
    scheduleInterval?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    marketId?: SortOrder
    timeframe?: SortOrder
    range?: SortOrder
    executionMode?: SortOrder
    cronExpression?: SortOrder
    scheduleInterval?: SortOrder
    status?: SortOrder
    lastExecutedAt?: SortOrder
    nextExecutionAt?: SortOrder
    errorMessage?: SortOrder
    enableNotification?: SortOrder
    dingTalkWebhookId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    marketId?: SortOrder
    timeframe?: SortOrder
    range?: SortOrder
    executionMode?: SortOrder
    cronExpression?: SortOrder
    scheduleInterval?: SortOrder
    status?: SortOrder
    lastExecutedAt?: SortOrder
    nextExecutionAt?: SortOrder
    errorMessage?: SortOrder
    enableNotification?: SortOrder
    dingTalkWebhookId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    range?: SortOrder
    scheduleInterval?: SortOrder
  }

  export type EnumTimeframeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeframe | EnumTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeframeWithAggregatesFilter<$PrismaModel> | $Enums.Timeframe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeframeFilter<$PrismaModel>
    _max?: NestedEnumTimeframeFilter<$PrismaModel>
  }

  export type EnumExecutionModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionMode | EnumExecutionModeFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionModeWithAggregatesFilter<$PrismaModel> | $Enums.ExecutionMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExecutionModeFilter<$PrismaModel>
    _max?: NestedEnumExecutionModeFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type IndicatorScalarRelationFilter = {
    is?: IndicatorWhereInput
    isNot?: IndicatorWhereInput
  }

  export type TaskIndicatorCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    indicatorId?: SortOrder
    priority?: SortOrder
    overrideParameters?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskIndicatorAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type TaskIndicatorMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    indicatorId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskIndicatorMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    indicatorId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskIndicatorSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type TradingViewConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    session?: SortOrder
    signature?: SortOrder
    isActive?: SortOrder
    isPrimary?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradingViewConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    session?: SortOrder
    signature?: SortOrder
    isActive?: SortOrder
    isPrimary?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradingViewConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    session?: SortOrder
    signature?: SortOrder
    isActive?: SortOrder
    isPrimary?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DingTalkWebhookCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    webhookUrl?: SortOrder
    safeWord?: SortOrder
    isActive?: SortOrder
    messageCount?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DingTalkWebhookAvgOrderByAggregateInput = {
    messageCount?: SortOrder
  }

  export type DingTalkWebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    webhookUrl?: SortOrder
    safeWord?: SortOrder
    isActive?: SortOrder
    messageCount?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DingTalkWebhookMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    webhookUrl?: SortOrder
    safeWord?: SortOrder
    isActive?: SortOrder
    messageCount?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DingTalkWebhookSumOrderByAggregateInput = {
    messageCount?: SortOrder
  }

  export type TaskCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutExecutionsInput
    connect?: TaskWhereUniqueInput
  }

  export type IndicatorResultCreateNestedManyWithoutExecutionInput = {
    create?: XOR<IndicatorResultCreateWithoutExecutionInput, IndicatorResultUncheckedCreateWithoutExecutionInput> | IndicatorResultCreateWithoutExecutionInput[] | IndicatorResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: IndicatorResultCreateOrConnectWithoutExecutionInput | IndicatorResultCreateOrConnectWithoutExecutionInput[]
    createMany?: IndicatorResultCreateManyExecutionInputEnvelope
    connect?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
  }

  export type IndicatorResultUncheckedCreateNestedManyWithoutExecutionInput = {
    create?: XOR<IndicatorResultCreateWithoutExecutionInput, IndicatorResultUncheckedCreateWithoutExecutionInput> | IndicatorResultCreateWithoutExecutionInput[] | IndicatorResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: IndicatorResultCreateOrConnectWithoutExecutionInput | IndicatorResultCreateOrConnectWithoutExecutionInput[]
    createMany?: IndicatorResultCreateManyExecutionInputEnvelope
    connect?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumExecutionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExecutionStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutExecutionsInput
    upsert?: TaskUpsertWithoutExecutionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutExecutionsInput, TaskUpdateWithoutExecutionsInput>, TaskUncheckedUpdateWithoutExecutionsInput>
  }

  export type IndicatorResultUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<IndicatorResultCreateWithoutExecutionInput, IndicatorResultUncheckedCreateWithoutExecutionInput> | IndicatorResultCreateWithoutExecutionInput[] | IndicatorResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: IndicatorResultCreateOrConnectWithoutExecutionInput | IndicatorResultCreateOrConnectWithoutExecutionInput[]
    upsert?: IndicatorResultUpsertWithWhereUniqueWithoutExecutionInput | IndicatorResultUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: IndicatorResultCreateManyExecutionInputEnvelope
    set?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    disconnect?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    delete?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    connect?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    update?: IndicatorResultUpdateWithWhereUniqueWithoutExecutionInput | IndicatorResultUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: IndicatorResultUpdateManyWithWhereWithoutExecutionInput | IndicatorResultUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: IndicatorResultScalarWhereInput | IndicatorResultScalarWhereInput[]
  }

  export type IndicatorResultUncheckedUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<IndicatorResultCreateWithoutExecutionInput, IndicatorResultUncheckedCreateWithoutExecutionInput> | IndicatorResultCreateWithoutExecutionInput[] | IndicatorResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: IndicatorResultCreateOrConnectWithoutExecutionInput | IndicatorResultCreateOrConnectWithoutExecutionInput[]
    upsert?: IndicatorResultUpsertWithWhereUniqueWithoutExecutionInput | IndicatorResultUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: IndicatorResultCreateManyExecutionInputEnvelope
    set?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    disconnect?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    delete?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    connect?: IndicatorResultWhereUniqueInput | IndicatorResultWhereUniqueInput[]
    update?: IndicatorResultUpdateWithWhereUniqueWithoutExecutionInput | IndicatorResultUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: IndicatorResultUpdateManyWithWhereWithoutExecutionInput | IndicatorResultUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: IndicatorResultScalarWhereInput | IndicatorResultScalarWhereInput[]
  }

  export type TaskExecutionCreateNestedOneWithoutIndicatorResultsInput = {
    create?: XOR<TaskExecutionCreateWithoutIndicatorResultsInput, TaskExecutionUncheckedCreateWithoutIndicatorResultsInput>
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutIndicatorResultsInput
    connect?: TaskExecutionWhereUniqueInput
  }

  export type NullableEnumSignalTypeFieldUpdateOperationsInput = {
    set?: $Enums.SignalType | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TaskExecutionUpdateOneRequiredWithoutIndicatorResultsNestedInput = {
    create?: XOR<TaskExecutionCreateWithoutIndicatorResultsInput, TaskExecutionUncheckedCreateWithoutIndicatorResultsInput>
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutIndicatorResultsInput
    upsert?: TaskExecutionUpsertWithoutIndicatorResultsInput
    connect?: TaskExecutionWhereUniqueInput
    update?: XOR<XOR<TaskExecutionUpdateToOneWithWhereWithoutIndicatorResultsInput, TaskExecutionUpdateWithoutIndicatorResultsInput>, TaskExecutionUncheckedUpdateWithoutIndicatorResultsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskIndicatorCreateNestedManyWithoutIndicatorInput = {
    create?: XOR<TaskIndicatorCreateWithoutIndicatorInput, TaskIndicatorUncheckedCreateWithoutIndicatorInput> | TaskIndicatorCreateWithoutIndicatorInput[] | TaskIndicatorUncheckedCreateWithoutIndicatorInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutIndicatorInput | TaskIndicatorCreateOrConnectWithoutIndicatorInput[]
    createMany?: TaskIndicatorCreateManyIndicatorInputEnvelope
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
  }

  export type TaskIndicatorUncheckedCreateNestedManyWithoutIndicatorInput = {
    create?: XOR<TaskIndicatorCreateWithoutIndicatorInput, TaskIndicatorUncheckedCreateWithoutIndicatorInput> | TaskIndicatorCreateWithoutIndicatorInput[] | TaskIndicatorUncheckedCreateWithoutIndicatorInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutIndicatorInput | TaskIndicatorCreateOrConnectWithoutIndicatorInput[]
    createMany?: TaskIndicatorCreateManyIndicatorInputEnvelope
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
  }

  export type TaskIndicatorUpdateManyWithoutIndicatorNestedInput = {
    create?: XOR<TaskIndicatorCreateWithoutIndicatorInput, TaskIndicatorUncheckedCreateWithoutIndicatorInput> | TaskIndicatorCreateWithoutIndicatorInput[] | TaskIndicatorUncheckedCreateWithoutIndicatorInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutIndicatorInput | TaskIndicatorCreateOrConnectWithoutIndicatorInput[]
    upsert?: TaskIndicatorUpsertWithWhereUniqueWithoutIndicatorInput | TaskIndicatorUpsertWithWhereUniqueWithoutIndicatorInput[]
    createMany?: TaskIndicatorCreateManyIndicatorInputEnvelope
    set?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    disconnect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    delete?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    update?: TaskIndicatorUpdateWithWhereUniqueWithoutIndicatorInput | TaskIndicatorUpdateWithWhereUniqueWithoutIndicatorInput[]
    updateMany?: TaskIndicatorUpdateManyWithWhereWithoutIndicatorInput | TaskIndicatorUpdateManyWithWhereWithoutIndicatorInput[]
    deleteMany?: TaskIndicatorScalarWhereInput | TaskIndicatorScalarWhereInput[]
  }

  export type TaskIndicatorUncheckedUpdateManyWithoutIndicatorNestedInput = {
    create?: XOR<TaskIndicatorCreateWithoutIndicatorInput, TaskIndicatorUncheckedCreateWithoutIndicatorInput> | TaskIndicatorCreateWithoutIndicatorInput[] | TaskIndicatorUncheckedCreateWithoutIndicatorInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutIndicatorInput | TaskIndicatorCreateOrConnectWithoutIndicatorInput[]
    upsert?: TaskIndicatorUpsertWithWhereUniqueWithoutIndicatorInput | TaskIndicatorUpsertWithWhereUniqueWithoutIndicatorInput[]
    createMany?: TaskIndicatorCreateManyIndicatorInputEnvelope
    set?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    disconnect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    delete?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    update?: TaskIndicatorUpdateWithWhereUniqueWithoutIndicatorInput | TaskIndicatorUpdateWithWhereUniqueWithoutIndicatorInput[]
    updateMany?: TaskIndicatorUpdateManyWithWhereWithoutIndicatorInput | TaskIndicatorUpdateManyWithWhereWithoutIndicatorInput[]
    deleteMany?: TaskIndicatorScalarWhereInput | TaskIndicatorScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutMarketInput = {
    create?: XOR<TaskCreateWithoutMarketInput, TaskUncheckedCreateWithoutMarketInput> | TaskCreateWithoutMarketInput[] | TaskUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMarketInput | TaskCreateOrConnectWithoutMarketInput[]
    createMany?: TaskCreateManyMarketInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<TaskCreateWithoutMarketInput, TaskUncheckedCreateWithoutMarketInput> | TaskCreateWithoutMarketInput[] | TaskUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMarketInput | TaskCreateOrConnectWithoutMarketInput[]
    createMany?: TaskCreateManyMarketInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumMarketTypeFieldUpdateOperationsInput = {
    set?: $Enums.MarketType
  }

  export type NullableEnumCryptoTypeFieldUpdateOperationsInput = {
    set?: $Enums.CryptoType | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TaskCreateWithoutMarketInput, TaskUncheckedCreateWithoutMarketInput> | TaskCreateWithoutMarketInput[] | TaskUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMarketInput | TaskCreateOrConnectWithoutMarketInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutMarketInput | TaskUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TaskCreateManyMarketInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutMarketInput | TaskUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutMarketInput | TaskUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TaskCreateWithoutMarketInput, TaskUncheckedCreateWithoutMarketInput> | TaskCreateWithoutMarketInput[] | TaskUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMarketInput | TaskCreateOrConnectWithoutMarketInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutMarketInput | TaskUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TaskCreateManyMarketInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutMarketInput | TaskUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutMarketInput | TaskUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type MarketCreateNestedOneWithoutTasksInput = {
    create?: XOR<MarketCreateWithoutTasksInput, MarketUncheckedCreateWithoutTasksInput>
    connectOrCreate?: MarketCreateOrConnectWithoutTasksInput
    connect?: MarketWhereUniqueInput
  }

  export type DingTalkWebhookCreateNestedOneWithoutTasksInput = {
    create?: XOR<DingTalkWebhookCreateWithoutTasksInput, DingTalkWebhookUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DingTalkWebhookCreateOrConnectWithoutTasksInput
    connect?: DingTalkWebhookWhereUniqueInput
  }

  export type TaskIndicatorCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskIndicatorCreateWithoutTaskInput, TaskIndicatorUncheckedCreateWithoutTaskInput> | TaskIndicatorCreateWithoutTaskInput[] | TaskIndicatorUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutTaskInput | TaskIndicatorCreateOrConnectWithoutTaskInput[]
    createMany?: TaskIndicatorCreateManyTaskInputEnvelope
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
  }

  export type TaskExecutionCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
  }

  export type TaskIndicatorUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskIndicatorCreateWithoutTaskInput, TaskIndicatorUncheckedCreateWithoutTaskInput> | TaskIndicatorCreateWithoutTaskInput[] | TaskIndicatorUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutTaskInput | TaskIndicatorCreateOrConnectWithoutTaskInput[]
    createMany?: TaskIndicatorCreateManyTaskInputEnvelope
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
  }

  export type TaskExecutionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
  }

  export type EnumTimeframeFieldUpdateOperationsInput = {
    set?: $Enums.Timeframe
  }

  export type EnumExecutionModeFieldUpdateOperationsInput = {
    set?: $Enums.ExecutionMode
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type MarketUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<MarketCreateWithoutTasksInput, MarketUncheckedCreateWithoutTasksInput>
    connectOrCreate?: MarketCreateOrConnectWithoutTasksInput
    upsert?: MarketUpsertWithoutTasksInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutTasksInput, MarketUpdateWithoutTasksInput>, MarketUncheckedUpdateWithoutTasksInput>
  }

  export type DingTalkWebhookUpdateOneWithoutTasksNestedInput = {
    create?: XOR<DingTalkWebhookCreateWithoutTasksInput, DingTalkWebhookUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DingTalkWebhookCreateOrConnectWithoutTasksInput
    upsert?: DingTalkWebhookUpsertWithoutTasksInput
    disconnect?: DingTalkWebhookWhereInput | boolean
    delete?: DingTalkWebhookWhereInput | boolean
    connect?: DingTalkWebhookWhereUniqueInput
    update?: XOR<XOR<DingTalkWebhookUpdateToOneWithWhereWithoutTasksInput, DingTalkWebhookUpdateWithoutTasksInput>, DingTalkWebhookUncheckedUpdateWithoutTasksInput>
  }

  export type TaskIndicatorUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskIndicatorCreateWithoutTaskInput, TaskIndicatorUncheckedCreateWithoutTaskInput> | TaskIndicatorCreateWithoutTaskInput[] | TaskIndicatorUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutTaskInput | TaskIndicatorCreateOrConnectWithoutTaskInput[]
    upsert?: TaskIndicatorUpsertWithWhereUniqueWithoutTaskInput | TaskIndicatorUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskIndicatorCreateManyTaskInputEnvelope
    set?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    disconnect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    delete?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    update?: TaskIndicatorUpdateWithWhereUniqueWithoutTaskInput | TaskIndicatorUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskIndicatorUpdateManyWithWhereWithoutTaskInput | TaskIndicatorUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskIndicatorScalarWhereInput | TaskIndicatorScalarWhereInput[]
  }

  export type TaskExecutionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskExecutionUpsertWithWhereUniqueWithoutTaskInput | TaskExecutionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    set?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    disconnect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    delete?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    update?: TaskExecutionUpdateWithWhereUniqueWithoutTaskInput | TaskExecutionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskExecutionUpdateManyWithWhereWithoutTaskInput | TaskExecutionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
  }

  export type TaskIndicatorUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskIndicatorCreateWithoutTaskInput, TaskIndicatorUncheckedCreateWithoutTaskInput> | TaskIndicatorCreateWithoutTaskInput[] | TaskIndicatorUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskIndicatorCreateOrConnectWithoutTaskInput | TaskIndicatorCreateOrConnectWithoutTaskInput[]
    upsert?: TaskIndicatorUpsertWithWhereUniqueWithoutTaskInput | TaskIndicatorUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskIndicatorCreateManyTaskInputEnvelope
    set?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    disconnect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    delete?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    connect?: TaskIndicatorWhereUniqueInput | TaskIndicatorWhereUniqueInput[]
    update?: TaskIndicatorUpdateWithWhereUniqueWithoutTaskInput | TaskIndicatorUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskIndicatorUpdateManyWithWhereWithoutTaskInput | TaskIndicatorUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskIndicatorScalarWhereInput | TaskIndicatorScalarWhereInput[]
  }

  export type TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskExecutionUpsertWithWhereUniqueWithoutTaskInput | TaskExecutionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    set?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    disconnect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    delete?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    update?: TaskExecutionUpdateWithWhereUniqueWithoutTaskInput | TaskExecutionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskExecutionUpdateManyWithWhereWithoutTaskInput | TaskExecutionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTaskIndicatorsInput = {
    create?: XOR<TaskCreateWithoutTaskIndicatorsInput, TaskUncheckedCreateWithoutTaskIndicatorsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskIndicatorsInput
    connect?: TaskWhereUniqueInput
  }

  export type IndicatorCreateNestedOneWithoutTaskIndicatorsInput = {
    create?: XOR<IndicatorCreateWithoutTaskIndicatorsInput, IndicatorUncheckedCreateWithoutTaskIndicatorsInput>
    connectOrCreate?: IndicatorCreateOrConnectWithoutTaskIndicatorsInput
    connect?: IndicatorWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutTaskIndicatorsNestedInput = {
    create?: XOR<TaskCreateWithoutTaskIndicatorsInput, TaskUncheckedCreateWithoutTaskIndicatorsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskIndicatorsInput
    upsert?: TaskUpsertWithoutTaskIndicatorsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskIndicatorsInput, TaskUpdateWithoutTaskIndicatorsInput>, TaskUncheckedUpdateWithoutTaskIndicatorsInput>
  }

  export type IndicatorUpdateOneRequiredWithoutTaskIndicatorsNestedInput = {
    create?: XOR<IndicatorCreateWithoutTaskIndicatorsInput, IndicatorUncheckedCreateWithoutTaskIndicatorsInput>
    connectOrCreate?: IndicatorCreateOrConnectWithoutTaskIndicatorsInput
    upsert?: IndicatorUpsertWithoutTaskIndicatorsInput
    connect?: IndicatorWhereUniqueInput
    update?: XOR<XOR<IndicatorUpdateToOneWithWhereWithoutTaskIndicatorsInput, IndicatorUpdateWithoutTaskIndicatorsInput>, IndicatorUncheckedUpdateWithoutTaskIndicatorsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type TaskCreateNestedManyWithoutDingTalkWebhookInput = {
    create?: XOR<TaskCreateWithoutDingTalkWebhookInput, TaskUncheckedCreateWithoutDingTalkWebhookInput> | TaskCreateWithoutDingTalkWebhookInput[] | TaskUncheckedCreateWithoutDingTalkWebhookInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDingTalkWebhookInput | TaskCreateOrConnectWithoutDingTalkWebhookInput[]
    createMany?: TaskCreateManyDingTalkWebhookInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutDingTalkWebhookInput = {
    create?: XOR<TaskCreateWithoutDingTalkWebhookInput, TaskUncheckedCreateWithoutDingTalkWebhookInput> | TaskCreateWithoutDingTalkWebhookInput[] | TaskUncheckedCreateWithoutDingTalkWebhookInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDingTalkWebhookInput | TaskCreateOrConnectWithoutDingTalkWebhookInput[]
    createMany?: TaskCreateManyDingTalkWebhookInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutDingTalkWebhookNestedInput = {
    create?: XOR<TaskCreateWithoutDingTalkWebhookInput, TaskUncheckedCreateWithoutDingTalkWebhookInput> | TaskCreateWithoutDingTalkWebhookInput[] | TaskUncheckedCreateWithoutDingTalkWebhookInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDingTalkWebhookInput | TaskCreateOrConnectWithoutDingTalkWebhookInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDingTalkWebhookInput | TaskUpsertWithWhereUniqueWithoutDingTalkWebhookInput[]
    createMany?: TaskCreateManyDingTalkWebhookInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDingTalkWebhookInput | TaskUpdateWithWhereUniqueWithoutDingTalkWebhookInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDingTalkWebhookInput | TaskUpdateManyWithWhereWithoutDingTalkWebhookInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutDingTalkWebhookNestedInput = {
    create?: XOR<TaskCreateWithoutDingTalkWebhookInput, TaskUncheckedCreateWithoutDingTalkWebhookInput> | TaskCreateWithoutDingTalkWebhookInput[] | TaskUncheckedCreateWithoutDingTalkWebhookInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDingTalkWebhookInput | TaskCreateOrConnectWithoutDingTalkWebhookInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDingTalkWebhookInput | TaskUpsertWithWhereUniqueWithoutDingTalkWebhookInput[]
    createMany?: TaskCreateManyDingTalkWebhookInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDingTalkWebhookInput | TaskUpdateWithWhereUniqueWithoutDingTalkWebhookInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDingTalkWebhookInput | TaskUpdateManyWithWhereWithoutDingTalkWebhookInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumExecutionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusFilter<$PrismaModel> | $Enums.ExecutionStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumExecutionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExecutionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExecutionStatusFilter<$PrismaModel>
    _max?: NestedEnumExecutionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSignalTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalType | EnumSignalTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalTypeNullableFilter<$PrismaModel> | $Enums.SignalType | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSignalTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalType | EnumSignalTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalType[] | ListEnumSignalTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SignalType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSignalTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSignalTypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMarketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeFilter<$PrismaModel> | $Enums.MarketType
  }

  export type NestedEnumCryptoTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoType | EnumCryptoTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCryptoTypeNullableFilter<$PrismaModel> | $Enums.CryptoType | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMarketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketTypeFilter<$PrismaModel>
    _max?: NestedEnumMarketTypeFilter<$PrismaModel>
  }

  export type NestedEnumCryptoTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoType | EnumCryptoTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CryptoType[] | ListEnumCryptoTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCryptoTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CryptoType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCryptoTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCryptoTypeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTimeframeFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeframe | EnumTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeframeFilter<$PrismaModel> | $Enums.Timeframe
  }

  export type NestedEnumExecutionModeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionMode | EnumExecutionModeFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionModeFilter<$PrismaModel> | $Enums.ExecutionMode
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTimeframeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeframe | EnumTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeframe[] | ListEnumTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeframeWithAggregatesFilter<$PrismaModel> | $Enums.Timeframe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeframeFilter<$PrismaModel>
    _max?: NestedEnumTimeframeFilter<$PrismaModel>
  }

  export type NestedEnumExecutionModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionMode | EnumExecutionModeFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionMode[] | ListEnumExecutionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionModeWithAggregatesFilter<$PrismaModel> | $Enums.ExecutionMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExecutionModeFilter<$PrismaModel>
    _max?: NestedEnumExecutionModeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type TaskCreateWithoutExecutionsInput = {
    id?: string
    name: string
    description?: string | null
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    market: MarketCreateNestedOneWithoutTasksInput
    dingTalkWebhook?: DingTalkWebhookCreateNestedOneWithoutTasksInput
    taskIndicators?: TaskIndicatorCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutExecutionsInput = {
    id?: string
    name: string
    description?: string | null
    marketId: string
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskIndicators?: TaskIndicatorUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutExecutionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
  }

  export type IndicatorResultCreateWithoutExecutionInput = {
    id?: string
    indicatorId: string
    indicatorName: string
    outputs: JsonNullValueInput | InputJsonValue
    signal?: $Enums.SignalType | null
    signalTitle?: string | null
    signalMessage?: string | null
    signalStrength?: number | null
    buyAlert?: boolean | null
    sellAlert?: boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IndicatorResultUncheckedCreateWithoutExecutionInput = {
    id?: string
    indicatorId: string
    indicatorName: string
    outputs: JsonNullValueInput | InputJsonValue
    signal?: $Enums.SignalType | null
    signalTitle?: string | null
    signalMessage?: string | null
    signalStrength?: number | null
    buyAlert?: boolean | null
    sellAlert?: boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IndicatorResultCreateOrConnectWithoutExecutionInput = {
    where: IndicatorResultWhereUniqueInput
    create: XOR<IndicatorResultCreateWithoutExecutionInput, IndicatorResultUncheckedCreateWithoutExecutionInput>
  }

  export type IndicatorResultCreateManyExecutionInputEnvelope = {
    data: IndicatorResultCreateManyExecutionInput | IndicatorResultCreateManyExecutionInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutExecutionsInput = {
    update: XOR<TaskUpdateWithoutExecutionsInput, TaskUncheckedUpdateWithoutExecutionsInput>
    create: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutExecutionsInput, TaskUncheckedUpdateWithoutExecutionsInput>
  }

  export type TaskUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutTasksNestedInput
    dingTalkWebhook?: DingTalkWebhookUpdateOneWithoutTasksNestedInput
    taskIndicators?: TaskIndicatorUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketId?: StringFieldUpdateOperationsInput | string
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskIndicators?: TaskIndicatorUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type IndicatorResultUpsertWithWhereUniqueWithoutExecutionInput = {
    where: IndicatorResultWhereUniqueInput
    update: XOR<IndicatorResultUpdateWithoutExecutionInput, IndicatorResultUncheckedUpdateWithoutExecutionInput>
    create: XOR<IndicatorResultCreateWithoutExecutionInput, IndicatorResultUncheckedCreateWithoutExecutionInput>
  }

  export type IndicatorResultUpdateWithWhereUniqueWithoutExecutionInput = {
    where: IndicatorResultWhereUniqueInput
    data: XOR<IndicatorResultUpdateWithoutExecutionInput, IndicatorResultUncheckedUpdateWithoutExecutionInput>
  }

  export type IndicatorResultUpdateManyWithWhereWithoutExecutionInput = {
    where: IndicatorResultScalarWhereInput
    data: XOR<IndicatorResultUpdateManyMutationInput, IndicatorResultUncheckedUpdateManyWithoutExecutionInput>
  }

  export type IndicatorResultScalarWhereInput = {
    AND?: IndicatorResultScalarWhereInput | IndicatorResultScalarWhereInput[]
    OR?: IndicatorResultScalarWhereInput[]
    NOT?: IndicatorResultScalarWhereInput | IndicatorResultScalarWhereInput[]
    id?: StringFilter<"IndicatorResult"> | string
    executionId?: StringFilter<"IndicatorResult"> | string
    indicatorId?: StringFilter<"IndicatorResult"> | string
    indicatorName?: StringFilter<"IndicatorResult"> | string
    outputs?: JsonFilter<"IndicatorResult">
    signal?: EnumSignalTypeNullableFilter<"IndicatorResult"> | $Enums.SignalType | null
    signalTitle?: StringNullableFilter<"IndicatorResult"> | string | null
    signalMessage?: StringNullableFilter<"IndicatorResult"> | string | null
    signalStrength?: FloatNullableFilter<"IndicatorResult"> | number | null
    buyAlert?: BoolNullableFilter<"IndicatorResult"> | boolean | null
    sellAlert?: BoolNullableFilter<"IndicatorResult"> | boolean | null
    customValues?: JsonNullableFilter<"IndicatorResult">
    createdAt?: DateTimeFilter<"IndicatorResult"> | Date | string
  }

  export type TaskExecutionCreateWithoutIndicatorResultsInput = {
    id?: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutExecutionsInput
  }

  export type TaskExecutionUncheckedCreateWithoutIndicatorResultsInput = {
    id?: string
    taskId: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
  }

  export type TaskExecutionCreateOrConnectWithoutIndicatorResultsInput = {
    where: TaskExecutionWhereUniqueInput
    create: XOR<TaskExecutionCreateWithoutIndicatorResultsInput, TaskExecutionUncheckedCreateWithoutIndicatorResultsInput>
  }

  export type TaskExecutionUpsertWithoutIndicatorResultsInput = {
    update: XOR<TaskExecutionUpdateWithoutIndicatorResultsInput, TaskExecutionUncheckedUpdateWithoutIndicatorResultsInput>
    create: XOR<TaskExecutionCreateWithoutIndicatorResultsInput, TaskExecutionUncheckedCreateWithoutIndicatorResultsInput>
    where?: TaskExecutionWhereInput
  }

  export type TaskExecutionUpdateToOneWithWhereWithoutIndicatorResultsInput = {
    where?: TaskExecutionWhereInput
    data: XOR<TaskExecutionUpdateWithoutIndicatorResultsInput, TaskExecutionUncheckedUpdateWithoutIndicatorResultsInput>
  }

  export type TaskExecutionUpdateWithoutIndicatorResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type TaskExecutionUncheckedUpdateWithoutIndicatorResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorCreateWithoutIndicatorInput = {
    id?: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutTaskIndicatorsInput
  }

  export type TaskIndicatorUncheckedCreateWithoutIndicatorInput = {
    id?: string
    taskId: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskIndicatorCreateOrConnectWithoutIndicatorInput = {
    where: TaskIndicatorWhereUniqueInput
    create: XOR<TaskIndicatorCreateWithoutIndicatorInput, TaskIndicatorUncheckedCreateWithoutIndicatorInput>
  }

  export type TaskIndicatorCreateManyIndicatorInputEnvelope = {
    data: TaskIndicatorCreateManyIndicatorInput | TaskIndicatorCreateManyIndicatorInput[]
    skipDuplicates?: boolean
  }

  export type TaskIndicatorUpsertWithWhereUniqueWithoutIndicatorInput = {
    where: TaskIndicatorWhereUniqueInput
    update: XOR<TaskIndicatorUpdateWithoutIndicatorInput, TaskIndicatorUncheckedUpdateWithoutIndicatorInput>
    create: XOR<TaskIndicatorCreateWithoutIndicatorInput, TaskIndicatorUncheckedCreateWithoutIndicatorInput>
  }

  export type TaskIndicatorUpdateWithWhereUniqueWithoutIndicatorInput = {
    where: TaskIndicatorWhereUniqueInput
    data: XOR<TaskIndicatorUpdateWithoutIndicatorInput, TaskIndicatorUncheckedUpdateWithoutIndicatorInput>
  }

  export type TaskIndicatorUpdateManyWithWhereWithoutIndicatorInput = {
    where: TaskIndicatorScalarWhereInput
    data: XOR<TaskIndicatorUpdateManyMutationInput, TaskIndicatorUncheckedUpdateManyWithoutIndicatorInput>
  }

  export type TaskIndicatorScalarWhereInput = {
    AND?: TaskIndicatorScalarWhereInput | TaskIndicatorScalarWhereInput[]
    OR?: TaskIndicatorScalarWhereInput[]
    NOT?: TaskIndicatorScalarWhereInput | TaskIndicatorScalarWhereInput[]
    id?: StringFilter<"TaskIndicator"> | string
    taskId?: StringFilter<"TaskIndicator"> | string
    indicatorId?: StringFilter<"TaskIndicator"> | string
    priority?: IntFilter<"TaskIndicator"> | number
    overrideParameters?: JsonNullableFilter<"TaskIndicator">
    createdAt?: DateTimeFilter<"TaskIndicator"> | Date | string
  }

  export type TaskCreateWithoutMarketInput = {
    id?: string
    name: string
    description?: string | null
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dingTalkWebhook?: DingTalkWebhookCreateNestedOneWithoutTasksInput
    taskIndicators?: TaskIndicatorCreateNestedManyWithoutTaskInput
    executions?: TaskExecutionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutMarketInput = {
    id?: string
    name: string
    description?: string | null
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskIndicators?: TaskIndicatorUncheckedCreateNestedManyWithoutTaskInput
    executions?: TaskExecutionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutMarketInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutMarketInput, TaskUncheckedCreateWithoutMarketInput>
  }

  export type TaskCreateManyMarketInputEnvelope = {
    data: TaskCreateManyMarketInput | TaskCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutMarketInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutMarketInput, TaskUncheckedUpdateWithoutMarketInput>
    create: XOR<TaskCreateWithoutMarketInput, TaskUncheckedCreateWithoutMarketInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutMarketInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutMarketInput, TaskUncheckedUpdateWithoutMarketInput>
  }

  export type TaskUpdateManyWithWhereWithoutMarketInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutMarketInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    marketId?: StringFilter<"Task"> | string
    timeframe?: EnumTimeframeFilter<"Task"> | $Enums.Timeframe
    range?: IntFilter<"Task"> | number
    executionMode?: EnumExecutionModeFilter<"Task"> | $Enums.ExecutionMode
    cronExpression?: StringNullableFilter<"Task"> | string | null
    scheduleInterval?: IntNullableFilter<"Task"> | number | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    lastExecutedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    nextExecutionAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    errorMessage?: StringNullableFilter<"Task"> | string | null
    enableNotification?: BoolFilter<"Task"> | boolean
    notificationChannels?: JsonNullableFilter<"Task">
    dingTalkWebhookId?: StringNullableFilter<"Task"> | string | null
    createdBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type MarketCreateWithoutTasksInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.MarketType
    exchange?: string | null
    fullExchangeName?: string | null
    displayName?: string | null
    description?: string | null
    icon?: string | null
    cryptoType?: $Enums.CryptoType | null
    baseCurrency?: string | null
    quoteCurrency?: string | null
    industry?: string | null
    sector?: string | null
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: number
    lastSyncAt?: Date | string | null
    syncStatus?: string | null
    syncError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.MarketType
    exchange?: string | null
    fullExchangeName?: string | null
    displayName?: string | null
    description?: string | null
    icon?: string | null
    cryptoType?: $Enums.CryptoType | null
    baseCurrency?: string | null
    quoteCurrency?: string | null
    industry?: string | null
    sector?: string | null
    isActive?: boolean
    isPriority?: boolean
    sortOrder?: number
    lastSyncAt?: Date | string | null
    syncStatus?: string | null
    syncError?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketCreateOrConnectWithoutTasksInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutTasksInput, MarketUncheckedCreateWithoutTasksInput>
  }

  export type DingTalkWebhookCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    webhookUrl: string
    safeWord?: string
    isActive?: boolean
    messageCount?: number
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DingTalkWebhookUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    webhookUrl: string
    safeWord?: string
    isActive?: boolean
    messageCount?: number
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DingTalkWebhookCreateOrConnectWithoutTasksInput = {
    where: DingTalkWebhookWhereUniqueInput
    create: XOR<DingTalkWebhookCreateWithoutTasksInput, DingTalkWebhookUncheckedCreateWithoutTasksInput>
  }

  export type TaskIndicatorCreateWithoutTaskInput = {
    id?: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    indicator: IndicatorCreateNestedOneWithoutTaskIndicatorsInput
  }

  export type TaskIndicatorUncheckedCreateWithoutTaskInput = {
    id?: string
    indicatorId: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskIndicatorCreateOrConnectWithoutTaskInput = {
    where: TaskIndicatorWhereUniqueInput
    create: XOR<TaskIndicatorCreateWithoutTaskInput, TaskIndicatorUncheckedCreateWithoutTaskInput>
  }

  export type TaskIndicatorCreateManyTaskInputEnvelope = {
    data: TaskIndicatorCreateManyTaskInput | TaskIndicatorCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskExecutionCreateWithoutTaskInput = {
    id?: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
    indicatorResults?: IndicatorResultCreateNestedManyWithoutExecutionInput
  }

  export type TaskExecutionUncheckedCreateWithoutTaskInput = {
    id?: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
    indicatorResults?: IndicatorResultUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type TaskExecutionCreateOrConnectWithoutTaskInput = {
    where: TaskExecutionWhereUniqueInput
    create: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput>
  }

  export type TaskExecutionCreateManyTaskInputEnvelope = {
    data: TaskExecutionCreateManyTaskInput | TaskExecutionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type MarketUpsertWithoutTasksInput = {
    update: XOR<MarketUpdateWithoutTasksInput, MarketUncheckedUpdateWithoutTasksInput>
    create: XOR<MarketCreateWithoutTasksInput, MarketUncheckedCreateWithoutTasksInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutTasksInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutTasksInput, MarketUncheckedUpdateWithoutTasksInput>
  }

  export type MarketUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    fullExchangeName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    cryptoType?: NullableEnumCryptoTypeFieldUpdateOperationsInput | $Enums.CryptoType | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    quoteCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: NullableStringFieldUpdateOperationsInput | string | null
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    fullExchangeName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    cryptoType?: NullableEnumCryptoTypeFieldUpdateOperationsInput | $Enums.CryptoType | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    quoteCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: NullableStringFieldUpdateOperationsInput | string | null
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DingTalkWebhookUpsertWithoutTasksInput = {
    update: XOR<DingTalkWebhookUpdateWithoutTasksInput, DingTalkWebhookUncheckedUpdateWithoutTasksInput>
    create: XOR<DingTalkWebhookCreateWithoutTasksInput, DingTalkWebhookUncheckedCreateWithoutTasksInput>
    where?: DingTalkWebhookWhereInput
  }

  export type DingTalkWebhookUpdateToOneWithWhereWithoutTasksInput = {
    where?: DingTalkWebhookWhereInput
    data: XOR<DingTalkWebhookUpdateWithoutTasksInput, DingTalkWebhookUncheckedUpdateWithoutTasksInput>
  }

  export type DingTalkWebhookUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: StringFieldUpdateOperationsInput | string
    safeWord?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messageCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DingTalkWebhookUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: StringFieldUpdateOperationsInput | string
    safeWord?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messageCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskIndicatorWhereUniqueInput
    update: XOR<TaskIndicatorUpdateWithoutTaskInput, TaskIndicatorUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskIndicatorCreateWithoutTaskInput, TaskIndicatorUncheckedCreateWithoutTaskInput>
  }

  export type TaskIndicatorUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskIndicatorWhereUniqueInput
    data: XOR<TaskIndicatorUpdateWithoutTaskInput, TaskIndicatorUncheckedUpdateWithoutTaskInput>
  }

  export type TaskIndicatorUpdateManyWithWhereWithoutTaskInput = {
    where: TaskIndicatorScalarWhereInput
    data: XOR<TaskIndicatorUpdateManyMutationInput, TaskIndicatorUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskExecutionUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskExecutionWhereUniqueInput
    update: XOR<TaskExecutionUpdateWithoutTaskInput, TaskExecutionUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput>
  }

  export type TaskExecutionUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskExecutionWhereUniqueInput
    data: XOR<TaskExecutionUpdateWithoutTaskInput, TaskExecutionUncheckedUpdateWithoutTaskInput>
  }

  export type TaskExecutionUpdateManyWithWhereWithoutTaskInput = {
    where: TaskExecutionScalarWhereInput
    data: XOR<TaskExecutionUpdateManyMutationInput, TaskExecutionUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskExecutionScalarWhereInput = {
    AND?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
    OR?: TaskExecutionScalarWhereInput[]
    NOT?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
    id?: StringFilter<"TaskExecution"> | string
    taskId?: StringFilter<"TaskExecution"> | string
    status?: EnumExecutionStatusFilter<"TaskExecution"> | $Enums.ExecutionStatus
    executedAt?: DateTimeFilter<"TaskExecution"> | Date | string
    duration?: IntNullableFilter<"TaskExecution"> | number | null
    marketPrice?: FloatNullableFilter<"TaskExecution"> | number | null
    marketVolume?: FloatNullableFilter<"TaskExecution"> | number | null
    marketData?: JsonNullableFilter<"TaskExecution">
    errorMessage?: StringNullableFilter<"TaskExecution"> | string | null
    errorStack?: StringNullableFilter<"TaskExecution"> | string | null
    notificationSent?: BoolFilter<"TaskExecution"> | boolean
    notificationError?: StringNullableFilter<"TaskExecution"> | string | null
    createdAt?: DateTimeFilter<"TaskExecution"> | Date | string
  }

  export type TaskCreateWithoutTaskIndicatorsInput = {
    id?: string
    name: string
    description?: string | null
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    market: MarketCreateNestedOneWithoutTasksInput
    dingTalkWebhook?: DingTalkWebhookCreateNestedOneWithoutTasksInput
    executions?: TaskExecutionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTaskIndicatorsInput = {
    id?: string
    name: string
    description?: string | null
    marketId: string
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: TaskExecutionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTaskIndicatorsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskIndicatorsInput, TaskUncheckedCreateWithoutTaskIndicatorsInput>
  }

  export type IndicatorCreateWithoutTaskIndicatorsInput = {
    id?: string
    name: string
    tradingViewId: string
    description?: string | null
    author?: string | null
    version?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields: JsonNullValueInput | InputJsonValue
    documentation?: string | null
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndicatorUncheckedCreateWithoutTaskIndicatorsInput = {
    id?: string
    name: string
    tradingViewId: string
    description?: string | null
    author?: string | null
    version?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields: JsonNullValueInput | InputJsonValue
    documentation?: string | null
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndicatorCreateOrConnectWithoutTaskIndicatorsInput = {
    where: IndicatorWhereUniqueInput
    create: XOR<IndicatorCreateWithoutTaskIndicatorsInput, IndicatorUncheckedCreateWithoutTaskIndicatorsInput>
  }

  export type TaskUpsertWithoutTaskIndicatorsInput = {
    update: XOR<TaskUpdateWithoutTaskIndicatorsInput, TaskUncheckedUpdateWithoutTaskIndicatorsInput>
    create: XOR<TaskCreateWithoutTaskIndicatorsInput, TaskUncheckedCreateWithoutTaskIndicatorsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskIndicatorsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskIndicatorsInput, TaskUncheckedUpdateWithoutTaskIndicatorsInput>
  }

  export type TaskUpdateWithoutTaskIndicatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutTasksNestedInput
    dingTalkWebhook?: DingTalkWebhookUpdateOneWithoutTasksNestedInput
    executions?: TaskExecutionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskIndicatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketId?: StringFieldUpdateOperationsInput | string
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type IndicatorUpsertWithoutTaskIndicatorsInput = {
    update: XOR<IndicatorUpdateWithoutTaskIndicatorsInput, IndicatorUncheckedUpdateWithoutTaskIndicatorsInput>
    create: XOR<IndicatorCreateWithoutTaskIndicatorsInput, IndicatorUncheckedCreateWithoutTaskIndicatorsInput>
    where?: IndicatorWhereInput
  }

  export type IndicatorUpdateToOneWithWhereWithoutTaskIndicatorsInput = {
    where?: IndicatorWhereInput
    data: XOR<IndicatorUpdateWithoutTaskIndicatorsInput, IndicatorUncheckedUpdateWithoutTaskIndicatorsInput>
  }

  export type IndicatorUpdateWithoutTaskIndicatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tradingViewId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields?: JsonNullValueInput | InputJsonValue
    documentation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorUncheckedUpdateWithoutTaskIndicatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tradingViewId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    outputFields?: JsonNullValueInput | InputJsonValue
    documentation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    name?: string | null
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    name?: string | null
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateWithoutDingTalkWebhookInput = {
    id?: string
    name: string
    description?: string | null
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    market: MarketCreateNestedOneWithoutTasksInput
    taskIndicators?: TaskIndicatorCreateNestedManyWithoutTaskInput
    executions?: TaskExecutionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutDingTalkWebhookInput = {
    id?: string
    name: string
    description?: string | null
    marketId: string
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskIndicators?: TaskIndicatorUncheckedCreateNestedManyWithoutTaskInput
    executions?: TaskExecutionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutDingTalkWebhookInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDingTalkWebhookInput, TaskUncheckedCreateWithoutDingTalkWebhookInput>
  }

  export type TaskCreateManyDingTalkWebhookInputEnvelope = {
    data: TaskCreateManyDingTalkWebhookInput | TaskCreateManyDingTalkWebhookInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutDingTalkWebhookInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutDingTalkWebhookInput, TaskUncheckedUpdateWithoutDingTalkWebhookInput>
    create: XOR<TaskCreateWithoutDingTalkWebhookInput, TaskUncheckedCreateWithoutDingTalkWebhookInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutDingTalkWebhookInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutDingTalkWebhookInput, TaskUncheckedUpdateWithoutDingTalkWebhookInput>
  }

  export type TaskUpdateManyWithWhereWithoutDingTalkWebhookInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutDingTalkWebhookInput>
  }

  export type IndicatorResultCreateManyExecutionInput = {
    id?: string
    indicatorId: string
    indicatorName: string
    outputs: JsonNullValueInput | InputJsonValue
    signal?: $Enums.SignalType | null
    signalTitle?: string | null
    signalMessage?: string | null
    signalStrength?: number | null
    buyAlert?: boolean | null
    sellAlert?: boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IndicatorResultUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    indicatorName?: StringFieldUpdateOperationsInput | string
    outputs?: JsonNullValueInput | InputJsonValue
    signal?: NullableEnumSignalTypeFieldUpdateOperationsInput | $Enums.SignalType | null
    signalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    signalMessage?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    buyAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sellAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorResultUncheckedUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    indicatorName?: StringFieldUpdateOperationsInput | string
    outputs?: JsonNullValueInput | InputJsonValue
    signal?: NullableEnumSignalTypeFieldUpdateOperationsInput | $Enums.SignalType | null
    signalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    signalMessage?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    buyAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sellAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndicatorResultUncheckedUpdateManyWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    indicatorName?: StringFieldUpdateOperationsInput | string
    outputs?: JsonNullValueInput | InputJsonValue
    signal?: NullableEnumSignalTypeFieldUpdateOperationsInput | $Enums.SignalType | null
    signalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    signalMessage?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    buyAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sellAlert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customValues?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorCreateManyIndicatorInput = {
    id?: string
    taskId: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskIndicatorUpdateWithoutIndicatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutTaskIndicatorsNestedInput
  }

  export type TaskIndicatorUncheckedUpdateWithoutIndicatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorUncheckedUpdateManyWithoutIndicatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyMarketInput = {
    id?: string
    name: string
    description?: string | null
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dingTalkWebhook?: DingTalkWebhookUpdateOneWithoutTasksNestedInput
    taskIndicators?: TaskIndicatorUpdateManyWithoutTaskNestedInput
    executions?: TaskExecutionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskIndicators?: TaskIndicatorUncheckedUpdateManyWithoutTaskNestedInput
    executions?: TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    dingTalkWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorCreateManyTaskInput = {
    id?: string
    indicatorId: string
    priority?: number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskExecutionCreateManyTaskInput = {
    id?: string
    status: $Enums.ExecutionStatus
    executedAt?: Date | string
    duration?: number | null
    marketPrice?: number | null
    marketVolume?: number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    errorStack?: string | null
    notificationSent?: boolean
    notificationError?: string | null
    createdAt?: Date | string
  }

  export type TaskIndicatorUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indicator?: IndicatorUpdateOneRequiredWithoutTaskIndicatorsNestedInput
  }

  export type TaskIndicatorUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskIndicatorUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    indicatorId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    overrideParameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskExecutionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indicatorResults?: IndicatorResultUpdateManyWithoutExecutionNestedInput
  }

  export type TaskExecutionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    indicatorResults?: IndicatorResultUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type TaskExecutionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    marketPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    marketVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    marketData?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorStack?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyDingTalkWebhookInput = {
    id?: string
    name: string
    description?: string | null
    marketId: string
    timeframe?: $Enums.Timeframe
    range?: number
    executionMode?: $Enums.ExecutionMode
    cronExpression?: string | null
    scheduleInterval?: number | null
    status?: $Enums.TaskStatus
    lastExecutedAt?: Date | string | null
    nextExecutionAt?: Date | string | null
    errorMessage?: string | null
    enableNotification?: boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutDingTalkWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutTasksNestedInput
    taskIndicators?: TaskIndicatorUpdateManyWithoutTaskNestedInput
    executions?: TaskExecutionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutDingTalkWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketId?: StringFieldUpdateOperationsInput | string
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskIndicators?: TaskIndicatorUncheckedUpdateManyWithoutTaskNestedInput
    executions?: TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutDingTalkWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketId?: StringFieldUpdateOperationsInput | string
    timeframe?: EnumTimeframeFieldUpdateOperationsInput | $Enums.Timeframe
    range?: IntFieldUpdateOperationsInput | number
    executionMode?: EnumExecutionModeFieldUpdateOperationsInput | $Enums.ExecutionMode
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleInterval?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextExecutionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableNotification?: BoolFieldUpdateOperationsInput | boolean
    notificationChannels?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}