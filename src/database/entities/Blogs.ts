import mongoose, { mongo } from "mongoose";


export default interface Blogs{
  _id:mongoose.Schema.Types.ObjectId,
  userId:mongoose.Schema.Types.ObjectId,
  title:string,
  description:string,
  imageOneURI:{
    data: Buffer|null,
    contentType:string|null
  },
  imageTwoURI:{
    data: Buffer|null,
    contentType:string|null
  },
  publishTime:Date
}