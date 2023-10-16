import { Schema } from "mongoose";
import UserProfile from "../entities/UserProfile";

const UserProfileSchema = new Schema<UserProfile>({
  serialNo:{
    type:Number,
    required:true,
    trim:true,
  },
  userId:{
    type:Schema.Types.ObjectId,
    required:true,
  },
  profileName:{
    type:String,
    required:true,
    trim:true,
    default:"User101"
  },
  profilePicUri:{
    type:String,
  }, 
  aboutMe:{
    type:String,
    trim:true
  },
  typeOfProfile:{
    type:String,
    required:true,
    enum:[
      "PMPADMIN",
      "TEACHER",
      "STUDENT"
    ],
    default:"STUDENT"
  }
})

export default UserProfileSchema