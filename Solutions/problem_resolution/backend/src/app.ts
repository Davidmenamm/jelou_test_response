/**
 * app.ts
 * This file sets up the Express app.
 */

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import env from './config/config';
import scoreRoutes from './routes/scoreRoutes';
import addRequestId from './middleware/requestId';
import logger from './utils/logger';

const app = express();

// Add request ID to each request
app.use(addRequestId);


app.use(express.json());

// Log all requests
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info('Incoming request', {
    method: req.method,
    path: req.path,
    requestId: (req as any).id,
    body: req.body,
  });
  next();
});

// Enable CORS and parse requests
app.use(cors({
  origin: 'http://localhost:3002', // Your React app’s origin
  methods: ['GET', 'POST', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type'], // Allowed headers
}));
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use(`/api/${env.apiVersion}`, scoreRoutes);

// Handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    requestId: (req as any).id,
  });
  res.status(500).json({ error: 'Something broke!' });
});

export default app;