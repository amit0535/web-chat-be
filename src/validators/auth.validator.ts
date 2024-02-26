import ValidationError from "@/errors/ValidationError";
import { UserRepository } from "@/repositories";
import { Request, Response, NextFunction } from "express";
export default class AuthValiditor {
  static async registration(req: Request, res: Response, next: NextFunction) {
    const { username } = req.body;
    const isUserExist = await UserRepository.isUserNameExists(username);
    if (isUserExist) {
      throw new ValidationError("Username already exist");
    }
    next();
  }
}
