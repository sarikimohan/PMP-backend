import mongoose from "mongoose";

export default interface Users{
  _id:mongoose.Schema.Types.ObjectId,
  authId:number,
  email:string,
  password:string,
  loginVia:"EMAIL"|"MOBILE_NUMBER",
  identifier:string,
  timeOfSignUp:Date
}