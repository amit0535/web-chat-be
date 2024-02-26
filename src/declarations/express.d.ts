declare namespace Express {
  interface Response {
    success: (data: any, httpCode?: Number) => void;
    error: (data: any, httpCode?: Number) => void;
    user: unknown;
  }
}
