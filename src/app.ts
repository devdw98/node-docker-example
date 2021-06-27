import express from 'express';
import {TEST_DIR, TEST_URL} from './vars'
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(TEST_URL, express.static(TEST_DIR))

app.get('/', (req, res) => {
  res.send('Hello. This is SSL TestServer');
});

export default app;
