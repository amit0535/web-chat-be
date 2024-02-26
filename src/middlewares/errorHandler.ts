import APIError from "@/errors/APIError";
import { logger } from "@/utils";
import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  logger.error(error);
  if (error instanceof APIError) {
    return res.error(
      {
        message: error.description,
        name: error.name,
      },
      error.httpCode
    );
  }
  res.error({ message: error.message });
}
