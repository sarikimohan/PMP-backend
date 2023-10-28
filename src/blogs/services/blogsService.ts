import debug from "debug";
import blogsDao from "../daos/blogsDao.js";
import BlogsDao from "../daos/blogsDao.js";
import { CreateBlogDto, UpdateBlogDto } from "../dto/blogsDto.js";
import express from 'express'

const debugLog : debug.IDebugger = debug('blogsService: ')
class BlogsService{
  async Create(resource: CreateBlogDto,UserId:string,req:express.Request){
    BlogsDao.addBlog(resource,UserId,req)
  }

  async delete(blogId:string){
    BlogsDao.deleteBlog(blogId)
  }

  async get(userId:string,blogId:string){
    const blogs = await BlogsDao.getBlogs(userId,blogId)
    return blogs
  }

  async update(req:express.Request){
    BlogsDao.updateBlog(req)
  }

  async getAllBlogs(){
    const blogs = BlogsDao.getAllBlogs()
    return blogs
  }
}


export default new BlogsService