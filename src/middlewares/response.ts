import { Request, Response, NextFunction } from "express";
export default function responseHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.success = function (data: any, statusCode: number = 200) {
    res.status(statusCode).json({ success: true, ...data });
  };
  res.error = function (data: any, statusCode: number = 500) {
    res.status(statusCode).json({ success: false, ...data });
  };
  next();
}
