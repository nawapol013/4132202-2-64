FROM node:14.9

WORKDIR /usr/src/app

COPY packat.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]