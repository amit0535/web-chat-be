import express, { Express, Request, Response } from "express";
import routes from "./routes";
import {
  responseHandler,
  errorHandler,
  routeNotFoundHandler,
} from "./middlewares";
const app: Express = express();
app.use(express.json());
app.use(responseHandler);
app.use("/api", routes);
//not for production use
app.get("/api/config", (req: Request, res: Response) => {
  res.json({ success: true, env: process.env });
});
app.use(routeNotFoundHandler);
app.use(errorHandler);

process.on("SIGINT", function () {
  console.log("Exiting");
  process.exit(0);
});
export default app;
