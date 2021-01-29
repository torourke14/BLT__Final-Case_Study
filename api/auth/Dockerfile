FROM node:alpine

WORKDIR /app
ENV MONGO_USER=root \
    MONGO_PW=letmein12345 \
    MONGO_MAIN=ticket-shop
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]


