# Node.js 공식 이미지를 베이스 이미지로 사용
FROM registry.redhat.io/rhel9/nodejs-20:1-24
# 애플리케이션 디렉토리 생성
USER root
WORKDIR /usr/src/app
RUN ["cd","/usr/src/app"]
COPY *.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
