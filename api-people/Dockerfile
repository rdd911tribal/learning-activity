FROM node:15.5.0-slim
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm i
COPY . .
EXPOSE 4011
CMD npm start