FROM node:16.4.0-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN yarn install
RUN yarn run build

FROM node:16.4.0-alpine
WORKDIR /usr
COPY package.json ./
COPY .env ./
RUN yarn install --only=production
COPY --from=0 /usr/build .
CMD node server.js