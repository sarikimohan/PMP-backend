import { model } from "mongoose";
import UsersSchema from "../schemas/UsersSchema.js";
import UserProfileSchema from "../schemas/UserProfileSchema.js";

const UserProfileModel = model('UserProfiles',UserProfileSchema)

export default UserProfileModel