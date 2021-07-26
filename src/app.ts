import express from 'express';
import { v4 as uuid4 } from 'uuid';

const app = express();

const appid = uuid4();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send(`Hello. This is test server. ${appid}`);
});

export default app;
