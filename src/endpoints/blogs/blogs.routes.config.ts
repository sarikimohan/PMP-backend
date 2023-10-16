import { CommonRoutesConfig } from "../../../common/common.routes.config";
import express from "express";
import blogsController from "./controllers/blogs.controller";
import blogsMiddleware from "./middleware/blogs.middleware";
import multer from "multer";

const storage = multer.memoryStorage()
const upload = multer({storage:storage});
export class BlogsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "BlogsRoutes");
  }

  configureRoutes() {
    this.app.route(`/blogs/post`).post(
      upload.array('file'),
      blogsMiddleware.verifyAuth,
      blogsController.createBlog
    );

    return this.app;
  }
}
