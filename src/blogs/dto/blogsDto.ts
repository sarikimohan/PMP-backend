export interface CreateBlogDto{
  title:string,
  description:string,
  imageOne:string,
  imageTwo:string,
}

export interface UpdateBlogDto{
  blogId:string,
  title?:string,
  description?:string
}