import mongoose, { Schema } from "mongoose";
import Blogs from "../entities/Blogs.js";

const BlogsSchema = new Schema<Blogs>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  imageOneURI: {
    type: {
      data: Buffer,
      contentType: String,
    },
    trim: true,
  },
  imageTwoURI: {
    type: {
      data: Buffer,
      contentType: String,
    },
    trim: true,
  },
  publishTime: {
    type: Date,
    required: true,
    trim: true,
  },
});

export default BlogsSchema;
