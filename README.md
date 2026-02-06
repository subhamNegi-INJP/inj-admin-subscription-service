# License Service Documentation

## Overview

The License Service is a microservice responsible for license lifecycle management, allocation, validation, and device tracking. It runs on port **3004** and uses PostgreSQL for data storage.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      License Service (Port 3004)                │
├─────────────────────────────────────────────────────────────────┤
│  External API (Pool Key Auth)  │  Internal API (JWT Auth)       │
│  - /api/external/licenses      │  - /api/licenses               │
│    • validate                  │    • CRUD operations           │
│    • allocate                  │  - /api/license-pools          │
│    • deallocate                │    • Pool management           │
│    • activate/deactivate       │    • Allocation management     │
└─────────────────────────────────────────────────────────────────┘
                    │                           │
                    ▼                           ▼
           ┌─────────────┐             ┌─────────────┐
           │  PostgreSQL │             │  RabbitMQ   │
           │ (license_db)│             │  (Events)   │
           └─────────────┘             └─────────────┘
```

## Database Schema

### Models

| Model | Description |
|-------|-------------|
| `LicensePool` | Groups licenses for multi-seat subscriptions |
| `License` | Individual licenses with allocation and device tracking |
| `LicenseDevice` | Devices activated for a license |
| `LicenseSession` | Active sessions for licenses |
| `LicenseAllocation` | Allocation history and current assignments |
| `LicenseActivationLog` | Audit trail for license events |
| `LicenseUsageStats` | Usage analytics and statistics |

### Denormalization Strategy

The License Service uses denormalized data to avoid cross-service queries:

```typescript
// Instead of joining with Client Service:
{
  clientId: string,      // Reference ID
  clientName: string,    // Denormalized name
  clientEmail: string,   // Denormalized email
}

// Instead of joining with Product Service:
{
  productId: string,        // Reference ID
  productName: string,      // Denormalized name
  productCode: string,      // Denormalized code
  licenseTypeId: string,    // Reference ID
  licenseTypeName: string,  // Denormalized name
}
```

## API Endpoints

### Internal API (JWT Authentication)

#### License Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/licenses` | Get all licenses (paginated) |
| `GET` | `/api/licenses/:licenseId` | Get license by ID |
| `PATCH` | `/api/licenses/:licenseId/status` | Update license status |
| `POST` | `/api/licenses/:licenseId/block` | Block a license |
| `POST` | `/api/licenses/:licenseId/unblock` | Unblock a license |
| `POST` | `/api/licenses/:licenseId/devices/:deviceId/block` | Block a device |
| `POST` | `/api/licenses/:licenseId/devices/:deviceId/unblock` | Unblock a device |

#### License Pool Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/license-pools` | Get all pools (paginated) |
| `GET` | `/api/license-pools/:poolId` | Get pool by ID |
| `POST` | `/api/license-pools` | Create new pool |
| `PUT` | `/api/license-pools/:poolId` | Update pool |
| `GET` | `/api/license-pools/:poolId/stats` | Get pool statistics |
| `GET` | `/api/license-pools/:poolId/allocations` | Get pool allocations |
| `POST` | `/api/license-pools/:poolId/allocate` | Allocate license |
| `POST` | `/api/license-pools/:poolId/deallocate` | Deallocate license |
| `POST` | `/api/license-pools/:poolId/transfer` | Transfer license |

### External API (Pool Key Authentication)

Product systems use the external API to validate and manage licenses. Authentication is via the `X-Pool-Key` header.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/external/licenses/validate` | Validate a license |
| `POST` | `/api/external/licenses/allocate` | Auto-allocate a license |
| `POST` | `/api/external/licenses/deallocate` | Deallocate a license |
| `GET` | `/api/external/licenses/pool-info` | Get pool information |
| `GET` | `/api/external/licenses/allocations` | List allocations |
| `POST` | `/api/external/licenses/activate` | Activate on device |
| `POST` | `/api/external/licenses/deactivate` | Deactivate from device |

#### External API Authentication

```http
POST /api/external/licenses/validate
X-Pool-Key: PK-1234567890ABCDEF...
Content-Type: application/json

{
  "userEmail": "employee@company.com",
  "deviceId": "device-uuid"
}
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3004` |
| `NODE_ENV` | Environment | `development` |
| `DATABASE_URL` | PostgreSQL connection URL | - |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRES_IN` | JWT token expiration | `1h` |
| `RABBITMQ_URL` | RabbitMQ connection URL | `amqp://localhost:5672` |
| `REDIS_URL` | Redis connection URL (for caching) | `redis://localhost:6379` |

