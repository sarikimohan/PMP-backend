import mongoose from "mongoose";

export default interface UserProfile {
  _id: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId,
  profileName:string,
  profilePicUri:string|null,
  aboutMe:string|null,
  typeOfProfile: "PMPADMIN"|"TEACHER"|"STUDENT"
}
