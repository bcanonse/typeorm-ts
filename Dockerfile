FROM node:18.12.1-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json /app/

USER node

RUN npm install

COPY . /app/