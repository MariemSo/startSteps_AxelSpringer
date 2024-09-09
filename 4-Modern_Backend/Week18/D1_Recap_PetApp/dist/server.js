import express from "express";
import { createServer } from "http";
import router from "./routes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/api/pets", router);
// const server = new ApolloServer({
// typeDefs,
// resolvers
// })
// server.applyMiddleware({app})
const httpServer = createServer(app);
httpServer.listen({ port }, () => {
    console.log(`server ready on http://localhost:${port}`);
});
