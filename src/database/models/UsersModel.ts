import { model } from "mongoose";
import UsersSchema from "../schemas/UsersSchema.js";

const UsersModel = model('newUsers',UsersSchema)

export default UsersModel