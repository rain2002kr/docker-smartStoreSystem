FROM node:15-alpine
#FROM node:12-alpine

# work directory
WORKDIR /usr/app

# Copy dependencies first for effective caching
COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "start"]
