FROM node:alpine AS builder

WORKDIR /usr/src/api

COPY /api /usr/src/api
#COPY . /usr/src/api

RUN rm -rf node_modules
RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
