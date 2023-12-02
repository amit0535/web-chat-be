import { AuthController } from "@/controllers";

import { errorHandler } from "@/middlewares";
import { Router } from "express";

export const routes = Router();
routes.post("/login", AuthController.login);
routes.post("/register", AuthController.register);

routes.use(errorHandler);
