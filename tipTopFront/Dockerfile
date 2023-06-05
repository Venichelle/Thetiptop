# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

ENV NODE_OPTIONS=--openssl-legacy-provider

# Generate the build of the application
#RUN npm run build

RUN npm run build:ssr
#RUN npm run serve:ssr

EXPOSE 4000

CMD npm run serve:ssr

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest AS ngi
# Copying compidoled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /usr/local/app/dist/tipTopFront /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 80