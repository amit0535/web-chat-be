import { JWT_SECRET } from "@/config";
import { IUser } from "@/interfaces";
import { User } from "@/models";
import jwt from "jsonwebtoken";
export default class AuthService {
  static async login(username: string, password: string): Promise<string> {
    const user = await User.findOne({ username });
    if (!user) {
      //Throw Auth error
    }
    const isValid = user.isPasswordValid(password);
    if (isValid) {
      return this.getJWTToken(user);
    }
  }

  static async register({ username, password }): Promise<IUser> {
    return await User.create({ username, password });
  }

  static getJWTToken(user: IUser): string {
    return jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });
  }
}
