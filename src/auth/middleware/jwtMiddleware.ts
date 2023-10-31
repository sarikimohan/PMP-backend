import express from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Jwt } from "../../common/types/jwt.js";
import usersService from "../../users/services/users.service.js";
import debug from "debug";
import dotenv from "dotenv";
import UsersModel from "../../database/models/UsersModel.js";
import RefreshTokensModel from "../../database/models/RefreshTokenModel.js";
// if(process.env.DEBUG){
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}
const debugLog: debug.IDebugger = debug("jwtMiddleWare: ");

const jwtSecret: string = process.env.JWT_SEC;

class JwtMiddleware {
  verifyRefreshBodyField(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.refreshToken) {
      return next();
    } else {
      return res
        .status(400)
        .send({ errors: ["Missing required field: refreshToken"] });
    }
  }

  async validRefreshNeeded(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const requestRefreshToken = req.body.refreshToken;
    if (!requestRefreshToken) res.status(403).send();
    debugLog(requestRefreshToken);

    const arrayOfRefreshTokenDocs = await RefreshTokensModel.find();
    if (!arrayOfRefreshTokenDocs) {
      res.status(403).send();
    } else {
      let tokens = arrayOfRefreshTokenDocs[0];
      debugLog(tokens.refreshTokens);
      debugLog(requestRefreshToken);
      if (!tokens || !tokens.refreshTokens.includes(requestRefreshToken))
        return res.status(403).send("token invalid or doesnt not exist");
      tokens.refreshTokens = tokens.refreshTokens.filter(
        (v) => v !== requestRefreshToken
      );
      await tokens.save();
      debugLog("refresh token deleted from the database");
      try {
        const jwtRefresh = jwt.verify(requestRefreshToken, jwtSecret) as Jwt;
        const user = await UsersModel.findOne({ _id: jwtRefresh.userId });
        req.body = {
          userId: user._id,
          email: user.email,
          permissionFlags: 1,
        };
        return next();
      } catch (err) {
        res.status(403).send({status:"failed",error:"invalid token"})
      }
    }

   
  }

  validJWTNeeded(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    debugLog("validJwtneeded hello started");
    debugLog("jwt secret:", jwtSecret);
    if (req.headers["authorization"]) {
      try {
        const authorization = req.headers["authorization"].split(" ");
        if (authorization[0] !== "Bearer") {
          return res.status(401).send();
        } else {
          debugLog("jwtSecret");

          res.locals.jwt = jwt.verify(authorization[1], jwtSecret) as Jwt;
          debugLog(res.locals.jwt);

          debugLog("email", res.locals.jwt.email);
          next();
        }
      } catch (err) {
        debugLog("return err", err);
        return res.status(403).send(err);
      }
    } else {
      return res.status(401).send();
    }
  }
}

export default new JwtMiddleware();
