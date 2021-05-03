import { ApolloServer, Config, gql } from "apollo-server-express";
import { schema } from "./schema";
import express from "express";

const app = express();

const config: Config = {
  schema,
  playground: true,
}

const server = new ApolloServer(config);

server.applyMiddleware({ app })

app.listen(5000, () => {
  console.log("listen 5000")
})