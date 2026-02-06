// Subscription Service Type Definitions

import { Request } from 'express';

// =============================================================================
// JWT & AUTH TYPES
// =============================================================================

export interface JWTPayload {
  userId: string;
  email: string;
  roleName?: string;
  roleId?: string;
  role?: string; // For internal service calls
  isInternal?: boolean; // True for service-to-service calls
  permissions?: Array<{
    resourceCode: string;
    action: string;
  }>;
  iat?: number;
  exp?: number;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
  userId?: string;
  userType?: 'user' | 'client' | 'internal-service';
  internalService?: string; // Name of calling service for internal calls
}

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: ValidationError[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export interface ValidationError {
  field: string;
  message: string;
}

// =============================================================================
// SUBSCRIPTION TYPES
// =============================================================================

export type SubscriptionStatus = 
  | 'PENDING'
  | 'ACTIVE'
  | 'EXPIRED'
  | 'CANCELLED'
  | 'SUSPENDED'
  | 'GRACE_PERIOD';

export type PaymentStatus = 
  | 'PENDING'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'FAILED'
  | 'REFUNDED'
  | 'CANCELLED';

export type SubscriptionChangeType = 
  | 'ACTIVATION'
  | 'UPGRADE'
  | 'DOWNGRADE'
  | 'SEATS_ADDED'
  | 'SEATS_REMOVED'
  | 'DURATION_EXTENDED'
  | 'CANCELLED'
  | 'RENEWED';

// =============================================================================
// CREATE SUBSCRIPTION REQUEST
// =============================================================================

export interface CreateSubscriptionRequest {
  // Client info (denormalized)
  clientId: string;
  clientName: string;
  clientEmail?: string;
  
  // Product info (denormalized)
  productId: string;
  productName: string;
  productCode: string;
  
  // License type info (denormalized)
  licenseTypeId: string;
  licenseTypeName: string;
  
  // Pricing plan info (denormalized) - optional for custom pricing
  pricingPlanId?: string;
  pricingPlanName?: string;
  billingCycle?: string;
  
  // Custom pricing flag (for Enterprise plans)
  isCustomPricing?: boolean;
  
  // Subscription details
  name?: string;
  seats: number;
  pricePerSeat: number;
  expirationDate: string;
  gracePeriodDays?: number;
  
  // Features
  availableFeatures?: string[];
  selectedFeatures?: string[];
  
  // Discount
  discountPercent?: number;
  couponId?: string;
  couponCode?: string;
  couponDiscount?: number;
  
  // Tax
  gstin?: string;
  taxPercent?: number;
  
  // Order reference
  orderId?: string;
  orderItemId?: string;
  
  // Auto-renewal
  autoRenew?: boolean;
}

// =============================================================================
// UPDATE SUBSCRIPTION REQUEST
// =============================================================================

export interface UpdateSubscriptionRequest {
  name?: string;
  selectedFeatures?: string[];
  autoRenew?: boolean;
  gracePeriodDays?: number;
  status?: SubscriptionStatus;
}

// =============================================================================
// RENEWAL REQUEST
// =============================================================================

export interface RenewSubscriptionRequest {
  durationMonths?: number;
  pricePerSeat?: number;
  discountPercent?: number;
  couponCode?: string;
  paymentId?: string;
  initiatedBy?: string;
  initiatedByName?: string;
}

// =============================================================================
// UPGRADE/DOWNGRADE REQUEST
// =============================================================================

export interface UpgradeSubscriptionRequest {
  newLicenseTypeId: string;
  newLicenseTypeName: string;
  newPricePerSeat: number;
  effectiveDate?: string;
  reason?: string;
  notes?: string;
  changedById?: string;
  changedByName?: string;
}

export interface DowngradeSubscriptionRequest {
  newLicenseTypeId: string;
  newLicenseTypeName: string;
  newPricePerSeat: number;
  effectiveDate?: string;
  reason?: string;
  notes?: string;
  changedById?: string;
  changedByName?: string;
}

// =============================================================================
// ADD/REMOVE SEATS REQUEST
// =============================================================================

export interface AddSeatsRequest {
  additionalSeats: number;
  pricePerSeat?: number;
  reason?: string;
  changedById?: string;
  changedByName?: string;
}

export interface RemoveSeatsRequest {
  seatsToRemove: number;
  reason?: string;
  changedById?: string;
  changedByName?: string;
}

// =============================================================================
// CANCEL SUBSCRIPTION REQUEST
// =============================================================================

export interface CancelSubscriptionRequest {
  reason?: string;
  cancelledById?: string;
  cancelledByName?: string;
  effectiveImmediately?: boolean;
}

// =============================================================================
// SUBSCRIPTION RESPONSE TYPES
// =============================================================================

export interface SubscriptionSummary {
  id: string;
  clientId: string;
  clientName: string;
  productId: string;
  productName: string;
  productCode: string;
  licenseTypeName: string;
  seats: number;
  status: SubscriptionStatus;
  paymentStatus: PaymentStatus;
  subscriptionDate: Date;
  expirationDate: Date;
  totalAmount: number;
  autoRenew: boolean;
}

export interface SubscriptionDetails extends SubscriptionSummary {
  clientEmail?: string;
  licenseTypeId: string;
  pricingPlanId: string;
  pricingPlanName?: string;
  billingCycle: string;
  name?: string;
  availableFeatures: string[];
  selectedFeatures: string[];
  activationDate?: Date;
  gracePeriodDays: number;
  pricePerSeat: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  couponCode?: string;
  couponDiscount: number;
  taxPercent: number;
  taxAmount: number;
  currency: string;
  paymentId?: string;
  renewalRemindedAt?: Date;
  nextRenewalDate?: Date;
  licensePoolId?: string;
  cancelledAt?: Date;
  cancelReason?: string;
  renewals: RenewalSummary[];
  changes: ChangeSummary[];
}

export interface RenewalSummary {
  id: string;
  previousEndDate: Date;
  newEndDate: Date;
  totalAmount: number;
  status: string;
  isAutoRenewal: boolean;
  renewedAt: Date;
}

export interface ChangeSummary {
  id: string;
  changeType: SubscriptionChangeType;
  previousSeats?: number;
  newSeats?: number;
  previousLicenseTypeName?: string;
  newLicenseTypeName?: string;
  proratedAmount?: number;
  effectiveDate: Date;
  changedByName?: string;
  createdAt: Date;
}

// =============================================================================
// EVENT TYPES
// =============================================================================

export interface SubscriptionCreatedEvent {
  eventType: 'subscription.created';
  subscriptionId: string;
  clientId: string;
  productId: string;
  seats: number;
  totalAmount: number;
}

export interface SubscriptionActivatedEvent {
  eventType: 'subscription.activated';
  subscriptionId: string;
  clientId: string;
  productId: string;
  activatedAt: string;
}

export interface SubscriptionRenewedEvent {
  eventType: 'subscription.renewed';
  subscriptionId: string;
  renewalId: string;
  previousEndDate: string;
  newEndDate: string;
  totalAmount: number;
}

export interface SubscriptionCancelledEvent {
  eventType: 'subscription.cancelled';
  subscriptionId: string;
  clientId: string;
  productId: string;
  reason?: string;
  cancelledAt: string;
}

export interface SubscriptionUpgradedEvent {
  eventType: 'subscription.upgraded';
  subscriptionId: string;
  changeId: string;
  previousLicenseTypeId: string;
  newLicenseTypeId: string;
  proratedAmount?: number;
}

export interface SubscriptionDowngradedEvent {
  eventType: 'subscription.downgraded';
  subscriptionId: string;
  changeId: string;
  previousLicenseTypeId: string;
  newLicenseTypeId: string;
  creditAmount?: number;
}

export interface SubscriptionExpiringEvent {
  eventType: 'subscription.expiring';
  subscriptionId: string;
  clientId: string;
  productId: string;
  expirationDate: string;
  daysRemaining: number;
}

export interface SubscriptionExpiredEvent {
  eventType: 'subscription.expired';
  subscriptionId: string;
  clientId: string;
  productId: string;
  expiredAt: string;
}

export interface SeatsAddedEvent {
  eventType: 'subscription.seats_added';
  subscriptionId: string;
  previousSeats: number;
  newSeats: number;
  additionalSeats: number;
}

export interface SeatsRemovedEvent {
  eventType: 'subscription.seats_removed';
  subscriptionId: string;
  previousSeats: number;
  newSeats: number;
  removedSeats: number;
}

export type SubscriptionEventType =
  | SubscriptionCreatedEvent
  | SubscriptionActivatedEvent
  | SubscriptionRenewedEvent
  | SubscriptionCancelledEvent
  | SubscriptionUpgradedEvent
  | SubscriptionDowngradedEvent
  | SubscriptionExpiringEvent
  | SubscriptionExpiredEvent
  | SeatsAddedEvent
  | SeatsRemovedEvent;
