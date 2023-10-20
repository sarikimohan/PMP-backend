import { CommonRoutesConfig } from '../common/commonRoutesConfig';
import authController from './controllers/authController';
import authMiddleware from './middleware/authMiddleware';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/bodyValidationMiddleware';
import { body } from 'express-validator';
import jwtMiddleware from './middleware/jwtMiddleware';
import debug from 'debug';

const debugLog : debug.IDebugger = debug('authRoutesConfig : ')

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
      super(app, 'AuthRoutes');
  }

  configureRoutes(): express.Application {
      this.app.post(`/auth/login`, [
          body('email').isEmail(),
          body('password').isString(),
          BodyValidationMiddleware.verifyBodyFieldsErrors,
          authMiddleware.verifyUserPassword,
          authController.createJWT,
      ]);
      this.app.post(`/auth/refresh-token`, [
        jwtMiddleware.validJWTNeeded,
        jwtMiddleware.verifyRefreshBodyField,
        jwtMiddleware.validRefreshNeeded,
        authController.createJWT,
    ]);
      return this.app;
  }
}