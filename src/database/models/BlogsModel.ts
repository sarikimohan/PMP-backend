import { model } from "mongoose";
import BlogsSchema from "../schemas/BlogsSchema";

const BlogsModel = model('Blogs',BlogsSchema)

export default BlogsModel