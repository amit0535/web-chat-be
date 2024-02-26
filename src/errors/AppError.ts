import { HttpStatusCode } from "@/config/constants";

interface IAppError {
  name: string;
  httpCode: HttpStatusCode;
  description: string;
  isOperational: boolean;
}
export default class AppError extends Error {
  public httpCode: HttpStatusCode;
  public isOperational: boolean;
  public name: string;
  public description: string;
  constructor(data: IAppError) {
    super(data.description);
    this.name = data.name;
    this.description = data.description;
    this.httpCode = data.httpCode;
    this.isOperational = data.isOperational;
    Error.captureStackTrace(this);
  }
}
