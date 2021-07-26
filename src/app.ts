import express from 'express';
import { v4 as uuid4 } from 'uuid';

const uuid = () => {
  const tokens = uuid4().split('-');
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
};
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send(`Hello. This is test server. ${uuid}`);
});

export default app;
