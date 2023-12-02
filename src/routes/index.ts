import express from "express";

import { routes as moviesRoutes } from "./movie.routes";
import { routes as songsRoutes } from "./song.routes";
import { routes as authRoutes } from "./auth.routes";
import { authHandler } from "@/middlewares";
export { moviesRoutes, songsRoutes, authRoutes };

const router = express.Router();
//public routes
router.use("/auth", authRoutes);
router.use(authHandler);
//authenticated routes
router.use("/movies", moviesRoutes);
router.use("/songs", songsRoutes);
export default router;
