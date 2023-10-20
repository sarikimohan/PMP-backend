import express from 'express'
import blogsDao from '../daos/blogs.dao'
import blogsService from '../services/blogs.service'
import jwt from 'jsonwebtoken'

class BlogsController{
  async createBlog(req:express.Request,res:express.Response){

    const userId= res.locals.userId
    const images = req.files as {[fieldname: string]: Express.Multer.File[]}

    // console.log("fileData:",images.imageOne)
    await blogsService.Create(req.body,userId.userId,req)
    res.sendStatus(200)
  }

  async deleteBlog(req:express.Request,res:express.Response){
    await blogsService.delete(req.body.blogId)
    res.sendStatus(200)
  }

  async getBlogs(req:express.Request,res:express.Response){
    const blogs = await blogsService.get(res.locals.userId.userId)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(blogs)
  }

  async updateBlog(req:express.Request,res:express.Response){
    await blogsService.update(req)
    res.status(200).send()
  }

  async getAllBlogs(req:express.Request,res:express.Response){
    const blogs = await blogsService.getAllBlogs()
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(blogs)
  }
}

export default new BlogsController