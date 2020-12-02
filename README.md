# 도커 - 스마트 스토어 시스템

    2020-12-01
        NGINX 서버 8080
        EXPRESS 서버 3000

    2020-12-02
        package.lock.json should be deleted
        "dev" : "NODE_PATH=./src nodemon src/server.js" < = update
        problem is node:12-alpine can have yarn, the other is not having a yarn.
        진짜는 docker image 생성 법에 있었음.
        FROM node:15-alpine
        #FROM alpine:3.10
        도커 이미지 허브에서 생성법을 보고 하면 됨.

    NEW Branch react
        change branch
        and mongodb
        
