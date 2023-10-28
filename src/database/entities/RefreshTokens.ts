import mongoose from "mongoose";

export default interface RefreshToken{
  _id:mongoose.Schema.Types.ObjectId,
  refreshTokens:string[];
}