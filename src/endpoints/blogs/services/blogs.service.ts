import BlogsDao from "../daos/blogs.dao";
import { CreateBlogDto } from "../dto/create.blogs.dto";
import express from 'express'

class BlogsService{
  async Create(resource: CreateBlogDto,UserId:string,req:express.Request){
    BlogsDao.addBlog(resource,UserId,req)
  }
}

export default new BlogsService