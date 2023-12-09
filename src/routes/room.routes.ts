import { RoomController } from "@/controllers";
import { Router } from "express";

export const routes = Router();
routes.get("/", RoomController.getAll);

