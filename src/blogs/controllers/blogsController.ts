import express from "express";
import blogsDao from "../daos/blogsDao.js";
import blogsService from "../services/blogsService.js";
import jwt from "jsonwebtoken";
import debug from "debug";

const debugLog: debug.IDebugger = debug("blogsController: ");

class BlogsController {
  async createBlog(req: express.Request, res: express.Response) {
    const userId = res.locals.userId;
    const images = req.files as { [fieldname: string]: Express.Multer.File[] };

    // debugLog("fileData:",images.imageOne)
    await blogsService.Create(req.body, userId.userId, req);
    res.sendStatus(200);
  }

  async deleteBlog(req: express.Request, res: express.Response) {
    await blogsService.delete(req.body.blogId);
    res.sendStatus(200);
  }

  async getBlogs(req: express.Request, res: express.Response) {
    const blogs = await blogsService.get(res.locals.userId.userId,req.body.blogId);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(blogs);
  }

  async updateBlog(req: express.Request, res: express.Response) {
    await blogsService.update(req);
    res.status(200).send();
  }

  async getAllBlogs(req: express.Request, res: express.Response) {
    const blogs = await blogsService.getAllBlogs(req.body.blogId);
    // debugLog(blogs)
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({
      status:"success",
      blogs,
    });
  }
}

export default new BlogsController();
