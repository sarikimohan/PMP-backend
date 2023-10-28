import { model } from "mongoose";
import RefreshTokenSchema from "../schemas/RefreshTokenSchema.js";


const RefreshTokensModel = model('RefreshTokens',RefreshTokenSchema)


export default RefreshTokensModel