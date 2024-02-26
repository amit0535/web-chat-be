import { HttpStatusCode } from "@/config/HttpStatusCodes";
import APIError from "./APIError";

export default class ServerError extends APIError {
  constructor(description: string) {
    super({
      name: "SERVER_ERROR",
      httpCode: HttpStatusCode.INTERNAL_SERVER,
      description: description || "An unexpected error occurred.",
      isOperational: true,
    });
  }
}
