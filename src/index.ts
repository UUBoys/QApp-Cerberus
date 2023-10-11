import express, { Request, Response , Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer, gql } from 'apollo-server-express';

//For env File
dotenv.config();

const app: Application = express();
const config =  {
    db_host: process.env.DB_HOST,
}
const port = process.env.PORT || 8000;

app.use(cors);
app.use(express.json());

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () =>
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
);