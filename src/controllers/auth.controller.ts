import AuthService from "@/services/auth.service";
import { Request, Response } from "express";

export default class AuthController {
  static async login(req: Request, res: Response, next) {
    const { username, password } = req.body;
    const token = await AuthService.login(username, password);
    if (token) {
      res.success({ message: "Success", token });
    }
  }

  static async register(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await AuthService.register({ username, password });
    res.success({ user });
  }
}
