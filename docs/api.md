# Subscription Service API

Complete API reference for the Subscription Service.

## Base URL

```
http://localhost:3005/api
```

## Authentication

All endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error message",
  "details": [ ... ]
}
```

---

## Subscriptions

### List All Subscriptions

```http
GET /subscriptions
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 20) |
| status | string | Filter by status |
| clientId | string | Filter by client |
| productId | string | Filter by product |

**Response:**

```json
{
  "success": true,
  "data": {
    "subscriptions": [
      {
        "id": "sub-001",
        "clientId": "client-001",
        "clientName": "Acme Corporation",
        "clientEmail": "admin@acme.com",
        "productId": "product-001",
        "productName": "Enterprise Suite",
        "productCode": "ENT-SUITE",
        "licenseTypeId": "license-type-001",
        "licenseTypeName": "Enterprise License",
        "seats": 100,
        "totalAmount": 49500,
        "currency": "USD",
        "billingCycle": "ANNUAL",
        "startDate": "2024-01-01T00:00:00Z",
        "endDate": "2025-01-01T00:00:00Z",
        "status": "ACTIVE",
        "autoRenew": true
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8
    }
  }
}
```

---

### Get Subscription by ID

```http
GET /subscriptions/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "sub-001",
    "clientId": "client-001",
    "clientName": "Acme Corporation",
    "clientEmail": "admin@acme.com",
    "productId": "product-001",
    "productName": "Enterprise Suite",
    "productCode": "ENT-SUITE",
    "licenseTypeId": "license-type-001",
    "licenseTypeName": "Enterprise License",
    "pricingPlanId": "pricing-001",
    "pricingPlanName": "Annual Enterprise",
    "seats": 100,
    "basePrice": 50000,
    "discount": 5000,
    "tax": 4500,
    "totalAmount": 49500,
    "currency": "USD",
    "billingCycle": "ANNUAL",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2025-01-01T00:00:00Z",
    "status": "ACTIVE",
    "autoRenew": true,
    "paymentStatus": "COMPLETED",
    "activatedAt": "2024-01-02T10:00:00Z",
    "renewals": [ ... ],
    "changes": [ ... ]
  }
}
```

---

### Create Subscription

```http
POST /subscriptions
```

**Request Body:**

```json
{
  "clientId": "client-001",
  "clientName": "Acme Corporation",
  "clientEmail": "admin@acme.com",
  "productId": "product-001",
  "productName": "Enterprise Suite",
  "productCode": "ENT-SUITE",
  "licenseTypeId": "license-type-001",
  "licenseTypeName": "Enterprise License",
  "pricingPlanId": "pricing-001",
  "pricingPlanName": "Annual Enterprise",
  "seats": 100,
  "basePrice": 50000,
  "discount": 5000,
  "billingCycle": "ANNUAL",
  "startDate": "2024-01-01",
  "endDate": "2025-01-01",
  "autoRenew": true
}
```

**Required Fields:**
- clientId, clientName, clientEmail
- productId, productName, productCode
- licenseTypeId, licenseTypeName
- pricingPlanId, pricingPlanName
- seats
- startDate, endDate
- billingCycle

**Response:** `201 Created`

```json
{
  "success": true,
  "data": {
    "id": "sub-new-001",
    "status": "PENDING",
    "paymentStatus": "PENDING",
    ...
  },
  "message": "Subscription created successfully"
}
```

---

### Update Subscription

```http
PUT /subscriptions/:id
```

**Request Body:**

```json
{
  "autoRenew": false,
  "notes": "Updated subscription notes"
}
```

**Response:**

```json
{
  "success": true,
  "data": { ... },
  "message": "Subscription updated successfully"
}
```

---

### Delete Subscription

```http
DELETE /subscriptions/:id
```

**Note:** Only PENDING subscriptions can be deleted.

**Response:**

```json
{
  "success": true,
  "message": "Subscription deleted successfully"
}
```

---

### Activate Subscription

```http
POST /subscriptions/:id/activate
```

Activates a pending subscription after payment is confirmed.

**Request Body:**

```json
{
  "paymentReference": "PAY-12345",
  "activatedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "sub-001",
    "status": "ACTIVE",
    "paymentStatus": "COMPLETED",
    "activatedAt": "2024-01-02T10:00:00Z"
  },
  "message": "Subscription activated successfully"
}
```

---

### Get Subscription Statistics

```http
GET /subscriptions/stats
```

**Response:**

```json
{
  "success": true,
  "data": {
    "total": 1500,
    "byStatus": {
      "ACTIVE": 1200,
      "PENDING": 50,
      "EXPIRED": 200,
      "CANCELLED": 50
    },
    "totalRevenue": 5000000,
    "averageSeats": 25,
    "expiringThisMonth": 45
  }
}
```

---

## Renewals

### Renew Subscription

```http
POST /subscriptions/:id/renew
```

**Request Body:**

