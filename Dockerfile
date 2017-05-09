FROM node:6
EXPOSE 8080

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

CMD [ "npm", "run", "start"]

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app