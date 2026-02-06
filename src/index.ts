// Subscription Service Entry Point
// Port 3005 - Subscription lifecycle, renewals, upgrades/downgrades

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

import { config } from './config';
import { errorHandler } from './middleware/errorHandler';

// Import routes
import subscriptionRoutes from './routes/subscription.routes';
import renewalRoutes from './routes/renewal.routes';
import changeRoutes from './routes/change.routes';
import addonRoutes from './routes/addon.routes';
import jobsRoutes from './routes/jobs.routes';

// Initialize Express app
const app: Express = express();

// =============================================================================
// MIDDLEWARE
// =============================================================================

// Security headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

// CORS configuration
app.use(cors({
  origin: config.cors.origin,
  credentials: config.cors.credentials,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
}));

// Compression
app.use(compression());

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parsing
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  message: { 
    success: false, 
    error: 'Too many requests, please try again later.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api', limiter);

// =============================================================================
// HEALTH CHECK
// =============================================================================

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    service: config.serviceName,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0',
  });
});

// =============================================================================
// API ROUTES
// =============================================================================

// Subscription management
app.use('/api/subscriptions', subscriptionRoutes);

// Addon management (subscriptions/:subscriptionId/addons and /addons/:id)
app.use('/api/subscriptions', addonRoutes);
app.use('/api/addons', addonRoutes);

// Renewal management (also accessible via subscription routes)
app.use('/api/renewals', renewalRoutes);

// Change history (also accessible via subscription routes)
app.use('/api/changes', changeRoutes);

// Background jobs
app.use('/api/jobs', jobsRoutes);

// =============================================================================
// ERROR HANDLING
// =============================================================================

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.path,
    method: req.method,
  });
});

// Global error handler
app.use(errorHandler);

// =============================================================================
// SERVER STARTUP
// =============================================================================

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║              SUBSCRIPTION SERVICE STARTED                      ║
╠═══════════════════════════════════════════════════════════════╣
║  Port:        ${PORT}                                           ║
║  Environment: ${config.nodeEnv.padEnd(43)}║
║  Health:      http://localhost:${PORT}/health                   ║
╠═══════════════════════════════════════════════════════════════╣
║  Endpoints:                                                    ║
║  - GET    /api/subscriptions                                   ║
║  - POST   /api/subscriptions                                   ║
║  - GET    /api/subscriptions/:id                               ║
║  - PUT    /api/subscriptions/:id                               ║
║  - DELETE /api/subscriptions/:id                               ║
║  - POST   /api/subscriptions/:id/renew                         ║
║  - POST   /api/subscriptions/:id/upgrade                       ║
║  - POST   /api/subscriptions/:id/downgrade                     ║
║  - POST   /api/subscriptions/:id/add-seats                     ║
║  - POST   /api/subscriptions/:id/cancel                        ║
╚═══════════════════════════════════════════════════════════════╝
  `);
});

export default app;
