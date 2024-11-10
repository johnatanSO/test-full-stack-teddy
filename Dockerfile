FROM node:latest

WORKDIR /usr/front

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3200

CMD ["npm", "run", "dev"]