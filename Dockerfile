# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the React app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the React app using serve
CMD ["serve", "-s", "build", "-l", "3000"]