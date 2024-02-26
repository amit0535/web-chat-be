import AppError from "./AppError";
import { HttpStatusCode } from "@/config/constants";

interface IAPIError {
  name: string;
  httpCode: HttpStatusCode;
  description: string;
  isOperational: boolean;
}
export default class APIError extends AppError {
  constructor({ name, httpCode, description, isOperational }: IAPIError) {
    super({ name, httpCode, description, isOperational });
  }
}