### Sample `.env` file

```env
PORT=3004
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/license_db
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=1h
RABBITMQ_URL=amqp://localhost:5672
REDIS_URL=redis://localhost:6379
```

## Events

The License Service publishes events to RabbitMQ for other services to consume.

### Event Types

| Event | Description |
|-------|-------------|
| `license.created` | New license created |
| `license.allocated` | License allocated to user |
| `license.deallocated` | License deallocated from user |
| `license.activated` | License activated on device |
| `license.deactivated` | License deactivated from device |
| `license.expired` | License expired |
| `license.blocked` | License blocked |
| `pool.created` | New pool created |
| `pool.updated` | Pool configuration updated |
| `pool.expired` | Pool expired |

### Event Format

```json
{
  "eventType": "license.allocated",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "source": "license-service",
  "data": {
    "licenseId": "cuid...",
    "licenseKey": "XXXX-XXXX-XXXX-XXXX",
    "poolId": "cuid...",
    "employeeEmail": "employee@company.com",
    "employeeName": "John Doe",
    "allocatedAt": "2025-01-15T10:30:00.000Z"
  }
}
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed database
npx tsx prisma/seed.ts

# Start development server
npm run dev
```

### Build

```bash
# Build TypeScript
npm run build

# Start production server
npm start
```

### Docker

```bash
# Development
docker-compose -f docker-compose.dev.yml up

# Production
docker-compose up
```

## API Examples

### Validate License (External API)

```bash
curl -X POST http://localhost:3004/api/external/licenses/validate \
  -H "X-Pool-Key: PK-YOUR-POOL-KEY" \
  -H "Content-Type: application/json" \
  -d '{"userEmail": "employee@company.com"}'
```

Response:
```json
{
  "success": true,
  "data": {
    "valid": true,
    "license": {
      "id": "cuid...",
      "licenseKey": "XXXX-XXXX-XXXX-XXXX",
      "status": "ACTIVE",
      "userName": "John Doe",
      "userEmail": "employee@company.com",
      "expirationDate": "2026-01-15T00:00:00.000Z",
      "features": ["sso", "audit-logs"]
    },
    "pool": {
      "totalSeats": 50,
      "allocatedSeats": 25,
      "availableSeats": 25,
      "expirationDate": "2026-01-15T00:00:00.000Z"
    }
  }
}
```

### Allocate License (External API)

```bash
curl -X POST http://localhost:3004/api/external/licenses/allocate \
  -H "X-Pool-Key: PK-YOUR-POOL-KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "userEmail": "newemployee@company.com",
    "userName": "Jane Smith",
    "department": "Engineering"
  }'
```

### Create Pool (Internal API)

```bash
curl -X POST http://localhost:3004/api/license-pools \
  -H "Authorization: Bearer YOUR-JWT-TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "client-123",
    "clientName": "Acme Corp",
    "subscriptionId": "sub-456",
    "productId": "prod-789",
    "productName": "SuperAdmin Pro",
    "productCode": "SA-PRO",
    "licenseTypeId": "lt-001",
    "licenseTypeName": "Professional",
    "totalSeats": 25,
    "expirationDate": "2026-01-15T00:00:00.000Z"
  }'
```

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `POOL_NOT_FOUND` | 404 | Pool not found |
| `POOL_INACTIVE` | 403 | Pool is inactive |
| `POOL_EXPIRED` | 403 | Pool has expired |
| `NO_AVAILABLE_SEATS` | 400 | No available seats in pool |
| `LICENSE_NOT_FOUND` | 404 | License not found |
| `LICENSE_INACTIVE` | 403 | License is inactive |
| `LICENSE_EXPIRED` | 403 | License has expired |
| `DEVICE_LIMIT_EXCEEDED` | 400 | Device limit exceeded |
| `UNAUTHORIZED` | 401 | Invalid or missing authentication |

## Rate Limiting

The external API has rate limiting to prevent abuse:

- **Default**: 1000 requests per minute per pool key
- **Burst**: Up to 100 requests in a 10-second window

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1642248000
```

## Security

### Authentication

1. **Internal API**: JWT tokens issued by Identity Service
2. **External API**: Pool keys stored as hashed values

### Data Protection

- License keys are hashed for secure validation
- Pool keys are hashed using SHA-256
- Sensitive data is not logged

### Best Practices

- Rotate pool keys periodically
- Use HTTPS in production
- Store keys in environment variables, not code
- Monitor for unusual validation patterns
