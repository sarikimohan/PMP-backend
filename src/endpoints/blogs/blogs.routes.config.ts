import { CommonRoutesConfig } from "../../../common/common.routes.config";
import express from "express";
import blogsController from "./controllers/blogs.controller";
import blogsMiddleware from "./middleware/blogs.middleware";
import multer from "multer";
import blogsVerifyUser from "./middleware/blogs.verifyUser";

const storage = multer.memoryStorage()
const upload = multer({storage:storage});
export class BlogsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "BlogsRoutes");
  }

  configureRoutes() {
    this.app.route(`/blogs/post`).post(
      upload.fields([
        {name:'imageOne',maxCount:1},
        {name:'imageTwo',maxCount:1}
      ]),
      blogsMiddleware.verifyAuth,
      blogsController.createBlog
    );

    this.app.route(`/blogs/delete`).delete(
      blogsMiddleware.verifyAuth,
      blogsVerifyUser.verifyUser,
      blogsController.deleteBlog
    )

    this.app.route(`/blogs/get`).get(
      blogsMiddleware.verifyAuth,
      blogsController.getBlogs
    )

    this.app.route(`/blogs/getAllBlogs`).get(
      blogsController.getAllBlogs
    )

    this.app.route(`/blogs/update`).patch(
      upload.fields([
        {name:'imageOne',maxCount:1},
        {name:'imageTwo',maxCount:1}
      ]),
      blogsMiddleware.verifyAuth,
      blogsVerifyUser.verifyUser,
      blogsController.updateBlog
    )


    return this.app;
  }
}
