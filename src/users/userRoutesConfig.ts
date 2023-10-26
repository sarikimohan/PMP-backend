import { CommonRoutesConfig } from "../common/commonRoutesConfig.js";
import UsersController from "./controllers/usersController.js";
import UsersMiddleware from "./middleware/usersMiddleware.js";
import BodyValidationMiddleware from "../common/middleware/bodyValidationMiddleware.js";
import { body } from "express-validator";
import express from "express";
import debug from "debug";

const debugLog : debug.IDebugger = debug('userRoutesConfig: ')

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRouters");
  }

  configureRoutes() {
    this.app
      .route(`/users`)
      .get(UsersController.listUsers)
      .post(
        body("email").isEmail(),
        body("password")
          .isLength({ min: 5 })
          .withMessage("Must include password (5+ characters)"),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        UsersMiddleware.validateSameEmailDoesntExist,
        UsersController.createUser
      );

    return this.app;
  }
}
