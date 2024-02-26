import { HttpStatusCode } from "@/config/HttpStatusCodes";
import APIError from "./APIError";

export default class NotFoundError extends APIError {
  constructor(description: string) {
    super({
      name: "NOT_FOUND",
      httpCode: HttpStatusCode.NOT_FOUND,
      description: description || "Resource not found",
      isOperational: true,
    });
  }
}
