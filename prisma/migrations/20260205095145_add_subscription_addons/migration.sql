-- CreateEnum
CREATE TYPE "AddonStatus" AS ENUM ('PENDING_PAYMENT', 'ACTIVE', 'CANCELLED', 'EXPIRED', 'SUSPENDED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "SubscriptionChangeType" ADD VALUE 'ADDON_ADDED';
ALTER TYPE "SubscriptionChangeType" ADD VALUE 'ADDON_REMOVED';

-- CreateTable
CREATE TABLE "subscription_addons" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "addonCode" TEXT NOT NULL,
    "addonName" TEXT NOT NULL,
    "addonDescription" TEXT,
    "pricingType" TEXT NOT NULL,
    "pricePerUnit" DECIMAL(10,2) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "subtotal" DECIMAL(12,2) NOT NULL,
    "taxPercent" DECIMAL(5,2) NOT NULL DEFAULT 18,
    "taxAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "billingCycle" TEXT,
    "nextBillingDate" TIMESTAMP(3),
    "isRecurring" BOOLEAN NOT NULL DEFAULT true,
    "status" "AddonStatus" NOT NULL DEFAULT 'PENDING_PAYMENT',
    "purchasedAt" TIMESTAMP(3),
    "activatedAt" TIMESTAMP(3),
    "expirationDate" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "paymentId" TEXT,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "invoiceId" TEXT,
    "cancelReason" TEXT,
    "cancelledById" TEXT,
    "cancelledByName" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscription_addons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "subscription_addons_subscriptionId_idx" ON "subscription_addons"("subscriptionId");

-- CreateIndex
CREATE INDEX "subscription_addons_addonCode_idx" ON "subscription_addons"("addonCode");

-- CreateIndex
CREATE INDEX "subscription_addons_status_idx" ON "subscription_addons"("status");

-- CreateIndex
CREATE INDEX "subscription_addons_paymentStatus_idx" ON "subscription_addons"("paymentStatus");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_addons_subscriptionId_addonCode_key" ON "subscription_addons"("subscriptionId", "addonCode");

-- AddForeignKey
ALTER TABLE "subscription_addons" ADD CONSTRAINT "subscription_addons_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "client_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
