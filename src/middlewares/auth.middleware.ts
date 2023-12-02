import { JWT_SECRET } from "@/config";
import { IJWTToken } from "@/interfaces";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export default function authHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.error(
      {
        message: "JWT token is missing from authorization header",
      },
      401
    );
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as IJWTToken;
    res.user = { id: decoded.userId };
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.error(
        {
          message: "JWT token is expired",
        },
        401
      );
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.error(
        {
          message: "Invalid token",
        },
        401
      );
    }
  }
}
