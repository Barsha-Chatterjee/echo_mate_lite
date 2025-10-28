FROM node:20-alpine3.18 as builder

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN ls -la
RUN npm run build
EXPOSE 3000
CMD [ "npm","run","start" ]