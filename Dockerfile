FROM node:16
USER root

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

#CMD ["node", "index.js"]
CMD ["/bin/sh"]