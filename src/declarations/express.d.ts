declare namespace Express {
  interface Response {
    success: (data: any, statusCode?: Number) => void;
    error: (data: any, statuscode?: Number) => void;
    user: unknown;
  }
}
