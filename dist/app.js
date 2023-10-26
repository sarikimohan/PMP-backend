import dotenv from "dotenv";
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
}
import express from "express";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import { UsersRoutes } from "./users/userRoutesConfig.js";
import debug from "debug";
import mongoose from "mongoose";
import { AuthRoutes } from "./auth/authRoutesConfig.js";
import { BlogsRoutes } from "./blogs/blogsRoutesConfig.js";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import UsersModel from "./database/models/UsersModel.js";
import { Database, Resource } from '@adminjs/mongoose';
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
const app = express();
const server = http.createServer(app);
const port = 3000;
const routes = [];
const debugLog = debug("app");
app.use(express.json());
app.use(cors());
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
app.use(expressWinston.logger(loggerOptions));
routes.push(new UsersRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new BlogsRoutes(app));
const runningMessage = `Server running at http://localhost:${port}`;
app.get("/", (req, res) => {
    res.status(200).send(runningMessage);
});
AdminJS.registerAdapter({
    Resource: Resource,
    Database: Database,
});
const mongooseDB = await mongoose
    .connect(process.env.DATABASE_STRING)
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
const BookResourceOptions = {
    databases: [mongooseDB],
    resource: UsersModel,
};
const BlogsResourceOptions = {
    databases: [mongooseDB],
    resource: BlogsModel
};
const UsersProfileResourceOptions = {
    databases: [mongooseDB],
    resource: UserProfileModel
};
const adminOptions = {
    rootPath: "/admin",
    resources: [BookResourceOptions, BlogsResourceOptions, UsersProfileResourceOptions],
};
const admin = new AdminJS(adminOptions);
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
    authenticate,
    cookieName: "AdminJS",
    cookiePassword: "Secret",
}, null, {
    store: mongooseDB,
    resave: true,
    saveUninitalized: true,
    secret: " Secret",
    name: "adminjs",
});
app.use(admin.options.rootPath, adminRouter);
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    debugLog(runningMessage);
    debugLog(`AdminJS started on http://localhost:${port}${admin.options.rootPath}`);
});
