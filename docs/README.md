# Subscription Service

A microservice for managing client subscriptions, renewals, upgrades, downgrades, and seat management.

## Overview

The Subscription Service is responsible for the complete subscription lifecycle:

- **Creating** new subscriptions when clients purchase products
- **Activating** subscriptions after successful payment
- **Renewing** subscriptions (manual and auto-renewal)
- **Upgrading/Downgrading** license types
- **Adding/Removing** seats
- **Cancelling** subscriptions
- **Tracking** subscription changes and history

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   Subscription Service                       │
│                        Port 3005                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ Subscription│  │   Renewal   │  │       Change        │  │
│  │  Controller │  │  Controller │  │     Controller      │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
│         │                │                     │             │
│         └────────────────┼─────────────────────┘             │
│                          │                                   │
│                    ┌─────▼─────┐                            │
│                    │   Prisma  │                            │
│                    │    ORM    │                            │
│                    └─────┬─────┘                            │
│                          │                                   │
│                    ┌─────▼─────┐                            │
│                    │PostgreSQL │                            │
│                    │subscription_db│                        │
│                    └───────────┘                            │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Component | Technology |
|-----------|------------|
| Runtime | Node.js 20+ |
| Framework | Express.js |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Message Queue | RabbitMQ |
| Authentication | JWT |
| Validation | express-validator |

## Data Models

### ClientSubscription

The main subscription entity with denormalized client and product data.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Unique identifier (UUID) |
| clientId | String | Reference to client |
| clientName | String | Cached client name |
| clientEmail | String | Cached client email |
| productId | String | Reference to product |
| productName | String | Cached product name |
| productCode | String | Cached product code |
| licenseTypeId | String | Reference to license type |
| licenseTypeName | String | Cached license type name |
| pricingPlanId | String | Reference to pricing plan |
| pricingPlanName | String | Cached pricing plan name |
| seats | Int | Number of licensed seats |
| basePrice | Decimal | Base price before discounts |
| discount | Decimal | Discount amount |
| tax | Decimal | Tax amount |
| totalAmount | Decimal | Final total amount |
| currency | String | Currency code (USD, EUR, etc.) |
| billingCycle | String | MONTHLY, QUARTERLY, ANNUAL, etc. |
| startDate | DateTime | Subscription start date |
| endDate | DateTime | Subscription end date |
| status | Enum | PENDING, ACTIVE, EXPIRED, CANCELLED, SUSPENDED, GRACE_PERIOD |
| autoRenew | Boolean | Auto-renewal enabled |
| paymentStatus | Enum | PENDING, PROCESSING, COMPLETED, FAILED, REFUNDED |

### SubscriptionRenewal

Tracks renewal history for each subscription.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Unique identifier |
| subscriptionId | String | Parent subscription |
| renewalNumber | Int | Sequential renewal number |
| previousEndDate | DateTime | End date before renewal |
| newEndDate | DateTime | New end date after renewal |
| totalAmount | Decimal | Renewal amount |
| status | Enum | PENDING, COMPLETED, FAILED |

### SubscriptionChange

Audit trail for all subscription modifications.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Unique identifier |
| subscriptionId | String | Parent subscription |
| changeType | Enum | UPGRADE, DOWNGRADE, SEATS_ADDED, SEATS_REMOVED, CANCELLATION, REACTIVATION |
| previousLicenseTypeId | String? | Previous license type |
| newLicenseTypeId | String? | New license type |
| previousSeats | Int | Seats before change |
| newSeats | Int | Seats after change |
| proratedAmount | Decimal? | Amount due for upgrades |
| creditAmount | Decimal? | Credit for downgrades |
| effectiveDate | DateTime | When change takes effect |
| reason | String? | Reason for change |

## Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL 14+
- RabbitMQ 3.x

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database (optional)
npm run db:seed

# Start development server
npm run dev
```

### Environment Variables

```env
# Server
PORT=3005
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/subscription_db"

# JWT (shared with Identity Service)
JWT_SECRET=your-jwt-secret

# RabbitMQ
RABBITMQ_URL=amqp://localhost:5672
```

## API Endpoints

See [api.md](./api.md) for complete API documentation.

### Quick Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/subscriptions | List all subscriptions |
| POST | /api/subscriptions | Create subscription |
| GET | /api/subscriptions/:id | Get subscription by ID |
| PUT | /api/subscriptions/:id | Update subscription |
| DELETE | /api/subscriptions/:id | Delete subscription |
| POST | /api/subscriptions/:id/activate | Activate subscription |
| POST | /api/subscriptions/:id/renew | Renew subscription |
| POST | /api/subscriptions/:id/upgrade | Upgrade license type |
| POST | /api/subscriptions/:id/downgrade | Downgrade license type |
| POST | /api/subscriptions/:id/add-seats | Add seats |
| POST | /api/subscriptions/:id/remove-seats | Remove seats |
| POST | /api/subscriptions/:id/cancel | Cancel subscription |
| GET | /api/subscriptions/stats | Get subscription statistics |

## Events

The service publishes the following events to RabbitMQ:

| Event | Trigger |
|-------|---------|
| `subscription.created` | New subscription created |
| `subscription.activated` | Subscription activated |
| `subscription.renewed` | Subscription renewed |
| `subscription.cancelled` | Subscription cancelled |
| `subscription.upgraded` | License type upgraded |
| `subscription.downgraded` | License type downgraded |
| `subscription.seats_added` | Seats added |
| `subscription.seats_removed` | Seats removed |
| `subscription.expiring` | Subscription expiring soon (7, 3, 1 days) |
| `subscription.expired` | Subscription expired |

## Docker

### Development

```bash
docker-compose -f docker-compose.dev.yml up
```

### Production

```bash
docker build -t subscription-service .
docker run -p 3005:3005 subscription-service
```

## Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage
```

## Project Structure

```
subscription-service/
├── docs/                    # Documentation
├── prisma/
│   ├── schema.prisma       # Database schema
│   ├── seed.ts             # Seed data
│   └── migrations/         # Database migrations
├── src/
│   ├── index.ts            # Application entry point
│   ├── config/             # Configuration
│   ├── controllers/        # Request handlers
│   │   ├── subscription.controller.ts
│   │   ├── renewal.controller.ts
│   │   └── change.controller.ts
│   ├── events/             # Event publishing
│   ├── middleware/         # Express middleware
│   ├── routes/             # Route definitions
│   ├── types/              # TypeScript types
│   └── utils/              # Utilities
├── package.json
├── tsconfig.json
└── Dockerfile
```

## Related Services

| Service | Port | Purpose |
|---------|------|---------|
| Identity Service | 3001 | Authentication & users |
| Product Service | 3002 | Products & pricing |
| License Service | 3004 | License pools & keys |
| **Subscription Service** | **3005** | **Subscriptions & renewals** |
| Support Service | 3006 | Tickets & support |
