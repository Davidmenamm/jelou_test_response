/**
 * config.ts
 * This file loads environment settings.
 */

import * as dotenv from 'dotenv';

dotenv.config();

// Check required env vars
const validateEnv = (required: string[]) => {
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

const requiredEnvVars = ['PORT', 'NODE_ENV'];
validateEnv(requiredEnvVars);

// Set up env object
const env = {
  port: parseInt(process.env.PORT as string, 10),
  nodeEnv: process.env.NODE_ENV as string,
  apiVersion: (process.env.API_VERSION || 'v1') as string,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
};

export default env;