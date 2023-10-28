import dotenv from "dotenv";
// if(process.env.DEBUG){
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  //throw dotenvResult.error;
}
import express from "express";
import * as http from "http";

import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import { CommonRoutesConfig } from "./common/commonRoutesConfig.js";
import { UsersRoutes } from "./users/userRoutesConfig.js";
import debug from "debug";
import mongoose from "mongoose";
import { AuthRoutes } from "./auth/authRoutesConfig.js";
import { BlogsRoutes } from "./blogs/blogsRoutesConfig.js";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import UsersModel from "./database/models/UsersModel.js";
import {Database,Resource} from '@adminjs/mongoose'
import BlogsModel from "./database/models/BlogsModel.js";
import UserProfileModel from "./database/models/UserProfileModel.js";

const DEFAULT_ADMIN = {
  email: "sariki.mohankrishna@gmail.com",
  password: "mohan1234",
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }

  return null;
};

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

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
routes.push(new BlogsRoutes(app));

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

AdminJS.registerAdapter({
  Resource: Resource,
  Database: Database,
});

//port

const mongooseDB = await mongoose
  .connect(
    process.env.DATABASE_STRING
  )
  .then(() => debugLog("database connected"))
  .catch((err) => debugLog(err));

const BookResourceOptions = {
  databases: [mongooseDB],
  resource: UsersModel,
};

const BlogsResourceOptions = {
    databases:[mongooseDB],
    resource: BlogsModel
}

const UsersProfileResourceOptions= {
  databases:[mongooseDB],
  resource:UserProfileModel
}

const adminOptions = {
  rootPath: "/admin",
  resources: [BookResourceOptions,BlogsResourceOptions,UsersProfileResourceOptions],
};

const admin = new AdminJS(adminOptions);

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: "AdminJS",
    cookiePassword: "Secret",
  },
  null,
  {
    store:mongooseDB,
    resave: true,
    saveUninitalized: true,
    secret: " Secret",
    name: "adminjs",
  }
);
app.use(admin.options.rootPath, adminRouter);

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  // our only exception to avoiding debugLog(), because we
  // always want to know when the server is done starting up
  debugLog(runningMessage);
  debugLog(
    `AdminJS started on http://localhost:${port}${admin.options.rootPath}`
  );
});
