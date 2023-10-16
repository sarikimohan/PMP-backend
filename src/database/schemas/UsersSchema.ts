import { Schema } from "mongoose";
import Users from "../entities/Users";

const UsersSchema = new Schema<Users>({
  authId:{
    type:Number,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
  password:{
    type:String,
    trim:true,
    required:true
  },
  loginVia:{
    type:String,
    required:true,
    enum:[
      "EMAIL",
      "MOBILE_NUMBER"
    ],
    default:"EMAIL",
    trim:true,
  },
  identifier:{
    type:String,
    required:true,
    trim:true,
  },
  timeOfSignUp:{
    type:Date,
    required:true,
    trim:true,
  }
})

export default UsersSchema