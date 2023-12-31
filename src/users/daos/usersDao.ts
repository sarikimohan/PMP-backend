import { CreateUserDto } from "../dto/createUserDto.js";
import { PatchUserDto } from "../dto/patchUserDto.js";
import { PutUserDto } from "../dto/putUserDto.js";
import mongooseService from "../../common/services/mongooseService.js";
import shortid from "shortid";
import debug from "debug";
import mongoose from "mongoose";
import UsersModel from "../../database/models/UsersModel.js";
import UserProfileModel from "../../database/models/UserProfileModel.js";

const debugLog: debug.IDebugger = debug("UsersDao: ");

class UsersDao {
 
  constructor() {
    debugLog("Created new instance of UsersDao");
  }

  async addUser(User: CreateUserDto) {
    const {}  = User
    var newUser:any
    try{
        newUser = await UsersModel.create({
        email:User.email,
        password:User.password,
        authId:1,
        loginVia:"EMAIL",
        identifier:"hello",
        timeOfSignUp:new Date()
      })
    }catch(err){
      debugLog(err)
    }
    

    await UserProfileModel.create({
      serialNo:1,
      userId:newUser._id+"",
      profileName:"User101",
      profilePicUri:"",
      about:"",
      typeOfProfile:User.typeOfProfile
    })
    return newUser._id
  }

  async getUserByEmailWithPassword(email: string) {
    return await UsersModel.findOne({ email: email }).select({_id:1,email:1,password:1})
        
}


  async getUserByEmail(email: string) {
    return UsersModel.findOne({ email: email }).exec();
  }

  async getUserById(userId: string) {
    return UsersModel.findOne({ _id: userId }).populate("User").exec();
  }

  async getUsers(limit = 25, page = 0) {
    return UsersModel.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    const existingUser = await UsersModel.findOneAndUpdate(
      { _id: userId },
      { $set: userFields },
      { new: true }
    ).exec();

    return existingUser;
  }

  async removeUserById(userId: string) {
    return UsersModel.deleteOne({ _id: userId }).exec();
  }
}

export default new UsersDao();
