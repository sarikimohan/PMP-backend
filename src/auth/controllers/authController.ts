import express from "express";
import debug from "debug";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";
import RefreshTokensModel from "../../database/models/RefreshTokenModel.js";
// if(process.env.DEBUG){
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}

const log: debug.IDebugger = debug("authController: ");

/**
 * This value is automatically populated from .env, a file which you will have
 * to create for yourself at the root of the project.
 *
 * See .env.example in the repo for the required format.
 */

const debugLog: debug.IDebugger = debug("authController: ");

const jwtSecret: string = process.env.JWT_SEC;
const tokenExpirationInSeconds = 30;

class AuthController {
  async createJWT(req: express.Request, res: express.Response) {
    debugLog("jwts", jwtSecret);
    debugLog("started creating JWT token");
    try {
      const token = jwt.sign(req.body, jwtSecret, {
        expiresIn: tokenExpirationInSeconds,
      });
      const refreshToken = jwt.sign(req.body,jwtSecret)
      let arrayOfRefreshTokens = await RefreshTokensModel.find()
      if(!arrayOfRefreshTokens){
        throw new Error("array of Refresh tokens not found")
      }else{
        let tokens=arrayOfRefreshTokens[0];
        if(!tokens){
          RefreshTokensModel.create({
            refreshToken:[]
        })
          arrayOfRefreshTokens = await RefreshTokensModel.find()
          tokens=arrayOfRefreshTokens[0]
        }
        tokens.refreshTokens.push(refreshToken)
        await tokens.save()
        debugLog("refresh token saved to the database")

      }
      debugLog("token", token);
      return res.status(201).send({ accessToken: token, refreshToken: refreshToken });
    } catch (err) {
      debugLog("createJWT error: %O", err);
      return res.status(500).send(err);
    }
  }
}

export default new AuthController();
