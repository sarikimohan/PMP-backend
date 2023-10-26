import { model } from "mongoose";
import BlogsSchema from "../schemas/BlogsSchema.js";

const BlogsModel = model('Blogs',BlogsSchema)

export default BlogsModel