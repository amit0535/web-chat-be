import winston from "winston";
const transports = {
  console: new winston.transports.Console({ level: "warn" }),
  file: new winston.transports.File({
    filename: "combined.log",
    level: "error",
  }),
};

const logger = winston.createLogger({
  transports: [transports.console, transports.file],
});
export default logger;
