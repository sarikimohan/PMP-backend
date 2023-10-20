import dotenv from 'dotenv';
// if(process.env.DEBUG){
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    //throw dotenvResult.error;
}
import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './common/commonRoutesConfig';
import {UsersRoutes} from './users/userRoutesConfig';
import debug from 'debug';
import mongoose from 'mongoose';
import { AuthRoutes } from './auth/authRoutesConfig';
import { BlogsRoutes } from './blogs/blogsRoutesConfig';





const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

// here we are adding middleware to parse all incoming requests as JSON 
app.use(express.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new UsersRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new BlogsRoutes(app))

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

try{
    debugLog('Attempting MongoDB connection (will retry if needed)');
        mongoose
            .connect('mongodb://localhost:27017')
            .then(() => {
                debugLog('MongoDB is connected');
            })
}catch(err){
    debugLog(
        `MongoDB connection unsuccessful: `,
        err
    );
}


server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
      debugLog(`Routes configured for ${route.getName()}`);
  });
  // our only exception to avoiding debugLog(), because we
  // always want to know when the server is done starting up
  debugLog(runningMessage);
});