FROM alpine:3.10

ENV NODE_VERSION 15.3.0
# work directory
WORKDIR /usr/app

# Copy dependencies first for effective caching
COPY package*.json ./

RUN yarn \
    && yarn global add nodemon \
    && apk add tzdata

COPY . .

CMD ["npm", "run", "dev"]
