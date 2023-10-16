import express from "express";
import jwt from "jsonwebtoken";

require("dotenv").config();
// @ts-expect-error
const jwtSecret: string = process.env.JWT_SEC;

class BlogsMiddleware {
  verifyAuth(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.headers["authorization"]) {
      try {
        const authorization = req.headers["authorization"].split(' ');
        console.log(authorization)
        console.log("Chexk: ",authorization[1])
        if (authorization[0] !== "Bearer") {
          return res.status(401).send();
        } else {
          res.locals.userId = jwt.verify(authorization[1], jwtSecret);

          next();
        }
      } catch (err) {
        console.log("return err", err);
        return res.status(403).send(err);
      }
    } else {
      return res.status(401).send();
    }
  }
}

export default new BlogsMiddleware
