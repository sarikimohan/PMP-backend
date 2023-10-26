import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Jwt } from '../../common/types/jwt.js';
import usersService from '../../users/services/users.service.js';
import debug from 'debug';

require('dotenv').config()
const debugLog : debug.IDebugger = debug('jwtMiddleWare: ')


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
                .send({ errors: ['Missing required field: refreshToken'] });
        }
    }

    async validRefreshNeeded(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user: any = await usersService.getUserByEmailWithPassword(
            res.locals.jwt.email
        );
        const salt = crypto.createSecretKey(
            Buffer.from(res.locals.jwt.refreshKey.data)
        );
        const hash = crypto
            .createHmac('sha512', salt)
            .update(res.locals.jwt.userId + jwtSecret)
            .digest('base64');
        if (hash === req.body.refreshToken) {
            req.body = {
                userId: user._id,
                email: user.email,
                permissionFlags: user.permissionFlags,
            };
            return next();
        } else {
            return res.status(400).send({ errors: ['Invalid refresh token'] });
        }
    }

    validJWTNeeded(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        debugLog("validJwtneeded hello started")
        debugLog("jwt secret:",jwtSecret)
        if (req.headers['authorization']) {
            try {
                const authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                } else {
                    debugLog("jwtSecret")

                    res.locals.jwt = jwt.verify(
                        authorization[1],
                        jwtSecret 
                    ) as Jwt;
                    debugLog(res.locals.jwt)

            
                    debugLog("email",res.locals.jwt.email)
                    next();
                }
            } catch (err) {
                debugLog("return err",err)
                return res.status(403).send(err);
            }
        } else {
            return res.status(401).send();
        }
    }
}

export default new JwtMiddleware();