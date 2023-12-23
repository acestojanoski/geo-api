import express from "express";
import { routes } from "./routes.mjs";

const server = express();

server.use("/api", routes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
