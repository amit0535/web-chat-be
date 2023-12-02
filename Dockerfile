FROM node:20-alpine
WORKDIR /home/node/app
COPY package*.json ./
RUN npm i
#RUN npm i nodemon -g
COPY . .