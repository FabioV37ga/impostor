# Build stage - Alpine Node.js image
FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source code and build the application
COPY . .
RUN npm run dev:build

# Install xdg-utils to prevent Vite preview issues in container environments
RUN apk add --no-cache xdg-utils

# Expose port for the preview server
EXPOSE 5173

# Run Vite preview server with host accessible from outside container
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host", "0.0.0.0"]
