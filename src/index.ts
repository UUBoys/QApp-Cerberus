import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import logger from '@src/log/logger';
import morgan from 'morgan';
import HttpStatusCodes from './constants/HttpStatusCodes';
import { RouteError } from './constants/RouteError';
import authRouter from './router/auth';

//For env File
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Basic middlewares for all Routes 
app.use(express.json());
app.use(helmet());

// Log all requests
const loggingMiddleware = morgan(
  function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: Number.parseFloat(tokens.status(req, res) || '0'),
      content_length: tokens.res(req, res, 'content-length'),
      response_time: Number.parseFloat(tokens['response-time'](req, res) || '0'),
    });
  },
  {
    stream: {
      write: (message) => {
        const data = JSON.parse(message);
        logger.http(`incoming-request`, data);
      },
    },
  }
);

app.use(loggingMiddleware);

// Bad route handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  let status = HttpStatusCodes.BAD_REQUEST;
  
  if (err instanceof RouteError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});

// Add auth router
app.use('/', authRouter);

app.listen({ port: 8000 }, () =>
  logger.info(`Server ready at http://localhost:${port}`)
);