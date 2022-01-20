import express from 'express';

import { checkHealth } from './handler/health';

export const healthCheckRouter = express.Router();

healthCheckRouter.get('/', checkHealth);