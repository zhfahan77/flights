import 'dotenv/config';

import express, { Application } from 'express';

import { initializeRoutes } from './router';

const app: Application = express();
const PORT = process.env.APPLICATION_PORT;

app.set('x-powered-by', false);

initializeRoutes(app);

app.listen(PORT, () => {
  console.log(`⚡[server]: Server is running at ${PORT} ✅`);
});