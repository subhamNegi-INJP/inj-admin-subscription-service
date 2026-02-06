-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('PENDING', 'ACTIVE', 'EXPIRED', 'CANCELLED', 'SUSPENDED', 'GRACE_PERIOD');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "SubscriptionChangeType" AS ENUM ('ACTIVATION', 'UPGRADE', 'DOWNGRADE', 'SEATS_ADDED', 'SEATS_REMOVED', 'DURATION_EXTENDED', 'CANCELLED', 'RENEWED');

-- CreateTable
CREATE TABLE "client_subscriptions" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "licenseTypeId" TEXT NOT NULL,
    "licenseTypeName" TEXT NOT NULL,
    "pricingPlanId" TEXT NOT NULL,
    "pricingPlanName" TEXT,
    "billingCycle" TEXT NOT NULL DEFAULT 'MONTHLY',
    "orderId" TEXT,
    "orderItemId" TEXT,
    "name" TEXT,
    "seats" INTEGER NOT NULL DEFAULT 1,
    "availableFeatures" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "selectedFeatures" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "subscriptionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activationDate" TIMESTAMP(3),
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "gracePeriodDays" INTEGER NOT NULL DEFAULT 7,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'PENDING',
    "pricePerSeat" DECIMAL(10,2) NOT NULL,
    "subtotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "discountPercent" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "discountAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "couponId" TEXT,
    "couponCode" TEXT,
    "couponDiscount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "couponValidForRenewal" BOOLEAN NOT NULL DEFAULT false,
    "gstin" TEXT,
    "taxPercent" DECIMAL(5,2) NOT NULL DEFAULT 18,
    "taxAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "paymentId" TEXT,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "autoRenew" BOOLEAN NOT NULL DEFAULT true,
    "renewalRemindedAt" TIMESTAMP(3),
    "nextRenewalDate" TIMESTAMP(3),
    "licensePoolId" TEXT,
    "cancelledAt" TIMESTAMP(3),
    "cancelReason" TEXT,
    "cancelledById" TEXT,
    "cancelledByName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_renewals" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "previousEndDate" TIMESTAMP(3) NOT NULL,
    "newEndDate" TIMESTAMP(3) NOT NULL,
    "seats" INTEGER NOT NULL,
    "pricePerSeat" DECIMAL(10,2) NOT NULL,
    "subtotal" DECIMAL(12,2) NOT NULL,
    "discountAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "taxAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "paymentId" TEXT,
    "invoiceId" TEXT,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "initiatedBy" TEXT,
    "initiatedByName" TEXT,
    "isAutoRenewal" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "failureReason" TEXT,
    "renewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscription_renewals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_changes" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "changeType" "SubscriptionChangeType" NOT NULL,
    "previousLicenseTypeId" TEXT,
    "previousLicenseTypeName" TEXT,
    "previousSeats" INTEGER,
    "previousAmount" DECIMAL(12,2),
    "newLicenseTypeId" TEXT,
    "newLicenseTypeName" TEXT,
    "newSeats" INTEGER,
    "newAmount" DECIMAL(12,2),
    "proratedAmount" DECIMAL(12,2),
    "creditAmount" DECIMAL(12,2),
    "effectiveDate" TIMESTAMP(3) NOT NULL,
    "paymentId" TEXT,
    "invoiceId" TEXT,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "changedById" TEXT,
    "changedByName" TEXT,
    "reason" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscription_changes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_expiration_jobs" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "reminderSentAt" TIMESTAMP(3),
    "processedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscription_expiration_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_subscriptions_licensePoolId_key" ON "client_subscriptions"("licensePoolId");

-- CreateIndex
CREATE INDEX "client_subscriptions_clientId_idx" ON "client_subscriptions"("clientId");

-- CreateIndex
CREATE INDEX "client_subscriptions_productId_idx" ON "client_subscriptions"("productId");

-- CreateIndex
CREATE INDEX "client_subscriptions_licenseTypeId_idx" ON "client_subscriptions"("licenseTypeId");

-- CreateIndex
CREATE INDEX "client_subscriptions_pricingPlanId_idx" ON "client_subscriptions"("pricingPlanId");

-- CreateIndex
CREATE INDEX "client_subscriptions_status_idx" ON "client_subscriptions"("status");

-- CreateIndex
CREATE INDEX "client_subscriptions_paymentStatus_idx" ON "client_subscriptions"("paymentStatus");

-- CreateIndex
CREATE INDEX "client_subscriptions_expirationDate_idx" ON "client_subscriptions"("expirationDate");

-- CreateIndex
CREATE INDEX "client_subscriptions_licensePoolId_idx" ON "client_subscriptions"("licensePoolId");

-- CreateIndex
CREATE INDEX "subscription_renewals_subscriptionId_idx" ON "subscription_renewals"("subscriptionId");

-- CreateIndex
CREATE INDEX "subscription_renewals_renewedAt_idx" ON "subscription_renewals"("renewedAt");

-- CreateIndex
CREATE INDEX "subscription_renewals_status_idx" ON "subscription_renewals"("status");

-- CreateIndex
CREATE INDEX "subscription_changes_subscriptionId_idx" ON "subscription_changes"("subscriptionId");

-- CreateIndex
CREATE INDEX "subscription_changes_changeType_idx" ON "subscription_changes"("changeType");

-- CreateIndex
CREATE INDEX "subscription_changes_createdAt_idx" ON "subscription_changes"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_expiration_jobs_subscriptionId_key" ON "subscription_expiration_jobs"("subscriptionId");

-- CreateIndex
CREATE INDEX "subscription_expiration_jobs_expirationDate_idx" ON "subscription_expiration_jobs"("expirationDate");

-- CreateIndex
CREATE INDEX "subscription_expiration_jobs_status_idx" ON "subscription_expiration_jobs"("status");

-- AddForeignKey
ALTER TABLE "subscription_renewals" ADD CONSTRAINT "subscription_renewals_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "client_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_changes" ADD CONSTRAINT "subscription_changes_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "client_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
