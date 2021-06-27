import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hello. This is SSL TestServer');
});

export default app;
