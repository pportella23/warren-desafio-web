# base image
FROM node:alpine

# create & set working directory
RUN mkdir /app
WORKDIR /app

# copy json file to install dependencies
COPY package.json /app/package.json

ENV NEXT_PUBLIC_API_URL=https://warren-transactions-api.herokuapp.com/api

# install dependencies
RUN npm install

# copy source files
COPY . /app

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start