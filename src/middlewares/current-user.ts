import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  userId: string;
  roomKey: string;
  admin?: boolean;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.["jwt"];

  if (!token) {
    return next();
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY!);

    req.currentUser = payload as UserPayload;
  } catch (err) { }

  next();
};
