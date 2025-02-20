# Use official Node.js slim image as base
FROM node:20-slim AS build

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json* ./

# Install build dependencies with caching optimization
RUN npm ci --prefer-offline --no-audit --progress=false

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Final stage for production
FROM node:20-slim AS production

WORKDIR /app

# Copy package files and dist from build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

# Install production dependencies
RUN npm ci --production --prefer-offline --no-audit --progress=false

# Set environment variable (optional fallback)
ENV NODE_ENV=production

# -----------------------
# Uncomment the lines below to run tests if needed:
# -----------------------

# # Install testing dependencies (optional)
# RUN npm install --only=dev

# # Run tests (optional)
# RUN npm run test
# RUN npm run test:e2e

# -----------------------

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "dist/main"]