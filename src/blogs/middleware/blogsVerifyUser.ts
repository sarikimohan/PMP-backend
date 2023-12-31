import express from 'express'
import jwt from 'jsonwebtoken'
import BlogsModel from '../../database/models/BlogsModel.js'
import debug from 'debug'


const debugLog : debug.IDebugger = debug('blogsVerifyUser: ')
class BlogsVerifyUser{
  async verifyUser(
    req:express.Request,
    res:express.Response,
    next:express.NextFunction
  ){
    try{
      const reqId= res.locals.userId.userId
      const userId= await BlogsModel.findOne({_id:req.body.blogId})
      if(userId&&reqId===userId.userId+""){
        next()
      }else{
        throw new Error('User not authorized to deleted the blog')
      }
    }
    catch(err){
      debugLog(err)
      res.status(401).send(err)
    }
  }
}

export default new BlogsVerifyUser