import blogsDao from "../daos/blogsDao";
import BlogsDao from "../daos/blogsDao";
import { CreateBlogDto, UpdateBlogDto } from "../dto/blogsDto";
import express from 'express'

class BlogsService{
  async Create(resource: CreateBlogDto,UserId:string,req:express.Request){
    BlogsDao.addBlog(resource,UserId,req)
  }

  async delete(blogId:string){
    BlogsDao.deleteBlog(blogId)
  }

  async get(userId:string){
    const blogs = await BlogsDao.getBlogs(userId)
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