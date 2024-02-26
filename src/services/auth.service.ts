import { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } from "@/config";
import AuthError from "@/errors/AuthError";
import { IUser } from "@/interfaces";
import { User } from "@/models";
import jwt from "jsonwebtoken";
export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await User.findOne({ username });
    if (!user) {
      throw new AuthError("Username not found");
    }
    const isValid = user.isPasswordValid(password);
    if (!isValid) {
      throw new AuthError("Invalid username or password");
    }

    return {
      accessToken: this.getJWTAccessToken(user),
      refreshToken: this.getJWTRefreshToken(user),
    };
  }

  static async register({ username, password }): Promise<IUser> {
    return await User.create({ username, password });
  }

  static getJWTAccessToken(user: IUser): string {
    return jwt.sign({ userId: user.id }, JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
  }

  static getJWTRefreshToken(user: IUser): string {
    return jwt.sign({ userId: user.id }, JWT_REFRESH_TOKEN_SECRET, {
      expiresIn: "10h",
    });
  }
}
