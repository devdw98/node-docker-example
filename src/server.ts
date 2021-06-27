import app from './app';
import http from 'http';

const server_http = http.createServer(app).listen(app.get('port'), () => {
  console.log(`http listening at http://localhost:%d`, app.get('port'));
});
