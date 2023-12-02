import { Request, Response } from "express";

export default function routeNotFoundHandler(
  req: Request,
  res: Response
): void {
  res.error({ message: "Route not found" }, 404);
}
