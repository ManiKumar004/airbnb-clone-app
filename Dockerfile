FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]


# # Use an official Node.js image as the base
# FROM node:18-alpine

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json first to leverage Docker caching
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the app
# COPY . .

# # Build the React app
# RUN npm run build

# # Use an Nginx server to serve the built React app Dockerhub //Username: manikumar004
# FROM nginx:alpine
# COPY --from=0 /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]