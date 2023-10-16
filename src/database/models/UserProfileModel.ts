import { model } from "mongoose";
import UsersSchema from "../schemas/UsersSchema";
import UserProfileSchema from "../schemas/UserProfileSchema";

const UserProfileModel = model('UserProfile',UserProfileSchema)

export default UserProfileModel