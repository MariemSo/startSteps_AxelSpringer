import { ApolloServer } from "apollo-server-express";
import express from "express";
import { createServer } from "http";
import router from "./routes.js";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";

const app: any = express();
const port: number = 4000;

app.use(express.json());
app.use("/api/pets", router);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const server = new ApolloServer({ schema });
await server.start();

server.applyMiddleware({ app });

const webserver = new WebSocketServer();

const httpServer = createServer(app);

const weServer = new WebSocketServer({
  server: httpServer,
  path: server.graphqlPath,
});

httpServer.listen({ port }, () => {
  console.log(`server ready on http://localhost:${port}`);
  console.log(
    `graphQl server is ready on http://localhost:${port}${server.graphqlPath}`
  );
});
