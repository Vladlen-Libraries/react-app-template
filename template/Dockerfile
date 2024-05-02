FROM node:12.14-alpine as builder
LABEL stage=intermediate

WORKDIR "/app"

COPY package.json package-lock.json /app/

RUN npm install --only=prod

COPY . /app

COPY .env /app/.env

RUN npm run build

FROM nginx:stable-alpine
RUN chmod -R 755 /var/cache/nginx
COPY nginx-app.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
