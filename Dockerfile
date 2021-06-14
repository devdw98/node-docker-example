FROM node:12

# 애플리케이션 작업 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./

RUN npm install

# production 위한 코드 빌드
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .
# 8080 포트에 바인딩 되어있으므로 docker 데몬에 매핑
EXPOSE 8080

# runtime 정의하는 명령어
CMD [ "node", "server.js"]

