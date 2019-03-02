import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const PORT = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({ typeDefs: schema, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, (error) => {
  if (error) throw error;

  // eslint-disable-next-line no-console
  console.log(`Apollo Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
