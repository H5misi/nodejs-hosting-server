FROM node:24-bookworm

WORKDIR /server

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

CMD ["node", "server.js"]