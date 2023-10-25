import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import logger from '@src/log/logger';
import morgan from 'morgan';
import HttpStatusCodes from './constants/HttpStatusCodes';
import { RouteError } from './constants/RouteError';
import authRouter from './router/auth';

import { readFileSync } from "fs";
import path from "path";
import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./grpc/connect";

//For env File
dotenv.config();

const app = express();
const port = () => {
  if (process.env.NODE_ENV === 'development') {
    return 8000;
  }
  return 8080;
};

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

// Add auth router
app.use('/', authRouter);

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

async function main() {
  const server = fastify(
    {
      http2: true,
      https: {
        key: readFileSync(path.resolve(__dirname, 'localhost+2-key.pem'), "utf8"),
        cert: readFileSync(path.resolve(__dirname, "localhost+2.pem"), "utf8"),
      }
    }
  );
  await server.register(fastifyConnectPlugin, {
    routes,
  });
  server.get("/", (_, reply) => {
    reply.type("text/plain");
    reply.send("Hello World!");
  });
  await server.listen({ host: "0.0.0.0", port: port() });
  logger.info("server is listening at", server.addresses());
}

void main();