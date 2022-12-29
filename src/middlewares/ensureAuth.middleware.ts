import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { verify } from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Invalid token", 401);
  }

  token = token.split(" ")[1];

  verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    req.user = {
      id: decoded.sub,
      isAdm: decoded.isAdm,
    };
  });

  next();
};

export default ensureAuthMiddleware;
