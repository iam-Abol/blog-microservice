FROM docker.arvancloud.ir/library/node:20-alpine

RUN sed -i 's|https\?://dl-cdn.alpinelinux.org/alpine|https://mirror.arvancloud.ir/alpine|g' \
    /etc/apk/repositories
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm config set registry https://mirror2.chabokan.net/npm/ \
 && npm install -g npm@latest \
 && npm install --no-audit --no-fund
COPY . .
CMD ["npm","start"]