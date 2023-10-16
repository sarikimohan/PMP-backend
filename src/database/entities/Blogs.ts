import mongoose, { mongo } from "mongoose";


export default interface Blogs{
  _id:mongoose.Schema.Types.ObjectId,
  userId:mongoose.Schema.Types.ObjectId,
  title:string,
  description:string,
  imageOneURI:{
    data: Buffer,
    contentType:string
  },
  imageTwoURI?:{
    data: Buffer,
    contentType:string
  },
  publishTime:Date
}