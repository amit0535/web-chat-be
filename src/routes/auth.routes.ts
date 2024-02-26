import { AuthController } from "@/controllers";
import AuthValidator from "@/validators/auth.validator";
import { Router } from "express";

export const routes = Router();
routes.post("/login", AuthController.login);
routes.post("/register", AuthValidator.registration, AuthController.register);
