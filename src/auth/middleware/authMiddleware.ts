import express from "express";
import usersService from "../../users/services/users.service.js";
import * as argon2 from "argon2";
import debug from "debug";

const debugLog : debug.IDebugger = debug('authMiddleWare: ')
class AuthMiddleWare {

  async verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user: any = await usersService.getUserByEmailWithPassword(
      req.body.email
    );
    if (user) {
      const passwordHash = user.password;
      if (await argon2.verify(passwordHash, req.body.password)) {
        req.body = {
          userId: user._id,
          email: user.email,
          permissionFlags: 1,
        };
        
        debugLog("password verified")

        return next();
      }
    }
    // Giving the same message in both cases
    // helps protect against cracking attempts:
    res.status(400).send({ errors: ["Invalid email and/or password"] });
  }
}

export default new AuthMiddleWare
