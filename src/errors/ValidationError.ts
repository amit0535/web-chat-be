import { HttpStatusCode } from "@/config/HttpStatusCodes";
import APIError from "./APIError";

export default class ValidationError extends APIError {
  constructor(description: string) {
    super({
      name: "BAD_REQUEST",
      httpCode: HttpStatusCode.BAD_REQUEST,
      description: description || "Validation error",
      isOperational: true,
    });
  }
}
