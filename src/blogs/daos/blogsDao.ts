import debug from "debug";
import Blogs from "../../database/entities/Blogs.js";
import BlogsModel from "../../database/models/BlogsModel.js";
import { CreateBlogDto, UpdateBlogDto } from "../dto/blogsDto.js";
import express from "express";

const debugLog : debug.IDebugger = debug('blogsDao: ')
class BlogsDao {
  async addBlog(blog: CreateBlogDto, userId: string, req: express.Request) {
    // debugLog("blog:",blog)

    const images = req.files as { [fieldname: string]: Express.Multer.File[] };

    await BlogsModel.create({
      userId: userId,
      title: blog.title,
      description: blog.description,
      imageOneURI: {
        data: images.imageOne == undefined ? null : images.imageOne[0].buffer,
        contentType:
          images.imageOne == undefined ? null : images.imageOne[0].mimetype,
      },
      imageTwoURI: {
        data: images.imageTwo == undefined ? null : images.imageTwo[0].buffer,
        contentType:
          images.imageTwo == undefined ? null : images.imageTwo[0].mimetype,
      },
      publishTime: new Date(),
    });

    return;
  }

  async updateBlog(req: express.Request) {
    const blogData = req.body;
    const blog = await BlogsModel.findOne({ _id: blogData.blogId });
    if (blog) {
      if (blogData.title) {
        blog.title = blogData.title;
      }
      if (blogData.description) {
        blog.description = blogData.description;
      }
      const images = req.files as {
        [fieldname: string]: Express.Multer.File[];
      };
      if (images) {
        if (images.imageOne != undefined) {
          blog.imageOneURI.data = images.imageOne[0].buffer;
          blog.imageOneURI.contentType = images.imageOne[0].mimetype;
        }

        if (images.imageTwo != undefined) {
          (blog.imageTwoURI.data = images.imageTwo[0].buffer),
            (blog.imageTwoURI.contentType = images.imageTwo[0].mimetype);
        }
      }

      await blog.save()
    }
  }

  async deleteBlog(blogId: string) {
    await BlogsModel.deleteOne({ _id: blogId });
    return;
  }

  async getBlogs(userId: string,blogId?:string) {
    let blogs
    debugLog("userId", userId);
    if(blogId==undefined||blogId==null){
      blogs = await BlogsModel.find().sort({_id:-1}).limit(5)
    }else{
      blogs = (await BlogsModel.find({ userId: userId,_id:{$lt:blogId} }).limit(5)).reverse();
    }
  

    const result = blogs.map((v) => {
      return {
        _id: v._id,
        title: v.title,
        description: v.description,
        imageOneUrl:
          v.imageOneURI == undefined
            ? ""
            : `data:${v.imageOneURI.contentType};base64,${
                v.imageOneURI.data == null
                  ? ""
                  : v.imageOneURI.data.toString("base64")
              }`,
        imageTwoUrl:
          v.imageTwoURI == undefined
            ? ""
            : `data:${v.imageTwoURI.contentType};base64,${
                v.imageTwoURI.data == null
                  ? ""
                  : v.imageTwoURI.data.toString("base64")
              }`,
      };
    });
    debugLog(result.length)
    return result;
  }

  async getAllBlogs(blogId?:string){
    let blogs
    if(!blogId||blogId==null){
      blogs = await BlogsModel.find().sort({_id:-1}).limit(5)
    }else{
      blogs = (await BlogsModel.find({_id:{$lt:blogId}}).limit(5)).reverse()
    }
    debugLog("blogs:",blogs)
    const result = blogs.map((v) => {
      return {
        _id: v._id,
        title: v.title,
        description: v.description,
        imageOneUrl:
          v.imageOneURI == undefined
            ? ""
            : `data:${v.imageOneURI.contentType};base64,${
                v.imageOneURI.data == null
                  ? ""
                  : v.imageOneURI.data.toString("base64")
              }`,
        imageTwoUrl:
          v.imageTwoURI == undefined
            ? ""
            : `data:${v.imageTwoURI.contentType};base64,${
                v.imageTwoURI.data == null
                  ? ""
                  : v.imageTwoURI.data.toString("base64")
              }`,
      };
    });
    // debugLog(blogs)
    return result;
  }
}

export default new BlogsDao();
