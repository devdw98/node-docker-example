FROM node:12

#app 폴더 만들기 - NodeJS 어플리케이션 폴더
RUN mkdir -p /app
#winston 등을 사용할떄엔 log 폴더도 생성

# 애플리케이션 작업 디렉터리 생성
# WORKDIR /usr/src/app
#어플리케이션 폴더를 Workdir로 지정 - 서버가동용
WORKDIR /app

# 앱 의존성 설치
COPY package*.json ./

RUN npm install

# production 위한 코드 빌드
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .


# runtime 정의하는 명령어
# CMD [ "node", "server.js"]
CMD npm start

