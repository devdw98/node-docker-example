// import app from './app';
// import http from 'http';

// const server_http = http.createServer(app).listen(app.get('port'), () => {
//   console.log(`http listening at http://localhost:%d`, app.get('port'));
// });


import app from './app';
import https from 'https';
import fs from 'fs';

const sslOptions = {
  ca: fs.readFileSync('ca체인 루트/CA파일.crt'),
  key: fs.readFileSync('키 파일 루트/키파일.key'),
  cert: fs.readFileSync('인증서 경로/인증서 이름.crt'),
}

https.createServer(sslOptions, app).listen(app.get('port'), () => {
  console.log(`https listening at https://localhost:%d`, app.get('port'));
});