```json
{
  "newEndDate": "2026-01-01",
  "basePrice": 50000,
  "discount": 7500,
  "processedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "renewalId": "renewal-001",
    "subscriptionId": "sub-001",
    "renewalNumber": 2,
    "previousEndDate": "2025-01-01T00:00:00Z",
    "newEndDate": "2026-01-01T00:00:00Z",
    "totalAmount": 47250,
    "status": "PENDING"
  },
  "message": "Subscription renewal initiated"
}
```

---

### Get Subscription Renewals

```http
GET /subscriptions/:id/renewals
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "renewal-001",
      "renewalNumber": 1,
      "previousEndDate": "2024-01-01T00:00:00Z",
      "newEndDate": "2025-01-01T00:00:00Z",
      "totalAmount": 49500,
      "status": "COMPLETED",
      "processedAt": "2023-12-20T10:00:00Z"
    }
  ]
}
```

---

### Complete Renewal

```http
POST /renewals/:renewalId/complete
```

**Request Body:**

```json
{
  "paymentReference": "PAY-67890",
  "completedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "renewal-001",
    "status": "COMPLETED",
    "paymentStatus": "COMPLETED",
    "processedAt": "2024-12-20T10:00:00Z"
  },
  "message": "Renewal completed successfully"
}
```

---

### List All Renewals

```http
GET /renewals
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number |
| limit | number | Items per page |
| status | string | Filter by status |

---

## Changes

### Upgrade Subscription

```http
POST /subscriptions/:id/upgrade
```

Upgrade to a higher license tier.

**Request Body:**

```json
{
  "newLicenseTypeId": "license-type-001",
  "newLicenseTypeName": "Enterprise License",
  "effectiveDate": "2024-06-01",
  "reason": "Business growth",
  "processedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "changeId": "change-001",
    "changeType": "UPGRADE",
    "previousLicenseTypeName": "Professional License",
    "newLicenseTypeName": "Enterprise License",
    "proratedAmount": 15000,
    "effectiveDate": "2024-06-01T00:00:00Z"
  },
  "message": "Subscription upgraded successfully"
}
```

---

### Downgrade Subscription

```http
POST /subscriptions/:id/downgrade
```

Downgrade to a lower license tier.

**Request Body:**

```json
{
  "newLicenseTypeId": "license-type-003",
  "newLicenseTypeName": "Starter License",
  "effectiveDate": "2024-06-01",
  "reason": "Cost reduction",
  "processedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "changeId": "change-002",
    "changeType": "DOWNGRADE",
    "creditAmount": 8000,
    "effectiveDate": "2024-06-01T00:00:00Z"
  },
  "message": "Subscription downgraded successfully"
}
```

---

### Add Seats

```http
POST /subscriptions/:id/add-seats
```

**Request Body:**

```json
{
  "additionalSeats": 25,
  "reason": "New department",
  "processedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "changeId": "change-003",
    "changeType": "SEATS_ADDED",
    "previousSeats": 100,
    "newSeats": 125,
    "proratedAmount": 12500
  },
  "message": "Seats added successfully"
}
```

---

### Remove Seats

```http
POST /subscriptions/:id/remove-seats
```

**Request Body:**

```json
{
  "seatsToRemove": 10,
  "reason": "Team restructuring",
  "processedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "changeId": "change-004",
    "changeType": "SEATS_REMOVED",
    "previousSeats": 125,
    "newSeats": 115,
    "creditAmount": 5000
  },
  "message": "Seats removed successfully"
}
```

---

### Cancel Subscription

```http
POST /subscriptions/:id/cancel
```

**Request Body:**

```json
{
  "reason": "Switching to competitor",
  "effectiveDate": "2024-06-30",
  "processedBy": "admin-001"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "changeId": "change-005",
    "changeType": "CANCELLATION",
    "status": "CANCELLED",
    "cancelledAt": "2024-06-01T10:00:00Z",
    "effectiveDate": "2024-06-30T00:00:00Z",
    "creditAmount": 25000
  },
  "message": "Subscription cancelled successfully"
}
```

---

### Get Subscription Changes

```http
GET /subscriptions/:id/changes
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "change-001",
      "changeType": "UPGRADE",
      "previousLicenseTypeName": "Professional License",
      "newLicenseTypeName": "Enterprise License",
      "previousSeats": 50,
      "newSeats": 50,
      "proratedAmount": 15000,
      "effectiveDate": "2024-06-01T00:00:00Z",
      "reason": "Business growth",
      "createdAt": "2024-05-15T10:00:00Z"
    }
  ]
}
```

---

### List All Changes

```http
GET /changes
```

Get all subscription changes across all subscriptions.

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number |
| limit | number | Items per page |
| changeType | string | Filter by type |

---

## Health Check

```http
GET /health
```

**Response:**

```json
{
  "status": "ok",
  "service": "subscription-service",
  "timestamp": "2024-01-15T10:00:00Z"
}
```

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Missing/invalid token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found |
| 409 | Conflict - Business rule violation |
| 500 | Internal Server Error |

---

## Rate Limiting

- 1000 requests per minute per IP
- 429 Too Many Requests when exceeded
