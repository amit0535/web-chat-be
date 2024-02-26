import { HttpStatusCode } from "@/config/HttpStatusCodes";
import AuthService from "@/services/auth.service";
import { Request, Response } from "express";

export default class AuthController {
  static async login(req: Request, res: Response, next) {
    const { username, password } = req.body;
    const data = await AuthService.login(username, password);
    res.success(data);
  }

  static async register(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await AuthService.register({ username, password });
    res.success({ user }, HttpStatusCode.CREATED);
  }
}
