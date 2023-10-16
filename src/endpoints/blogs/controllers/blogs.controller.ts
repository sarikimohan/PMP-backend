import express from 'express'
import blogsDao from '../daos/blogs.dao'
import blogsService from '../services/blogs.service'

class BlogsController{
  async createBlog(req:express.Request,res:express.Response){

    const userId= res.locals.userId
    const images = req.files as Express.Multer.File[]
    console.log(images)
    console.log("fileData:",images[0].buffer)
    await blogsService.Create(req.body,userId.userId,req)
    res.sendStatus(200)
  }
}

export default new BlogsController