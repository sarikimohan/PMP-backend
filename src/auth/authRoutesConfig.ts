import { CommonRoutesConfig } from "../common/commonRoutesConfig.js";
import authController from "./controllers/authController.js";
import authMiddleware from "./middleware/authMiddleware.js";
import express from "express";
import BodyValidationMiddleware from "../common/middleware/bodyValidationMiddleware.js";
import { body } from "express-validator";
import jwtMiddleware from "./middleware/jwtMiddleware.js";
import debug from "debug";

const debugLog: debug.IDebugger = debug("authRoutesConfig : ");

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): express.Application {
    this.app.post(`/auth/login`, [
      body("email").isEmail(),
      body("password").isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      authMiddleware.verifyUserPassword,
      authController.createJWT,
    ]);
    this.app.post(`/auth/refresh-token`, [
      // jwtMiddleware.validJWTNeeded,
      jwtMiddleware.verifyRefreshBodyField,
      jwtMiddleware.validRefreshNeeded,
      authController.createJWT,
    ]);
    
    this.app.post(`/auth/logout`,[
      authController.logout
    ])
    return this.app;
  }
}
