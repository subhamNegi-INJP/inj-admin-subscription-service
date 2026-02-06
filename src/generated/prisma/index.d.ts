
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ClientSubscription
 * 
 */
export type ClientSubscription = $Result.DefaultSelection<Prisma.$ClientSubscriptionPayload>
/**
 * Model SubscriptionRenewal
 * 
 */
export type SubscriptionRenewal = $Result.DefaultSelection<Prisma.$SubscriptionRenewalPayload>
/**
 * Model SubscriptionChange
 * 
 */
export type SubscriptionChange = $Result.DefaultSelection<Prisma.$SubscriptionChangePayload>
/**
 * Model SubscriptionExpirationJob
 * 
 */
export type SubscriptionExpirationJob = $Result.DefaultSelection<Prisma.$SubscriptionExpirationJobPayload>
/**
 * Model SubscriptionAddon
 * 
 */
export type SubscriptionAddon = $Result.DefaultSelection<Prisma.$SubscriptionAddonPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  SUSPENDED: 'SUSPENDED',
  GRACE_PERIOD: 'GRACE_PERIOD'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SubscriptionChangeType: {
  ACTIVATION: 'ACTIVATION',
  UPGRADE: 'UPGRADE',
  DOWNGRADE: 'DOWNGRADE',
  SEATS_ADDED: 'SEATS_ADDED',
  SEATS_REMOVED: 'SEATS_REMOVED',
  DURATION_EXTENDED: 'DURATION_EXTENDED',
  CANCELLED: 'CANCELLED',
  RENEWED: 'RENEWED',
  ADDON_ADDED: 'ADDON_ADDED',
  ADDON_REMOVED: 'ADDON_REMOVED'
};

export type SubscriptionChangeType = (typeof SubscriptionChangeType)[keyof typeof SubscriptionChangeType]


export const AddonStatus: {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED'
};

export type AddonStatus = (typeof AddonStatus)[keyof typeof AddonStatus]

}

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SubscriptionChangeType = $Enums.SubscriptionChangeType

export const SubscriptionChangeType: typeof $Enums.SubscriptionChangeType

export type AddonStatus = $Enums.AddonStatus

