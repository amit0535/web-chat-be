import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(error);
  res.error({ message: error.message });
}
