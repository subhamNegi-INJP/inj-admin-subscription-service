// Subscription Service Database Seed
// Creates sample subscriptions, renewals, and change history

import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Subscription Service database...');

  // =============================================================================
  // SAMPLE SUBSCRIPTIONS
  // =============================================================================

  const subscriptions = [
    {
      id: 'sub-001',
      clientId: 'client-001',
      clientName: 'Acme Corporation',
      clientEmail: 'admin@acme.com',
      productId: 'product-001',
      productName: 'Enterprise Suite',
      productCode: 'ENT-SUITE',
      licenseTypeId: 'license-type-001',
      licenseTypeName: 'Enterprise License',
      pricingPlanId: 'pricing-001',
      pricingPlanName: 'Annual Enterprise',
      billingCycle: 'ANNUAL',
      seats: 100,
      pricePerSeat: 500,
      subtotal: 50000,
      discountAmount: 5000,
      taxAmount: 4500,
      totalAmount: 49500,
      currency: 'INR',
      subscriptionDate: new Date('2024-01-01'),
      expirationDate: new Date('2025-01-01'),
      activationDate: new Date('2024-01-02'),
      status: 'ACTIVE' as const,
      autoRenew: true,
      paymentStatus: 'COMPLETED' as const,
    },
    {
      id: 'sub-002',
      clientId: 'client-002',
      clientName: 'TechStart Inc',
      clientEmail: 'billing@techstart.io',
      productId: 'product-001',
      productName: 'Enterprise Suite',
      productCode: 'ENT-SUITE',
      licenseTypeId: 'license-type-002',
      licenseTypeName: 'Professional License',
      pricingPlanId: 'pricing-002',
      pricingPlanName: 'Annual Professional',
      billingCycle: 'ANNUAL',
      seats: 25,
      pricePerSeat: 500,
      subtotal: 12500,
      discountAmount: 1250,
      taxAmount: 1125,
      totalAmount: 12375,
      currency: 'INR',
      subscriptionDate: new Date('2024-03-15'),
      expirationDate: new Date('2025-03-15'),
      activationDate: new Date('2024-03-16'),
      status: 'ACTIVE' as const,
      autoRenew: true,
      paymentStatus: 'COMPLETED' as const,
    },
    {
      id: 'sub-003',
      clientId: 'client-003',
      clientName: 'GlobalTrade LLC',
      clientEmail: 'it@globaltrade.com',
      productId: 'product-002',
      productName: 'Analytics Platform',
      productCode: 'ANL-PLAT',
      licenseTypeId: 'license-type-001',
      licenseTypeName: 'Enterprise License',
      pricingPlanId: 'pricing-003',
      pricingPlanName: 'Monthly Enterprise',
      billingCycle: 'MONTHLY',
      seats: 50,
      pricePerSeat: 100,
      subtotal: 5000,
      discountAmount: 0,
      taxAmount: 500,
      totalAmount: 5500,
      currency: 'INR',
      subscriptionDate: new Date('2024-06-01'),
      expirationDate: new Date('2024-07-01'),
      activationDate: new Date('2024-06-01'),
      status: 'ACTIVE' as const,
      autoRenew: true,
      paymentStatus: 'COMPLETED' as const,
    },
    {
      id: 'sub-004',
      clientId: 'client-004',
      clientName: 'StartupXYZ',
      clientEmail: 'admin@startupxyz.co',
      productId: 'product-001',
      productName: 'Enterprise Suite',
      productCode: 'ENT-SUITE',
      licenseTypeId: 'license-type-003',
      licenseTypeName: 'Starter License',
      pricingPlanId: 'pricing-004',
      pricingPlanName: 'Monthly Starter',
      billingCycle: 'MONTHLY',
      seats: 5,
      pricePerSeat: 50,
      subtotal: 250,
      discountAmount: 0,
      taxAmount: 25,
      totalAmount: 275,
      currency: 'INR',
      subscriptionDate: new Date('2024-05-01'),
      expirationDate: new Date('2024-06-01'),
      activationDate: new Date('2024-05-01'),
      status: 'EXPIRED' as const,
      autoRenew: false,
      paymentStatus: 'COMPLETED' as const,
    },
    {
      id: 'sub-005',
      clientId: 'client-005',
      clientName: 'MegaCorp Industries',
      clientEmail: 'procurement@megacorp.com',
      productId: 'product-003',
      productName: 'Security Suite',
      productCode: 'SEC-SUITE',
      licenseTypeId: 'license-type-001',
      licenseTypeName: 'Enterprise License',
      pricingPlanId: 'pricing-005',
      pricingPlanName: 'Multi-Year Enterprise',
      billingCycle: 'ANNUAL',
      seats: 500,
      pricePerSeat: 400,
      subtotal: 200000,
      discountAmount: 40000,
      taxAmount: 16000,
      totalAmount: 176000,
      currency: 'INR',
      subscriptionDate: new Date('2024-01-01'),
      expirationDate: new Date('2027-01-01'),
      activationDate: new Date('2024-01-05'),
      status: 'ACTIVE' as const,
      autoRenew: true,
      paymentStatus: 'COMPLETED' as const,
    },
  ];

  // Create subscriptions
  for (const subscription of subscriptions) {
    await prisma.clientSubscription.upsert({
      where: { id: subscription.id },
      update: subscription,
      create: subscription,
    });
    console.log(`✅ Created subscription: ${subscription.id} for ${subscription.clientName}`);
  }

  // =============================================================================
  // SAMPLE RENEWALS
  // =============================================================================

  const renewals = [
    {
      id: 'renewal-001',
      subscriptionId: 'sub-001',
      previousEndDate: new Date('2024-01-01'),
      newEndDate: new Date('2025-01-01'),
      seats: 100,
      pricePerSeat: 500,
      subtotal: 50000,
      discountAmount: 5000,
      taxAmount: 4500,
      totalAmount: 49500,
      currency: 'INR',
      status: 'COMPLETED',
      paymentStatus: 'COMPLETED' as const,
      renewedAt: new Date('2023-12-20'),
      initiatedBy: 'system',
      initiatedByName: 'System',
      isAutoRenewal: true,
    },
    {
      id: 'renewal-002',
      subscriptionId: 'sub-003',
      previousEndDate: new Date('2024-06-01'),
      newEndDate: new Date('2024-07-01'),
      seats: 50,
      pricePerSeat: 100,
      subtotal: 5000,
      discountAmount: 0,
      taxAmount: 500,
      totalAmount: 5500,
      currency: 'INR',
      status: 'COMPLETED',
      paymentStatus: 'COMPLETED' as const,
      renewedAt: new Date('2024-05-28'),
      initiatedBy: 'system',
      initiatedByName: 'System',
      isAutoRenewal: true,
    },
    {
      id: 'renewal-003',
      subscriptionId: 'sub-003',
      previousEndDate: new Date('2024-07-01'),
      newEndDate: new Date('2024-08-01'),
      seats: 50,
      pricePerSeat: 100,
      subtotal: 5000,
      discountAmount: 0,
      taxAmount: 500,
      totalAmount: 5500,
      currency: 'INR',
      status: 'PENDING',
      paymentStatus: 'PENDING' as const,
      initiatedBy: null,
      initiatedByName: null,
      isAutoRenewal: false,
    },
  ];

  // Create renewals
  for (const renewal of renewals) {
    await prisma.subscriptionRenewal.upsert({
      where: { id: renewal.id },
      update: renewal,
      create: renewal,
    });
    console.log(`✅ Created renewal: ${renewal.id} for subscription ${renewal.subscriptionId}`);
  }

  // =============================================================================
  // SAMPLE CHANGES
  // =============================================================================

  const changes = [
    {
      id: 'change-001',
      subscriptionId: 'sub-002',
      changeType: 'UPGRADE' as const,
      previousLicenseTypeId: 'license-type-003',
      previousLicenseTypeName: 'Starter License',
      previousSeats: 10,
      newLicenseTypeId: 'license-type-002',
      newLicenseTypeName: 'Professional License',
      newSeats: 25,
      proratedAmount: 8000,
      effectiveDate: new Date('2024-04-01'),
      reason: 'Team expansion',
      changedById: 'admin-001',
      changedByName: 'Admin User',
      paymentStatus: 'COMPLETED' as const,
    },
    {
      id: 'change-002',
      subscriptionId: 'sub-005',
      changeType: 'SEATS_ADDED' as const,
      previousSeats: 300,
      newSeats: 500,
      proratedAmount: 32000,
      effectiveDate: new Date('2024-03-01'),
      reason: 'Acquired new division',
      changedById: 'admin-002',
      changedByName: 'Admin User 2',
      paymentStatus: 'COMPLETED' as const,
    },
    {
      id: 'change-003',
      subscriptionId: 'sub-004',
      changeType: 'CANCELLED' as const,
      previousSeats: 5,
      newSeats: 0,
      creditAmount: 125,
      effectiveDate: new Date('2024-05-15'),
      reason: 'Business closed',
      changedById: 'admin-001',
      changedByName: 'Admin User',
      paymentStatus: 'PENDING' as const,
    },
  ];

  // Create changes
  for (const change of changes) {
    await prisma.subscriptionChange.upsert({
      where: { id: change.id },
      update: change,
      create: change,
    });
    console.log(`✅ Created change: ${change.id} (${change.changeType})`);
  }

  // =============================================================================
  // SAMPLE EXPIRATION JOBS
  // =============================================================================

  const expirationJobs = [
    {
      id: 'job-001',
      subscriptionId: 'sub-002',
      expirationDate: new Date('2025-03-15'),
      status: 'PENDING',
    },
    {
      id: 'job-002',
      subscriptionId: 'sub-003',
      expirationDate: new Date('2024-07-01'),
      reminderSentAt: new Date('2024-06-24'),
      processedAt: new Date('2024-07-01'),
      status: 'PROCESSED',
    },
  ];

  // Create expiration jobs
  for (const job of expirationJobs) {
    await prisma.subscriptionExpirationJob.upsert({
      where: { id: job.id },
      update: job,
      create: job,
    });
    console.log(`✅ Created expiration job: ${job.id}`);
  }

  console.log('\n🌱 Seed completed successfully!');
  console.log(`   - ${subscriptions.length} subscriptions`);
  console.log(`   - ${renewals.length} renewals`);
  console.log(`   - ${changes.length} changes`);
  console.log(`   - ${expirationJobs.length} expiration jobs`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
