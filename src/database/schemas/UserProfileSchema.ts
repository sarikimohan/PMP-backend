import { Schema } from "mongoose";
import UserProfile from "../entities/UserProfile.js";

const UserProfileSchema = new Schema<UserProfile>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique:true
  },
  profileName: {
    type: String,
    trim: true,
    default: "User101",
  },
  profilePicUri: {
    type: String,
  },
  aboutMe: {
    type: String,
    trim: true,
  },
  typeOfProfile: {
    type: String,
    required: true,
    enum: ["PMPADMIN", "TEACHER", "STUDENT"],
    default: "STUDENT",
  },
});

export default UserProfileSchema;
