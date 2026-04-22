FROM docker.arvancloud.ir/library/node:20-alpine

RUN sed -i 's|https\?://dl-cdn.alpinelinux.org/alpine|https://mirror.arvancloud.ir/alpine|g' \
    /etc/apk/repositories
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install -g npm@latest \
 && npm install --no-audit --no-fund
COPY . .
CMD ["npm","start"]