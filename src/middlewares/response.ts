import { Request, Response, NextFunction } from "express";
export default function responseHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.success = function (data: any, httpCode: number = 200) {
    res.status(httpCode).json({ success: true, ...data });
  };
  res.error = function (data: any, httpCode: number = 500) {
    res.status(httpCode).json({ success: false, ...data });
  };
  next();
}
