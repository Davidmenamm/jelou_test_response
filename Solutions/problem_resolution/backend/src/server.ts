/**
 * server.ts
 * This file starts the server.
 */

import app from './app';
import env from './config/config';
import logger from './utils/logger';

const startServer = () => {
  try {
    const server = app.listen(env.port, () => {
      logger.info('Server started successfully', {
        environment: env.nodeEnv,
        port: env.port,
        apiVersion: env.apiVersion,
        url: `http://localhost:${env.port}/api/${env.apiVersion}`,
      });

      (console.log(`http://localhost:${env.port}/api/${env.apiVersion}`))

      logger.info(`
                Server Information:
                ------------------
                Environment: ${env.nodeEnv}
                Port: ${env.port}
                API Version: ${env.apiVersion}
                URL: http://localhost:${env.port}/api/${env.apiVersion}
            `);
    });

    // Handle server errors
    server.on('error', (error: Error) => {
      logger.error('Server error occurred', {
        error: error.message,
        stack: error.stack,
        code: (error as any).code,
      });
      process.exit(1);
    });
  } catch (error) {
    logger.error('Failed to start server', {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (error: Error) => {
  logger.error('Unhandled Rejection', {
    error: error.message,
    stack: error.stack,
  });
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception', {
    error: error.message,
    stack: error.stack,
  });
  process.exit(1);
});

// Handle SIGTERM
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

startServer();