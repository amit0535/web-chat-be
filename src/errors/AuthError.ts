import { HttpStatusCode } from "@/config/HttpStatusCodes";
import APIError from "./APIError";

export default class AuthError extends APIError {
  constructor(description: string) {
    super({
      name: "UNAUTHORIZED",
      httpCode: HttpStatusCode.UNAUTHORIZED,
      description: description || "Validation error",
      isOperational: true,
    });
  }
}
