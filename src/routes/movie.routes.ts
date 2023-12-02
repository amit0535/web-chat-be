import { MovieController } from "@/controllers";
import { errorHandler } from "@/middlewares";
import { Router } from "express";

export const routes = Router();
routes.get("/", MovieController.getAll);
routes.post("/", MovieController.create);
routes.get("/:id", MovieController.getOne);
routes.delete("/:id", MovieController.delete);
routes.patch("/:id", MovieController.update);
routes.use(errorHandler);
