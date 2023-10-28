import { Schema } from "mongoose";
import RefreshToken from "../entities/RefreshTokens.js";

const RefreshTokenSchema = new Schema<RefreshToken>({
  refreshTokens:{
    type:[],
    default:[]
  }
})

export default RefreshTokenSchema