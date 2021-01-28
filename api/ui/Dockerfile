FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

COPY . ./

CMD ["npm", "start"]

