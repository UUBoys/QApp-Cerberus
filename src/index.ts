import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import logger from '@src/log/logger';

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

app.listen(port(), () => {
  logger.info(`Normie server running at ${port()}`);
});

async function main() {
  const server = fastify(
    {
      http2: true,
      // @ts-ignore
      logger: logger,
    }
  );
  await server.register(fastifyConnectPlugin, {
    routes,
  });
  server.get("/", (_, reply) => {
    reply.type("text/plain");
    reply.send("Hello World!");
  });
  await server.listen({ host: "0.0.0.0", port: 5243 });
  logger.info("gRPC server is listening at", server.addresses());
}

void main();