import { CommonRoutesConfig } from "../common/commonRoutesConfig";
import UsersController from "./controllers/usersController";
import UsersMiddleware from "./middleware/users.middleware";
import BodyValidationMiddleware from "../common/middleware/bodyValidationMiddleware";
import { body } from "express-validator";
import express from "express";


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