export const AddonStatus: typeof $Enums.AddonStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ClientSubscriptions
 * const clientSubscriptions = await prisma.clientSubscription.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more ClientSubscriptions
   * const clientSubscriptions = await prisma.clientSubscription.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.clientSubscription`: Exposes CRUD operations for the **ClientSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientSubscriptions
    * const clientSubscriptions = await prisma.clientSubscription.findMany()
    * ```
    */
  get clientSubscription(): Prisma.ClientSubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.subscriptionRenewal`: Exposes CRUD operations for the **SubscriptionRenewal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionRenewals
    * const subscriptionRenewals = await prisma.subscriptionRenewal.findMany()
    * ```
    */
  get subscriptionRenewal(): Prisma.SubscriptionRenewalDelegate<ExtArgs>;

  /**
   * `prisma.subscriptionChange`: Exposes CRUD operations for the **SubscriptionChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionChanges
    * const subscriptionChanges = await prisma.subscriptionChange.findMany()
    * ```
    */
  get subscriptionChange(): Prisma.SubscriptionChangeDelegate<ExtArgs>;

  /**
   * `prisma.subscriptionExpirationJob`: Exposes CRUD operations for the **SubscriptionExpirationJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionExpirationJobs
    * const subscriptionExpirationJobs = await prisma.subscriptionExpirationJob.findMany()
    * ```
    */
  get subscriptionExpirationJob(): Prisma.SubscriptionExpirationJobDelegate<ExtArgs>;

  /**
   * `prisma.subscriptionAddon`: Exposes CRUD operations for the **SubscriptionAddon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionAddons
    * const subscriptionAddons = await prisma.subscriptionAddon.findMany()
    * ```
    */
  get subscriptionAddon(): Prisma.SubscriptionAddonDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    ClientSubscription: 'ClientSubscription',
    SubscriptionRenewal: 'SubscriptionRenewal',
    SubscriptionChange: 'SubscriptionChange',
    SubscriptionExpirationJob: 'SubscriptionExpirationJob',
    SubscriptionAddon: 'SubscriptionAddon'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "clientSubscription" | "subscriptionRenewal" | "subscriptionChange" | "subscriptionExpirationJob" | "subscriptionAddon"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ClientSubscription: {
        payload: Prisma.$ClientSubscriptionPayload<ExtArgs>
        fields: Prisma.ClientSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.ClientSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>
          }
          findMany: {
            args: Prisma.ClientSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>[]
          }
          create: {
            args: Prisma.ClientSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>
          }
          createMany: {
            args: Prisma.ClientSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.ClientSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>
          }
          update: {
            args: Prisma.ClientSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.ClientSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.ClientSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientSubscription>
          }
          groupBy: {
            args: Prisma.ClientSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<ClientSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionRenewal: {
        payload: Prisma.$SubscriptionRenewalPayload<ExtArgs>
        fields: Prisma.SubscriptionRenewalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionRenewalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionRenewalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionRenewalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionRenewalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>
          }
          findMany: {
            args: Prisma.SubscriptionRenewalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>[]
          }
          create: {
            args: Prisma.SubscriptionRenewalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>
          }
          createMany: {
            args: Prisma.SubscriptionRenewalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionRenewalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionRenewalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>
          }
          update: {
            args: Prisma.SubscriptionRenewalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionRenewalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionRenewalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionRenewalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionRenewalPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionRenewalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionRenewal>
          }
          groupBy: {
            args: Prisma.SubscriptionRenewalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionRenewalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionRenewalCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionRenewalCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionChange: {
        payload: Prisma.$SubscriptionChangePayload<ExtArgs>
        fields: Prisma.SubscriptionChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionChangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionChangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>
          }
          findFirst: {
            args: Prisma.SubscriptionChangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionChangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>
          }
          findMany: {
            args: Prisma.SubscriptionChangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>[]
          }
          create: {
            args: Prisma.SubscriptionChangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>
          }
          createMany: {
            args: Prisma.SubscriptionChangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionChangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>[]
          }
          delete: {
            args: Prisma.SubscriptionChangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>
          }
          update: {
            args: Prisma.SubscriptionChangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionChangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionChangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionChangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionChangePayload>
          }
          aggregate: {
            args: Prisma.SubscriptionChangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionChange>
          }
          groupBy: {
            args: Prisma.SubscriptionChangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionChangeCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionChangeCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionExpirationJob: {
        payload: Prisma.$SubscriptionExpirationJobPayload<ExtArgs>
        fields: Prisma.SubscriptionExpirationJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionExpirationJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionExpirationJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionExpirationJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionExpirationJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>
          }
          findMany: {
            args: Prisma.SubscriptionExpirationJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>[]
          }
          create: {
            args: Prisma.SubscriptionExpirationJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>
          }
          createMany: {
            args: Prisma.SubscriptionExpirationJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionExpirationJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionExpirationJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>
          }
          update: {
            args: Prisma.SubscriptionExpirationJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionExpirationJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionExpirationJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionExpirationJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionExpirationJobPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionExpirationJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionExpirationJob>
          }
          groupBy: {
            args: Prisma.SubscriptionExpirationJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionExpirationJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionExpirationJobCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionExpirationJobCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionAddon: {
        payload: Prisma.$SubscriptionAddonPayload<ExtArgs>
        fields: Prisma.SubscriptionAddonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionAddonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionAddonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionAddonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionAddonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>
          }
          findMany: {
            args: Prisma.SubscriptionAddonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>[]
          }
          create: {
            args: Prisma.SubscriptionAddonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>
          }
          createMany: {
            args: Prisma.SubscriptionAddonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionAddonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionAddonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>
          }
          update: {
            args: Prisma.SubscriptionAddonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionAddonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionAddonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionAddonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionAddonPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAddonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionAddon>
          }
          groupBy: {
            args: Prisma.SubscriptionAddonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionAddonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionAddonCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionAddonCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ClientSubscriptionCountOutputType
   */

  export type ClientSubscriptionCountOutputType = {
    renewals: number
    changes: number
    addons: number
  }

  export type ClientSubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renewals?: boolean | ClientSubscriptionCountOutputTypeCountRenewalsArgs
    changes?: boolean | ClientSubscriptionCountOutputTypeCountChangesArgs
    addons?: boolean | ClientSubscriptionCountOutputTypeCountAddonsArgs
  }

  // Custom InputTypes
  /**
   * ClientSubscriptionCountOutputType without action
   */
  export type ClientSubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscriptionCountOutputType
     */
    select?: ClientSubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientSubscriptionCountOutputType without action
   */
  export type ClientSubscriptionCountOutputTypeCountRenewalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionRenewalWhereInput
  }

  /**
   * ClientSubscriptionCountOutputType without action
   */
  export type ClientSubscriptionCountOutputTypeCountChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionChangeWhereInput
  }

  /**
   * ClientSubscriptionCountOutputType without action
   */
  export type ClientSubscriptionCountOutputTypeCountAddonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionAddonWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ClientSubscription
   */

  export type AggregateClientSubscription = {
    _count: ClientSubscriptionCountAggregateOutputType | null
    _avg: ClientSubscriptionAvgAggregateOutputType | null
    _sum: ClientSubscriptionSumAggregateOutputType | null
    _min: ClientSubscriptionMinAggregateOutputType | null
    _max: ClientSubscriptionMaxAggregateOutputType | null
  }

  export type ClientSubscriptionAvgAggregateOutputType = {
    seats: number | null
    gracePeriodDays: number | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponDiscount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type ClientSubscriptionSumAggregateOutputType = {
    seats: number | null
    gracePeriodDays: number | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponDiscount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type ClientSubscriptionMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    pricingPlanId: string | null
    pricingPlanName: string | null
    billingCycle: string | null
    orderId: string | null
    orderItemId: string | null
    name: string | null
    seats: number | null
    subscriptionDate: Date | null
    activationDate: Date | null
    expirationDate: Date | null
    gracePeriodDays: number | null
    status: $Enums.SubscriptionStatus | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponId: string | null
    couponCode: string | null
    couponDiscount: Decimal | null
    couponValidForRenewal: boolean | null
    gstin: string | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    paymentId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: string | null
    paymentTransactionId: string | null
    paymentNotes: string | null
    paymentCompletedAt: Date | null
    autoRenew: boolean | null
    renewalRemindedAt: Date | null
    nextRenewalDate: Date | null
    licensePoolId: string | null
    cancelledAt: Date | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientSubscriptionMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    pricingPlanId: string | null
    pricingPlanName: string | null
    billingCycle: string | null
    orderId: string | null
    orderItemId: string | null
    name: string | null
    seats: number | null
    subscriptionDate: Date | null
    activationDate: Date | null
    expirationDate: Date | null
    gracePeriodDays: number | null
    status: $Enums.SubscriptionStatus | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponId: string | null
    couponCode: string | null
    couponDiscount: Decimal | null
    couponValidForRenewal: boolean | null
    gstin: string | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    paymentId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: string | null
    paymentTransactionId: string | null
    paymentNotes: string | null
    paymentCompletedAt: Date | null
    autoRenew: boolean | null
    renewalRemindedAt: Date | null
    nextRenewalDate: Date | null
    licensePoolId: string | null
    cancelledAt: Date | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientSubscriptionCountAggregateOutputType = {
    id: number
    clientId: number
    clientName: number
    clientEmail: number
    productId: number
    productName: number
    productCode: number
    licenseTypeId: number
    licenseTypeName: number
    pricingPlanId: number
    pricingPlanName: number
    billingCycle: number
    orderId: number
    orderItemId: number
    name: number
    seats: number
    availableFeatures: number
    selectedFeatures: number
    subscriptionDate: number
    activationDate: number
    expirationDate: number
    gracePeriodDays: number
    status: number
    pricePerSeat: number
    subtotal: number
    discountPercent: number
    discountAmount: number
    couponId: number
    couponCode: number
    couponDiscount: number
    couponValidForRenewal: number
    gstin: number
    taxPercent: number
    taxAmount: number
    totalAmount: number
    currency: number
    paymentId: number
    paymentStatus: number
    paymentMethod: number
    paymentTransactionId: number
    paymentNotes: number
    paymentCompletedAt: number
    autoRenew: number
    renewalRemindedAt: number
    nextRenewalDate: number
    licensePoolId: number
    cancelledAt: number
    cancelReason: number
    cancelledById: number
    cancelledByName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientSubscriptionAvgAggregateInputType = {
    seats?: true
    gracePeriodDays?: true
    pricePerSeat?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponDiscount?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type ClientSubscriptionSumAggregateInputType = {
    seats?: true
    gracePeriodDays?: true
    pricePerSeat?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponDiscount?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type ClientSubscriptionMinAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    pricingPlanId?: true
    pricingPlanName?: true
    billingCycle?: true
    orderId?: true
    orderItemId?: true
    name?: true
    seats?: true
    subscriptionDate?: true
    activationDate?: true
    expirationDate?: true
    gracePeriodDays?: true
    status?: true
    pricePerSeat?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponId?: true
    couponCode?: true
    couponDiscount?: true
    couponValidForRenewal?: true
    gstin?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    paymentId?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentTransactionId?: true
    paymentNotes?: true
    paymentCompletedAt?: true
    autoRenew?: true
    renewalRemindedAt?: true
    nextRenewalDate?: true
    licensePoolId?: true
    cancelledAt?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientSubscriptionMaxAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    pricingPlanId?: true
    pricingPlanName?: true
    billingCycle?: true
    orderId?: true
    orderItemId?: true
    name?: true
    seats?: true
    subscriptionDate?: true
    activationDate?: true
    expirationDate?: true
    gracePeriodDays?: true
    status?: true
    pricePerSeat?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponId?: true
    couponCode?: true
    couponDiscount?: true
    couponValidForRenewal?: true
    gstin?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    paymentId?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentTransactionId?: true
    paymentNotes?: true
    paymentCompletedAt?: true
    autoRenew?: true
    renewalRemindedAt?: true
    nextRenewalDate?: true
    licensePoolId?: true
    cancelledAt?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientSubscriptionCountAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    pricingPlanId?: true
    pricingPlanName?: true
    billingCycle?: true
    orderId?: true
    orderItemId?: true
    name?: true
    seats?: true
    availableFeatures?: true
    selectedFeatures?: true
    subscriptionDate?: true
    activationDate?: true
    expirationDate?: true
    gracePeriodDays?: true
    status?: true
    pricePerSeat?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponId?: true
    couponCode?: true
    couponDiscount?: true
    couponValidForRenewal?: true
    gstin?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    paymentId?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentTransactionId?: true
    paymentNotes?: true
    paymentCompletedAt?: true
    autoRenew?: true
    renewalRemindedAt?: true
    nextRenewalDate?: true
    licensePoolId?: true
    cancelledAt?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSubscription to aggregate.
     */
    where?: ClientSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSubscriptions to fetch.
     */
    orderBy?: ClientSubscriptionOrderByWithRelationInput | ClientSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientSubscriptions
    **/
    _count?: true | ClientSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientSubscriptionMaxAggregateInputType
  }

  export type GetClientSubscriptionAggregateType<T extends ClientSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateClientSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientSubscription[P]>
      : GetScalarType<T[P], AggregateClientSubscription[P]>
  }




  export type ClientSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientSubscriptionWhereInput
    orderBy?: ClientSubscriptionOrderByWithAggregationInput | ClientSubscriptionOrderByWithAggregationInput[]
    by: ClientSubscriptionScalarFieldEnum[] | ClientSubscriptionScalarFieldEnum
    having?: ClientSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientSubscriptionCountAggregateInputType | true
    _avg?: ClientSubscriptionAvgAggregateInputType
    _sum?: ClientSubscriptionSumAggregateInputType
    _min?: ClientSubscriptionMinAggregateInputType
    _max?: ClientSubscriptionMaxAggregateInputType
  }

  export type ClientSubscriptionGroupByOutputType = {
    id: string
    clientId: string
    clientName: string
    clientEmail: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName: string | null
    billingCycle: string
    orderId: string | null
    orderItemId: string | null
    name: string | null
    seats: number
    availableFeatures: string[]
    selectedFeatures: string[]
    subscriptionDate: Date
    activationDate: Date | null
    expirationDate: Date
    gracePeriodDays: number
    status: $Enums.SubscriptionStatus
    pricePerSeat: Decimal
    subtotal: Decimal
    discountPercent: Decimal
    discountAmount: Decimal
    couponId: string | null
    couponCode: string | null
    couponDiscount: Decimal
    couponValidForRenewal: boolean
    gstin: string | null
    taxPercent: Decimal
    taxAmount: Decimal
    totalAmount: Decimal
    currency: string
    paymentId: string | null
    paymentStatus: $Enums.PaymentStatus
    paymentMethod: string | null
    paymentTransactionId: string | null
    paymentNotes: string | null
    paymentCompletedAt: Date | null
    autoRenew: boolean
    renewalRemindedAt: Date | null
    nextRenewalDate: Date | null
    licensePoolId: string | null
    cancelledAt: Date | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientSubscriptionCountAggregateOutputType | null
    _avg: ClientSubscriptionAvgAggregateOutputType | null
    _sum: ClientSubscriptionSumAggregateOutputType | null
    _min: ClientSubscriptionMinAggregateOutputType | null
    _max: ClientSubscriptionMaxAggregateOutputType | null
  }

  type GetClientSubscriptionGroupByPayload<T extends ClientSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], ClientSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type ClientSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    pricingPlanId?: boolean
    pricingPlanName?: boolean
    billingCycle?: boolean
    orderId?: boolean
    orderItemId?: boolean
    name?: boolean
    seats?: boolean
    availableFeatures?: boolean
    selectedFeatures?: boolean
    subscriptionDate?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    gracePeriodDays?: boolean
    status?: boolean
    pricePerSeat?: boolean
    subtotal?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    couponId?: boolean
    couponCode?: boolean
    couponDiscount?: boolean
    couponValidForRenewal?: boolean
    gstin?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentTransactionId?: boolean
    paymentNotes?: boolean
    paymentCompletedAt?: boolean
    autoRenew?: boolean
    renewalRemindedAt?: boolean
    nextRenewalDate?: boolean
    licensePoolId?: boolean
    cancelledAt?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    renewals?: boolean | ClientSubscription$renewalsArgs<ExtArgs>
    changes?: boolean | ClientSubscription$changesArgs<ExtArgs>
    addons?: boolean | ClientSubscription$addonsArgs<ExtArgs>
    _count?: boolean | ClientSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientSubscription"]>

  export type ClientSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    pricingPlanId?: boolean
    pricingPlanName?: boolean
    billingCycle?: boolean
    orderId?: boolean
    orderItemId?: boolean
    name?: boolean
    seats?: boolean
    availableFeatures?: boolean
    selectedFeatures?: boolean
    subscriptionDate?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    gracePeriodDays?: boolean
    status?: boolean
    pricePerSeat?: boolean
    subtotal?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    couponId?: boolean
    couponCode?: boolean
    couponDiscount?: boolean
    couponValidForRenewal?: boolean
    gstin?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentTransactionId?: boolean
    paymentNotes?: boolean
    paymentCompletedAt?: boolean
    autoRenew?: boolean
    renewalRemindedAt?: boolean
    nextRenewalDate?: boolean
    licensePoolId?: boolean
    cancelledAt?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clientSubscription"]>

  export type ClientSubscriptionSelectScalar = {
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    pricingPlanId?: boolean
    pricingPlanName?: boolean
    billingCycle?: boolean
    orderId?: boolean
    orderItemId?: boolean
    name?: boolean
    seats?: boolean
    availableFeatures?: boolean
    selectedFeatures?: boolean
    subscriptionDate?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    gracePeriodDays?: boolean
    status?: boolean
    pricePerSeat?: boolean
    subtotal?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    couponId?: boolean
    couponCode?: boolean
    couponDiscount?: boolean
    couponValidForRenewal?: boolean
    gstin?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentTransactionId?: boolean
    paymentNotes?: boolean
    paymentCompletedAt?: boolean
    autoRenew?: boolean
    renewalRemindedAt?: boolean
    nextRenewalDate?: boolean
    licensePoolId?: boolean
    cancelledAt?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renewals?: boolean | ClientSubscription$renewalsArgs<ExtArgs>
    changes?: boolean | ClientSubscription$changesArgs<ExtArgs>
    addons?: boolean | ClientSubscription$addonsArgs<ExtArgs>
    _count?: boolean | ClientSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientSubscription"
    objects: {
      renewals: Prisma.$SubscriptionRenewalPayload<ExtArgs>[]
      changes: Prisma.$SubscriptionChangePayload<ExtArgs>[]
      addons: Prisma.$SubscriptionAddonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      clientName: string
      clientEmail: string | null
      productId: string
      productName: string
      productCode: string
      licenseTypeId: string
      licenseTypeName: string
      pricingPlanId: string
      pricingPlanName: string | null
      billingCycle: string
      orderId: string | null
      orderItemId: string | null
      name: string | null
      seats: number
      availableFeatures: string[]
      selectedFeatures: string[]
      subscriptionDate: Date
      activationDate: Date | null
      expirationDate: Date
      gracePeriodDays: number
      status: $Enums.SubscriptionStatus
      pricePerSeat: Prisma.Decimal
      subtotal: Prisma.Decimal
      discountPercent: Prisma.Decimal
      discountAmount: Prisma.Decimal
      couponId: string | null
      couponCode: string | null
      couponDiscount: Prisma.Decimal
      couponValidForRenewal: boolean
      gstin: string | null
      taxPercent: Prisma.Decimal
      taxAmount: Prisma.Decimal
      totalAmount: Prisma.Decimal
      currency: string
      paymentId: string | null
      paymentStatus: $Enums.PaymentStatus
      paymentMethod: string | null
      paymentTransactionId: string | null
      paymentNotes: string | null
      paymentCompletedAt: Date | null
      autoRenew: boolean
      renewalRemindedAt: Date | null
      nextRenewalDate: Date | null
      licensePoolId: string | null
      cancelledAt: Date | null
      cancelReason: string | null
      cancelledById: string | null
      cancelledByName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clientSubscription"]>
    composites: {}
  }

  type ClientSubscriptionGetPayload<S extends boolean | null | undefined | ClientSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$ClientSubscriptionPayload, S>

  type ClientSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientSubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientSubscriptionCountAggregateInputType | true
    }

  export interface ClientSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientSubscription'], meta: { name: 'ClientSubscription' } }
    /**
     * Find zero or one ClientSubscription that matches the filter.
     * @param {ClientSubscriptionFindUniqueArgs} args - Arguments to find a ClientSubscription
     * @example
     * // Get one ClientSubscription
     * const clientSubscription = await prisma.clientSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientSubscriptionFindUniqueArgs>(args: SelectSubset<T, ClientSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClientSubscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a ClientSubscription
     * @example
     * // Get one ClientSubscription
     * const clientSubscription = await prisma.clientSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClientSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSubscriptionFindFirstArgs} args - Arguments to find a ClientSubscription
     * @example
     * // Get one ClientSubscription
     * const clientSubscription = await prisma.clientSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientSubscriptionFindFirstArgs>(args?: SelectSubset<T, ClientSubscriptionFindFirstArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClientSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSubscriptionFindFirstOrThrowArgs} args - Arguments to find a ClientSubscription
     * @example
     * // Get one ClientSubscription
     * const clientSubscription = await prisma.clientSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClientSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientSubscriptions
     * const clientSubscriptions = await prisma.clientSubscription.findMany()
     * 
     * // Get first 10 ClientSubscriptions
     * const clientSubscriptions = await prisma.clientSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientSubscriptionWithIdOnly = await prisma.clientSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientSubscriptionFindManyArgs>(args?: SelectSubset<T, ClientSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClientSubscription.
     * @param {ClientSubscriptionCreateArgs} args - Arguments to create a ClientSubscription.
     * @example
     * // Create one ClientSubscription
     * const ClientSubscription = await prisma.clientSubscription.create({
     *   data: {
     *     // ... data to create a ClientSubscription
     *   }
     * })
     * 
     */
    create<T extends ClientSubscriptionCreateArgs>(args: SelectSubset<T, ClientSubscriptionCreateArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClientSubscriptions.
     * @param {ClientSubscriptionCreateManyArgs} args - Arguments to create many ClientSubscriptions.
     * @example
     * // Create many ClientSubscriptions
     * const clientSubscription = await prisma.clientSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientSubscriptionCreateManyArgs>(args?: SelectSubset<T, ClientSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientSubscriptions and returns the data saved in the database.
     * @param {ClientSubscriptionCreateManyAndReturnArgs} args - Arguments to create many ClientSubscriptions.
     * @example
     * // Create many ClientSubscriptions
     * const clientSubscription = await prisma.clientSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientSubscriptions and only return the `id`
     * const clientSubscriptionWithIdOnly = await prisma.clientSubscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClientSubscription.
     * @param {ClientSubscriptionDeleteArgs} args - Arguments to delete one ClientSubscription.
     * @example
     * // Delete one ClientSubscription
     * const ClientSubscription = await prisma.clientSubscription.delete({
     *   where: {
     *     // ... filter to delete one ClientSubscription
     *   }
     * })
     * 
     */
    delete<T extends ClientSubscriptionDeleteArgs>(args: SelectSubset<T, ClientSubscriptionDeleteArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClientSubscription.
     * @param {ClientSubscriptionUpdateArgs} args - Arguments to update one ClientSubscription.
     * @example
     * // Update one ClientSubscription
     * const clientSubscription = await prisma.clientSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientSubscriptionUpdateArgs>(args: SelectSubset<T, ClientSubscriptionUpdateArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClientSubscriptions.
     * @param {ClientSubscriptionDeleteManyArgs} args - Arguments to filter ClientSubscriptions to delete.
     * @example
     * // Delete a few ClientSubscriptions
     * const { count } = await prisma.clientSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientSubscriptionDeleteManyArgs>(args?: SelectSubset<T, ClientSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientSubscriptions
     * const clientSubscription = await prisma.clientSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientSubscriptionUpdateManyArgs>(args: SelectSubset<T, ClientSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientSubscription.
     * @param {ClientSubscriptionUpsertArgs} args - Arguments to update or create a ClientSubscription.
     * @example
     * // Update or create a ClientSubscription
     * const clientSubscription = await prisma.clientSubscription.upsert({
     *   create: {
     *     // ... data to create a ClientSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientSubscription we want to update
     *   }
     * })
     */
    upsert<T extends ClientSubscriptionUpsertArgs>(args: SelectSubset<T, ClientSubscriptionUpsertArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClientSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSubscriptionCountArgs} args - Arguments to filter ClientSubscriptions to count.
     * @example
     * // Count the number of ClientSubscriptions
     * const count = await prisma.clientSubscription.count({
     *   where: {
     *     // ... the filter for the ClientSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends ClientSubscriptionCountArgs>(
      args?: Subset<T, ClientSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientSubscriptionAggregateArgs>(args: Subset<T, ClientSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetClientSubscriptionAggregateType<T>>

    /**
     * Group by ClientSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends ClientSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: ClientSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientSubscription model
   */
  readonly fields: ClientSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    renewals<T extends ClientSubscription$renewalsArgs<ExtArgs> = {}>(args?: Subset<T, ClientSubscription$renewalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "findMany"> | Null>
    changes<T extends ClientSubscription$changesArgs<ExtArgs> = {}>(args?: Subset<T, ClientSubscription$changesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "findMany"> | Null>
    addons<T extends ClientSubscription$addonsArgs<ExtArgs> = {}>(args?: Subset<T, ClientSubscription$addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ClientSubscription model
   */ 
  interface ClientSubscriptionFieldRefs {
    readonly id: FieldRef<"ClientSubscription", 'String'>
    readonly clientId: FieldRef<"ClientSubscription", 'String'>
    readonly clientName: FieldRef<"ClientSubscription", 'String'>
    readonly clientEmail: FieldRef<"ClientSubscription", 'String'>
    readonly productId: FieldRef<"ClientSubscription", 'String'>
    readonly productName: FieldRef<"ClientSubscription", 'String'>
    readonly productCode: FieldRef<"ClientSubscription", 'String'>
    readonly licenseTypeId: FieldRef<"ClientSubscription", 'String'>
    readonly licenseTypeName: FieldRef<"ClientSubscription", 'String'>
    readonly pricingPlanId: FieldRef<"ClientSubscription", 'String'>
    readonly pricingPlanName: FieldRef<"ClientSubscription", 'String'>
    readonly billingCycle: FieldRef<"ClientSubscription", 'String'>
    readonly orderId: FieldRef<"ClientSubscription", 'String'>
    readonly orderItemId: FieldRef<"ClientSubscription", 'String'>
    readonly name: FieldRef<"ClientSubscription", 'String'>
    readonly seats: FieldRef<"ClientSubscription", 'Int'>
    readonly availableFeatures: FieldRef<"ClientSubscription", 'String[]'>
    readonly selectedFeatures: FieldRef<"ClientSubscription", 'String[]'>
    readonly subscriptionDate: FieldRef<"ClientSubscription", 'DateTime'>
    readonly activationDate: FieldRef<"ClientSubscription", 'DateTime'>
    readonly expirationDate: FieldRef<"ClientSubscription", 'DateTime'>
    readonly gracePeriodDays: FieldRef<"ClientSubscription", 'Int'>
    readonly status: FieldRef<"ClientSubscription", 'SubscriptionStatus'>
    readonly pricePerSeat: FieldRef<"ClientSubscription", 'Decimal'>
    readonly subtotal: FieldRef<"ClientSubscription", 'Decimal'>
    readonly discountPercent: FieldRef<"ClientSubscription", 'Decimal'>
    readonly discountAmount: FieldRef<"ClientSubscription", 'Decimal'>
    readonly couponId: FieldRef<"ClientSubscription", 'String'>
    readonly couponCode: FieldRef<"ClientSubscription", 'String'>
    readonly couponDiscount: FieldRef<"ClientSubscription", 'Decimal'>
    readonly couponValidForRenewal: FieldRef<"ClientSubscription", 'Boolean'>
    readonly gstin: FieldRef<"ClientSubscription", 'String'>
    readonly taxPercent: FieldRef<"ClientSubscription", 'Decimal'>
    readonly taxAmount: FieldRef<"ClientSubscription", 'Decimal'>
    readonly totalAmount: FieldRef<"ClientSubscription", 'Decimal'>
    readonly currency: FieldRef<"ClientSubscription", 'String'>
    readonly paymentId: FieldRef<"ClientSubscription", 'String'>
    readonly paymentStatus: FieldRef<"ClientSubscription", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"ClientSubscription", 'String'>
    readonly paymentTransactionId: FieldRef<"ClientSubscription", 'String'>
    readonly paymentNotes: FieldRef<"ClientSubscription", 'String'>
    readonly paymentCompletedAt: FieldRef<"ClientSubscription", 'DateTime'>
    readonly autoRenew: FieldRef<"ClientSubscription", 'Boolean'>
    readonly renewalRemindedAt: FieldRef<"ClientSubscription", 'DateTime'>
    readonly nextRenewalDate: FieldRef<"ClientSubscription", 'DateTime'>
    readonly licensePoolId: FieldRef<"ClientSubscription", 'String'>
    readonly cancelledAt: FieldRef<"ClientSubscription", 'DateTime'>
    readonly cancelReason: FieldRef<"ClientSubscription", 'String'>
    readonly cancelledById: FieldRef<"ClientSubscription", 'String'>
    readonly cancelledByName: FieldRef<"ClientSubscription", 'String'>
    readonly createdAt: FieldRef<"ClientSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientSubscription findUnique
   */
  export type ClientSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ClientSubscription to fetch.
     */
    where: ClientSubscriptionWhereUniqueInput
  }

  /**
   * ClientSubscription findUniqueOrThrow
   */
  export type ClientSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ClientSubscription to fetch.
     */
    where: ClientSubscriptionWhereUniqueInput
  }

  /**
   * ClientSubscription findFirst
   */
  export type ClientSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ClientSubscription to fetch.
     */
    where?: ClientSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSubscriptions to fetch.
     */
    orderBy?: ClientSubscriptionOrderByWithRelationInput | ClientSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSubscriptions.
     */
    cursor?: ClientSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSubscriptions.
     */
    distinct?: ClientSubscriptionScalarFieldEnum | ClientSubscriptionScalarFieldEnum[]
  }

  /**
   * ClientSubscription findFirstOrThrow
   */
  export type ClientSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ClientSubscription to fetch.
     */
    where?: ClientSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSubscriptions to fetch.
     */
    orderBy?: ClientSubscriptionOrderByWithRelationInput | ClientSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSubscriptions.
     */
    cursor?: ClientSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSubscriptions.
     */
    distinct?: ClientSubscriptionScalarFieldEnum | ClientSubscriptionScalarFieldEnum[]
  }

  /**
   * ClientSubscription findMany
   */
  export type ClientSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ClientSubscriptions to fetch.
     */
    where?: ClientSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSubscriptions to fetch.
     */
    orderBy?: ClientSubscriptionOrderByWithRelationInput | ClientSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientSubscriptions.
     */
    cursor?: ClientSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSubscriptions.
     */
    skip?: number
    distinct?: ClientSubscriptionScalarFieldEnum | ClientSubscriptionScalarFieldEnum[]
  }

  /**
   * ClientSubscription create
   */
  export type ClientSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientSubscription.
     */
    data: XOR<ClientSubscriptionCreateInput, ClientSubscriptionUncheckedCreateInput>
  }

  /**
   * ClientSubscription createMany
   */
  export type ClientSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientSubscriptions.
     */
    data: ClientSubscriptionCreateManyInput | ClientSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientSubscription createManyAndReturn
   */
  export type ClientSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClientSubscriptions.
     */
    data: ClientSubscriptionCreateManyInput | ClientSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientSubscription update
   */
  export type ClientSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientSubscription.
     */
    data: XOR<ClientSubscriptionUpdateInput, ClientSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which ClientSubscription to update.
     */
    where: ClientSubscriptionWhereUniqueInput
  }

  /**
   * ClientSubscription updateMany
   */
  export type ClientSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientSubscriptions.
     */
    data: XOR<ClientSubscriptionUpdateManyMutationInput, ClientSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which ClientSubscriptions to update
     */
    where?: ClientSubscriptionWhereInput
  }

  /**
   * ClientSubscription upsert
   */
  export type ClientSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientSubscription to update in case it exists.
     */
    where: ClientSubscriptionWhereUniqueInput
    /**
     * In case the ClientSubscription found by the `where` argument doesn't exist, create a new ClientSubscription with this data.
     */
    create: XOR<ClientSubscriptionCreateInput, ClientSubscriptionUncheckedCreateInput>
    /**
     * In case the ClientSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientSubscriptionUpdateInput, ClientSubscriptionUncheckedUpdateInput>
  }

  /**
   * ClientSubscription delete
   */
  export type ClientSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which ClientSubscription to delete.
     */
    where: ClientSubscriptionWhereUniqueInput
  }

  /**
   * ClientSubscription deleteMany
   */
  export type ClientSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSubscriptions to delete
     */
    where?: ClientSubscriptionWhereInput
  }

  /**
   * ClientSubscription.renewals
   */
  export type ClientSubscription$renewalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    where?: SubscriptionRenewalWhereInput
    orderBy?: SubscriptionRenewalOrderByWithRelationInput | SubscriptionRenewalOrderByWithRelationInput[]
    cursor?: SubscriptionRenewalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionRenewalScalarFieldEnum | SubscriptionRenewalScalarFieldEnum[]
  }

  /**
   * ClientSubscription.changes
   */
  export type ClientSubscription$changesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    where?: SubscriptionChangeWhereInput
    orderBy?: SubscriptionChangeOrderByWithRelationInput | SubscriptionChangeOrderByWithRelationInput[]
    cursor?: SubscriptionChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionChangeScalarFieldEnum | SubscriptionChangeScalarFieldEnum[]
  }

  /**
   * ClientSubscription.addons
   */
  export type ClientSubscription$addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    where?: SubscriptionAddonWhereInput
    orderBy?: SubscriptionAddonOrderByWithRelationInput | SubscriptionAddonOrderByWithRelationInput[]
    cursor?: SubscriptionAddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionAddonScalarFieldEnum | SubscriptionAddonScalarFieldEnum[]
  }

  /**
   * ClientSubscription without action
   */
  export type ClientSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSubscription
     */
    select?: ClientSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionRenewal
   */

  export type AggregateSubscriptionRenewal = {
    _count: SubscriptionRenewalCountAggregateOutputType | null
    _avg: SubscriptionRenewalAvgAggregateOutputType | null
    _sum: SubscriptionRenewalSumAggregateOutputType | null
    _min: SubscriptionRenewalMinAggregateOutputType | null
    _max: SubscriptionRenewalMaxAggregateOutputType | null
  }

  export type SubscriptionRenewalAvgAggregateOutputType = {
    seats: number | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type SubscriptionRenewalSumAggregateOutputType = {
    seats: number | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type SubscriptionRenewalMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    previousEndDate: Date | null
    newEndDate: Date | null
    seats: number | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    paymentId: string | null
    invoiceId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    initiatedBy: string | null
    initiatedByName: string | null
    isAutoRenewal: boolean | null
    status: string | null
    failureReason: string | null
    renewedAt: Date | null
  }

  export type SubscriptionRenewalMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    previousEndDate: Date | null
    newEndDate: Date | null
    seats: number | null
    pricePerSeat: Decimal | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    paymentId: string | null
    invoiceId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    initiatedBy: string | null
    initiatedByName: string | null
    isAutoRenewal: boolean | null
    status: string | null
    failureReason: string | null
    renewedAt: Date | null
  }

  export type SubscriptionRenewalCountAggregateOutputType = {
    id: number
    subscriptionId: number
    previousEndDate: number
    newEndDate: number
    seats: number
    pricePerSeat: number
    subtotal: number
    discountAmount: number
    taxAmount: number
    totalAmount: number
    currency: number
    paymentId: number
    invoiceId: number
    paymentStatus: number
    initiatedBy: number
    initiatedByName: number
    isAutoRenewal: number
    status: number
    failureReason: number
    renewedAt: number
    _all: number
  }


  export type SubscriptionRenewalAvgAggregateInputType = {
    seats?: true
    pricePerSeat?: true
    subtotal?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type SubscriptionRenewalSumAggregateInputType = {
    seats?: true
    pricePerSeat?: true
    subtotal?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type SubscriptionRenewalMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    previousEndDate?: true
    newEndDate?: true
    seats?: true
    pricePerSeat?: true
    subtotal?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    paymentId?: true
    invoiceId?: true
    paymentStatus?: true
    initiatedBy?: true
    initiatedByName?: true
    isAutoRenewal?: true
    status?: true
    failureReason?: true
    renewedAt?: true
  }

  export type SubscriptionRenewalMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    previousEndDate?: true
    newEndDate?: true
    seats?: true
    pricePerSeat?: true
    subtotal?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    paymentId?: true
    invoiceId?: true
    paymentStatus?: true
    initiatedBy?: true
    initiatedByName?: true
    isAutoRenewal?: true
    status?: true
    failureReason?: true
    renewedAt?: true
  }

  export type SubscriptionRenewalCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    previousEndDate?: true
    newEndDate?: true
    seats?: true
    pricePerSeat?: true
    subtotal?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    paymentId?: true
    invoiceId?: true
    paymentStatus?: true
    initiatedBy?: true
    initiatedByName?: true
    isAutoRenewal?: true
    status?: true
    failureReason?: true
    renewedAt?: true
    _all?: true
  }

  export type SubscriptionRenewalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionRenewal to aggregate.
     */
    where?: SubscriptionRenewalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionRenewals to fetch.
     */
    orderBy?: SubscriptionRenewalOrderByWithRelationInput | SubscriptionRenewalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionRenewalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionRenewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionRenewals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionRenewals
    **/
    _count?: true | SubscriptionRenewalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionRenewalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionRenewalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionRenewalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionRenewalMaxAggregateInputType
  }

  export type GetSubscriptionRenewalAggregateType<T extends SubscriptionRenewalAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionRenewal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionRenewal[P]>
      : GetScalarType<T[P], AggregateSubscriptionRenewal[P]>
  }




  export type SubscriptionRenewalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionRenewalWhereInput
    orderBy?: SubscriptionRenewalOrderByWithAggregationInput | SubscriptionRenewalOrderByWithAggregationInput[]
    by: SubscriptionRenewalScalarFieldEnum[] | SubscriptionRenewalScalarFieldEnum
    having?: SubscriptionRenewalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionRenewalCountAggregateInputType | true
    _avg?: SubscriptionRenewalAvgAggregateInputType
    _sum?: SubscriptionRenewalSumAggregateInputType
    _min?: SubscriptionRenewalMinAggregateInputType
    _max?: SubscriptionRenewalMaxAggregateInputType
  }

  export type SubscriptionRenewalGroupByOutputType = {
    id: string
    subscriptionId: string
    previousEndDate: Date
    newEndDate: Date
    seats: number
    pricePerSeat: Decimal
    subtotal: Decimal
    discountAmount: Decimal
    taxAmount: Decimal
    totalAmount: Decimal
    currency: string
    paymentId: string | null
    invoiceId: string | null
    paymentStatus: $Enums.PaymentStatus
    initiatedBy: string | null
    initiatedByName: string | null
    isAutoRenewal: boolean
    status: string
    failureReason: string | null
    renewedAt: Date
    _count: SubscriptionRenewalCountAggregateOutputType | null
    _avg: SubscriptionRenewalAvgAggregateOutputType | null
    _sum: SubscriptionRenewalSumAggregateOutputType | null
    _min: SubscriptionRenewalMinAggregateOutputType | null
    _max: SubscriptionRenewalMaxAggregateOutputType | null
  }

  type GetSubscriptionRenewalGroupByPayload<T extends SubscriptionRenewalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionRenewalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionRenewalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionRenewalGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionRenewalGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionRenewalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    previousEndDate?: boolean
    newEndDate?: boolean
    seats?: boolean
    pricePerSeat?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    paymentStatus?: boolean
    initiatedBy?: boolean
    initiatedByName?: boolean
    isAutoRenewal?: boolean
    status?: boolean
    failureReason?: boolean
    renewedAt?: boolean
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionRenewal"]>

  export type SubscriptionRenewalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    previousEndDate?: boolean
    newEndDate?: boolean
    seats?: boolean
    pricePerSeat?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    paymentStatus?: boolean
    initiatedBy?: boolean
    initiatedByName?: boolean
    isAutoRenewal?: boolean
    status?: boolean
    failureReason?: boolean
    renewedAt?: boolean
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionRenewal"]>

  export type SubscriptionRenewalSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    previousEndDate?: boolean
    newEndDate?: boolean
    seats?: boolean
    pricePerSeat?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    paymentStatus?: boolean
    initiatedBy?: boolean
    initiatedByName?: boolean
    isAutoRenewal?: boolean
    status?: boolean
    failureReason?: boolean
    renewedAt?: boolean
  }

  export type SubscriptionRenewalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }
  export type SubscriptionRenewalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }

  export type $SubscriptionRenewalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionRenewal"
    objects: {
      subscription: Prisma.$ClientSubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      previousEndDate: Date
      newEndDate: Date
      seats: number
      pricePerSeat: Prisma.Decimal
      subtotal: Prisma.Decimal
      discountAmount: Prisma.Decimal
      taxAmount: Prisma.Decimal
      totalAmount: Prisma.Decimal
      currency: string
      paymentId: string | null
      invoiceId: string | null
      paymentStatus: $Enums.PaymentStatus
      initiatedBy: string | null
      initiatedByName: string | null
      isAutoRenewal: boolean
      status: string
      failureReason: string | null
      renewedAt: Date
    }, ExtArgs["result"]["subscriptionRenewal"]>
    composites: {}
  }

  type SubscriptionRenewalGetPayload<S extends boolean | null | undefined | SubscriptionRenewalDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionRenewalPayload, S>

  type SubscriptionRenewalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionRenewalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionRenewalCountAggregateInputType | true
    }

  export interface SubscriptionRenewalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionRenewal'], meta: { name: 'SubscriptionRenewal' } }
    /**
     * Find zero or one SubscriptionRenewal that matches the filter.
     * @param {SubscriptionRenewalFindUniqueArgs} args - Arguments to find a SubscriptionRenewal
     * @example
     * // Get one SubscriptionRenewal
     * const subscriptionRenewal = await prisma.subscriptionRenewal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionRenewalFindUniqueArgs>(args: SelectSubset<T, SubscriptionRenewalFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubscriptionRenewal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionRenewalFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionRenewal
     * @example
     * // Get one SubscriptionRenewal
     * const subscriptionRenewal = await prisma.subscriptionRenewal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionRenewalFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionRenewalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubscriptionRenewal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionRenewalFindFirstArgs} args - Arguments to find a SubscriptionRenewal
     * @example
     * // Get one SubscriptionRenewal
     * const subscriptionRenewal = await prisma.subscriptionRenewal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionRenewalFindFirstArgs>(args?: SelectSubset<T, SubscriptionRenewalFindFirstArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubscriptionRenewal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionRenewalFindFirstOrThrowArgs} args - Arguments to find a SubscriptionRenewal
     * @example
     * // Get one SubscriptionRenewal
     * const subscriptionRenewal = await prisma.subscriptionRenewal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionRenewalFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionRenewalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubscriptionRenewals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionRenewalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionRenewals
     * const subscriptionRenewals = await prisma.subscriptionRenewal.findMany()
     * 
     * // Get first 10 SubscriptionRenewals
     * const subscriptionRenewals = await prisma.subscriptionRenewal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionRenewalWithIdOnly = await prisma.subscriptionRenewal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionRenewalFindManyArgs>(args?: SelectSubset<T, SubscriptionRenewalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubscriptionRenewal.
     * @param {SubscriptionRenewalCreateArgs} args - Arguments to create a SubscriptionRenewal.
     * @example
     * // Create one SubscriptionRenewal
     * const SubscriptionRenewal = await prisma.subscriptionRenewal.create({
     *   data: {
     *     // ... data to create a SubscriptionRenewal
     *   }
     * })
     * 
     */
    create<T extends SubscriptionRenewalCreateArgs>(args: SelectSubset<T, SubscriptionRenewalCreateArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubscriptionRenewals.
     * @param {SubscriptionRenewalCreateManyArgs} args - Arguments to create many SubscriptionRenewals.
     * @example
     * // Create many SubscriptionRenewals
     * const subscriptionRenewal = await prisma.subscriptionRenewal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionRenewalCreateManyArgs>(args?: SelectSubset<T, SubscriptionRenewalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionRenewals and returns the data saved in the database.
     * @param {SubscriptionRenewalCreateManyAndReturnArgs} args - Arguments to create many SubscriptionRenewals.
     * @example
     * // Create many SubscriptionRenewals
     * const subscriptionRenewal = await prisma.subscriptionRenewal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionRenewals and only return the `id`
     * const subscriptionRenewalWithIdOnly = await prisma.subscriptionRenewal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionRenewalCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionRenewalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubscriptionRenewal.
     * @param {SubscriptionRenewalDeleteArgs} args - Arguments to delete one SubscriptionRenewal.
     * @example
     * // Delete one SubscriptionRenewal
     * const SubscriptionRenewal = await prisma.subscriptionRenewal.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionRenewal
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionRenewalDeleteArgs>(args: SelectSubset<T, SubscriptionRenewalDeleteArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubscriptionRenewal.
     * @param {SubscriptionRenewalUpdateArgs} args - Arguments to update one SubscriptionRenewal.
     * @example
     * // Update one SubscriptionRenewal
     * const subscriptionRenewal = await prisma.subscriptionRenewal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionRenewalUpdateArgs>(args: SelectSubset<T, SubscriptionRenewalUpdateArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubscriptionRenewals.
     * @param {SubscriptionRenewalDeleteManyArgs} args - Arguments to filter SubscriptionRenewals to delete.
     * @example
     * // Delete a few SubscriptionRenewals
     * const { count } = await prisma.subscriptionRenewal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionRenewalDeleteManyArgs>(args?: SelectSubset<T, SubscriptionRenewalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionRenewals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionRenewalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionRenewals
     * const subscriptionRenewal = await prisma.subscriptionRenewal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionRenewalUpdateManyArgs>(args: SelectSubset<T, SubscriptionRenewalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionRenewal.
     * @param {SubscriptionRenewalUpsertArgs} args - Arguments to update or create a SubscriptionRenewal.
     * @example
     * // Update or create a SubscriptionRenewal
     * const subscriptionRenewal = await prisma.subscriptionRenewal.upsert({
     *   create: {
     *     // ... data to create a SubscriptionRenewal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionRenewal we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionRenewalUpsertArgs>(args: SelectSubset<T, SubscriptionRenewalUpsertArgs<ExtArgs>>): Prisma__SubscriptionRenewalClient<$Result.GetResult<Prisma.$SubscriptionRenewalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubscriptionRenewals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionRenewalCountArgs} args - Arguments to filter SubscriptionRenewals to count.
     * @example
     * // Count the number of SubscriptionRenewals
     * const count = await prisma.subscriptionRenewal.count({
     *   where: {
     *     // ... the filter for the SubscriptionRenewals we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionRenewalCountArgs>(
      args?: Subset<T, SubscriptionRenewalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionRenewalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionRenewal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionRenewalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionRenewalAggregateArgs>(args: Subset<T, SubscriptionRenewalAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionRenewalAggregateType<T>>

    /**
     * Group by SubscriptionRenewal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionRenewalGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionRenewalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionRenewalGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionRenewalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionRenewalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionRenewalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionRenewal model
   */
  readonly fields: SubscriptionRenewalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionRenewal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionRenewalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends ClientSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSubscriptionDefaultArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SubscriptionRenewal model
   */ 
  interface SubscriptionRenewalFieldRefs {
    readonly id: FieldRef<"SubscriptionRenewal", 'String'>
    readonly subscriptionId: FieldRef<"SubscriptionRenewal", 'String'>
    readonly previousEndDate: FieldRef<"SubscriptionRenewal", 'DateTime'>
    readonly newEndDate: FieldRef<"SubscriptionRenewal", 'DateTime'>
    readonly seats: FieldRef<"SubscriptionRenewal", 'Int'>
    readonly pricePerSeat: FieldRef<"SubscriptionRenewal", 'Decimal'>
    readonly subtotal: FieldRef<"SubscriptionRenewal", 'Decimal'>
    readonly discountAmount: FieldRef<"SubscriptionRenewal", 'Decimal'>
    readonly taxAmount: FieldRef<"SubscriptionRenewal", 'Decimal'>
    readonly totalAmount: FieldRef<"SubscriptionRenewal", 'Decimal'>
    readonly currency: FieldRef<"SubscriptionRenewal", 'String'>
    readonly paymentId: FieldRef<"SubscriptionRenewal", 'String'>
    readonly invoiceId: FieldRef<"SubscriptionRenewal", 'String'>
    readonly paymentStatus: FieldRef<"SubscriptionRenewal", 'PaymentStatus'>
    readonly initiatedBy: FieldRef<"SubscriptionRenewal", 'String'>
    readonly initiatedByName: FieldRef<"SubscriptionRenewal", 'String'>
    readonly isAutoRenewal: FieldRef<"SubscriptionRenewal", 'Boolean'>
    readonly status: FieldRef<"SubscriptionRenewal", 'String'>
    readonly failureReason: FieldRef<"SubscriptionRenewal", 'String'>
    readonly renewedAt: FieldRef<"SubscriptionRenewal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionRenewal findUnique
   */
  export type SubscriptionRenewalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionRenewal to fetch.
     */
    where: SubscriptionRenewalWhereUniqueInput
  }

  /**
   * SubscriptionRenewal findUniqueOrThrow
   */
  export type SubscriptionRenewalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionRenewal to fetch.
     */
    where: SubscriptionRenewalWhereUniqueInput
  }

  /**
   * SubscriptionRenewal findFirst
   */
  export type SubscriptionRenewalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionRenewal to fetch.
     */
    where?: SubscriptionRenewalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionRenewals to fetch.
     */
    orderBy?: SubscriptionRenewalOrderByWithRelationInput | SubscriptionRenewalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionRenewals.
     */
    cursor?: SubscriptionRenewalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionRenewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionRenewals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionRenewals.
     */
    distinct?: SubscriptionRenewalScalarFieldEnum | SubscriptionRenewalScalarFieldEnum[]
  }

  /**
   * SubscriptionRenewal findFirstOrThrow
   */
  export type SubscriptionRenewalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionRenewal to fetch.
     */
    where?: SubscriptionRenewalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionRenewals to fetch.
     */
    orderBy?: SubscriptionRenewalOrderByWithRelationInput | SubscriptionRenewalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionRenewals.
     */
    cursor?: SubscriptionRenewalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionRenewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionRenewals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionRenewals.
     */
    distinct?: SubscriptionRenewalScalarFieldEnum | SubscriptionRenewalScalarFieldEnum[]
  }

  /**
   * SubscriptionRenewal findMany
   */
  export type SubscriptionRenewalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionRenewals to fetch.
     */
    where?: SubscriptionRenewalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionRenewals to fetch.
     */
    orderBy?: SubscriptionRenewalOrderByWithRelationInput | SubscriptionRenewalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionRenewals.
     */
    cursor?: SubscriptionRenewalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionRenewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionRenewals.
     */
    skip?: number
    distinct?: SubscriptionRenewalScalarFieldEnum | SubscriptionRenewalScalarFieldEnum[]
  }

  /**
   * SubscriptionRenewal create
   */
  export type SubscriptionRenewalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionRenewal.
     */
    data: XOR<SubscriptionRenewalCreateInput, SubscriptionRenewalUncheckedCreateInput>
  }

  /**
   * SubscriptionRenewal createMany
   */
  export type SubscriptionRenewalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionRenewals.
     */
    data: SubscriptionRenewalCreateManyInput | SubscriptionRenewalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionRenewal createManyAndReturn
   */
  export type SubscriptionRenewalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubscriptionRenewals.
     */
    data: SubscriptionRenewalCreateManyInput | SubscriptionRenewalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionRenewal update
   */
  export type SubscriptionRenewalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionRenewal.
     */
    data: XOR<SubscriptionRenewalUpdateInput, SubscriptionRenewalUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionRenewal to update.
     */
    where: SubscriptionRenewalWhereUniqueInput
  }

  /**
   * SubscriptionRenewal updateMany
   */
  export type SubscriptionRenewalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionRenewals.
     */
    data: XOR<SubscriptionRenewalUpdateManyMutationInput, SubscriptionRenewalUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionRenewals to update
     */
    where?: SubscriptionRenewalWhereInput
  }

  /**
   * SubscriptionRenewal upsert
   */
  export type SubscriptionRenewalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionRenewal to update in case it exists.
     */
    where: SubscriptionRenewalWhereUniqueInput
    /**
     * In case the SubscriptionRenewal found by the `where` argument doesn't exist, create a new SubscriptionRenewal with this data.
     */
    create: XOR<SubscriptionRenewalCreateInput, SubscriptionRenewalUncheckedCreateInput>
    /**
     * In case the SubscriptionRenewal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionRenewalUpdateInput, SubscriptionRenewalUncheckedUpdateInput>
  }

  /**
   * SubscriptionRenewal delete
   */
  export type SubscriptionRenewalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionRenewal to delete.
     */
    where: SubscriptionRenewalWhereUniqueInput
  }

  /**
   * SubscriptionRenewal deleteMany
   */
  export type SubscriptionRenewalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionRenewals to delete
     */
    where?: SubscriptionRenewalWhereInput
  }

  /**
   * SubscriptionRenewal without action
   */
  export type SubscriptionRenewalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionRenewal
     */
    select?: SubscriptionRenewalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionRenewalInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionChange
   */

  export type AggregateSubscriptionChange = {
    _count: SubscriptionChangeCountAggregateOutputType | null
    _avg: SubscriptionChangeAvgAggregateOutputType | null
    _sum: SubscriptionChangeSumAggregateOutputType | null
    _min: SubscriptionChangeMinAggregateOutputType | null
    _max: SubscriptionChangeMaxAggregateOutputType | null
  }

  export type SubscriptionChangeAvgAggregateOutputType = {
    previousSeats: number | null
    previousAmount: Decimal | null
    newSeats: number | null
    newAmount: Decimal | null
    proratedAmount: Decimal | null
    creditAmount: Decimal | null
  }

  export type SubscriptionChangeSumAggregateOutputType = {
    previousSeats: number | null
    previousAmount: Decimal | null
    newSeats: number | null
    newAmount: Decimal | null
    proratedAmount: Decimal | null
    creditAmount: Decimal | null
  }

  export type SubscriptionChangeMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    changeType: $Enums.SubscriptionChangeType | null
    previousLicenseTypeId: string | null
    previousLicenseTypeName: string | null
    previousSeats: number | null
    previousAmount: Decimal | null
    newLicenseTypeId: string | null
    newLicenseTypeName: string | null
    newSeats: number | null
    newAmount: Decimal | null
    proratedAmount: Decimal | null
    creditAmount: Decimal | null
    effectiveDate: Date | null
    paymentId: string | null
    invoiceId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    changedById: string | null
    changedByName: string | null
    reason: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type SubscriptionChangeMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    changeType: $Enums.SubscriptionChangeType | null
    previousLicenseTypeId: string | null
    previousLicenseTypeName: string | null
    previousSeats: number | null
    previousAmount: Decimal | null
    newLicenseTypeId: string | null
    newLicenseTypeName: string | null
    newSeats: number | null
    newAmount: Decimal | null
    proratedAmount: Decimal | null
    creditAmount: Decimal | null
    effectiveDate: Date | null
    paymentId: string | null
    invoiceId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    changedById: string | null
    changedByName: string | null
    reason: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type SubscriptionChangeCountAggregateOutputType = {
    id: number
    subscriptionId: number
    changeType: number
    previousLicenseTypeId: number
    previousLicenseTypeName: number
    previousSeats: number
    previousAmount: number
    newLicenseTypeId: number
    newLicenseTypeName: number
    newSeats: number
    newAmount: number
    proratedAmount: number
    creditAmount: number
    effectiveDate: number
    paymentId: number
    invoiceId: number
    paymentStatus: number
    changedById: number
    changedByName: number
    reason: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SubscriptionChangeAvgAggregateInputType = {
    previousSeats?: true
    previousAmount?: true
    newSeats?: true
    newAmount?: true
    proratedAmount?: true
    creditAmount?: true
  }

  export type SubscriptionChangeSumAggregateInputType = {
    previousSeats?: true
    previousAmount?: true
    newSeats?: true
    newAmount?: true
    proratedAmount?: true
    creditAmount?: true
  }

  export type SubscriptionChangeMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    changeType?: true
    previousLicenseTypeId?: true
    previousLicenseTypeName?: true
    previousSeats?: true
    previousAmount?: true
    newLicenseTypeId?: true
    newLicenseTypeName?: true
    newSeats?: true
    newAmount?: true
    proratedAmount?: true
    creditAmount?: true
    effectiveDate?: true
    paymentId?: true
    invoiceId?: true
    paymentStatus?: true
    changedById?: true
    changedByName?: true
    reason?: true
    notes?: true
    createdAt?: true
  }

  export type SubscriptionChangeMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    changeType?: true
    previousLicenseTypeId?: true
    previousLicenseTypeName?: true
    previousSeats?: true
    previousAmount?: true
    newLicenseTypeId?: true
    newLicenseTypeName?: true
    newSeats?: true
    newAmount?: true
    proratedAmount?: true
    creditAmount?: true
    effectiveDate?: true
    paymentId?: true
    invoiceId?: true
    paymentStatus?: true
    changedById?: true
    changedByName?: true
    reason?: true
    notes?: true
    createdAt?: true
  }

  export type SubscriptionChangeCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    changeType?: true
    previousLicenseTypeId?: true
    previousLicenseTypeName?: true
    previousSeats?: true
    previousAmount?: true
    newLicenseTypeId?: true
    newLicenseTypeName?: true
    newSeats?: true
    newAmount?: true
    proratedAmount?: true
    creditAmount?: true
    effectiveDate?: true
    paymentId?: true
    invoiceId?: true
    paymentStatus?: true
    changedById?: true
    changedByName?: true
    reason?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SubscriptionChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionChange to aggregate.
     */
    where?: SubscriptionChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionChanges to fetch.
     */
    orderBy?: SubscriptionChangeOrderByWithRelationInput | SubscriptionChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionChanges
    **/
    _count?: true | SubscriptionChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionChangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionChangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionChangeMaxAggregateInputType
  }

  export type GetSubscriptionChangeAggregateType<T extends SubscriptionChangeAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionChange[P]>
      : GetScalarType<T[P], AggregateSubscriptionChange[P]>
  }




  export type SubscriptionChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionChangeWhereInput
    orderBy?: SubscriptionChangeOrderByWithAggregationInput | SubscriptionChangeOrderByWithAggregationInput[]
    by: SubscriptionChangeScalarFieldEnum[] | SubscriptionChangeScalarFieldEnum
    having?: SubscriptionChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionChangeCountAggregateInputType | true
    _avg?: SubscriptionChangeAvgAggregateInputType
    _sum?: SubscriptionChangeSumAggregateInputType
    _min?: SubscriptionChangeMinAggregateInputType
    _max?: SubscriptionChangeMaxAggregateInputType
  }

  export type SubscriptionChangeGroupByOutputType = {
    id: string
    subscriptionId: string
    changeType: $Enums.SubscriptionChangeType
    previousLicenseTypeId: string | null
    previousLicenseTypeName: string | null
    previousSeats: number | null
    previousAmount: Decimal | null
    newLicenseTypeId: string | null
    newLicenseTypeName: string | null
    newSeats: number | null
    newAmount: Decimal | null
    proratedAmount: Decimal | null
    creditAmount: Decimal | null
    effectiveDate: Date
    paymentId: string | null
    invoiceId: string | null
    paymentStatus: $Enums.PaymentStatus
    changedById: string | null
    changedByName: string | null
    reason: string | null
    notes: string | null
    createdAt: Date
    _count: SubscriptionChangeCountAggregateOutputType | null
    _avg: SubscriptionChangeAvgAggregateOutputType | null
    _sum: SubscriptionChangeSumAggregateOutputType | null
    _min: SubscriptionChangeMinAggregateOutputType | null
    _max: SubscriptionChangeMaxAggregateOutputType | null
  }

  type GetSubscriptionChangeGroupByPayload<T extends SubscriptionChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionChangeGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionChangeGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    changeType?: boolean
    previousLicenseTypeId?: boolean
    previousLicenseTypeName?: boolean
    previousSeats?: boolean
    previousAmount?: boolean
    newLicenseTypeId?: boolean
    newLicenseTypeName?: boolean
    newSeats?: boolean
    newAmount?: boolean
    proratedAmount?: boolean
    creditAmount?: boolean
    effectiveDate?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    paymentStatus?: boolean
    changedById?: boolean
    changedByName?: boolean
    reason?: boolean
    notes?: boolean
    createdAt?: boolean
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionChange"]>

  export type SubscriptionChangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    changeType?: boolean
    previousLicenseTypeId?: boolean
    previousLicenseTypeName?: boolean
    previousSeats?: boolean
    previousAmount?: boolean
    newLicenseTypeId?: boolean
    newLicenseTypeName?: boolean
    newSeats?: boolean
    newAmount?: boolean
    proratedAmount?: boolean
    creditAmount?: boolean
    effectiveDate?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    paymentStatus?: boolean
    changedById?: boolean
    changedByName?: boolean
    reason?: boolean
    notes?: boolean
    createdAt?: boolean
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionChange"]>

  export type SubscriptionChangeSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    changeType?: boolean
    previousLicenseTypeId?: boolean
    previousLicenseTypeName?: boolean
    previousSeats?: boolean
    previousAmount?: boolean
    newLicenseTypeId?: boolean
    newLicenseTypeName?: boolean
    newSeats?: boolean
    newAmount?: boolean
    proratedAmount?: boolean
    creditAmount?: boolean
    effectiveDate?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    paymentStatus?: boolean
    changedById?: boolean
    changedByName?: boolean
    reason?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SubscriptionChangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }
  export type SubscriptionChangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }

  export type $SubscriptionChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionChange"
    objects: {
      subscription: Prisma.$ClientSubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      changeType: $Enums.SubscriptionChangeType
      previousLicenseTypeId: string | null
      previousLicenseTypeName: string | null
      previousSeats: number | null
      previousAmount: Prisma.Decimal | null
      newLicenseTypeId: string | null
      newLicenseTypeName: string | null
      newSeats: number | null
      newAmount: Prisma.Decimal | null
      proratedAmount: Prisma.Decimal | null
      creditAmount: Prisma.Decimal | null
      effectiveDate: Date
      paymentId: string | null
      invoiceId: string | null
      paymentStatus: $Enums.PaymentStatus
      changedById: string | null
      changedByName: string | null
      reason: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["subscriptionChange"]>
    composites: {}
  }

  type SubscriptionChangeGetPayload<S extends boolean | null | undefined | SubscriptionChangeDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionChangePayload, S>

  type SubscriptionChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionChangeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionChangeCountAggregateInputType | true
    }

  export interface SubscriptionChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionChange'], meta: { name: 'SubscriptionChange' } }
    /**
     * Find zero or one SubscriptionChange that matches the filter.
     * @param {SubscriptionChangeFindUniqueArgs} args - Arguments to find a SubscriptionChange
     * @example
     * // Get one SubscriptionChange
     * const subscriptionChange = await prisma.subscriptionChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionChangeFindUniqueArgs>(args: SelectSubset<T, SubscriptionChangeFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubscriptionChange that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionChangeFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionChange
     * @example
     * // Get one SubscriptionChange
     * const subscriptionChange = await prisma.subscriptionChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionChangeFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubscriptionChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionChangeFindFirstArgs} args - Arguments to find a SubscriptionChange
     * @example
     * // Get one SubscriptionChange
     * const subscriptionChange = await prisma.subscriptionChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionChangeFindFirstArgs>(args?: SelectSubset<T, SubscriptionChangeFindFirstArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubscriptionChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionChangeFindFirstOrThrowArgs} args - Arguments to find a SubscriptionChange
     * @example
     * // Get one SubscriptionChange
     * const subscriptionChange = await prisma.subscriptionChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionChangeFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubscriptionChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionChangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionChanges
     * const subscriptionChanges = await prisma.subscriptionChange.findMany()
     * 
     * // Get first 10 SubscriptionChanges
     * const subscriptionChanges = await prisma.subscriptionChange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionChangeWithIdOnly = await prisma.subscriptionChange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionChangeFindManyArgs>(args?: SelectSubset<T, SubscriptionChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubscriptionChange.
     * @param {SubscriptionChangeCreateArgs} args - Arguments to create a SubscriptionChange.
     * @example
     * // Create one SubscriptionChange
     * const SubscriptionChange = await prisma.subscriptionChange.create({
     *   data: {
     *     // ... data to create a SubscriptionChange
     *   }
     * })
     * 
     */
    create<T extends SubscriptionChangeCreateArgs>(args: SelectSubset<T, SubscriptionChangeCreateArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubscriptionChanges.
     * @param {SubscriptionChangeCreateManyArgs} args - Arguments to create many SubscriptionChanges.
     * @example
     * // Create many SubscriptionChanges
     * const subscriptionChange = await prisma.subscriptionChange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionChangeCreateManyArgs>(args?: SelectSubset<T, SubscriptionChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionChanges and returns the data saved in the database.
     * @param {SubscriptionChangeCreateManyAndReturnArgs} args - Arguments to create many SubscriptionChanges.
     * @example
     * // Create many SubscriptionChanges
     * const subscriptionChange = await prisma.subscriptionChange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionChanges and only return the `id`
     * const subscriptionChangeWithIdOnly = await prisma.subscriptionChange.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionChangeCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubscriptionChange.
     * @param {SubscriptionChangeDeleteArgs} args - Arguments to delete one SubscriptionChange.
     * @example
     * // Delete one SubscriptionChange
     * const SubscriptionChange = await prisma.subscriptionChange.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionChange
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionChangeDeleteArgs>(args: SelectSubset<T, SubscriptionChangeDeleteArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubscriptionChange.
     * @param {SubscriptionChangeUpdateArgs} args - Arguments to update one SubscriptionChange.
     * @example
     * // Update one SubscriptionChange
     * const subscriptionChange = await prisma.subscriptionChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionChangeUpdateArgs>(args: SelectSubset<T, SubscriptionChangeUpdateArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubscriptionChanges.
     * @param {SubscriptionChangeDeleteManyArgs} args - Arguments to filter SubscriptionChanges to delete.
     * @example
     * // Delete a few SubscriptionChanges
     * const { count } = await prisma.subscriptionChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionChangeDeleteManyArgs>(args?: SelectSubset<T, SubscriptionChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionChanges
     * const subscriptionChange = await prisma.subscriptionChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionChangeUpdateManyArgs>(args: SelectSubset<T, SubscriptionChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionChange.
     * @param {SubscriptionChangeUpsertArgs} args - Arguments to update or create a SubscriptionChange.
     * @example
     * // Update or create a SubscriptionChange
     * const subscriptionChange = await prisma.subscriptionChange.upsert({
     *   create: {
     *     // ... data to create a SubscriptionChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionChange we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionChangeUpsertArgs>(args: SelectSubset<T, SubscriptionChangeUpsertArgs<ExtArgs>>): Prisma__SubscriptionChangeClient<$Result.GetResult<Prisma.$SubscriptionChangePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubscriptionChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionChangeCountArgs} args - Arguments to filter SubscriptionChanges to count.
     * @example
     * // Count the number of SubscriptionChanges
     * const count = await prisma.subscriptionChange.count({
     *   where: {
     *     // ... the filter for the SubscriptionChanges we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionChangeCountArgs>(
      args?: Subset<T, SubscriptionChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionChangeAggregateArgs>(args: Subset<T, SubscriptionChangeAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionChangeAggregateType<T>>

    /**
     * Group by SubscriptionChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionChangeGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionChangeGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionChangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionChange model
   */
  readonly fields: SubscriptionChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends ClientSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSubscriptionDefaultArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SubscriptionChange model
   */ 
  interface SubscriptionChangeFieldRefs {
    readonly id: FieldRef<"SubscriptionChange", 'String'>
    readonly subscriptionId: FieldRef<"SubscriptionChange", 'String'>
    readonly changeType: FieldRef<"SubscriptionChange", 'SubscriptionChangeType'>
    readonly previousLicenseTypeId: FieldRef<"SubscriptionChange", 'String'>
    readonly previousLicenseTypeName: FieldRef<"SubscriptionChange", 'String'>
    readonly previousSeats: FieldRef<"SubscriptionChange", 'Int'>
    readonly previousAmount: FieldRef<"SubscriptionChange", 'Decimal'>
    readonly newLicenseTypeId: FieldRef<"SubscriptionChange", 'String'>
    readonly newLicenseTypeName: FieldRef<"SubscriptionChange", 'String'>
    readonly newSeats: FieldRef<"SubscriptionChange", 'Int'>
    readonly newAmount: FieldRef<"SubscriptionChange", 'Decimal'>
    readonly proratedAmount: FieldRef<"SubscriptionChange", 'Decimal'>
    readonly creditAmount: FieldRef<"SubscriptionChange", 'Decimal'>
    readonly effectiveDate: FieldRef<"SubscriptionChange", 'DateTime'>
    readonly paymentId: FieldRef<"SubscriptionChange", 'String'>
    readonly invoiceId: FieldRef<"SubscriptionChange", 'String'>
    readonly paymentStatus: FieldRef<"SubscriptionChange", 'PaymentStatus'>
    readonly changedById: FieldRef<"SubscriptionChange", 'String'>
    readonly changedByName: FieldRef<"SubscriptionChange", 'String'>
    readonly reason: FieldRef<"SubscriptionChange", 'String'>
    readonly notes: FieldRef<"SubscriptionChange", 'String'>
    readonly createdAt: FieldRef<"SubscriptionChange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionChange findUnique
   */
  export type SubscriptionChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionChange to fetch.
     */
    where: SubscriptionChangeWhereUniqueInput
  }

  /**
   * SubscriptionChange findUniqueOrThrow
   */
  export type SubscriptionChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionChange to fetch.
     */
    where: SubscriptionChangeWhereUniqueInput
  }

  /**
   * SubscriptionChange findFirst
   */
  export type SubscriptionChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionChange to fetch.
     */
    where?: SubscriptionChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionChanges to fetch.
     */
    orderBy?: SubscriptionChangeOrderByWithRelationInput | SubscriptionChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionChanges.
     */
    cursor?: SubscriptionChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionChanges.
     */
    distinct?: SubscriptionChangeScalarFieldEnum | SubscriptionChangeScalarFieldEnum[]
  }

  /**
   * SubscriptionChange findFirstOrThrow
   */
  export type SubscriptionChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionChange to fetch.
     */
    where?: SubscriptionChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionChanges to fetch.
     */
    orderBy?: SubscriptionChangeOrderByWithRelationInput | SubscriptionChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionChanges.
     */
    cursor?: SubscriptionChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionChanges.
     */
    distinct?: SubscriptionChangeScalarFieldEnum | SubscriptionChangeScalarFieldEnum[]
  }

  /**
   * SubscriptionChange findMany
   */
  export type SubscriptionChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionChanges to fetch.
     */
    where?: SubscriptionChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionChanges to fetch.
     */
    orderBy?: SubscriptionChangeOrderByWithRelationInput | SubscriptionChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionChanges.
     */
    cursor?: SubscriptionChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionChanges.
     */
    skip?: number
    distinct?: SubscriptionChangeScalarFieldEnum | SubscriptionChangeScalarFieldEnum[]
  }

  /**
   * SubscriptionChange create
   */
  export type SubscriptionChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionChange.
     */
    data: XOR<SubscriptionChangeCreateInput, SubscriptionChangeUncheckedCreateInput>
  }

  /**
   * SubscriptionChange createMany
   */
  export type SubscriptionChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionChanges.
     */
    data: SubscriptionChangeCreateManyInput | SubscriptionChangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionChange createManyAndReturn
   */
  export type SubscriptionChangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubscriptionChanges.
     */
    data: SubscriptionChangeCreateManyInput | SubscriptionChangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionChange update
   */
  export type SubscriptionChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionChange.
     */
    data: XOR<SubscriptionChangeUpdateInput, SubscriptionChangeUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionChange to update.
     */
    where: SubscriptionChangeWhereUniqueInput
  }

  /**
   * SubscriptionChange updateMany
   */
  export type SubscriptionChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionChanges.
     */
    data: XOR<SubscriptionChangeUpdateManyMutationInput, SubscriptionChangeUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionChanges to update
     */
    where?: SubscriptionChangeWhereInput
  }

  /**
   * SubscriptionChange upsert
   */
  export type SubscriptionChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionChange to update in case it exists.
     */
    where: SubscriptionChangeWhereUniqueInput
    /**
     * In case the SubscriptionChange found by the `where` argument doesn't exist, create a new SubscriptionChange with this data.
     */
    create: XOR<SubscriptionChangeCreateInput, SubscriptionChangeUncheckedCreateInput>
    /**
     * In case the SubscriptionChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionChangeUpdateInput, SubscriptionChangeUncheckedUpdateInput>
  }

  /**
   * SubscriptionChange delete
   */
  export type SubscriptionChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionChange to delete.
     */
    where: SubscriptionChangeWhereUniqueInput
  }

  /**
   * SubscriptionChange deleteMany
   */
  export type SubscriptionChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionChanges to delete
     */
    where?: SubscriptionChangeWhereInput
  }

  /**
   * SubscriptionChange without action
   */
  export type SubscriptionChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionChange
     */
    select?: SubscriptionChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionChangeInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionExpirationJob
   */

  export type AggregateSubscriptionExpirationJob = {
    _count: SubscriptionExpirationJobCountAggregateOutputType | null
    _min: SubscriptionExpirationJobMinAggregateOutputType | null
    _max: SubscriptionExpirationJobMaxAggregateOutputType | null
  }

  export type SubscriptionExpirationJobMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    expirationDate: Date | null
    reminderSentAt: Date | null
    processedAt: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionExpirationJobMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    expirationDate: Date | null
    reminderSentAt: Date | null
    processedAt: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionExpirationJobCountAggregateOutputType = {
    id: number
    subscriptionId: number
    expirationDate: number
    reminderSentAt: number
    processedAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionExpirationJobMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    expirationDate?: true
    reminderSentAt?: true
    processedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionExpirationJobMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    expirationDate?: true
    reminderSentAt?: true
    processedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionExpirationJobCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    expirationDate?: true
    reminderSentAt?: true
    processedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionExpirationJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionExpirationJob to aggregate.
     */
    where?: SubscriptionExpirationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionExpirationJobs to fetch.
     */
    orderBy?: SubscriptionExpirationJobOrderByWithRelationInput | SubscriptionExpirationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionExpirationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionExpirationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionExpirationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionExpirationJobs
    **/
    _count?: true | SubscriptionExpirationJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionExpirationJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionExpirationJobMaxAggregateInputType
  }

  export type GetSubscriptionExpirationJobAggregateType<T extends SubscriptionExpirationJobAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionExpirationJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionExpirationJob[P]>
      : GetScalarType<T[P], AggregateSubscriptionExpirationJob[P]>
  }




  export type SubscriptionExpirationJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionExpirationJobWhereInput
    orderBy?: SubscriptionExpirationJobOrderByWithAggregationInput | SubscriptionExpirationJobOrderByWithAggregationInput[]
    by: SubscriptionExpirationJobScalarFieldEnum[] | SubscriptionExpirationJobScalarFieldEnum
    having?: SubscriptionExpirationJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionExpirationJobCountAggregateInputType | true
    _min?: SubscriptionExpirationJobMinAggregateInputType
    _max?: SubscriptionExpirationJobMaxAggregateInputType
  }

  export type SubscriptionExpirationJobGroupByOutputType = {
    id: string
    subscriptionId: string
    expirationDate: Date
    reminderSentAt: Date | null
    processedAt: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionExpirationJobCountAggregateOutputType | null
    _min: SubscriptionExpirationJobMinAggregateOutputType | null
    _max: SubscriptionExpirationJobMaxAggregateOutputType | null
  }

  type GetSubscriptionExpirationJobGroupByPayload<T extends SubscriptionExpirationJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionExpirationJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionExpirationJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionExpirationJobGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionExpirationJobGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionExpirationJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    expirationDate?: boolean
    reminderSentAt?: boolean
    processedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionExpirationJob"]>

  export type SubscriptionExpirationJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    expirationDate?: boolean
    reminderSentAt?: boolean
    processedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionExpirationJob"]>

  export type SubscriptionExpirationJobSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    expirationDate?: boolean
    reminderSentAt?: boolean
    processedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SubscriptionExpirationJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionExpirationJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      expirationDate: Date
      reminderSentAt: Date | null
      processedAt: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionExpirationJob"]>
    composites: {}
  }

  type SubscriptionExpirationJobGetPayload<S extends boolean | null | undefined | SubscriptionExpirationJobDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionExpirationJobPayload, S>

  type SubscriptionExpirationJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionExpirationJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionExpirationJobCountAggregateInputType | true
    }

  export interface SubscriptionExpirationJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionExpirationJob'], meta: { name: 'SubscriptionExpirationJob' } }
    /**
     * Find zero or one SubscriptionExpirationJob that matches the filter.
     * @param {SubscriptionExpirationJobFindUniqueArgs} args - Arguments to find a SubscriptionExpirationJob
     * @example
     * // Get one SubscriptionExpirationJob
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionExpirationJobFindUniqueArgs>(args: SelectSubset<T, SubscriptionExpirationJobFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubscriptionExpirationJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionExpirationJobFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionExpirationJob
     * @example
     * // Get one SubscriptionExpirationJob
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionExpirationJobFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionExpirationJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubscriptionExpirationJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionExpirationJobFindFirstArgs} args - Arguments to find a SubscriptionExpirationJob
     * @example
     * // Get one SubscriptionExpirationJob
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionExpirationJobFindFirstArgs>(args?: SelectSubset<T, SubscriptionExpirationJobFindFirstArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubscriptionExpirationJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionExpirationJobFindFirstOrThrowArgs} args - Arguments to find a SubscriptionExpirationJob
     * @example
     * // Get one SubscriptionExpirationJob
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionExpirationJobFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionExpirationJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubscriptionExpirationJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionExpirationJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionExpirationJobs
     * const subscriptionExpirationJobs = await prisma.subscriptionExpirationJob.findMany()
     * 
     * // Get first 10 SubscriptionExpirationJobs
     * const subscriptionExpirationJobs = await prisma.subscriptionExpirationJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionExpirationJobWithIdOnly = await prisma.subscriptionExpirationJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionExpirationJobFindManyArgs>(args?: SelectSubset<T, SubscriptionExpirationJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubscriptionExpirationJob.
     * @param {SubscriptionExpirationJobCreateArgs} args - Arguments to create a SubscriptionExpirationJob.
     * @example
     * // Create one SubscriptionExpirationJob
     * const SubscriptionExpirationJob = await prisma.subscriptionExpirationJob.create({
     *   data: {
     *     // ... data to create a SubscriptionExpirationJob
     *   }
     * })
     * 
     */
    create<T extends SubscriptionExpirationJobCreateArgs>(args: SelectSubset<T, SubscriptionExpirationJobCreateArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubscriptionExpirationJobs.
     * @param {SubscriptionExpirationJobCreateManyArgs} args - Arguments to create many SubscriptionExpirationJobs.
     * @example
     * // Create many SubscriptionExpirationJobs
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionExpirationJobCreateManyArgs>(args?: SelectSubset<T, SubscriptionExpirationJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionExpirationJobs and returns the data saved in the database.
     * @param {SubscriptionExpirationJobCreateManyAndReturnArgs} args - Arguments to create many SubscriptionExpirationJobs.
     * @example
     * // Create many SubscriptionExpirationJobs
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionExpirationJobs and only return the `id`
     * const subscriptionExpirationJobWithIdOnly = await prisma.subscriptionExpirationJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionExpirationJobCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionExpirationJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubscriptionExpirationJob.
     * @param {SubscriptionExpirationJobDeleteArgs} args - Arguments to delete one SubscriptionExpirationJob.
     * @example
     * // Delete one SubscriptionExpirationJob
     * const SubscriptionExpirationJob = await prisma.subscriptionExpirationJob.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionExpirationJob
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionExpirationJobDeleteArgs>(args: SelectSubset<T, SubscriptionExpirationJobDeleteArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubscriptionExpirationJob.
     * @param {SubscriptionExpirationJobUpdateArgs} args - Arguments to update one SubscriptionExpirationJob.
     * @example
     * // Update one SubscriptionExpirationJob
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionExpirationJobUpdateArgs>(args: SelectSubset<T, SubscriptionExpirationJobUpdateArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubscriptionExpirationJobs.
     * @param {SubscriptionExpirationJobDeleteManyArgs} args - Arguments to filter SubscriptionExpirationJobs to delete.
     * @example
     * // Delete a few SubscriptionExpirationJobs
     * const { count } = await prisma.subscriptionExpirationJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionExpirationJobDeleteManyArgs>(args?: SelectSubset<T, SubscriptionExpirationJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionExpirationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionExpirationJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionExpirationJobs
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionExpirationJobUpdateManyArgs>(args: SelectSubset<T, SubscriptionExpirationJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionExpirationJob.
     * @param {SubscriptionExpirationJobUpsertArgs} args - Arguments to update or create a SubscriptionExpirationJob.
     * @example
     * // Update or create a SubscriptionExpirationJob
     * const subscriptionExpirationJob = await prisma.subscriptionExpirationJob.upsert({
     *   create: {
     *     // ... data to create a SubscriptionExpirationJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionExpirationJob we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionExpirationJobUpsertArgs>(args: SelectSubset<T, SubscriptionExpirationJobUpsertArgs<ExtArgs>>): Prisma__SubscriptionExpirationJobClient<$Result.GetResult<Prisma.$SubscriptionExpirationJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubscriptionExpirationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionExpirationJobCountArgs} args - Arguments to filter SubscriptionExpirationJobs to count.
     * @example
     * // Count the number of SubscriptionExpirationJobs
     * const count = await prisma.subscriptionExpirationJob.count({
     *   where: {
     *     // ... the filter for the SubscriptionExpirationJobs we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionExpirationJobCountArgs>(
      args?: Subset<T, SubscriptionExpirationJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionExpirationJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionExpirationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionExpirationJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionExpirationJobAggregateArgs>(args: Subset<T, SubscriptionExpirationJobAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionExpirationJobAggregateType<T>>

    /**
     * Group by SubscriptionExpirationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionExpirationJobGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionExpirationJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionExpirationJobGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionExpirationJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionExpirationJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionExpirationJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionExpirationJob model
   */
  readonly fields: SubscriptionExpirationJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionExpirationJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionExpirationJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SubscriptionExpirationJob model
   */ 
  interface SubscriptionExpirationJobFieldRefs {
    readonly id: FieldRef<"SubscriptionExpirationJob", 'String'>
    readonly subscriptionId: FieldRef<"SubscriptionExpirationJob", 'String'>
    readonly expirationDate: FieldRef<"SubscriptionExpirationJob", 'DateTime'>
    readonly reminderSentAt: FieldRef<"SubscriptionExpirationJob", 'DateTime'>
    readonly processedAt: FieldRef<"SubscriptionExpirationJob", 'DateTime'>
    readonly status: FieldRef<"SubscriptionExpirationJob", 'String'>
    readonly createdAt: FieldRef<"SubscriptionExpirationJob", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionExpirationJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionExpirationJob findUnique
   */
  export type SubscriptionExpirationJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * Filter, which SubscriptionExpirationJob to fetch.
     */
    where: SubscriptionExpirationJobWhereUniqueInput
  }

  /**
   * SubscriptionExpirationJob findUniqueOrThrow
   */
  export type SubscriptionExpirationJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * Filter, which SubscriptionExpirationJob to fetch.
     */
    where: SubscriptionExpirationJobWhereUniqueInput
  }

  /**
   * SubscriptionExpirationJob findFirst
   */
  export type SubscriptionExpirationJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * Filter, which SubscriptionExpirationJob to fetch.
     */
    where?: SubscriptionExpirationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionExpirationJobs to fetch.
     */
    orderBy?: SubscriptionExpirationJobOrderByWithRelationInput | SubscriptionExpirationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionExpirationJobs.
     */
    cursor?: SubscriptionExpirationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionExpirationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionExpirationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionExpirationJobs.
     */
    distinct?: SubscriptionExpirationJobScalarFieldEnum | SubscriptionExpirationJobScalarFieldEnum[]
  }

  /**
   * SubscriptionExpirationJob findFirstOrThrow
   */
  export type SubscriptionExpirationJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * Filter, which SubscriptionExpirationJob to fetch.
     */
    where?: SubscriptionExpirationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionExpirationJobs to fetch.
     */
    orderBy?: SubscriptionExpirationJobOrderByWithRelationInput | SubscriptionExpirationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionExpirationJobs.
     */
    cursor?: SubscriptionExpirationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionExpirationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionExpirationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionExpirationJobs.
     */
    distinct?: SubscriptionExpirationJobScalarFieldEnum | SubscriptionExpirationJobScalarFieldEnum[]
  }

  /**
   * SubscriptionExpirationJob findMany
   */
  export type SubscriptionExpirationJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * Filter, which SubscriptionExpirationJobs to fetch.
     */
    where?: SubscriptionExpirationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionExpirationJobs to fetch.
     */
    orderBy?: SubscriptionExpirationJobOrderByWithRelationInput | SubscriptionExpirationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionExpirationJobs.
     */
    cursor?: SubscriptionExpirationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionExpirationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionExpirationJobs.
     */
    skip?: number
    distinct?: SubscriptionExpirationJobScalarFieldEnum | SubscriptionExpirationJobScalarFieldEnum[]
  }

  /**
   * SubscriptionExpirationJob create
   */
  export type SubscriptionExpirationJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionExpirationJob.
     */
    data: XOR<SubscriptionExpirationJobCreateInput, SubscriptionExpirationJobUncheckedCreateInput>
  }

  /**
   * SubscriptionExpirationJob createMany
   */
  export type SubscriptionExpirationJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionExpirationJobs.
     */
    data: SubscriptionExpirationJobCreateManyInput | SubscriptionExpirationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionExpirationJob createManyAndReturn
   */
  export type SubscriptionExpirationJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubscriptionExpirationJobs.
     */
    data: SubscriptionExpirationJobCreateManyInput | SubscriptionExpirationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionExpirationJob update
   */
  export type SubscriptionExpirationJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionExpirationJob.
     */
    data: XOR<SubscriptionExpirationJobUpdateInput, SubscriptionExpirationJobUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionExpirationJob to update.
     */
    where: SubscriptionExpirationJobWhereUniqueInput
  }

  /**
   * SubscriptionExpirationJob updateMany
   */
  export type SubscriptionExpirationJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionExpirationJobs.
     */
    data: XOR<SubscriptionExpirationJobUpdateManyMutationInput, SubscriptionExpirationJobUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionExpirationJobs to update
     */
    where?: SubscriptionExpirationJobWhereInput
  }

  /**
   * SubscriptionExpirationJob upsert
   */
  export type SubscriptionExpirationJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionExpirationJob to update in case it exists.
     */
    where: SubscriptionExpirationJobWhereUniqueInput
    /**
     * In case the SubscriptionExpirationJob found by the `where` argument doesn't exist, create a new SubscriptionExpirationJob with this data.
     */
    create: XOR<SubscriptionExpirationJobCreateInput, SubscriptionExpirationJobUncheckedCreateInput>
    /**
     * In case the SubscriptionExpirationJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionExpirationJobUpdateInput, SubscriptionExpirationJobUncheckedUpdateInput>
  }

  /**
   * SubscriptionExpirationJob delete
   */
  export type SubscriptionExpirationJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
    /**
     * Filter which SubscriptionExpirationJob to delete.
     */
    where: SubscriptionExpirationJobWhereUniqueInput
  }

  /**
   * SubscriptionExpirationJob deleteMany
   */
  export type SubscriptionExpirationJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionExpirationJobs to delete
     */
    where?: SubscriptionExpirationJobWhereInput
  }

  /**
   * SubscriptionExpirationJob without action
   */
  export type SubscriptionExpirationJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionExpirationJob
     */
    select?: SubscriptionExpirationJobSelect<ExtArgs> | null
  }


  /**
   * Model SubscriptionAddon
   */

  export type AggregateSubscriptionAddon = {
    _count: SubscriptionAddonCountAggregateOutputType | null
    _avg: SubscriptionAddonAvgAggregateOutputType | null
    _sum: SubscriptionAddonSumAggregateOutputType | null
    _min: SubscriptionAddonMinAggregateOutputType | null
    _max: SubscriptionAddonMaxAggregateOutputType | null
  }

  export type SubscriptionAddonAvgAggregateOutputType = {
    pricePerUnit: Decimal | null
    quantity: number | null
    subtotal: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type SubscriptionAddonSumAggregateOutputType = {
    pricePerUnit: Decimal | null
    quantity: number | null
    subtotal: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type SubscriptionAddonMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    addonCode: string | null
    addonName: string | null
    addonDescription: string | null
    pricingType: string | null
    pricePerUnit: Decimal | null
    quantity: number | null
    subtotal: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    billingCycle: string | null
    nextBillingDate: Date | null
    isRecurring: boolean | null
    status: $Enums.AddonStatus | null
    purchasedAt: Date | null
    activatedAt: Date | null
    expirationDate: Date | null
    cancelledAt: Date | null
    paymentId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    invoiceId: string | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionAddonMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    addonCode: string | null
    addonName: string | null
    addonDescription: string | null
    pricingType: string | null
    pricePerUnit: Decimal | null
    quantity: number | null
    subtotal: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    billingCycle: string | null
    nextBillingDate: Date | null
    isRecurring: boolean | null
    status: $Enums.AddonStatus | null
    purchasedAt: Date | null
    activatedAt: Date | null
    expirationDate: Date | null
    cancelledAt: Date | null
    paymentId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    invoiceId: string | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionAddonCountAggregateOutputType = {
    id: number
    subscriptionId: number
    addonCode: number
    addonName: number
    addonDescription: number
    pricingType: number
    pricePerUnit: number
    quantity: number
    subtotal: number
    taxPercent: number
    taxAmount: number
    totalAmount: number
    currency: number
    billingCycle: number
    nextBillingDate: number
    isRecurring: number
    status: number
    purchasedAt: number
    activatedAt: number
    expirationDate: number
    cancelledAt: number
    paymentId: number
    paymentStatus: number
    invoiceId: number
    cancelReason: number
    cancelledById: number
    cancelledByName: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAddonAvgAggregateInputType = {
    pricePerUnit?: true
    quantity?: true
    subtotal?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type SubscriptionAddonSumAggregateInputType = {
    pricePerUnit?: true
    quantity?: true
    subtotal?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type SubscriptionAddonMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    addonCode?: true
    addonName?: true
    addonDescription?: true
    pricingType?: true
    pricePerUnit?: true
    quantity?: true
    subtotal?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    billingCycle?: true
    nextBillingDate?: true
    isRecurring?: true
    status?: true
    purchasedAt?: true
    activatedAt?: true
    expirationDate?: true
    cancelledAt?: true
    paymentId?: true
    paymentStatus?: true
    invoiceId?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionAddonMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    addonCode?: true
    addonName?: true
    addonDescription?: true
    pricingType?: true
    pricePerUnit?: true
    quantity?: true
    subtotal?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    billingCycle?: true
    nextBillingDate?: true
    isRecurring?: true
    status?: true
    purchasedAt?: true
    activatedAt?: true
    expirationDate?: true
    cancelledAt?: true
    paymentId?: true
    paymentStatus?: true
    invoiceId?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionAddonCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    addonCode?: true
    addonName?: true
    addonDescription?: true
    pricingType?: true
    pricePerUnit?: true
    quantity?: true
    subtotal?: true
    taxPercent?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    billingCycle?: true
    nextBillingDate?: true
    isRecurring?: true
    status?: true
    purchasedAt?: true
    activatedAt?: true
    expirationDate?: true
    cancelledAt?: true
    paymentId?: true
    paymentStatus?: true
    invoiceId?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAddonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionAddon to aggregate.
     */
    where?: SubscriptionAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionAddons to fetch.
     */
    orderBy?: SubscriptionAddonOrderByWithRelationInput | SubscriptionAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionAddons
    **/
    _count?: true | SubscriptionAddonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAddonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionAddonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionAddonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionAddonMaxAggregateInputType
  }

  export type GetSubscriptionAddonAggregateType<T extends SubscriptionAddonAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionAddon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionAddon[P]>
      : GetScalarType<T[P], AggregateSubscriptionAddon[P]>
  }




  export type SubscriptionAddonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionAddonWhereInput
    orderBy?: SubscriptionAddonOrderByWithAggregationInput | SubscriptionAddonOrderByWithAggregationInput[]
    by: SubscriptionAddonScalarFieldEnum[] | SubscriptionAddonScalarFieldEnum
    having?: SubscriptionAddonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionAddonCountAggregateInputType | true
    _avg?: SubscriptionAddonAvgAggregateInputType
    _sum?: SubscriptionAddonSumAggregateInputType
    _min?: SubscriptionAddonMinAggregateInputType
    _max?: SubscriptionAddonMaxAggregateInputType
  }

  export type SubscriptionAddonGroupByOutputType = {
    id: string
    subscriptionId: string
    addonCode: string
    addonName: string
    addonDescription: string | null
    pricingType: string
    pricePerUnit: Decimal
    quantity: number
    subtotal: Decimal
    taxPercent: Decimal
    taxAmount: Decimal
    totalAmount: Decimal
    currency: string
    billingCycle: string | null
    nextBillingDate: Date | null
    isRecurring: boolean
    status: $Enums.AddonStatus
    purchasedAt: Date | null
    activatedAt: Date | null
    expirationDate: Date | null
    cancelledAt: Date | null
    paymentId: string | null
    paymentStatus: $Enums.PaymentStatus
    invoiceId: string | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionAddonCountAggregateOutputType | null
    _avg: SubscriptionAddonAvgAggregateOutputType | null
    _sum: SubscriptionAddonSumAggregateOutputType | null
    _min: SubscriptionAddonMinAggregateOutputType | null
    _max: SubscriptionAddonMaxAggregateOutputType | null
  }

  type GetSubscriptionAddonGroupByPayload<T extends SubscriptionAddonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionAddonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionAddonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionAddonGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionAddonGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionAddonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    addonCode?: boolean
    addonName?: boolean
    addonDescription?: boolean
    pricingType?: boolean
    pricePerUnit?: boolean
    quantity?: boolean
    subtotal?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    billingCycle?: boolean
    nextBillingDate?: boolean
    isRecurring?: boolean
    status?: boolean
    purchasedAt?: boolean
    activatedAt?: boolean
    expirationDate?: boolean
    cancelledAt?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    invoiceId?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionAddon"]>

  export type SubscriptionAddonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    addonCode?: boolean
    addonName?: boolean
    addonDescription?: boolean
    pricingType?: boolean
    pricePerUnit?: boolean
    quantity?: boolean
    subtotal?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    billingCycle?: boolean
    nextBillingDate?: boolean
    isRecurring?: boolean
    status?: boolean
    purchasedAt?: boolean
    activatedAt?: boolean
    expirationDate?: boolean
    cancelledAt?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    invoiceId?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionAddon"]>

  export type SubscriptionAddonSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    addonCode?: boolean
    addonName?: boolean
    addonDescription?: boolean
    pricingType?: boolean
    pricePerUnit?: boolean
    quantity?: boolean
    subtotal?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    billingCycle?: boolean
    nextBillingDate?: boolean
    isRecurring?: boolean
    status?: boolean
    purchasedAt?: boolean
    activatedAt?: boolean
    expirationDate?: boolean
    cancelledAt?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    invoiceId?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionAddonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }
  export type SubscriptionAddonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | ClientSubscriptionDefaultArgs<ExtArgs>
  }

  export type $SubscriptionAddonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionAddon"
    objects: {
      subscription: Prisma.$ClientSubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      addonCode: string
      addonName: string
      addonDescription: string | null
      pricingType: string
      pricePerUnit: Prisma.Decimal
      quantity: number
      subtotal: Prisma.Decimal
      taxPercent: Prisma.Decimal
      taxAmount: Prisma.Decimal
      totalAmount: Prisma.Decimal
      currency: string
      billingCycle: string | null
      nextBillingDate: Date | null
      isRecurring: boolean
      status: $Enums.AddonStatus
      purchasedAt: Date | null
      activatedAt: Date | null
      expirationDate: Date | null
      cancelledAt: Date | null
      paymentId: string | null
      paymentStatus: $Enums.PaymentStatus
      invoiceId: string | null
      cancelReason: string | null
      cancelledById: string | null
      cancelledByName: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionAddon"]>
    composites: {}
  }

  type SubscriptionAddonGetPayload<S extends boolean | null | undefined | SubscriptionAddonDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionAddonPayload, S>

  type SubscriptionAddonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionAddonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionAddonCountAggregateInputType | true
    }

  export interface SubscriptionAddonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionAddon'], meta: { name: 'SubscriptionAddon' } }
    /**
     * Find zero or one SubscriptionAddon that matches the filter.
     * @param {SubscriptionAddonFindUniqueArgs} args - Arguments to find a SubscriptionAddon
     * @example
     * // Get one SubscriptionAddon
     * const subscriptionAddon = await prisma.subscriptionAddon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionAddonFindUniqueArgs>(args: SelectSubset<T, SubscriptionAddonFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubscriptionAddon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionAddonFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionAddon
     * @example
     * // Get one SubscriptionAddon
     * const subscriptionAddon = await prisma.subscriptionAddon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionAddonFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionAddonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubscriptionAddon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAddonFindFirstArgs} args - Arguments to find a SubscriptionAddon
     * @example
     * // Get one SubscriptionAddon
     * const subscriptionAddon = await prisma.subscriptionAddon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionAddonFindFirstArgs>(args?: SelectSubset<T, SubscriptionAddonFindFirstArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubscriptionAddon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAddonFindFirstOrThrowArgs} args - Arguments to find a SubscriptionAddon
     * @example
     * // Get one SubscriptionAddon
     * const subscriptionAddon = await prisma.subscriptionAddon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionAddonFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionAddonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubscriptionAddons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAddonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionAddons
     * const subscriptionAddons = await prisma.subscriptionAddon.findMany()
     * 
     * // Get first 10 SubscriptionAddons
     * const subscriptionAddons = await prisma.subscriptionAddon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionAddonWithIdOnly = await prisma.subscriptionAddon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionAddonFindManyArgs>(args?: SelectSubset<T, SubscriptionAddonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubscriptionAddon.
     * @param {SubscriptionAddonCreateArgs} args - Arguments to create a SubscriptionAddon.
     * @example
     * // Create one SubscriptionAddon
     * const SubscriptionAddon = await prisma.subscriptionAddon.create({
     *   data: {
     *     // ... data to create a SubscriptionAddon
     *   }
     * })
     * 
     */
    create<T extends SubscriptionAddonCreateArgs>(args: SelectSubset<T, SubscriptionAddonCreateArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubscriptionAddons.
     * @param {SubscriptionAddonCreateManyArgs} args - Arguments to create many SubscriptionAddons.
     * @example
     * // Create many SubscriptionAddons
     * const subscriptionAddon = await prisma.subscriptionAddon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionAddonCreateManyArgs>(args?: SelectSubset<T, SubscriptionAddonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionAddons and returns the data saved in the database.
     * @param {SubscriptionAddonCreateManyAndReturnArgs} args - Arguments to create many SubscriptionAddons.
     * @example
     * // Create many SubscriptionAddons
     * const subscriptionAddon = await prisma.subscriptionAddon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionAddons and only return the `id`
     * const subscriptionAddonWithIdOnly = await prisma.subscriptionAddon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionAddonCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionAddonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubscriptionAddon.
     * @param {SubscriptionAddonDeleteArgs} args - Arguments to delete one SubscriptionAddon.
     * @example
     * // Delete one SubscriptionAddon
     * const SubscriptionAddon = await prisma.subscriptionAddon.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionAddon
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionAddonDeleteArgs>(args: SelectSubset<T, SubscriptionAddonDeleteArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubscriptionAddon.
     * @param {SubscriptionAddonUpdateArgs} args - Arguments to update one SubscriptionAddon.
     * @example
     * // Update one SubscriptionAddon
     * const subscriptionAddon = await prisma.subscriptionAddon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionAddonUpdateArgs>(args: SelectSubset<T, SubscriptionAddonUpdateArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubscriptionAddons.
     * @param {SubscriptionAddonDeleteManyArgs} args - Arguments to filter SubscriptionAddons to delete.
     * @example
     * // Delete a few SubscriptionAddons
     * const { count } = await prisma.subscriptionAddon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionAddonDeleteManyArgs>(args?: SelectSubset<T, SubscriptionAddonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAddonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionAddons
     * const subscriptionAddon = await prisma.subscriptionAddon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionAddonUpdateManyArgs>(args: SelectSubset<T, SubscriptionAddonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionAddon.
     * @param {SubscriptionAddonUpsertArgs} args - Arguments to update or create a SubscriptionAddon.
     * @example
     * // Update or create a SubscriptionAddon
     * const subscriptionAddon = await prisma.subscriptionAddon.upsert({
     *   create: {
     *     // ... data to create a SubscriptionAddon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionAddon we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionAddonUpsertArgs>(args: SelectSubset<T, SubscriptionAddonUpsertArgs<ExtArgs>>): Prisma__SubscriptionAddonClient<$Result.GetResult<Prisma.$SubscriptionAddonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubscriptionAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAddonCountArgs} args - Arguments to filter SubscriptionAddons to count.
     * @example
     * // Count the number of SubscriptionAddons
     * const count = await prisma.subscriptionAddon.count({
     *   where: {
     *     // ... the filter for the SubscriptionAddons we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionAddonCountArgs>(
      args?: Subset<T, SubscriptionAddonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionAddonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAddonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAddonAggregateArgs>(args: Subset<T, SubscriptionAddonAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAddonAggregateType<T>>

    /**
     * Group by SubscriptionAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAddonGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionAddonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionAddonGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionAddonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionAddonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionAddonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionAddon model
   */
  readonly fields: SubscriptionAddonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionAddon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionAddonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends ClientSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSubscriptionDefaultArgs<ExtArgs>>): Prisma__ClientSubscriptionClient<$Result.GetResult<Prisma.$ClientSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SubscriptionAddon model
   */ 
  interface SubscriptionAddonFieldRefs {
    readonly id: FieldRef<"SubscriptionAddon", 'String'>
    readonly subscriptionId: FieldRef<"SubscriptionAddon", 'String'>
    readonly addonCode: FieldRef<"SubscriptionAddon", 'String'>
    readonly addonName: FieldRef<"SubscriptionAddon", 'String'>
    readonly addonDescription: FieldRef<"SubscriptionAddon", 'String'>
    readonly pricingType: FieldRef<"SubscriptionAddon", 'String'>
    readonly pricePerUnit: FieldRef<"SubscriptionAddon", 'Decimal'>
    readonly quantity: FieldRef<"SubscriptionAddon", 'Int'>
    readonly subtotal: FieldRef<"SubscriptionAddon", 'Decimal'>
    readonly taxPercent: FieldRef<"SubscriptionAddon", 'Decimal'>
    readonly taxAmount: FieldRef<"SubscriptionAddon", 'Decimal'>
    readonly totalAmount: FieldRef<"SubscriptionAddon", 'Decimal'>
    readonly currency: FieldRef<"SubscriptionAddon", 'String'>
    readonly billingCycle: FieldRef<"SubscriptionAddon", 'String'>
    readonly nextBillingDate: FieldRef<"SubscriptionAddon", 'DateTime'>
    readonly isRecurring: FieldRef<"SubscriptionAddon", 'Boolean'>
    readonly status: FieldRef<"SubscriptionAddon", 'AddonStatus'>
    readonly purchasedAt: FieldRef<"SubscriptionAddon", 'DateTime'>
    readonly activatedAt: FieldRef<"SubscriptionAddon", 'DateTime'>
    readonly expirationDate: FieldRef<"SubscriptionAddon", 'DateTime'>
    readonly cancelledAt: FieldRef<"SubscriptionAddon", 'DateTime'>
    readonly paymentId: FieldRef<"SubscriptionAddon", 'String'>
    readonly paymentStatus: FieldRef<"SubscriptionAddon", 'PaymentStatus'>
    readonly invoiceId: FieldRef<"SubscriptionAddon", 'String'>
    readonly cancelReason: FieldRef<"SubscriptionAddon", 'String'>
    readonly cancelledById: FieldRef<"SubscriptionAddon", 'String'>
    readonly cancelledByName: FieldRef<"SubscriptionAddon", 'String'>
    readonly notes: FieldRef<"SubscriptionAddon", 'String'>
    readonly createdAt: FieldRef<"SubscriptionAddon", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionAddon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionAddon findUnique
   */
  export type SubscriptionAddonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionAddon to fetch.
     */
    where: SubscriptionAddonWhereUniqueInput
  }

  /**
   * SubscriptionAddon findUniqueOrThrow
   */
  export type SubscriptionAddonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionAddon to fetch.
     */
    where: SubscriptionAddonWhereUniqueInput
  }

  /**
   * SubscriptionAddon findFirst
   */
  export type SubscriptionAddonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionAddon to fetch.
     */
    where?: SubscriptionAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionAddons to fetch.
     */
    orderBy?: SubscriptionAddonOrderByWithRelationInput | SubscriptionAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionAddons.
     */
    cursor?: SubscriptionAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionAddons.
     */
    distinct?: SubscriptionAddonScalarFieldEnum | SubscriptionAddonScalarFieldEnum[]
  }

  /**
   * SubscriptionAddon findFirstOrThrow
   */
  export type SubscriptionAddonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionAddon to fetch.
     */
    where?: SubscriptionAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionAddons to fetch.
     */
    orderBy?: SubscriptionAddonOrderByWithRelationInput | SubscriptionAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionAddons.
     */
    cursor?: SubscriptionAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionAddons.
     */
    distinct?: SubscriptionAddonScalarFieldEnum | SubscriptionAddonScalarFieldEnum[]
  }

  /**
   * SubscriptionAddon findMany
   */
  export type SubscriptionAddonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionAddons to fetch.
     */
    where?: SubscriptionAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionAddons to fetch.
     */
    orderBy?: SubscriptionAddonOrderByWithRelationInput | SubscriptionAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionAddons.
     */
    cursor?: SubscriptionAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionAddons.
     */
    skip?: number
    distinct?: SubscriptionAddonScalarFieldEnum | SubscriptionAddonScalarFieldEnum[]
  }

  /**
   * SubscriptionAddon create
   */
  export type SubscriptionAddonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionAddon.
     */
    data: XOR<SubscriptionAddonCreateInput, SubscriptionAddonUncheckedCreateInput>
  }

  /**
   * SubscriptionAddon createMany
   */
  export type SubscriptionAddonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionAddons.
     */
    data: SubscriptionAddonCreateManyInput | SubscriptionAddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionAddon createManyAndReturn
   */
  export type SubscriptionAddonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubscriptionAddons.
     */
    data: SubscriptionAddonCreateManyInput | SubscriptionAddonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionAddon update
   */
  export type SubscriptionAddonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionAddon.
     */
    data: XOR<SubscriptionAddonUpdateInput, SubscriptionAddonUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionAddon to update.
     */
    where: SubscriptionAddonWhereUniqueInput
  }

  /**
   * SubscriptionAddon updateMany
   */
  export type SubscriptionAddonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionAddons.
     */
    data: XOR<SubscriptionAddonUpdateManyMutationInput, SubscriptionAddonUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionAddons to update
     */
    where?: SubscriptionAddonWhereInput
  }

  /**
   * SubscriptionAddon upsert
   */
  export type SubscriptionAddonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionAddon to update in case it exists.
     */
    where: SubscriptionAddonWhereUniqueInput
    /**
     * In case the SubscriptionAddon found by the `where` argument doesn't exist, create a new SubscriptionAddon with this data.
     */
    create: XOR<SubscriptionAddonCreateInput, SubscriptionAddonUncheckedCreateInput>
    /**
     * In case the SubscriptionAddon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionAddonUpdateInput, SubscriptionAddonUncheckedUpdateInput>
  }

  /**
   * SubscriptionAddon delete
   */
  export type SubscriptionAddonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionAddon to delete.
     */
    where: SubscriptionAddonWhereUniqueInput
  }

  /**
   * SubscriptionAddon deleteMany
   */
  export type SubscriptionAddonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionAddons to delete
     */
    where?: SubscriptionAddonWhereInput
  }

  /**
   * SubscriptionAddon without action
   */
  export type SubscriptionAddonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionAddon
     */
    select?: SubscriptionAddonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionAddonInclude<ExtArgs> | null
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


  export const ClientSubscriptionScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    clientName: 'clientName',
    clientEmail: 'clientEmail',
    productId: 'productId',
    productName: 'productName',
    productCode: 'productCode',
    licenseTypeId: 'licenseTypeId',
    licenseTypeName: 'licenseTypeName',
    pricingPlanId: 'pricingPlanId',
    pricingPlanName: 'pricingPlanName',
    billingCycle: 'billingCycle',
    orderId: 'orderId',
    orderItemId: 'orderItemId',
    name: 'name',
    seats: 'seats',
    availableFeatures: 'availableFeatures',
    selectedFeatures: 'selectedFeatures',
    subscriptionDate: 'subscriptionDate',
    activationDate: 'activationDate',
    expirationDate: 'expirationDate',
    gracePeriodDays: 'gracePeriodDays',
    status: 'status',
    pricePerSeat: 'pricePerSeat',
    subtotal: 'subtotal',
    discountPercent: 'discountPercent',
    discountAmount: 'discountAmount',
    couponId: 'couponId',
    couponCode: 'couponCode',
    couponDiscount: 'couponDiscount',
    couponValidForRenewal: 'couponValidForRenewal',
    gstin: 'gstin',
    taxPercent: 'taxPercent',
    taxAmount: 'taxAmount',
    totalAmount: 'totalAmount',
    currency: 'currency',
    paymentId: 'paymentId',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    paymentTransactionId: 'paymentTransactionId',
    paymentNotes: 'paymentNotes',
    paymentCompletedAt: 'paymentCompletedAt',
    autoRenew: 'autoRenew',
    renewalRemindedAt: 'renewalRemindedAt',
    nextRenewalDate: 'nextRenewalDate',
    licensePoolId: 'licensePoolId',
    cancelledAt: 'cancelledAt',
    cancelReason: 'cancelReason',
    cancelledById: 'cancelledById',
    cancelledByName: 'cancelledByName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientSubscriptionScalarFieldEnum = (typeof ClientSubscriptionScalarFieldEnum)[keyof typeof ClientSubscriptionScalarFieldEnum]


  export const SubscriptionRenewalScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    previousEndDate: 'previousEndDate',
    newEndDate: 'newEndDate',
    seats: 'seats',
    pricePerSeat: 'pricePerSeat',
    subtotal: 'subtotal',
    discountAmount: 'discountAmount',
    taxAmount: 'taxAmount',
    totalAmount: 'totalAmount',
    currency: 'currency',
    paymentId: 'paymentId',
    invoiceId: 'invoiceId',
    paymentStatus: 'paymentStatus',
    initiatedBy: 'initiatedBy',
    initiatedByName: 'initiatedByName',
    isAutoRenewal: 'isAutoRenewal',
    status: 'status',
    failureReason: 'failureReason',
    renewedAt: 'renewedAt'
  };

  export type SubscriptionRenewalScalarFieldEnum = (typeof SubscriptionRenewalScalarFieldEnum)[keyof typeof SubscriptionRenewalScalarFieldEnum]


  export const SubscriptionChangeScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    changeType: 'changeType',
    previousLicenseTypeId: 'previousLicenseTypeId',
    previousLicenseTypeName: 'previousLicenseTypeName',
    previousSeats: 'previousSeats',
    previousAmount: 'previousAmount',
    newLicenseTypeId: 'newLicenseTypeId',
    newLicenseTypeName: 'newLicenseTypeName',
    newSeats: 'newSeats',
    newAmount: 'newAmount',
    proratedAmount: 'proratedAmount',
    creditAmount: 'creditAmount',
    effectiveDate: 'effectiveDate',
    paymentId: 'paymentId',
    invoiceId: 'invoiceId',
    paymentStatus: 'paymentStatus',
    changedById: 'changedById',
    changedByName: 'changedByName',
    reason: 'reason',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SubscriptionChangeScalarFieldEnum = (typeof SubscriptionChangeScalarFieldEnum)[keyof typeof SubscriptionChangeScalarFieldEnum]


  export const SubscriptionExpirationJobScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    expirationDate: 'expirationDate',
    reminderSentAt: 'reminderSentAt',
    processedAt: 'processedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionExpirationJobScalarFieldEnum = (typeof SubscriptionExpirationJobScalarFieldEnum)[keyof typeof SubscriptionExpirationJobScalarFieldEnum]


  export const SubscriptionAddonScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    addonCode: 'addonCode',
    addonName: 'addonName',
    addonDescription: 'addonDescription',
    pricingType: 'pricingType',
    pricePerUnit: 'pricePerUnit',
    quantity: 'quantity',
    subtotal: 'subtotal',
    taxPercent: 'taxPercent',
    taxAmount: 'taxAmount',
    totalAmount: 'totalAmount',
    currency: 'currency',
    billingCycle: 'billingCycle',
    nextBillingDate: 'nextBillingDate',
    isRecurring: 'isRecurring',
    status: 'status',
    purchasedAt: 'purchasedAt',
    activatedAt: 'activatedAt',
    expirationDate: 'expirationDate',
    cancelledAt: 'cancelledAt',
    paymentId: 'paymentId',
    paymentStatus: 'paymentStatus',
    invoiceId: 'invoiceId',
    cancelReason: 'cancelReason',
    cancelledById: 'cancelledById',
    cancelledByName: 'cancelledByName',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionAddonScalarFieldEnum = (typeof SubscriptionAddonScalarFieldEnum)[keyof typeof SubscriptionAddonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'SubscriptionChangeType'
   */
  export type EnumSubscriptionChangeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionChangeType'>
    


  /**
   * Reference to a field of type 'SubscriptionChangeType[]'
   */
  export type ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionChangeType[]'>
    


  /**
   * Reference to a field of type 'AddonStatus'
   */
  export type EnumAddonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddonStatus'>
    


  /**
   * Reference to a field of type 'AddonStatus[]'
   */
  export type ListEnumAddonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddonStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientSubscriptionWhereInput = {
    AND?: ClientSubscriptionWhereInput | ClientSubscriptionWhereInput[]
    OR?: ClientSubscriptionWhereInput[]
    NOT?: ClientSubscriptionWhereInput | ClientSubscriptionWhereInput[]
    id?: StringFilter<"ClientSubscription"> | string
    clientId?: StringFilter<"ClientSubscription"> | string
    clientName?: StringFilter<"ClientSubscription"> | string
    clientEmail?: StringNullableFilter<"ClientSubscription"> | string | null
    productId?: StringFilter<"ClientSubscription"> | string
    productName?: StringFilter<"ClientSubscription"> | string
    productCode?: StringFilter<"ClientSubscription"> | string
    licenseTypeId?: StringFilter<"ClientSubscription"> | string
    licenseTypeName?: StringFilter<"ClientSubscription"> | string
    pricingPlanId?: StringFilter<"ClientSubscription"> | string
    pricingPlanName?: StringNullableFilter<"ClientSubscription"> | string | null
    billingCycle?: StringFilter<"ClientSubscription"> | string
    orderId?: StringNullableFilter<"ClientSubscription"> | string | null
    orderItemId?: StringNullableFilter<"ClientSubscription"> | string | null
    name?: StringNullableFilter<"ClientSubscription"> | string | null
    seats?: IntFilter<"ClientSubscription"> | number
    availableFeatures?: StringNullableListFilter<"ClientSubscription">
    selectedFeatures?: StringNullableListFilter<"ClientSubscription">
    subscriptionDate?: DateTimeFilter<"ClientSubscription"> | Date | string
    activationDate?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    expirationDate?: DateTimeFilter<"ClientSubscription"> | Date | string
    gracePeriodDays?: IntFilter<"ClientSubscription"> | number
    status?: EnumSubscriptionStatusFilter<"ClientSubscription"> | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    couponId?: StringNullableFilter<"ClientSubscription"> | string | null
    couponCode?: StringNullableFilter<"ClientSubscription"> | string | null
    couponDiscount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFilter<"ClientSubscription"> | boolean
    gstin?: StringNullableFilter<"ClientSubscription"> | string | null
    taxPercent?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"ClientSubscription"> | string
    paymentId?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"ClientSubscription"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentTransactionId?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentNotes?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentCompletedAt?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    autoRenew?: BoolFilter<"ClientSubscription"> | boolean
    renewalRemindedAt?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    nextRenewalDate?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    licensePoolId?: StringNullableFilter<"ClientSubscription"> | string | null
    cancelledAt?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    cancelReason?: StringNullableFilter<"ClientSubscription"> | string | null
    cancelledById?: StringNullableFilter<"ClientSubscription"> | string | null
    cancelledByName?: StringNullableFilter<"ClientSubscription"> | string | null
    createdAt?: DateTimeFilter<"ClientSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"ClientSubscription"> | Date | string
    renewals?: SubscriptionRenewalListRelationFilter
    changes?: SubscriptionChangeListRelationFilter
    addons?: SubscriptionAddonListRelationFilter
  }

  export type ClientSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    pricingPlanId?: SortOrder
    pricingPlanName?: SortOrderInput | SortOrder
    billingCycle?: SortOrder
    orderId?: SortOrderInput | SortOrder
    orderItemId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    seats?: SortOrder
    availableFeatures?: SortOrder
    selectedFeatures?: SortOrder
    subscriptionDate?: SortOrder
    activationDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    status?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponDiscount?: SortOrder
    couponValidForRenewal?: SortOrder
    gstin?: SortOrderInput | SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentTransactionId?: SortOrderInput | SortOrder
    paymentNotes?: SortOrderInput | SortOrder
    paymentCompletedAt?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    renewalRemindedAt?: SortOrderInput | SortOrder
    nextRenewalDate?: SortOrderInput | SortOrder
    licensePoolId?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    cancelledById?: SortOrderInput | SortOrder
    cancelledByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    renewals?: SubscriptionRenewalOrderByRelationAggregateInput
    changes?: SubscriptionChangeOrderByRelationAggregateInput
    addons?: SubscriptionAddonOrderByRelationAggregateInput
  }

  export type ClientSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licensePoolId?: string
    AND?: ClientSubscriptionWhereInput | ClientSubscriptionWhereInput[]
    OR?: ClientSubscriptionWhereInput[]
    NOT?: ClientSubscriptionWhereInput | ClientSubscriptionWhereInput[]
    clientId?: StringFilter<"ClientSubscription"> | string
    clientName?: StringFilter<"ClientSubscription"> | string
    clientEmail?: StringNullableFilter<"ClientSubscription"> | string | null
    productId?: StringFilter<"ClientSubscription"> | string
    productName?: StringFilter<"ClientSubscription"> | string
    productCode?: StringFilter<"ClientSubscription"> | string
    licenseTypeId?: StringFilter<"ClientSubscription"> | string
    licenseTypeName?: StringFilter<"ClientSubscription"> | string
    pricingPlanId?: StringFilter<"ClientSubscription"> | string
    pricingPlanName?: StringNullableFilter<"ClientSubscription"> | string | null
    billingCycle?: StringFilter<"ClientSubscription"> | string
    orderId?: StringNullableFilter<"ClientSubscription"> | string | null
    orderItemId?: StringNullableFilter<"ClientSubscription"> | string | null
    name?: StringNullableFilter<"ClientSubscription"> | string | null
    seats?: IntFilter<"ClientSubscription"> | number
    availableFeatures?: StringNullableListFilter<"ClientSubscription">
    selectedFeatures?: StringNullableListFilter<"ClientSubscription">
    subscriptionDate?: DateTimeFilter<"ClientSubscription"> | Date | string
    activationDate?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    expirationDate?: DateTimeFilter<"ClientSubscription"> | Date | string
    gracePeriodDays?: IntFilter<"ClientSubscription"> | number
    status?: EnumSubscriptionStatusFilter<"ClientSubscription"> | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    couponId?: StringNullableFilter<"ClientSubscription"> | string | null
    couponCode?: StringNullableFilter<"ClientSubscription"> | string | null
    couponDiscount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFilter<"ClientSubscription"> | boolean
    gstin?: StringNullableFilter<"ClientSubscription"> | string | null
    taxPercent?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"ClientSubscription"> | string
    paymentId?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"ClientSubscription"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentTransactionId?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentNotes?: StringNullableFilter<"ClientSubscription"> | string | null
    paymentCompletedAt?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    autoRenew?: BoolFilter<"ClientSubscription"> | boolean
    renewalRemindedAt?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    nextRenewalDate?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"ClientSubscription"> | Date | string | null
    cancelReason?: StringNullableFilter<"ClientSubscription"> | string | null
    cancelledById?: StringNullableFilter<"ClientSubscription"> | string | null
    cancelledByName?: StringNullableFilter<"ClientSubscription"> | string | null
    createdAt?: DateTimeFilter<"ClientSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"ClientSubscription"> | Date | string
    renewals?: SubscriptionRenewalListRelationFilter
    changes?: SubscriptionChangeListRelationFilter
    addons?: SubscriptionAddonListRelationFilter
  }, "id" | "licensePoolId">

  export type ClientSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    pricingPlanId?: SortOrder
    pricingPlanName?: SortOrderInput | SortOrder
    billingCycle?: SortOrder
    orderId?: SortOrderInput | SortOrder
    orderItemId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    seats?: SortOrder
    availableFeatures?: SortOrder
    selectedFeatures?: SortOrder
    subscriptionDate?: SortOrder
    activationDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    status?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponDiscount?: SortOrder
    couponValidForRenewal?: SortOrder
    gstin?: SortOrderInput | SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentTransactionId?: SortOrderInput | SortOrder
    paymentNotes?: SortOrderInput | SortOrder
    paymentCompletedAt?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    renewalRemindedAt?: SortOrderInput | SortOrder
    nextRenewalDate?: SortOrderInput | SortOrder
    licensePoolId?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    cancelledById?: SortOrderInput | SortOrder
    cancelledByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientSubscriptionCountOrderByAggregateInput
    _avg?: ClientSubscriptionAvgOrderByAggregateInput
    _max?: ClientSubscriptionMaxOrderByAggregateInput
    _min?: ClientSubscriptionMinOrderByAggregateInput
    _sum?: ClientSubscriptionSumOrderByAggregateInput
  }

  export type ClientSubscriptionScalarWhereWithAggregatesInput = {
    AND?: ClientSubscriptionScalarWhereWithAggregatesInput | ClientSubscriptionScalarWhereWithAggregatesInput[]
    OR?: ClientSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: ClientSubscriptionScalarWhereWithAggregatesInput | ClientSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientSubscription"> | string
    clientId?: StringWithAggregatesFilter<"ClientSubscription"> | string
    clientName?: StringWithAggregatesFilter<"ClientSubscription"> | string
    clientEmail?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    productId?: StringWithAggregatesFilter<"ClientSubscription"> | string
    productName?: StringWithAggregatesFilter<"ClientSubscription"> | string
    productCode?: StringWithAggregatesFilter<"ClientSubscription"> | string
    licenseTypeId?: StringWithAggregatesFilter<"ClientSubscription"> | string
    licenseTypeName?: StringWithAggregatesFilter<"ClientSubscription"> | string
    pricingPlanId?: StringWithAggregatesFilter<"ClientSubscription"> | string
    pricingPlanName?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    billingCycle?: StringWithAggregatesFilter<"ClientSubscription"> | string
    orderId?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    orderItemId?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    name?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    seats?: IntWithAggregatesFilter<"ClientSubscription"> | number
    availableFeatures?: StringNullableListFilter<"ClientSubscription">
    selectedFeatures?: StringNullableListFilter<"ClientSubscription">
    subscriptionDate?: DateTimeWithAggregatesFilter<"ClientSubscription"> | Date | string
    activationDate?: DateTimeNullableWithAggregatesFilter<"ClientSubscription"> | Date | string | null
    expirationDate?: DateTimeWithAggregatesFilter<"ClientSubscription"> | Date | string
    gracePeriodDays?: IntWithAggregatesFilter<"ClientSubscription"> | number
    status?: EnumSubscriptionStatusWithAggregatesFilter<"ClientSubscription"> | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    couponId?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    couponCode?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    couponDiscount?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolWithAggregatesFilter<"ClientSubscription"> | boolean
    gstin?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    taxPercent?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"ClientSubscription"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"ClientSubscription"> | string
    paymentId?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"ClientSubscription"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    paymentTransactionId?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    paymentNotes?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    paymentCompletedAt?: DateTimeNullableWithAggregatesFilter<"ClientSubscription"> | Date | string | null
    autoRenew?: BoolWithAggregatesFilter<"ClientSubscription"> | boolean
    renewalRemindedAt?: DateTimeNullableWithAggregatesFilter<"ClientSubscription"> | Date | string | null
    nextRenewalDate?: DateTimeNullableWithAggregatesFilter<"ClientSubscription"> | Date | string | null
    licensePoolId?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"ClientSubscription"> | Date | string | null
    cancelReason?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    cancelledById?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    cancelledByName?: StringNullableWithAggregatesFilter<"ClientSubscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClientSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientSubscription"> | Date | string
  }

  export type SubscriptionRenewalWhereInput = {
    AND?: SubscriptionRenewalWhereInput | SubscriptionRenewalWhereInput[]
    OR?: SubscriptionRenewalWhereInput[]
    NOT?: SubscriptionRenewalWhereInput | SubscriptionRenewalWhereInput[]
    id?: StringFilter<"SubscriptionRenewal"> | string
    subscriptionId?: StringFilter<"SubscriptionRenewal"> | string
    previousEndDate?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    newEndDate?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    seats?: IntFilter<"SubscriptionRenewal"> | number
    pricePerSeat?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionRenewal"> | string
    paymentId?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    invoiceId?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionRenewal"> | $Enums.PaymentStatus
    initiatedBy?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    initiatedByName?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    isAutoRenewal?: BoolFilter<"SubscriptionRenewal"> | boolean
    status?: StringFilter<"SubscriptionRenewal"> | string
    failureReason?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    renewedAt?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    subscription?: XOR<ClientSubscriptionRelationFilter, ClientSubscriptionWhereInput>
  }

  export type SubscriptionRenewalOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    previousEndDate?: SortOrder
    newEndDate?: SortOrder
    seats?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    initiatedBy?: SortOrderInput | SortOrder
    initiatedByName?: SortOrderInput | SortOrder
    isAutoRenewal?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    renewedAt?: SortOrder
    subscription?: ClientSubscriptionOrderByWithRelationInput
  }

  export type SubscriptionRenewalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionRenewalWhereInput | SubscriptionRenewalWhereInput[]
    OR?: SubscriptionRenewalWhereInput[]
    NOT?: SubscriptionRenewalWhereInput | SubscriptionRenewalWhereInput[]
    subscriptionId?: StringFilter<"SubscriptionRenewal"> | string
    previousEndDate?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    newEndDate?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    seats?: IntFilter<"SubscriptionRenewal"> | number
    pricePerSeat?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionRenewal"> | string
    paymentId?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    invoiceId?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionRenewal"> | $Enums.PaymentStatus
    initiatedBy?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    initiatedByName?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    isAutoRenewal?: BoolFilter<"SubscriptionRenewal"> | boolean
    status?: StringFilter<"SubscriptionRenewal"> | string
    failureReason?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    renewedAt?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    subscription?: XOR<ClientSubscriptionRelationFilter, ClientSubscriptionWhereInput>
  }, "id">

  export type SubscriptionRenewalOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    previousEndDate?: SortOrder
    newEndDate?: SortOrder
    seats?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    initiatedBy?: SortOrderInput | SortOrder
    initiatedByName?: SortOrderInput | SortOrder
    isAutoRenewal?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    renewedAt?: SortOrder
    _count?: SubscriptionRenewalCountOrderByAggregateInput
    _avg?: SubscriptionRenewalAvgOrderByAggregateInput
    _max?: SubscriptionRenewalMaxOrderByAggregateInput
    _min?: SubscriptionRenewalMinOrderByAggregateInput
    _sum?: SubscriptionRenewalSumOrderByAggregateInput
  }

  export type SubscriptionRenewalScalarWhereWithAggregatesInput = {
    AND?: SubscriptionRenewalScalarWhereWithAggregatesInput | SubscriptionRenewalScalarWhereWithAggregatesInput[]
    OR?: SubscriptionRenewalScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionRenewalScalarWhereWithAggregatesInput | SubscriptionRenewalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionRenewal"> | string
    subscriptionId?: StringWithAggregatesFilter<"SubscriptionRenewal"> | string
    previousEndDate?: DateTimeWithAggregatesFilter<"SubscriptionRenewal"> | Date | string
    newEndDate?: DateTimeWithAggregatesFilter<"SubscriptionRenewal"> | Date | string
    seats?: IntWithAggregatesFilter<"SubscriptionRenewal"> | number
    pricePerSeat?: DecimalWithAggregatesFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"SubscriptionRenewal"> | string
    paymentId?: StringNullableWithAggregatesFilter<"SubscriptionRenewal"> | string | null
    invoiceId?: StringNullableWithAggregatesFilter<"SubscriptionRenewal"> | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"SubscriptionRenewal"> | $Enums.PaymentStatus
    initiatedBy?: StringNullableWithAggregatesFilter<"SubscriptionRenewal"> | string | null
    initiatedByName?: StringNullableWithAggregatesFilter<"SubscriptionRenewal"> | string | null
    isAutoRenewal?: BoolWithAggregatesFilter<"SubscriptionRenewal"> | boolean
    status?: StringWithAggregatesFilter<"SubscriptionRenewal"> | string
    failureReason?: StringNullableWithAggregatesFilter<"SubscriptionRenewal"> | string | null
    renewedAt?: DateTimeWithAggregatesFilter<"SubscriptionRenewal"> | Date | string
  }

  export type SubscriptionChangeWhereInput = {
    AND?: SubscriptionChangeWhereInput | SubscriptionChangeWhereInput[]
    OR?: SubscriptionChangeWhereInput[]
    NOT?: SubscriptionChangeWhereInput | SubscriptionChangeWhereInput[]
    id?: StringFilter<"SubscriptionChange"> | string
    subscriptionId?: StringFilter<"SubscriptionChange"> | string
    changeType?: EnumSubscriptionChangeTypeFilter<"SubscriptionChange"> | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: StringNullableFilter<"SubscriptionChange"> | string | null
    previousLicenseTypeName?: StringNullableFilter<"SubscriptionChange"> | string | null
    previousSeats?: IntNullableFilter<"SubscriptionChange"> | number | null
    previousAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: StringNullableFilter<"SubscriptionChange"> | string | null
    newLicenseTypeName?: StringNullableFilter<"SubscriptionChange"> | string | null
    newSeats?: IntNullableFilter<"SubscriptionChange"> | number | null
    newAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    creditAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFilter<"SubscriptionChange"> | Date | string
    paymentId?: StringNullableFilter<"SubscriptionChange"> | string | null
    invoiceId?: StringNullableFilter<"SubscriptionChange"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionChange"> | $Enums.PaymentStatus
    changedById?: StringNullableFilter<"SubscriptionChange"> | string | null
    changedByName?: StringNullableFilter<"SubscriptionChange"> | string | null
    reason?: StringNullableFilter<"SubscriptionChange"> | string | null
    notes?: StringNullableFilter<"SubscriptionChange"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionChange"> | Date | string
    subscription?: XOR<ClientSubscriptionRelationFilter, ClientSubscriptionWhereInput>
  }

  export type SubscriptionChangeOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    changeType?: SortOrder
    previousLicenseTypeId?: SortOrderInput | SortOrder
    previousLicenseTypeName?: SortOrderInput | SortOrder
    previousSeats?: SortOrderInput | SortOrder
    previousAmount?: SortOrderInput | SortOrder
    newLicenseTypeId?: SortOrderInput | SortOrder
    newLicenseTypeName?: SortOrderInput | SortOrder
    newSeats?: SortOrderInput | SortOrder
    newAmount?: SortOrderInput | SortOrder
    proratedAmount?: SortOrderInput | SortOrder
    creditAmount?: SortOrderInput | SortOrder
    effectiveDate?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    changedById?: SortOrderInput | SortOrder
    changedByName?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    subscription?: ClientSubscriptionOrderByWithRelationInput
  }

  export type SubscriptionChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionChangeWhereInput | SubscriptionChangeWhereInput[]
    OR?: SubscriptionChangeWhereInput[]
    NOT?: SubscriptionChangeWhereInput | SubscriptionChangeWhereInput[]
    subscriptionId?: StringFilter<"SubscriptionChange"> | string
    changeType?: EnumSubscriptionChangeTypeFilter<"SubscriptionChange"> | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: StringNullableFilter<"SubscriptionChange"> | string | null
    previousLicenseTypeName?: StringNullableFilter<"SubscriptionChange"> | string | null
    previousSeats?: IntNullableFilter<"SubscriptionChange"> | number | null
    previousAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: StringNullableFilter<"SubscriptionChange"> | string | null
    newLicenseTypeName?: StringNullableFilter<"SubscriptionChange"> | string | null
    newSeats?: IntNullableFilter<"SubscriptionChange"> | number | null
    newAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    creditAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFilter<"SubscriptionChange"> | Date | string
    paymentId?: StringNullableFilter<"SubscriptionChange"> | string | null
    invoiceId?: StringNullableFilter<"SubscriptionChange"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionChange"> | $Enums.PaymentStatus
    changedById?: StringNullableFilter<"SubscriptionChange"> | string | null
    changedByName?: StringNullableFilter<"SubscriptionChange"> | string | null
    reason?: StringNullableFilter<"SubscriptionChange"> | string | null
    notes?: StringNullableFilter<"SubscriptionChange"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionChange"> | Date | string
    subscription?: XOR<ClientSubscriptionRelationFilter, ClientSubscriptionWhereInput>
  }, "id">

  export type SubscriptionChangeOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    changeType?: SortOrder
    previousLicenseTypeId?: SortOrderInput | SortOrder
    previousLicenseTypeName?: SortOrderInput | SortOrder
    previousSeats?: SortOrderInput | SortOrder
    previousAmount?: SortOrderInput | SortOrder
    newLicenseTypeId?: SortOrderInput | SortOrder
    newLicenseTypeName?: SortOrderInput | SortOrder
    newSeats?: SortOrderInput | SortOrder
    newAmount?: SortOrderInput | SortOrder
    proratedAmount?: SortOrderInput | SortOrder
    creditAmount?: SortOrderInput | SortOrder
    effectiveDate?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    changedById?: SortOrderInput | SortOrder
    changedByName?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SubscriptionChangeCountOrderByAggregateInput
    _avg?: SubscriptionChangeAvgOrderByAggregateInput
    _max?: SubscriptionChangeMaxOrderByAggregateInput
    _min?: SubscriptionChangeMinOrderByAggregateInput
    _sum?: SubscriptionChangeSumOrderByAggregateInput
  }

  export type SubscriptionChangeScalarWhereWithAggregatesInput = {
    AND?: SubscriptionChangeScalarWhereWithAggregatesInput | SubscriptionChangeScalarWhereWithAggregatesInput[]
    OR?: SubscriptionChangeScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionChangeScalarWhereWithAggregatesInput | SubscriptionChangeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionChange"> | string
    subscriptionId?: StringWithAggregatesFilter<"SubscriptionChange"> | string
    changeType?: EnumSubscriptionChangeTypeWithAggregatesFilter<"SubscriptionChange"> | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    previousLicenseTypeName?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    previousSeats?: IntNullableWithAggregatesFilter<"SubscriptionChange"> | number | null
    previousAmount?: DecimalNullableWithAggregatesFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    newLicenseTypeName?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    newSeats?: IntNullableWithAggregatesFilter<"SubscriptionChange"> | number | null
    newAmount?: DecimalNullableWithAggregatesFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: DecimalNullableWithAggregatesFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    creditAmount?: DecimalNullableWithAggregatesFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeWithAggregatesFilter<"SubscriptionChange"> | Date | string
    paymentId?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    invoiceId?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"SubscriptionChange"> | $Enums.PaymentStatus
    changedById?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    changedByName?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    reason?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    notes?: StringNullableWithAggregatesFilter<"SubscriptionChange"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionChange"> | Date | string
  }

  export type SubscriptionExpirationJobWhereInput = {
    AND?: SubscriptionExpirationJobWhereInput | SubscriptionExpirationJobWhereInput[]
    OR?: SubscriptionExpirationJobWhereInput[]
    NOT?: SubscriptionExpirationJobWhereInput | SubscriptionExpirationJobWhereInput[]
    id?: StringFilter<"SubscriptionExpirationJob"> | string
    subscriptionId?: StringFilter<"SubscriptionExpirationJob"> | string
    expirationDate?: DateTimeFilter<"SubscriptionExpirationJob"> | Date | string
    reminderSentAt?: DateTimeNullableFilter<"SubscriptionExpirationJob"> | Date | string | null
    processedAt?: DateTimeNullableFilter<"SubscriptionExpirationJob"> | Date | string | null
    status?: StringFilter<"SubscriptionExpirationJob"> | string
    createdAt?: DateTimeFilter<"SubscriptionExpirationJob"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionExpirationJob"> | Date | string
  }

  export type SubscriptionExpirationJobOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    expirationDate?: SortOrder
    reminderSentAt?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionExpirationJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscriptionId?: string
    AND?: SubscriptionExpirationJobWhereInput | SubscriptionExpirationJobWhereInput[]
    OR?: SubscriptionExpirationJobWhereInput[]
    NOT?: SubscriptionExpirationJobWhereInput | SubscriptionExpirationJobWhereInput[]
    expirationDate?: DateTimeFilter<"SubscriptionExpirationJob"> | Date | string
    reminderSentAt?: DateTimeNullableFilter<"SubscriptionExpirationJob"> | Date | string | null
    processedAt?: DateTimeNullableFilter<"SubscriptionExpirationJob"> | Date | string | null
    status?: StringFilter<"SubscriptionExpirationJob"> | string
    createdAt?: DateTimeFilter<"SubscriptionExpirationJob"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionExpirationJob"> | Date | string
  }, "id" | "subscriptionId">

  export type SubscriptionExpirationJobOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    expirationDate?: SortOrder
    reminderSentAt?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionExpirationJobCountOrderByAggregateInput
    _max?: SubscriptionExpirationJobMaxOrderByAggregateInput
    _min?: SubscriptionExpirationJobMinOrderByAggregateInput
  }

  export type SubscriptionExpirationJobScalarWhereWithAggregatesInput = {
    AND?: SubscriptionExpirationJobScalarWhereWithAggregatesInput | SubscriptionExpirationJobScalarWhereWithAggregatesInput[]
    OR?: SubscriptionExpirationJobScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionExpirationJobScalarWhereWithAggregatesInput | SubscriptionExpirationJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionExpirationJob"> | string
    subscriptionId?: StringWithAggregatesFilter<"SubscriptionExpirationJob"> | string
    expirationDate?: DateTimeWithAggregatesFilter<"SubscriptionExpirationJob"> | Date | string
    reminderSentAt?: DateTimeNullableWithAggregatesFilter<"SubscriptionExpirationJob"> | Date | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"SubscriptionExpirationJob"> | Date | string | null
    status?: StringWithAggregatesFilter<"SubscriptionExpirationJob"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionExpirationJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionExpirationJob"> | Date | string
  }

  export type SubscriptionAddonWhereInput = {
    AND?: SubscriptionAddonWhereInput | SubscriptionAddonWhereInput[]
    OR?: SubscriptionAddonWhereInput[]
    NOT?: SubscriptionAddonWhereInput | SubscriptionAddonWhereInput[]
    id?: StringFilter<"SubscriptionAddon"> | string
    subscriptionId?: StringFilter<"SubscriptionAddon"> | string
    addonCode?: StringFilter<"SubscriptionAddon"> | string
    addonName?: StringFilter<"SubscriptionAddon"> | string
    addonDescription?: StringNullableFilter<"SubscriptionAddon"> | string | null
    pricingType?: StringFilter<"SubscriptionAddon"> | string
    pricePerUnit?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"SubscriptionAddon"> | number
    subtotal?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionAddon"> | string
    billingCycle?: StringNullableFilter<"SubscriptionAddon"> | string | null
    nextBillingDate?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    isRecurring?: BoolFilter<"SubscriptionAddon"> | boolean
    status?: EnumAddonStatusFilter<"SubscriptionAddon"> | $Enums.AddonStatus
    purchasedAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    activatedAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    paymentId?: StringNullableFilter<"SubscriptionAddon"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionAddon"> | $Enums.PaymentStatus
    invoiceId?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelReason?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelledById?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelledByName?: StringNullableFilter<"SubscriptionAddon"> | string | null
    notes?: StringNullableFilter<"SubscriptionAddon"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionAddon"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionAddon"> | Date | string
    subscription?: XOR<ClientSubscriptionRelationFilter, ClientSubscriptionWhereInput>
  }

  export type SubscriptionAddonOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    addonCode?: SortOrder
    addonName?: SortOrder
    addonDescription?: SortOrderInput | SortOrder
    pricingType?: SortOrder
    pricePerUnit?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    billingCycle?: SortOrderInput | SortOrder
    nextBillingDate?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    purchasedAt?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    invoiceId?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    cancelledById?: SortOrderInput | SortOrder
    cancelledByName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: ClientSubscriptionOrderByWithRelationInput
  }

  export type SubscriptionAddonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscriptionId_addonCode?: SubscriptionAddonSubscriptionIdAddonCodeCompoundUniqueInput
    AND?: SubscriptionAddonWhereInput | SubscriptionAddonWhereInput[]
    OR?: SubscriptionAddonWhereInput[]
    NOT?: SubscriptionAddonWhereInput | SubscriptionAddonWhereInput[]
    subscriptionId?: StringFilter<"SubscriptionAddon"> | string
    addonCode?: StringFilter<"SubscriptionAddon"> | string
    addonName?: StringFilter<"SubscriptionAddon"> | string
    addonDescription?: StringNullableFilter<"SubscriptionAddon"> | string | null
    pricingType?: StringFilter<"SubscriptionAddon"> | string
    pricePerUnit?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"SubscriptionAddon"> | number
    subtotal?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionAddon"> | string
    billingCycle?: StringNullableFilter<"SubscriptionAddon"> | string | null
    nextBillingDate?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    isRecurring?: BoolFilter<"SubscriptionAddon"> | boolean
    status?: EnumAddonStatusFilter<"SubscriptionAddon"> | $Enums.AddonStatus
    purchasedAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    activatedAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    paymentId?: StringNullableFilter<"SubscriptionAddon"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionAddon"> | $Enums.PaymentStatus
    invoiceId?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelReason?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelledById?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelledByName?: StringNullableFilter<"SubscriptionAddon"> | string | null
    notes?: StringNullableFilter<"SubscriptionAddon"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionAddon"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionAddon"> | Date | string
    subscription?: XOR<ClientSubscriptionRelationFilter, ClientSubscriptionWhereInput>
  }, "id" | "subscriptionId_addonCode">

  export type SubscriptionAddonOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    addonCode?: SortOrder
    addonName?: SortOrder
    addonDescription?: SortOrderInput | SortOrder
    pricingType?: SortOrder
    pricePerUnit?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    billingCycle?: SortOrderInput | SortOrder
    nextBillingDate?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    purchasedAt?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    invoiceId?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    cancelledById?: SortOrderInput | SortOrder
    cancelledByName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionAddonCountOrderByAggregateInput
    _avg?: SubscriptionAddonAvgOrderByAggregateInput
    _max?: SubscriptionAddonMaxOrderByAggregateInput
    _min?: SubscriptionAddonMinOrderByAggregateInput
    _sum?: SubscriptionAddonSumOrderByAggregateInput
  }

  export type SubscriptionAddonScalarWhereWithAggregatesInput = {
    AND?: SubscriptionAddonScalarWhereWithAggregatesInput | SubscriptionAddonScalarWhereWithAggregatesInput[]
    OR?: SubscriptionAddonScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionAddonScalarWhereWithAggregatesInput | SubscriptionAddonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionAddon"> | string
    subscriptionId?: StringWithAggregatesFilter<"SubscriptionAddon"> | string
    addonCode?: StringWithAggregatesFilter<"SubscriptionAddon"> | string
    addonName?: StringWithAggregatesFilter<"SubscriptionAddon"> | string
    addonDescription?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    pricingType?: StringWithAggregatesFilter<"SubscriptionAddon"> | string
    pricePerUnit?: DecimalWithAggregatesFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"SubscriptionAddon"> | number
    subtotal?: DecimalWithAggregatesFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalWithAggregatesFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"SubscriptionAddon"> | string
    billingCycle?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    nextBillingDate?: DateTimeNullableWithAggregatesFilter<"SubscriptionAddon"> | Date | string | null
    isRecurring?: BoolWithAggregatesFilter<"SubscriptionAddon"> | boolean
    status?: EnumAddonStatusWithAggregatesFilter<"SubscriptionAddon"> | $Enums.AddonStatus
    purchasedAt?: DateTimeNullableWithAggregatesFilter<"SubscriptionAddon"> | Date | string | null
    activatedAt?: DateTimeNullableWithAggregatesFilter<"SubscriptionAddon"> | Date | string | null
    expirationDate?: DateTimeNullableWithAggregatesFilter<"SubscriptionAddon"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"SubscriptionAddon"> | Date | string | null
    paymentId?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"SubscriptionAddon"> | $Enums.PaymentStatus
    invoiceId?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    cancelReason?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    cancelledById?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    cancelledByName?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    notes?: StringNullableWithAggregatesFilter<"SubscriptionAddon"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionAddon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionAddon"> | Date | string
  }

  export type ClientSubscriptionCreateInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: SubscriptionRenewalCreateNestedManyWithoutSubscriptionInput
    changes?: SubscriptionChangeCreateNestedManyWithoutSubscriptionInput
    addons?: SubscriptionAddonCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionUncheckedCreateInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: SubscriptionRenewalUncheckedCreateNestedManyWithoutSubscriptionInput
    changes?: SubscriptionChangeUncheckedCreateNestedManyWithoutSubscriptionInput
    addons?: SubscriptionAddonUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: SubscriptionRenewalUpdateManyWithoutSubscriptionNestedInput
    changes?: SubscriptionChangeUpdateManyWithoutSubscriptionNestedInput
    addons?: SubscriptionAddonUpdateManyWithoutSubscriptionNestedInput
  }

  export type ClientSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: SubscriptionRenewalUncheckedUpdateManyWithoutSubscriptionNestedInput
    changes?: SubscriptionChangeUncheckedUpdateManyWithoutSubscriptionNestedInput
    addons?: SubscriptionAddonUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type ClientSubscriptionCreateManyInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionRenewalCreateInput = {
    id?: string
    previousEndDate: Date | string
    newEndDate: Date | string
    seats: number
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    initiatedBy?: string | null
    initiatedByName?: string | null
    isAutoRenewal?: boolean
    status?: string
    failureReason?: string | null
    renewedAt?: Date | string
    subscription: ClientSubscriptionCreateNestedOneWithoutRenewalsInput
  }

  export type SubscriptionRenewalUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    previousEndDate: Date | string
    newEndDate: Date | string
    seats: number
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    initiatedBy?: string | null
    initiatedByName?: string | null
    isAutoRenewal?: boolean
    status?: string
    failureReason?: string | null
    renewedAt?: Date | string
  }

  export type SubscriptionRenewalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    isAutoRenewal?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    renewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: ClientSubscriptionUpdateOneRequiredWithoutRenewalsNestedInput
  }

  export type SubscriptionRenewalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    previousEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    isAutoRenewal?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    renewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionRenewalCreateManyInput = {
    id?: string
    subscriptionId: string
    previousEndDate: Date | string
    newEndDate: Date | string
    seats: number
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    initiatedBy?: string | null
    initiatedByName?: string | null
    isAutoRenewal?: boolean
    status?: string
    failureReason?: string | null
    renewedAt?: Date | string
  }

  export type SubscriptionRenewalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    isAutoRenewal?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    renewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionRenewalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    previousEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    isAutoRenewal?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    renewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionChangeCreateInput = {
    id?: string
    changeType: $Enums.SubscriptionChangeType
    previousLicenseTypeId?: string | null
    previousLicenseTypeName?: string | null
    previousSeats?: number | null
    previousAmount?: Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: string | null
    newLicenseTypeName?: string | null
    newSeats?: number | null
    newAmount?: Decimal | DecimalJsLike | number | string | null
    proratedAmount?: Decimal | DecimalJsLike | number | string | null
    creditAmount?: Decimal | DecimalJsLike | number | string | null
    effectiveDate: Date | string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    changedById?: string | null
    changedByName?: string | null
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
    subscription: ClientSubscriptionCreateNestedOneWithoutChangesInput
  }

  export type SubscriptionChangeUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    changeType: $Enums.SubscriptionChangeType
    previousLicenseTypeId?: string | null
    previousLicenseTypeName?: string | null
    previousSeats?: number | null
    previousAmount?: Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: string | null
    newLicenseTypeName?: string | null
    newSeats?: number | null
    newAmount?: Decimal | DecimalJsLike | number | string | null
    proratedAmount?: Decimal | DecimalJsLike | number | string | null
    creditAmount?: Decimal | DecimalJsLike | number | string | null
    effectiveDate: Date | string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    changedById?: string | null
    changedByName?: string | null
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionChangeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumSubscriptionChangeTypeFieldUpdateOperationsInput | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    previousLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    previousSeats?: NullableIntFieldUpdateOperationsInput | number | null
    previousAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    newLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    newSeats?: NullableIntFieldUpdateOperationsInput | number | null
    newAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByName?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: ClientSubscriptionUpdateOneRequiredWithoutChangesNestedInput
  }

  export type SubscriptionChangeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumSubscriptionChangeTypeFieldUpdateOperationsInput | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    previousLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    previousSeats?: NullableIntFieldUpdateOperationsInput | number | null
    previousAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    newLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    newSeats?: NullableIntFieldUpdateOperationsInput | number | null
    newAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByName?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionChangeCreateManyInput = {
    id?: string
    subscriptionId: string
    changeType: $Enums.SubscriptionChangeType
    previousLicenseTypeId?: string | null
    previousLicenseTypeName?: string | null
    previousSeats?: number | null
    previousAmount?: Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: string | null
    newLicenseTypeName?: string | null
    newSeats?: number | null
    newAmount?: Decimal | DecimalJsLike | number | string | null
    proratedAmount?: Decimal | DecimalJsLike | number | string | null
    creditAmount?: Decimal | DecimalJsLike | number | string | null
    effectiveDate: Date | string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    changedById?: string | null
    changedByName?: string | null
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionChangeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumSubscriptionChangeTypeFieldUpdateOperationsInput | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    previousLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    previousSeats?: NullableIntFieldUpdateOperationsInput | number | null
    previousAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    newLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    newSeats?: NullableIntFieldUpdateOperationsInput | number | null
    newAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByName?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionChangeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumSubscriptionChangeTypeFieldUpdateOperationsInput | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    previousLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    previousSeats?: NullableIntFieldUpdateOperationsInput | number | null
    previousAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    newLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    newSeats?: NullableIntFieldUpdateOperationsInput | number | null
    newAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByName?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionExpirationJobCreateInput = {
    id?: string
    subscriptionId: string
    expirationDate: Date | string
    reminderSentAt?: Date | string | null
    processedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionExpirationJobUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    expirationDate: Date | string
    reminderSentAt?: Date | string | null
    processedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionExpirationJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionExpirationJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionExpirationJobCreateManyInput = {
    id?: string
    subscriptionId: string
    expirationDate: Date | string
    reminderSentAt?: Date | string | null
    processedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionExpirationJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionExpirationJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionAddonCreateInput = {
    id?: string
    addonCode: string
    addonName: string
    addonDescription?: string | null
    pricingType: string
    pricePerUnit: Decimal | DecimalJsLike | number | string
    quantity?: number
    subtotal: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    billingCycle?: string | null
    nextBillingDate?: Date | string | null
    isRecurring?: boolean
    status?: $Enums.AddonStatus
    purchasedAt?: Date | string | null
    activatedAt?: Date | string | null
    expirationDate?: Date | string | null
    cancelledAt?: Date | string | null
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    invoiceId?: string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: ClientSubscriptionCreateNestedOneWithoutAddonsInput
  }

  export type SubscriptionAddonUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    addonCode: string
    addonName: string
    addonDescription?: string | null
    pricingType: string
    pricePerUnit: Decimal | DecimalJsLike | number | string
    quantity?: number
    subtotal: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    billingCycle?: string | null
    nextBillingDate?: Date | string | null
    isRecurring?: boolean
    status?: $Enums.AddonStatus
    purchasedAt?: Date | string | null
    activatedAt?: Date | string | null
    expirationDate?: Date | string | null
    cancelledAt?: Date | string | null
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    invoiceId?: string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionAddonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addonCode?: StringFieldUpdateOperationsInput | string
    addonName?: StringFieldUpdateOperationsInput | string
    addonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricingType?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAddonStatusFieldUpdateOperationsInput | $Enums.AddonStatus
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: ClientSubscriptionUpdateOneRequiredWithoutAddonsNestedInput
  }

  export type SubscriptionAddonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    addonCode?: StringFieldUpdateOperationsInput | string
    addonName?: StringFieldUpdateOperationsInput | string
    addonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricingType?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAddonStatusFieldUpdateOperationsInput | $Enums.AddonStatus
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionAddonCreateManyInput = {
    id?: string
    subscriptionId: string
    addonCode: string
    addonName: string
    addonDescription?: string | null
    pricingType: string
    pricePerUnit: Decimal | DecimalJsLike | number | string
    quantity?: number
    subtotal: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    billingCycle?: string | null
    nextBillingDate?: Date | string | null
    isRecurring?: boolean
    status?: $Enums.AddonStatus
    purchasedAt?: Date | string | null
    activatedAt?: Date | string | null
    expirationDate?: Date | string | null
    cancelledAt?: Date | string | null
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    invoiceId?: string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionAddonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addonCode?: StringFieldUpdateOperationsInput | string
    addonName?: StringFieldUpdateOperationsInput | string
    addonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricingType?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAddonStatusFieldUpdateOperationsInput | $Enums.AddonStatus
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionAddonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    addonCode?: StringFieldUpdateOperationsInput | string
    addonName?: StringFieldUpdateOperationsInput | string
    addonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricingType?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAddonStatusFieldUpdateOperationsInput | $Enums.AddonStatus
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type SubscriptionRenewalListRelationFilter = {
    every?: SubscriptionRenewalWhereInput
    some?: SubscriptionRenewalWhereInput
    none?: SubscriptionRenewalWhereInput
  }

  export type SubscriptionChangeListRelationFilter = {
    every?: SubscriptionChangeWhereInput
    some?: SubscriptionChangeWhereInput
    none?: SubscriptionChangeWhereInput
  }

  export type SubscriptionAddonListRelationFilter = {
    every?: SubscriptionAddonWhereInput
    some?: SubscriptionAddonWhereInput
    none?: SubscriptionAddonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubscriptionRenewalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionChangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionAddonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    pricingPlanId?: SortOrder
    pricingPlanName?: SortOrder
    billingCycle?: SortOrder
    orderId?: SortOrder
    orderItemId?: SortOrder
    name?: SortOrder
    seats?: SortOrder
    availableFeatures?: SortOrder
    selectedFeatures?: SortOrder
    subscriptionDate?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    status?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrder
    couponCode?: SortOrder
    couponDiscount?: SortOrder
    couponValidForRenewal?: SortOrder
    gstin?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentTransactionId?: SortOrder
    paymentNotes?: SortOrder
    paymentCompletedAt?: SortOrder
    autoRenew?: SortOrder
    renewalRemindedAt?: SortOrder
    nextRenewalDate?: SortOrder
    licensePoolId?: SortOrder
    cancelledAt?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSubscriptionAvgOrderByAggregateInput = {
    seats?: SortOrder
    gracePeriodDays?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type ClientSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    pricingPlanId?: SortOrder
    pricingPlanName?: SortOrder
    billingCycle?: SortOrder
    orderId?: SortOrder
    orderItemId?: SortOrder
    name?: SortOrder
    seats?: SortOrder
    subscriptionDate?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    status?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrder
    couponCode?: SortOrder
    couponDiscount?: SortOrder
    couponValidForRenewal?: SortOrder
    gstin?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentTransactionId?: SortOrder
    paymentNotes?: SortOrder
    paymentCompletedAt?: SortOrder
    autoRenew?: SortOrder
    renewalRemindedAt?: SortOrder
    nextRenewalDate?: SortOrder
    licensePoolId?: SortOrder
    cancelledAt?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    pricingPlanId?: SortOrder
    pricingPlanName?: SortOrder
    billingCycle?: SortOrder
    orderId?: SortOrder
    orderItemId?: SortOrder
    name?: SortOrder
    seats?: SortOrder
    subscriptionDate?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    status?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrder
    couponCode?: SortOrder
    couponDiscount?: SortOrder
    couponValidForRenewal?: SortOrder
    gstin?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentTransactionId?: SortOrder
    paymentNotes?: SortOrder
    paymentCompletedAt?: SortOrder
    autoRenew?: SortOrder
    renewalRemindedAt?: SortOrder
    nextRenewalDate?: SortOrder
    licensePoolId?: SortOrder
    cancelledAt?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSubscriptionSumOrderByAggregateInput = {
    seats?: SortOrder
    gracePeriodDays?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
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

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ClientSubscriptionRelationFilter = {
    is?: ClientSubscriptionWhereInput
    isNot?: ClientSubscriptionWhereInput
  }

  export type SubscriptionRenewalCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    previousEndDate?: SortOrder
    newEndDate?: SortOrder
    seats?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    paymentStatus?: SortOrder
    initiatedBy?: SortOrder
    initiatedByName?: SortOrder
    isAutoRenewal?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    renewedAt?: SortOrder
  }

  export type SubscriptionRenewalAvgOrderByAggregateInput = {
    seats?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type SubscriptionRenewalMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    previousEndDate?: SortOrder
    newEndDate?: SortOrder
    seats?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    paymentStatus?: SortOrder
    initiatedBy?: SortOrder
    initiatedByName?: SortOrder
    isAutoRenewal?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    renewedAt?: SortOrder
  }

  export type SubscriptionRenewalMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    previousEndDate?: SortOrder
    newEndDate?: SortOrder
    seats?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    paymentStatus?: SortOrder
    initiatedBy?: SortOrder
    initiatedByName?: SortOrder
    isAutoRenewal?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    renewedAt?: SortOrder
  }

  export type SubscriptionRenewalSumOrderByAggregateInput = {
    seats?: SortOrder
    pricePerSeat?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumSubscriptionChangeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionChangeType | EnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionChangeTypeFilter<$PrismaModel> | $Enums.SubscriptionChangeType
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SubscriptionChangeCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    changeType?: SortOrder
    previousLicenseTypeId?: SortOrder
    previousLicenseTypeName?: SortOrder
    previousSeats?: SortOrder
    previousAmount?: SortOrder
    newLicenseTypeId?: SortOrder
    newLicenseTypeName?: SortOrder
    newSeats?: SortOrder
    newAmount?: SortOrder
    proratedAmount?: SortOrder
    creditAmount?: SortOrder
    effectiveDate?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    paymentStatus?: SortOrder
    changedById?: SortOrder
    changedByName?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionChangeAvgOrderByAggregateInput = {
    previousSeats?: SortOrder
    previousAmount?: SortOrder
    newSeats?: SortOrder
    newAmount?: SortOrder
    proratedAmount?: SortOrder
    creditAmount?: SortOrder
  }

  export type SubscriptionChangeMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    changeType?: SortOrder
    previousLicenseTypeId?: SortOrder
    previousLicenseTypeName?: SortOrder
    previousSeats?: SortOrder
    previousAmount?: SortOrder
    newLicenseTypeId?: SortOrder
    newLicenseTypeName?: SortOrder
    newSeats?: SortOrder
    newAmount?: SortOrder
    proratedAmount?: SortOrder
    creditAmount?: SortOrder
    effectiveDate?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    paymentStatus?: SortOrder
    changedById?: SortOrder
    changedByName?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionChangeMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    changeType?: SortOrder
    previousLicenseTypeId?: SortOrder
    previousLicenseTypeName?: SortOrder
    previousSeats?: SortOrder
    previousAmount?: SortOrder
    newLicenseTypeId?: SortOrder
    newLicenseTypeName?: SortOrder
    newSeats?: SortOrder
    newAmount?: SortOrder
    proratedAmount?: SortOrder
    creditAmount?: SortOrder
    effectiveDate?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    paymentStatus?: SortOrder
    changedById?: SortOrder
    changedByName?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionChangeSumOrderByAggregateInput = {
    previousSeats?: SortOrder
    previousAmount?: SortOrder
    newSeats?: SortOrder
    newAmount?: SortOrder
    proratedAmount?: SortOrder
    creditAmount?: SortOrder
  }

  export type EnumSubscriptionChangeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionChangeType | EnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionChangeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionChangeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionChangeTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionChangeTypeFilter<$PrismaModel>
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type SubscriptionExpirationJobCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    expirationDate?: SortOrder
    reminderSentAt?: SortOrder
    processedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionExpirationJobMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    expirationDate?: SortOrder
    reminderSentAt?: SortOrder
    processedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionExpirationJobMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    expirationDate?: SortOrder
    reminderSentAt?: SortOrder
    processedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAddonStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonStatus | EnumAddonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonStatusFilter<$PrismaModel> | $Enums.AddonStatus
  }

  export type SubscriptionAddonSubscriptionIdAddonCodeCompoundUniqueInput = {
    subscriptionId: string
    addonCode: string
  }

  export type SubscriptionAddonCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    addonCode?: SortOrder
    addonName?: SortOrder
    addonDescription?: SortOrder
    pricingType?: SortOrder
    pricePerUnit?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    billingCycle?: SortOrder
    nextBillingDate?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    purchasedAt?: SortOrder
    activatedAt?: SortOrder
    expirationDate?: SortOrder
    cancelledAt?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    invoiceId?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAddonAvgOrderByAggregateInput = {
    pricePerUnit?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type SubscriptionAddonMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    addonCode?: SortOrder
    addonName?: SortOrder
    addonDescription?: SortOrder
    pricingType?: SortOrder
    pricePerUnit?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    billingCycle?: SortOrder
    nextBillingDate?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    purchasedAt?: SortOrder
    activatedAt?: SortOrder
    expirationDate?: SortOrder
    cancelledAt?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    invoiceId?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAddonMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    addonCode?: SortOrder
    addonName?: SortOrder
    addonDescription?: SortOrder
    pricingType?: SortOrder
    pricePerUnit?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    billingCycle?: SortOrder
    nextBillingDate?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    purchasedAt?: SortOrder
    activatedAt?: SortOrder
    expirationDate?: SortOrder
    cancelledAt?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    invoiceId?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAddonSumOrderByAggregateInput = {
    pricePerUnit?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumAddonStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonStatus | EnumAddonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonStatusWithAggregatesFilter<$PrismaModel> | $Enums.AddonStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddonStatusFilter<$PrismaModel>
    _max?: NestedEnumAddonStatusFilter<$PrismaModel>
  }

  export type ClientSubscriptionCreateavailableFeaturesInput = {
    set: string[]
  }

  export type ClientSubscriptionCreateselectedFeaturesInput = {
    set: string[]
  }

  export type SubscriptionRenewalCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionRenewalCreateWithoutSubscriptionInput, SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput> | SubscriptionRenewalCreateWithoutSubscriptionInput[] | SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput | SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionRenewalCreateManySubscriptionInputEnvelope
    connect?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
  }

  export type SubscriptionChangeCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionChangeCreateWithoutSubscriptionInput, SubscriptionChangeUncheckedCreateWithoutSubscriptionInput> | SubscriptionChangeCreateWithoutSubscriptionInput[] | SubscriptionChangeUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionChangeCreateOrConnectWithoutSubscriptionInput | SubscriptionChangeCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionChangeCreateManySubscriptionInputEnvelope
    connect?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
  }

  export type SubscriptionAddonCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionAddonCreateWithoutSubscriptionInput, SubscriptionAddonUncheckedCreateWithoutSubscriptionInput> | SubscriptionAddonCreateWithoutSubscriptionInput[] | SubscriptionAddonUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionAddonCreateOrConnectWithoutSubscriptionInput | SubscriptionAddonCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionAddonCreateManySubscriptionInputEnvelope
    connect?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
  }

  export type SubscriptionRenewalUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionRenewalCreateWithoutSubscriptionInput, SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput> | SubscriptionRenewalCreateWithoutSubscriptionInput[] | SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput | SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionRenewalCreateManySubscriptionInputEnvelope
    connect?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
  }

  export type SubscriptionChangeUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionChangeCreateWithoutSubscriptionInput, SubscriptionChangeUncheckedCreateWithoutSubscriptionInput> | SubscriptionChangeCreateWithoutSubscriptionInput[] | SubscriptionChangeUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionChangeCreateOrConnectWithoutSubscriptionInput | SubscriptionChangeCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionChangeCreateManySubscriptionInputEnvelope
    connect?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
  }

  export type SubscriptionAddonUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionAddonCreateWithoutSubscriptionInput, SubscriptionAddonUncheckedCreateWithoutSubscriptionInput> | SubscriptionAddonCreateWithoutSubscriptionInput[] | SubscriptionAddonUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionAddonCreateOrConnectWithoutSubscriptionInput | SubscriptionAddonCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionAddonCreateManySubscriptionInputEnvelope
    connect?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientSubscriptionUpdateavailableFeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClientSubscriptionUpdateselectedFeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type SubscriptionRenewalUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionRenewalCreateWithoutSubscriptionInput, SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput> | SubscriptionRenewalCreateWithoutSubscriptionInput[] | SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput | SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionRenewalUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionRenewalUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionRenewalCreateManySubscriptionInputEnvelope
    set?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    disconnect?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    delete?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    connect?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    update?: SubscriptionRenewalUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionRenewalUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionRenewalUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionRenewalUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionRenewalScalarWhereInput | SubscriptionRenewalScalarWhereInput[]
  }

  export type SubscriptionChangeUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionChangeCreateWithoutSubscriptionInput, SubscriptionChangeUncheckedCreateWithoutSubscriptionInput> | SubscriptionChangeCreateWithoutSubscriptionInput[] | SubscriptionChangeUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionChangeCreateOrConnectWithoutSubscriptionInput | SubscriptionChangeCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionChangeUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionChangeUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionChangeCreateManySubscriptionInputEnvelope
    set?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    disconnect?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    delete?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    connect?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    update?: SubscriptionChangeUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionChangeUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionChangeUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionChangeUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionChangeScalarWhereInput | SubscriptionChangeScalarWhereInput[]
  }

  export type SubscriptionAddonUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionAddonCreateWithoutSubscriptionInput, SubscriptionAddonUncheckedCreateWithoutSubscriptionInput> | SubscriptionAddonCreateWithoutSubscriptionInput[] | SubscriptionAddonUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionAddonCreateOrConnectWithoutSubscriptionInput | SubscriptionAddonCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionAddonUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionAddonUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionAddonCreateManySubscriptionInputEnvelope
    set?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    disconnect?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    delete?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    connect?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    update?: SubscriptionAddonUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionAddonUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionAddonUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionAddonUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionAddonScalarWhereInput | SubscriptionAddonScalarWhereInput[]
  }

  export type SubscriptionRenewalUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionRenewalCreateWithoutSubscriptionInput, SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput> | SubscriptionRenewalCreateWithoutSubscriptionInput[] | SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput | SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionRenewalUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionRenewalUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionRenewalCreateManySubscriptionInputEnvelope
    set?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    disconnect?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    delete?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    connect?: SubscriptionRenewalWhereUniqueInput | SubscriptionRenewalWhereUniqueInput[]
    update?: SubscriptionRenewalUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionRenewalUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionRenewalUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionRenewalUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionRenewalScalarWhereInput | SubscriptionRenewalScalarWhereInput[]
  }

  export type SubscriptionChangeUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionChangeCreateWithoutSubscriptionInput, SubscriptionChangeUncheckedCreateWithoutSubscriptionInput> | SubscriptionChangeCreateWithoutSubscriptionInput[] | SubscriptionChangeUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionChangeCreateOrConnectWithoutSubscriptionInput | SubscriptionChangeCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionChangeUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionChangeUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionChangeCreateManySubscriptionInputEnvelope
    set?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    disconnect?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    delete?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    connect?: SubscriptionChangeWhereUniqueInput | SubscriptionChangeWhereUniqueInput[]
    update?: SubscriptionChangeUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionChangeUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionChangeUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionChangeUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionChangeScalarWhereInput | SubscriptionChangeScalarWhereInput[]
  }

  export type SubscriptionAddonUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionAddonCreateWithoutSubscriptionInput, SubscriptionAddonUncheckedCreateWithoutSubscriptionInput> | SubscriptionAddonCreateWithoutSubscriptionInput[] | SubscriptionAddonUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionAddonCreateOrConnectWithoutSubscriptionInput | SubscriptionAddonCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionAddonUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionAddonUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionAddonCreateManySubscriptionInputEnvelope
    set?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    disconnect?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    delete?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    connect?: SubscriptionAddonWhereUniqueInput | SubscriptionAddonWhereUniqueInput[]
    update?: SubscriptionAddonUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionAddonUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionAddonUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionAddonUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionAddonScalarWhereInput | SubscriptionAddonScalarWhereInput[]
  }

  export type ClientSubscriptionCreateNestedOneWithoutRenewalsInput = {
    create?: XOR<ClientSubscriptionCreateWithoutRenewalsInput, ClientSubscriptionUncheckedCreateWithoutRenewalsInput>
    connectOrCreate?: ClientSubscriptionCreateOrConnectWithoutRenewalsInput
    connect?: ClientSubscriptionWhereUniqueInput
  }

  export type ClientSubscriptionUpdateOneRequiredWithoutRenewalsNestedInput = {
    create?: XOR<ClientSubscriptionCreateWithoutRenewalsInput, ClientSubscriptionUncheckedCreateWithoutRenewalsInput>
    connectOrCreate?: ClientSubscriptionCreateOrConnectWithoutRenewalsInput
    upsert?: ClientSubscriptionUpsertWithoutRenewalsInput
    connect?: ClientSubscriptionWhereUniqueInput
    update?: XOR<XOR<ClientSubscriptionUpdateToOneWithWhereWithoutRenewalsInput, ClientSubscriptionUpdateWithoutRenewalsInput>, ClientSubscriptionUncheckedUpdateWithoutRenewalsInput>
  }

  export type ClientSubscriptionCreateNestedOneWithoutChangesInput = {
    create?: XOR<ClientSubscriptionCreateWithoutChangesInput, ClientSubscriptionUncheckedCreateWithoutChangesInput>
    connectOrCreate?: ClientSubscriptionCreateOrConnectWithoutChangesInput
    connect?: ClientSubscriptionWhereUniqueInput
  }

  export type EnumSubscriptionChangeTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionChangeType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClientSubscriptionUpdateOneRequiredWithoutChangesNestedInput = {
    create?: XOR<ClientSubscriptionCreateWithoutChangesInput, ClientSubscriptionUncheckedCreateWithoutChangesInput>
    connectOrCreate?: ClientSubscriptionCreateOrConnectWithoutChangesInput
    upsert?: ClientSubscriptionUpsertWithoutChangesInput
    connect?: ClientSubscriptionWhereUniqueInput
    update?: XOR<XOR<ClientSubscriptionUpdateToOneWithWhereWithoutChangesInput, ClientSubscriptionUpdateWithoutChangesInput>, ClientSubscriptionUncheckedUpdateWithoutChangesInput>
  }

  export type ClientSubscriptionCreateNestedOneWithoutAddonsInput = {
    create?: XOR<ClientSubscriptionCreateWithoutAddonsInput, ClientSubscriptionUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: ClientSubscriptionCreateOrConnectWithoutAddonsInput
    connect?: ClientSubscriptionWhereUniqueInput
  }

  export type EnumAddonStatusFieldUpdateOperationsInput = {
    set?: $Enums.AddonStatus
  }

  export type ClientSubscriptionUpdateOneRequiredWithoutAddonsNestedInput = {
    create?: XOR<ClientSubscriptionCreateWithoutAddonsInput, ClientSubscriptionUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: ClientSubscriptionCreateOrConnectWithoutAddonsInput
    upsert?: ClientSubscriptionUpsertWithoutAddonsInput
    connect?: ClientSubscriptionWhereUniqueInput
    update?: XOR<XOR<ClientSubscriptionUpdateToOneWithWhereWithoutAddonsInput, ClientSubscriptionUpdateWithoutAddonsInput>, ClientSubscriptionUncheckedUpdateWithoutAddonsInput>
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

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionChangeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionChangeType | EnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionChangeTypeFilter<$PrismaModel> | $Enums.SubscriptionChangeType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumSubscriptionChangeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionChangeType | EnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionChangeType[] | ListEnumSubscriptionChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionChangeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionChangeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionChangeTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionChangeTypeFilter<$PrismaModel>
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumAddonStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonStatus | EnumAddonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonStatusFilter<$PrismaModel> | $Enums.AddonStatus
  }

  export type NestedEnumAddonStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonStatus | EnumAddonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonStatus[] | ListEnumAddonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonStatusWithAggregatesFilter<$PrismaModel> | $Enums.AddonStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddonStatusFilter<$PrismaModel>
    _max?: NestedEnumAddonStatusFilter<$PrismaModel>
  }

  export type SubscriptionRenewalCreateWithoutSubscriptionInput = {
    id?: string
    previousEndDate: Date | string
    newEndDate: Date | string
    seats: number
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    initiatedBy?: string | null
    initiatedByName?: string | null
    isAutoRenewal?: boolean
    status?: string
    failureReason?: string | null
    renewedAt?: Date | string
  }

  export type SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    previousEndDate: Date | string
    newEndDate: Date | string
    seats: number
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    initiatedBy?: string | null
    initiatedByName?: string | null
    isAutoRenewal?: boolean
    status?: string
    failureReason?: string | null
    renewedAt?: Date | string
  }

  export type SubscriptionRenewalCreateOrConnectWithoutSubscriptionInput = {
    where: SubscriptionRenewalWhereUniqueInput
    create: XOR<SubscriptionRenewalCreateWithoutSubscriptionInput, SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionRenewalCreateManySubscriptionInputEnvelope = {
    data: SubscriptionRenewalCreateManySubscriptionInput | SubscriptionRenewalCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionChangeCreateWithoutSubscriptionInput = {
    id?: string
    changeType: $Enums.SubscriptionChangeType
    previousLicenseTypeId?: string | null
    previousLicenseTypeName?: string | null
    previousSeats?: number | null
    previousAmount?: Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: string | null
    newLicenseTypeName?: string | null
    newSeats?: number | null
    newAmount?: Decimal | DecimalJsLike | number | string | null
    proratedAmount?: Decimal | DecimalJsLike | number | string | null
    creditAmount?: Decimal | DecimalJsLike | number | string | null
    effectiveDate: Date | string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    changedById?: string | null
    changedByName?: string | null
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionChangeUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    changeType: $Enums.SubscriptionChangeType
    previousLicenseTypeId?: string | null
    previousLicenseTypeName?: string | null
    previousSeats?: number | null
    previousAmount?: Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: string | null
    newLicenseTypeName?: string | null
    newSeats?: number | null
    newAmount?: Decimal | DecimalJsLike | number | string | null
    proratedAmount?: Decimal | DecimalJsLike | number | string | null
    creditAmount?: Decimal | DecimalJsLike | number | string | null
    effectiveDate: Date | string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    changedById?: string | null
    changedByName?: string | null
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionChangeCreateOrConnectWithoutSubscriptionInput = {
    where: SubscriptionChangeWhereUniqueInput
    create: XOR<SubscriptionChangeCreateWithoutSubscriptionInput, SubscriptionChangeUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionChangeCreateManySubscriptionInputEnvelope = {
    data: SubscriptionChangeCreateManySubscriptionInput | SubscriptionChangeCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionAddonCreateWithoutSubscriptionInput = {
    id?: string
    addonCode: string
    addonName: string
    addonDescription?: string | null
    pricingType: string
    pricePerUnit: Decimal | DecimalJsLike | number | string
    quantity?: number
    subtotal: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    billingCycle?: string | null
    nextBillingDate?: Date | string | null
    isRecurring?: boolean
    status?: $Enums.AddonStatus
    purchasedAt?: Date | string | null
    activatedAt?: Date | string | null
    expirationDate?: Date | string | null
    cancelledAt?: Date | string | null
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    invoiceId?: string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionAddonUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    addonCode: string
    addonName: string
    addonDescription?: string | null
    pricingType: string
    pricePerUnit: Decimal | DecimalJsLike | number | string
    quantity?: number
    subtotal: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    billingCycle?: string | null
    nextBillingDate?: Date | string | null
    isRecurring?: boolean
    status?: $Enums.AddonStatus
    purchasedAt?: Date | string | null
    activatedAt?: Date | string | null
    expirationDate?: Date | string | null
    cancelledAt?: Date | string | null
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    invoiceId?: string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionAddonCreateOrConnectWithoutSubscriptionInput = {
    where: SubscriptionAddonWhereUniqueInput
    create: XOR<SubscriptionAddonCreateWithoutSubscriptionInput, SubscriptionAddonUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionAddonCreateManySubscriptionInputEnvelope = {
    data: SubscriptionAddonCreateManySubscriptionInput | SubscriptionAddonCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionRenewalUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionRenewalWhereUniqueInput
    update: XOR<SubscriptionRenewalUpdateWithoutSubscriptionInput, SubscriptionRenewalUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<SubscriptionRenewalCreateWithoutSubscriptionInput, SubscriptionRenewalUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionRenewalUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionRenewalWhereUniqueInput
    data: XOR<SubscriptionRenewalUpdateWithoutSubscriptionInput, SubscriptionRenewalUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionRenewalUpdateManyWithWhereWithoutSubscriptionInput = {
    where: SubscriptionRenewalScalarWhereInput
    data: XOR<SubscriptionRenewalUpdateManyMutationInput, SubscriptionRenewalUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionRenewalScalarWhereInput = {
    AND?: SubscriptionRenewalScalarWhereInput | SubscriptionRenewalScalarWhereInput[]
    OR?: SubscriptionRenewalScalarWhereInput[]
    NOT?: SubscriptionRenewalScalarWhereInput | SubscriptionRenewalScalarWhereInput[]
    id?: StringFilter<"SubscriptionRenewal"> | string
    subscriptionId?: StringFilter<"SubscriptionRenewal"> | string
    previousEndDate?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    newEndDate?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
    seats?: IntFilter<"SubscriptionRenewal"> | number
    pricePerSeat?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"SubscriptionRenewal"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionRenewal"> | string
    paymentId?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    invoiceId?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionRenewal"> | $Enums.PaymentStatus
    initiatedBy?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    initiatedByName?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    isAutoRenewal?: BoolFilter<"SubscriptionRenewal"> | boolean
    status?: StringFilter<"SubscriptionRenewal"> | string
    failureReason?: StringNullableFilter<"SubscriptionRenewal"> | string | null
    renewedAt?: DateTimeFilter<"SubscriptionRenewal"> | Date | string
  }

  export type SubscriptionChangeUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionChangeWhereUniqueInput
    update: XOR<SubscriptionChangeUpdateWithoutSubscriptionInput, SubscriptionChangeUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<SubscriptionChangeCreateWithoutSubscriptionInput, SubscriptionChangeUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionChangeUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionChangeWhereUniqueInput
    data: XOR<SubscriptionChangeUpdateWithoutSubscriptionInput, SubscriptionChangeUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionChangeUpdateManyWithWhereWithoutSubscriptionInput = {
    where: SubscriptionChangeScalarWhereInput
    data: XOR<SubscriptionChangeUpdateManyMutationInput, SubscriptionChangeUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionChangeScalarWhereInput = {
    AND?: SubscriptionChangeScalarWhereInput | SubscriptionChangeScalarWhereInput[]
    OR?: SubscriptionChangeScalarWhereInput[]
    NOT?: SubscriptionChangeScalarWhereInput | SubscriptionChangeScalarWhereInput[]
    id?: StringFilter<"SubscriptionChange"> | string
    subscriptionId?: StringFilter<"SubscriptionChange"> | string
    changeType?: EnumSubscriptionChangeTypeFilter<"SubscriptionChange"> | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: StringNullableFilter<"SubscriptionChange"> | string | null
    previousLicenseTypeName?: StringNullableFilter<"SubscriptionChange"> | string | null
    previousSeats?: IntNullableFilter<"SubscriptionChange"> | number | null
    previousAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: StringNullableFilter<"SubscriptionChange"> | string | null
    newLicenseTypeName?: StringNullableFilter<"SubscriptionChange"> | string | null
    newSeats?: IntNullableFilter<"SubscriptionChange"> | number | null
    newAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    creditAmount?: DecimalNullableFilter<"SubscriptionChange"> | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFilter<"SubscriptionChange"> | Date | string
    paymentId?: StringNullableFilter<"SubscriptionChange"> | string | null
    invoiceId?: StringNullableFilter<"SubscriptionChange"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionChange"> | $Enums.PaymentStatus
    changedById?: StringNullableFilter<"SubscriptionChange"> | string | null
    changedByName?: StringNullableFilter<"SubscriptionChange"> | string | null
    reason?: StringNullableFilter<"SubscriptionChange"> | string | null
    notes?: StringNullableFilter<"SubscriptionChange"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionChange"> | Date | string
  }

  export type SubscriptionAddonUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionAddonWhereUniqueInput
    update: XOR<SubscriptionAddonUpdateWithoutSubscriptionInput, SubscriptionAddonUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<SubscriptionAddonCreateWithoutSubscriptionInput, SubscriptionAddonUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionAddonUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionAddonWhereUniqueInput
    data: XOR<SubscriptionAddonUpdateWithoutSubscriptionInput, SubscriptionAddonUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionAddonUpdateManyWithWhereWithoutSubscriptionInput = {
    where: SubscriptionAddonScalarWhereInput
    data: XOR<SubscriptionAddonUpdateManyMutationInput, SubscriptionAddonUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionAddonScalarWhereInput = {
    AND?: SubscriptionAddonScalarWhereInput | SubscriptionAddonScalarWhereInput[]
    OR?: SubscriptionAddonScalarWhereInput[]
    NOT?: SubscriptionAddonScalarWhereInput | SubscriptionAddonScalarWhereInput[]
    id?: StringFilter<"SubscriptionAddon"> | string
    subscriptionId?: StringFilter<"SubscriptionAddon"> | string
    addonCode?: StringFilter<"SubscriptionAddon"> | string
    addonName?: StringFilter<"SubscriptionAddon"> | string
    addonDescription?: StringNullableFilter<"SubscriptionAddon"> | string | null
    pricingType?: StringFilter<"SubscriptionAddon"> | string
    pricePerUnit?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"SubscriptionAddon"> | number
    subtotal?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"SubscriptionAddon"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionAddon"> | string
    billingCycle?: StringNullableFilter<"SubscriptionAddon"> | string | null
    nextBillingDate?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    isRecurring?: BoolFilter<"SubscriptionAddon"> | boolean
    status?: EnumAddonStatusFilter<"SubscriptionAddon"> | $Enums.AddonStatus
    purchasedAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    activatedAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"SubscriptionAddon"> | Date | string | null
    paymentId?: StringNullableFilter<"SubscriptionAddon"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"SubscriptionAddon"> | $Enums.PaymentStatus
    invoiceId?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelReason?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelledById?: StringNullableFilter<"SubscriptionAddon"> | string | null
    cancelledByName?: StringNullableFilter<"SubscriptionAddon"> | string | null
    notes?: StringNullableFilter<"SubscriptionAddon"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionAddon"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionAddon"> | Date | string
  }

  export type ClientSubscriptionCreateWithoutRenewalsInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    changes?: SubscriptionChangeCreateNestedManyWithoutSubscriptionInput
    addons?: SubscriptionAddonCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionUncheckedCreateWithoutRenewalsInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    changes?: SubscriptionChangeUncheckedCreateNestedManyWithoutSubscriptionInput
    addons?: SubscriptionAddonUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionCreateOrConnectWithoutRenewalsInput = {
    where: ClientSubscriptionWhereUniqueInput
    create: XOR<ClientSubscriptionCreateWithoutRenewalsInput, ClientSubscriptionUncheckedCreateWithoutRenewalsInput>
  }

  export type ClientSubscriptionUpsertWithoutRenewalsInput = {
    update: XOR<ClientSubscriptionUpdateWithoutRenewalsInput, ClientSubscriptionUncheckedUpdateWithoutRenewalsInput>
    create: XOR<ClientSubscriptionCreateWithoutRenewalsInput, ClientSubscriptionUncheckedCreateWithoutRenewalsInput>
    where?: ClientSubscriptionWhereInput
  }

  export type ClientSubscriptionUpdateToOneWithWhereWithoutRenewalsInput = {
    where?: ClientSubscriptionWhereInput
    data: XOR<ClientSubscriptionUpdateWithoutRenewalsInput, ClientSubscriptionUncheckedUpdateWithoutRenewalsInput>
  }

  export type ClientSubscriptionUpdateWithoutRenewalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changes?: SubscriptionChangeUpdateManyWithoutSubscriptionNestedInput
    addons?: SubscriptionAddonUpdateManyWithoutSubscriptionNestedInput
  }

  export type ClientSubscriptionUncheckedUpdateWithoutRenewalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changes?: SubscriptionChangeUncheckedUpdateManyWithoutSubscriptionNestedInput
    addons?: SubscriptionAddonUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type ClientSubscriptionCreateWithoutChangesInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: SubscriptionRenewalCreateNestedManyWithoutSubscriptionInput
    addons?: SubscriptionAddonCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionUncheckedCreateWithoutChangesInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: SubscriptionRenewalUncheckedCreateNestedManyWithoutSubscriptionInput
    addons?: SubscriptionAddonUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionCreateOrConnectWithoutChangesInput = {
    where: ClientSubscriptionWhereUniqueInput
    create: XOR<ClientSubscriptionCreateWithoutChangesInput, ClientSubscriptionUncheckedCreateWithoutChangesInput>
  }

  export type ClientSubscriptionUpsertWithoutChangesInput = {
    update: XOR<ClientSubscriptionUpdateWithoutChangesInput, ClientSubscriptionUncheckedUpdateWithoutChangesInput>
    create: XOR<ClientSubscriptionCreateWithoutChangesInput, ClientSubscriptionUncheckedCreateWithoutChangesInput>
    where?: ClientSubscriptionWhereInput
  }

  export type ClientSubscriptionUpdateToOneWithWhereWithoutChangesInput = {
    where?: ClientSubscriptionWhereInput
    data: XOR<ClientSubscriptionUpdateWithoutChangesInput, ClientSubscriptionUncheckedUpdateWithoutChangesInput>
  }

  export type ClientSubscriptionUpdateWithoutChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: SubscriptionRenewalUpdateManyWithoutSubscriptionNestedInput
    addons?: SubscriptionAddonUpdateManyWithoutSubscriptionNestedInput
  }

  export type ClientSubscriptionUncheckedUpdateWithoutChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: SubscriptionRenewalUncheckedUpdateManyWithoutSubscriptionNestedInput
    addons?: SubscriptionAddonUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type ClientSubscriptionCreateWithoutAddonsInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: SubscriptionRenewalCreateNestedManyWithoutSubscriptionInput
    changes?: SubscriptionChangeCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionUncheckedCreateWithoutAddonsInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    pricingPlanId: string
    pricingPlanName?: string | null
    billingCycle?: string
    orderId?: string | null
    orderItemId?: string | null
    name?: string | null
    seats?: number
    availableFeatures?: ClientSubscriptionCreateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionCreateselectedFeaturesInput | string[]
    subscriptionDate?: Date | string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    status?: $Enums.SubscriptionStatus
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal?: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: boolean
    gstin?: string | null
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentTransactionId?: string | null
    paymentNotes?: string | null
    paymentCompletedAt?: Date | string | null
    autoRenew?: boolean
    renewalRemindedAt?: Date | string | null
    nextRenewalDate?: Date | string | null
    licensePoolId?: string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: SubscriptionRenewalUncheckedCreateNestedManyWithoutSubscriptionInput
    changes?: SubscriptionChangeUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type ClientSubscriptionCreateOrConnectWithoutAddonsInput = {
    where: ClientSubscriptionWhereUniqueInput
    create: XOR<ClientSubscriptionCreateWithoutAddonsInput, ClientSubscriptionUncheckedCreateWithoutAddonsInput>
  }

  export type ClientSubscriptionUpsertWithoutAddonsInput = {
    update: XOR<ClientSubscriptionUpdateWithoutAddonsInput, ClientSubscriptionUncheckedUpdateWithoutAddonsInput>
    create: XOR<ClientSubscriptionCreateWithoutAddonsInput, ClientSubscriptionUncheckedCreateWithoutAddonsInput>
    where?: ClientSubscriptionWhereInput
  }

  export type ClientSubscriptionUpdateToOneWithWhereWithoutAddonsInput = {
    where?: ClientSubscriptionWhereInput
    data: XOR<ClientSubscriptionUpdateWithoutAddonsInput, ClientSubscriptionUncheckedUpdateWithoutAddonsInput>
  }

  export type ClientSubscriptionUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: SubscriptionRenewalUpdateManyWithoutSubscriptionNestedInput
    changes?: SubscriptionChangeUpdateManyWithoutSubscriptionNestedInput
  }

  export type ClientSubscriptionUncheckedUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: StringFieldUpdateOperationsInput | string
    pricingPlanName?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    availableFeatures?: ClientSubscriptionUpdateavailableFeaturesInput | string[]
    selectedFeatures?: ClientSubscriptionUpdateselectedFeaturesInput | string[]
    subscriptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponValidForRenewal?: BoolFieldUpdateOperationsInput | boolean
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentNotes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalRemindedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRenewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licensePoolId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: SubscriptionRenewalUncheckedUpdateManyWithoutSubscriptionNestedInput
    changes?: SubscriptionChangeUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionRenewalCreateManySubscriptionInput = {
    id?: string
    previousEndDate: Date | string
    newEndDate: Date | string
    seats: number
    pricePerSeat: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    initiatedBy?: string | null
    initiatedByName?: string | null
    isAutoRenewal?: boolean
    status?: string
    failureReason?: string | null
    renewedAt?: Date | string
  }

  export type SubscriptionChangeCreateManySubscriptionInput = {
    id?: string
    changeType: $Enums.SubscriptionChangeType
    previousLicenseTypeId?: string | null
    previousLicenseTypeName?: string | null
    previousSeats?: number | null
    previousAmount?: Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: string | null
    newLicenseTypeName?: string | null
    newSeats?: number | null
    newAmount?: Decimal | DecimalJsLike | number | string | null
    proratedAmount?: Decimal | DecimalJsLike | number | string | null
    creditAmount?: Decimal | DecimalJsLike | number | string | null
    effectiveDate: Date | string
    paymentId?: string | null
    invoiceId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    changedById?: string | null
    changedByName?: string | null
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionAddonCreateManySubscriptionInput = {
    id?: string
    addonCode: string
    addonName: string
    addonDescription?: string | null
    pricingType: string
    pricePerUnit: Decimal | DecimalJsLike | number | string
    quantity?: number
    subtotal: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    billingCycle?: string | null
    nextBillingDate?: Date | string | null
    isRecurring?: boolean
    status?: $Enums.AddonStatus
    purchasedAt?: Date | string | null
    activatedAt?: Date | string | null
    expirationDate?: Date | string | null
    cancelledAt?: Date | string | null
    paymentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    invoiceId?: string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionRenewalUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    isAutoRenewal?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    renewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionRenewalUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    isAutoRenewal?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    renewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionRenewalUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    isAutoRenewal?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    renewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionChangeUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumSubscriptionChangeTypeFieldUpdateOperationsInput | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    previousLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    previousSeats?: NullableIntFieldUpdateOperationsInput | number | null
    previousAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    newLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    newSeats?: NullableIntFieldUpdateOperationsInput | number | null
    newAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByName?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionChangeUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumSubscriptionChangeTypeFieldUpdateOperationsInput | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    previousLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    previousSeats?: NullableIntFieldUpdateOperationsInput | number | null
    previousAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    newLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    newSeats?: NullableIntFieldUpdateOperationsInput | number | null
    newAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByName?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionChangeUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumSubscriptionChangeTypeFieldUpdateOperationsInput | $Enums.SubscriptionChangeType
    previousLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    previousLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    previousSeats?: NullableIntFieldUpdateOperationsInput | number | null
    previousAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newLicenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    newLicenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    newSeats?: NullableIntFieldUpdateOperationsInput | number | null
    newAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proratedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByName?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionAddonUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    addonCode?: StringFieldUpdateOperationsInput | string
    addonName?: StringFieldUpdateOperationsInput | string
    addonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricingType?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAddonStatusFieldUpdateOperationsInput | $Enums.AddonStatus
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionAddonUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    addonCode?: StringFieldUpdateOperationsInput | string
    addonName?: StringFieldUpdateOperationsInput | string
    addonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricingType?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAddonStatusFieldUpdateOperationsInput | $Enums.AddonStatus
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionAddonUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    addonCode?: StringFieldUpdateOperationsInput | string
    addonName?: StringFieldUpdateOperationsInput | string
    addonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricingType?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAddonStatusFieldUpdateOperationsInput | $Enums.AddonStatus
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClientSubscriptionCountOutputTypeDefaultArgs instead
     */
    export type ClientSubscriptionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientSubscriptionDefaultArgs instead
     */
    export type ClientSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientSubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionRenewalDefaultArgs instead
     */
    export type SubscriptionRenewalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionRenewalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionChangeDefaultArgs instead
     */
    export type SubscriptionChangeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionChangeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionExpirationJobDefaultArgs instead
     */
    export type SubscriptionExpirationJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionExpirationJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionAddonDefaultArgs instead
     */
    export type SubscriptionAddonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionAddonDefaultArgs<ExtArgs>

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