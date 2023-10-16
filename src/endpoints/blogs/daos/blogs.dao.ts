import Blogs from "../../../database/entities/Blogs";
import BlogsModel from "../../../database/models/BlogsModel";
import { CreateBlogDto } from "../dto/create.blogs.dto";
import express from 'express'

class BlogsDao{
  async addBlog(blog:CreateBlogDto,userId:string,req:express.Request){
    console.log("blog:",blog)

    const images = req.files as Express.Multer.File[]
  
    
    await BlogsModel.create({
        userId:userId,
        title:blog.title,
        description:blog.description,
        imageOneURI:{
          data:images[0].buffer,
          contentType:images[0].mimetype
        },
        imageTwoURI:{
          data:images[1].buffer,
          contentType:images[1].mimetype
        },
        publishTime:new Date()
    })

    return 
  }
}

export default new BlogsDao