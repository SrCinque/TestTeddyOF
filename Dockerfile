FROM node:10-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

RUN npm run migrate

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]