
# to build app
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# to run app
FROM nginx:alpine
COPY --from=node /app/dist/UI /usr/share/nginx/html

EXPOSE 80


