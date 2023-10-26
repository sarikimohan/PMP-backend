import express from 'express';
import debug from 'debug';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

require('dotenv').config()
const log: debug.IDebugger = debug('authController: ');

/**
* This value is automatically populated from .env, a file which you will have
* to create for yourself at the root of the project.
*
* See .env.example in the repo for the required format.
*/

const debugLog : debug.IDebugger = debug('authController: ')

const jwtSecret: string = process.env.JWT_SEC;
const tokenExpirationInSeconds = 36000;

class AuthController {
    async createJWT(req: express.Request, res: express.Response) {
      debugLog("jwts",jwtSecret)
      debugLog("started creating JWT token")
        try {
            const refreshId = req.body.userId + jwtSecret;
            const salt = crypto.createSecretKey(crypto.randomBytes(16));
            debugLog("salt:",salt)
            const hash = crypto
                .createHmac('sha512', salt)
                .update(refreshId)
                .digest('base64');
                debugLog("hash: ",hash)
            req.body.refreshKey = salt.export();
            const token = jwt.sign(req.body, jwtSecret, {
                expiresIn: tokenExpirationInSeconds,
            });
            debugLog("token",token)
            return res.status(201)
                .send({ accessToken: token, refreshToken: hash });
        } catch (err) {
            debugLog('createJWT error: %O', err);
            return res.status(500).send(err);
        }
    }
}

export default new AuthController();