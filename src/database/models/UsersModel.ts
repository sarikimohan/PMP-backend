import { model } from "mongoose";
import UsersSchema from "../schemas/UsersSchema";

const UsersModel = model('newUsers',UsersSchema)

export default UsersModel