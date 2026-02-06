-- AlterTable
ALTER TABLE "client_subscriptions" ADD COLUMN     "paymentCompletedAt" TIMESTAMP(3),
ADD COLUMN     "paymentMethod" TEXT,
ADD COLUMN     "paymentNotes" TEXT,
ADD COLUMN     "paymentTransactionId" TEXT;
