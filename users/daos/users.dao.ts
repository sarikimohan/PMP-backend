import { CreateUserDto } from "../dto/create.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import { PutUserDto } from "../dto/put.user.dto";
import mongooseService from "../../common/services/mongoose.service";
import shortid from "shortid";
import debug from "debug";
import mongoose from "mongoose";
import UsersModel from "../../src/database/models/UsersModel";
import UserProfileModel from "../../src/database/models/UserProfileModel";

const log: debug.IDebugger = debug("app:in-memory-dao");

class UsersDao {
 
  constructor() {
    log("Created new instance of UsersDao");
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
      console.log(err)
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
    return await UsersModel.findOne({ email: email }).select({email:1,password:1})
        
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
