FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm install -g yarn

COPY package*.json .

RUN yarn install && yarn add qrcode-terminal

COPY . .

EXPOSE 3000

CMD ["node", "index.js", "--server"]