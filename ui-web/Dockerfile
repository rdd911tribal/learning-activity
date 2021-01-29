FROM node:15.5.0-slim

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
# RUN npm i npm@6.13.4 -g --silent
RUN npm i

COPY . /usr/src/app

RUN npm run build

# production environment
FROM nginx:1.13.12-alpine
COPY --from=node /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]