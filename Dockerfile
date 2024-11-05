# Stage 1: Build React app
FROM node:23 AS build

WORKDIR /app

# Copy package.json and yarn.lock, then install dependencies
COPY package.json yarn.lock ./

# Install dependencies, including TypeScript
RUN yarn install
RUN yarn add typescript --dev

# Copy the entire project and build it
COPY . .

# Run the build command using yarn
RUN yarn build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build output from the build stage to Nginx's default static file directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
