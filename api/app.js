import express from 'express';
import cors from 'cors';

import { router } from './routes/index.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', router);

export default app;
