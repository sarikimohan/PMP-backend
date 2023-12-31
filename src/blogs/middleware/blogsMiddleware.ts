import dotenv from 'dotenv'
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}
import debug from "debug";
import express from "express";
import jwt from "jsonwebtoken";

const debugLog: debug.IDebugger = debug("blogsMiddleware: ");


const jwtSecret: string = process.env.JWT_SEC;

class BlogsMiddleware {
  verifyAuth(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.headers["authorization"]) {
      try {
        const authorization = req.headers["authorization"].split(" ");
        debugLog(authorization);
        debugLog("Chexk: ", authorization[1]);
        if (authorization[0] !== "Bearer") {
          return res.status(401).send();
        } else {
          res.locals.userId = jwt.verify(authorization[1], jwtSecret);

          next();
        }
      } catch (err) {
        debugLog("return err", err);
        return res.status(403).send({
          status: "failed",
          error: "invalid token"
        });
      }
    } else {
      return res.status(401).send();
    }
  }
}

export default new BlogsMiddleware();
