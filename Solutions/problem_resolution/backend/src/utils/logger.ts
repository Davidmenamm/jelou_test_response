/**
 * logger.ts
 * This sets up app logging.
 */

import winston from 'winston';
import path from 'path';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    // Log errors to error.log
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error',
    }),
    // Log all to combined.log
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/combined.log'),
    }),
  ],
});

// Add console in dev mode
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

export default logger;