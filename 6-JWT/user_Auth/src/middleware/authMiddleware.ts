import { log } from "console";
import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //Checking if token Exists
  const jwtToken = req.headers["authorization"]?.split(" ")[1];
  if (!jwtToken) {
    res.status(401).json({ message: "No token Found" });
    return;
  }
  console.log(jwtToken);

  //Verifying Token
  const JWT_SECRET = process.env.JWT_SECRET || "Tomato";

  jwt.verify(jwtToken, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    console.log(decoded);
    // req.userId = (decoded as any).id;
  });
  console.log("Hello from Middleware");
  next();
};
