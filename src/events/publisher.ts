// Subscription Service Events
// Publishes subscription-related events to RabbitMQ

import amqp from 'amqplib';
import { config } from '../config';

// =============================================================================
// EVENT TYPES
// =============================================================================

export interface SubscriptionEvent {
  eventType: string;
  timestamp: string;
  source: string;
  data: Record<string, unknown>;
}

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

// =============================================================================
// EVENT PUBLISHER
// =============================================================================

class EventPublisher {
  private connection: amqp.ChannelModel | null = null;
  private channel: amqp.Channel | null = null;
  private isConnected: boolean = false;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private reconnectDelay: number = 5000;

  private readonly exchangeName = 'subscription_events';
  private readonly exchangeType = 'topic';

  async connect(): Promise<void> {
    if (this.isConnected) return;

    try {
      const rabbitUrl = config.rabbitmq?.url || process.env.RABBITMQ_URL || 'amqp://localhost:5672';
      
      this.connection = await amqp.connect(rabbitUrl);
      this.channel = await this.connection.createChannel();

      await this.channel.assertExchange(this.exchangeName, this.exchangeType, {
        durable: true,
      });

      this.isConnected = true;
      this.reconnectAttempts = 0;
      
      console.log('📨 Connected to RabbitMQ');

      this.connection.on('close', () => {
        console.log('📨 RabbitMQ connection closed');
        this.isConnected = false;
        this.handleReconnect();
      });

      this.connection.on('error', (err: Error) => {
        console.error('📨 RabbitMQ connection error:', err.message);
        this.isConnected = false;
      });

    } catch (error) {
      console.error('📨 Failed to connect to RabbitMQ:', error);
      this.handleReconnect();
    }
  }

  private handleReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('📨 Max reconnection attempts reached');
      return;
    }

    this.reconnectAttempts++;
    console.log(`📨 Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
    
    setTimeout(() => {
      this.connect();
    }, this.reconnectDelay * this.reconnectAttempts);
  }

  async publish(event: SubscriptionEventType): Promise<boolean> {
    const fullEvent: SubscriptionEvent = {
      eventType: event.eventType,
      timestamp: new Date().toISOString(),
      source: 'subscription-service',
      data: event as unknown as Record<string, unknown>,
    };

    const routingKey = event.eventType.replace('.', '_');

    if (!this.isConnected || !this.channel) {
      console.warn('📨 RabbitMQ not connected. Event queued:', event.eventType);
      return false;
    }

    try {
      const message = Buffer.from(JSON.stringify(fullEvent));
      
      this.channel.publish(
        this.exchangeName,
        routingKey,
        message,
        {
          persistent: true,
          contentType: 'application/json',
          timestamp: Date.now(),
        }
      );

      console.log(`📨 Published event: ${event.eventType}`);
      return true;
    } catch (error) {
      console.error('📨 Failed to publish event:', error);
      return false;
    }
  }

  async disconnect(): Promise<void> {
    if (this.channel) {
      await this.channel.close();
      this.channel = null;
    }
    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
    this.isConnected = false;
    console.log('📨 Disconnected from RabbitMQ');
  }

  isReady(): boolean {
    return this.isConnected;
  }
}

export const eventPublisher = new EventPublisher();

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export async function publishSubscriptionCreated(data: Omit<SubscriptionCreatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.created', ...data });
}

export async function publishSubscriptionActivated(data: Omit<SubscriptionActivatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.activated', ...data });
}

export async function publishSubscriptionRenewed(data: Omit<SubscriptionRenewedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.renewed', ...data });
}

export async function publishSubscriptionCancelled(data: Omit<SubscriptionCancelledEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.cancelled', ...data });
}

export async function publishSubscriptionUpgraded(data: Omit<SubscriptionUpgradedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.upgraded', ...data });
}

export async function publishSubscriptionDowngraded(data: Omit<SubscriptionDowngradedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.downgraded', ...data });
}

export async function publishSubscriptionExpiring(data: Omit<SubscriptionExpiringEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.expiring', ...data });
}

export async function publishSubscriptionExpired(data: Omit<SubscriptionExpiredEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.expired', ...data });
}

export async function publishSeatsAdded(data: Omit<SeatsAddedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.seats_added', ...data });
}

export async function publishSeatsRemoved(data: Omit<SeatsRemovedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'subscription.seats_removed', ...data });
}

export default eventPublisher;
