# Stage 1: Build React app
FROM node:16-alpine as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies, including TypeScript
RUN npm install
RUN npm install typescript --save-dev

# Copy the entire project and build it
COPY . .

# Run the build command
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build output to Nginx's default static file directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
