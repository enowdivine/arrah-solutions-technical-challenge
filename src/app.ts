import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect";
import schema from "./schemas";

const app: Express = express();
const port = process.env.PORT || 4000;

//For env File
dotenv.config();
// Connect Database
connectDatabase();

// Middlewares
app.use(express.json());
app.use(
  `/api/${process.env.API_VERSION}`,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
