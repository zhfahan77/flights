import 'dotenv/config';

import express, { Application } from 'express';
import helmet from 'helmet';

import { initializeRoutes } from './router';

const app: Application = express();
const PORT = process.env.APPLICATION_PORT;

app.set('x-powered-by', false);
app.use(helmet());

initializeRoutes(app);

app.listen(PORT, () => {
  console.log(`⚡[server]: Server is running at ${PORT} ✅`);
});