import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';

import { router } from './routes/index.js';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// from https://www.npmjs.com/package/express-rate-limit
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

app.use(cors());
app.use(helmet());
app.use('/api', limiter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
