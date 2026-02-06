
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ClientSubscriptionScalarFieldEnum = {
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

exports.Prisma.SubscriptionRenewalScalarFieldEnum = {
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

exports.Prisma.SubscriptionChangeScalarFieldEnum = {
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

exports.Prisma.SubscriptionExpirationJobScalarFieldEnum = {
  id: 'id',
  subscriptionId: 'subscriptionId',
  expirationDate: 'expirationDate',
  reminderSentAt: 'reminderSentAt',
  processedAt: 'processedAt',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubscriptionAddonScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.SubscriptionStatus = exports.$Enums.SubscriptionStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  SUSPENDED: 'SUSPENDED',
  GRACE_PERIOD: 'GRACE_PERIOD'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  CANCELLED: 'CANCELLED'
};

exports.SubscriptionChangeType = exports.$Enums.SubscriptionChangeType = {
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

exports.AddonStatus = exports.$Enums.AddonStatus = {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED'
};

exports.Prisma.ModelName = {
  ClientSubscription: 'ClientSubscription',
  SubscriptionRenewal: 'SubscriptionRenewal',
  SubscriptionChange: 'SubscriptionChange',
  SubscriptionExpirationJob: 'SubscriptionExpirationJob',
  SubscriptionAddon: 'SubscriptionAddon'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\super_admin\\subscription-service\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\super_admin\\subscription-service\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// Subscription Service Prisma Schema\n// Microservice for subscription lifecycle, renewals, upgrades/downgrades\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// =============================================================================\n// ENUMS\n// =============================================================================\n\n// Subscription status\nenum SubscriptionStatus {\n  PENDING // Awaiting payment\n  ACTIVE // Active and usable\n  EXPIRED // Past expiration date\n  CANCELLED // Cancelled by user\n  SUSPENDED // Temporarily suspended\n  GRACE_PERIOD // Expired but in grace period\n}\n\n// Payment status\nenum PaymentStatus {\n  PENDING\n  PROCESSING\n  COMPLETED\n  FAILED\n  REFUNDED\n  CANCELLED\n}\n\n// Subscription change types\nenum SubscriptionChangeType {\n  ACTIVATION\n  UPGRADE\n  DOWNGRADE\n  SEATS_ADDED\n  SEATS_REMOVED\n  DURATION_EXTENDED\n  CANCELLED\n  RENEWED\n  ADDON_ADDED\n  ADDON_REMOVED\n}\n\n// Addon status for subscription addons\nenum AddonStatus {\n  PENDING_PAYMENT // Waiting for payment\n  ACTIVE // Active and usable\n  CANCELLED // Cancelled by user\n  EXPIRED // Past expiration date\n  SUSPENDED // Temporarily suspended\n}\n\n// =============================================================================\n// CLIENT SUBSCRIPTION MODEL\n// Main subscription entity with denormalized data from other services\n// =============================================================================\nmodel ClientSubscription {\n  id String @id @default(cuid())\n\n  // === DENORMALIZED CLIENT DATA ===\n  clientId    String\n  clientName  String // From Client Service\n  clientEmail String? // From Client Service\n\n  // === DENORMALIZED PRODUCT DATA ===\n  productId   String\n  productName String // From Product Service\n  productCode String // From Product Service\n\n  // === DENORMALIZED LICENSE TYPE DATA ===\n  licenseTypeId   String\n  licenseTypeName String // From Product Service\n\n  // === DENORMALIZED PRICING PLAN DATA ===\n  pricingPlanId   String\n  pricingPlanName String? // From Product Service\n  billingCycle    String  @default(\"MONTHLY\") // MONTHLY, ANNUAL, PERPETUAL\n\n  // === ORDER REFERENCE ===\n  orderId     String? // Order that created this subscription\n  orderItemId String? // Specific order item\n\n  // === SUBSCRIPTION DETAILS ===\n  name  String? // \"Marketing Team License\", \"Dev Team License\"\n  seats Int     @default(1)\n\n  // === FEATURES ===\n  availableFeatures String[] @default([]) // All features from license type\n  selectedFeatures  String[] @default([]) // Features selected by client\n\n  // === DATES ===\n  subscriptionDate DateTime  @default(now())\n  activationDate   DateTime? // When payment completed\n  expirationDate   DateTime\n  gracePeriodDays  Int       @default(7)\n\n  // === STATUS ===\n  status SubscriptionStatus @default(PENDING)\n\n  // === PRICING & BILLING ===\n  pricePerSeat Decimal @db.Decimal(10, 2)\n  subtotal     Decimal @default(0) @db.Decimal(12, 2)\n\n  // Discount\n  discountPercent       Decimal @default(0) @db.Decimal(5, 2)\n  discountAmount        Decimal @default(0) @db.Decimal(12, 2)\n  couponId              String?\n  couponCode            String?\n  couponDiscount        Decimal @default(0) @db.Decimal(12, 2)\n  couponValidForRenewal Boolean @default(false)\n\n  // Tax\n  gstin      String?\n  taxPercent Decimal @default(18) @db.Decimal(5, 2)\n  taxAmount  Decimal @default(0) @db.Decimal(12, 2)\n\n  // Final amounts\n  totalAmount Decimal @db.Decimal(12, 2)\n  currency    String  @default(\"INR\")\n\n  // === PAYMENT TRACKING ===\n  paymentId            String?\n  paymentStatus        PaymentStatus @default(PENDING)\n  paymentMethod        String? // BANK_TRANSFER, UPI, CREDIT_CARD, etc.\n  paymentTransactionId String? // Transaction reference number\n  paymentNotes         String? // Payment notes\n  paymentCompletedAt   DateTime? // When payment was confirmed\n\n  // === AUTO-RENEWAL ===\n  autoRenew         Boolean   @default(true)\n  renewalRemindedAt DateTime?\n  nextRenewalDate   DateTime?\n\n  // === LICENSE POOL LINK ===\n  licensePoolId String? @unique\n\n  // === CANCELLATION ===\n  cancelledAt     DateTime?\n  cancelReason    String?\n  cancelledById   String?\n  cancelledByName String?\n\n  // === RELATIONS ===\n  renewals SubscriptionRenewal[]\n  changes  SubscriptionChange[]\n  addons   SubscriptionAddon[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([clientId])\n  @@index([productId])\n  @@index([licenseTypeId])\n  @@index([pricingPlanId])\n  @@index([status])\n  @@index([paymentStatus])\n  @@index([expirationDate])\n  @@index([licensePoolId])\n  @@map(\"client_subscriptions\")\n}\n\n// =============================================================================\n// SUBSCRIPTION RENEWAL MODEL\n// Track subscription renewals\n// =============================================================================\nmodel SubscriptionRenewal {\n  id             String @id @default(cuid())\n  subscriptionId String\n\n  // Renewal period\n  previousEndDate DateTime\n  newEndDate      DateTime\n\n  // Pricing at renewal time\n  seats          Int\n  pricePerSeat   Decimal @db.Decimal(10, 2)\n  subtotal       Decimal @db.Decimal(12, 2)\n  discountAmount Decimal @default(0) @db.Decimal(12, 2)\n  taxAmount      Decimal @default(0) @db.Decimal(12, 2)\n  totalAmount    Decimal @db.Decimal(12, 2)\n  currency       String  @default(\"INR\")\n\n  // Payment reference\n  paymentId     String?\n  invoiceId     String?\n  paymentStatus PaymentStatus @default(PENDING)\n\n  // Who initiated\n  initiatedBy     String? // \"SYSTEM\" for auto, or user ID\n  initiatedByName String?\n  isAutoRenewal   Boolean @default(false)\n\n  // Status\n  status        String  @default(\"PENDING\") // PENDING, COMPLETED, FAILED\n  failureReason String?\n\n  renewedAt DateTime @default(now())\n\n  subscription ClientSubscription @relation(fields: [subscriptionId], references: [id], onDelete: Cascade)\n\n  @@index([subscriptionId])\n  @@index([renewedAt])\n  @@index([status])\n  @@map(\"subscription_renewals\")\n}\n\n// =============================================================================\n// SUBSCRIPTION CHANGE MODEL\n// Track upgrades, downgrades, seat changes\n// =============================================================================\nmodel SubscriptionChange {\n  id             String @id @default(cuid())\n  subscriptionId String\n\n  changeType SubscriptionChangeType\n\n  // Previous state\n  previousLicenseTypeId   String?\n  previousLicenseTypeName String?\n  previousSeats           Int?\n  previousAmount          Decimal? @db.Decimal(12, 2)\n\n  // New state\n  newLicenseTypeId   String?\n  newLicenseTypeName String?\n  newSeats           Int?\n  newAmount          Decimal? @db.Decimal(12, 2)\n\n  // Proration\n  proratedAmount Decimal? @db.Decimal(12, 2)\n  creditAmount   Decimal? @db.Decimal(12, 2) // Credit for downgrade\n  effectiveDate  DateTime\n\n  // Payment\n  paymentId     String?\n  invoiceId     String?\n  paymentStatus PaymentStatus @default(PENDING)\n\n  // Who made change\n  changedById   String?\n  changedByName String?\n  reason        String?\n  notes         String?\n\n  subscription ClientSubscription @relation(fields: [subscriptionId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n\n  @@index([subscriptionId])\n  @@index([changeType])\n  @@index([createdAt])\n  @@map(\"subscription_changes\")\n}\n\n// =============================================================================\n// SUBSCRIPTION EXPIRATION JOB MODEL\n// Track scheduled expiration jobs\n// =============================================================================\nmodel SubscriptionExpirationJob {\n  id             String @id @default(cuid())\n  subscriptionId String @unique\n\n  expirationDate DateTime\n  reminderSentAt DateTime?\n  processedAt    DateTime?\n\n  status String @default(\"PENDING\") // PENDING, REMINDER_SENT, PROCESSED, CANCELLED\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([expirationDate])\n  @@index([status])\n  @@map(\"subscription_expiration_jobs\")\n}\n\n// =============================================================================\n// SUBSCRIPTION ADDON MODEL\n// Track addon features purchased for a subscription\n// =============================================================================\nmodel SubscriptionAddon {\n  id             String @id @default(cuid())\n  subscriptionId String\n\n  // === DENORMALIZED ADDON DATA (from Product Service) ===\n  addonCode        String // Unique addon code (e.g., 'ADVANCED_ANALYTICS')\n  addonName        String // Display name\n  addonDescription String? // Description\n\n  // === PRICING (at purchase time) ===\n  pricingType  String // ONE_TIME, PER_SEAT, FLAT_RATE\n  pricePerUnit Decimal @db.Decimal(10, 2) // Price per seat or flat\n  quantity     Int     @default(1) // Number of units (for per-seat)\n  subtotal     Decimal @db.Decimal(12, 2) // Before tax\n  taxPercent   Decimal @default(18) @db.Decimal(5, 2)\n  taxAmount    Decimal @default(0) @db.Decimal(12, 2)\n  totalAmount  Decimal @db.Decimal(12, 2) // Final amount\n  currency     String  @default(\"INR\")\n\n  // === BILLING INFO ===\n  billingCycle    String? // MONTHLY, ANNUAL (null for one-time)\n  nextBillingDate DateTime? // Next billing date for recurring\n  isRecurring     Boolean   @default(true) // Auto-renew with subscription\n\n  // === STATUS ===\n  status AddonStatus @default(PENDING_PAYMENT)\n\n  // === DATES ===\n  purchasedAt    DateTime? // When first purchased\n  activatedAt    DateTime? // When payment confirmed\n  expirationDate DateTime? // When addon expires (for recurring)\n  cancelledAt    DateTime? // When cancelled\n\n  // === PAYMENT ===\n  paymentId     String? // Payment record ID\n  paymentStatus PaymentStatus @default(PENDING)\n  invoiceId     String? // Invoice ID from billing service\n\n  // === CANCELLATION ===\n  cancelReason    String?\n  cancelledById   String?\n  cancelledByName String?\n\n  // === METADATA ===\n  notes String?\n\n  // === RELATIONS ===\n  subscription ClientSubscription @relation(fields: [subscriptionId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([subscriptionId, addonCode]) // Only one of each addon per subscription\n  @@index([subscriptionId])\n  @@index([addonCode])\n  @@index([status])\n  @@index([paymentStatus])\n  @@map(\"subscription_addons\")\n}\n",
  "inlineSchemaHash": "2f906b504c52dd9f8af77ef6acf590847869a6082f4786cb6c74eccb71bd25b1",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"ClientSubscription\":{\"dbName\":\"client_subscriptions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseTypeName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricingPlanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricingPlanName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billingCycle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"MONTHLY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItemId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seats\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availableFeatures\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectedFeatures\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expirationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gracePeriodDays\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":7,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SubscriptionStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricePerSeat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discountPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discountAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"couponId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"couponCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"couponDiscount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"couponValidForRenewal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gstin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":18,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"INR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PaymentStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentMethod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentTransactionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentNotes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentCompletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autoRenew\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renewalRemindedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextRenewalDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licensePoolId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledByName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renewals\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubscriptionRenewal\",\"relationName\":\"ClientSubscriptionToSubscriptionRenewal\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubscriptionChange\",\"relationName\":\"ClientSubscriptionToSubscriptionChange\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addons\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubscriptionAddon\",\"relationName\":\"ClientSubscriptionToSubscriptionAddon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubscriptionRenewal\":{\"dbName\":\"subscription_renewals\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seats\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricePerSeat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discountAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"INR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoiceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PaymentStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"initiatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"initiatedByName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAutoRenewal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failureReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renewedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientSubscription\",\"relationName\":\"ClientSubscriptionToSubscriptionRenewal\",\"relationFromFields\":[\"subscriptionId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubscriptionChange\":{\"dbName\":\"subscription_changes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changeType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubscriptionChangeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousLicenseTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousLicenseTypeName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousSeats\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newLicenseTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newLicenseTypeName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newSeats\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proratedAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creditAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effectiveDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoiceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PaymentStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changedByName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientSubscription\",\"relationName\":\"ClientSubscriptionToSubscriptionChange\",\"relationFromFields\":[\"subscriptionId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubscriptionExpirationJob\":{\"dbName\":\"subscription_expiration_jobs\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expirationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reminderSentAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubscriptionAddon\":{\"dbName\":\"subscription_addons\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addonCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addonName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addonDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricingType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricePerUnit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":18,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"INR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billingCycle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextBillingDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRecurring\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AddonStatus\",\"default\":\"PENDING_PAYMENT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchasedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expirationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PaymentStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoiceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledByName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientSubscription\",\"relationName\":\"ClientSubscriptionToSubscriptionAddon\",\"relationFromFields\":[\"subscriptionId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"subscriptionId\",\"addonCode\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"subscriptionId\",\"addonCode\"]}],\"isGenerated\":false}},\"enums\":{\"SubscriptionStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null},{\"name\":\"GRACE_PERIOD\",\"dbName\":null}],\"dbName\":null},\"PaymentStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"PROCESSING\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null},{\"name\":\"REFUNDED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null}],\"dbName\":null},\"SubscriptionChangeType\":{\"values\":[{\"name\":\"ACTIVATION\",\"dbName\":null},{\"name\":\"UPGRADE\",\"dbName\":null},{\"name\":\"DOWNGRADE\",\"dbName\":null},{\"name\":\"SEATS_ADDED\",\"dbName\":null},{\"name\":\"SEATS_REMOVED\",\"dbName\":null},{\"name\":\"DURATION_EXTENDED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"RENEWED\",\"dbName\":null},{\"name\":\"ADDON_ADDED\",\"dbName\":null},{\"name\":\"ADDON_REMOVED\",\"dbName\":null}],\"dbName\":null},\"AddonStatus\":{\"values\":[{\"name\":\"PENDING_PAYMENT\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
