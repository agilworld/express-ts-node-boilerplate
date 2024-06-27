import { IObject } from "../../interface/IGeneral";
import { IPost } from "../../interface/IPost";
import { prisma } from "../../config/prisma";
import { IUserType, IPostType, WherePosts} from "../../interface/IPost";
import { Prisma } from "@prisma/client";

export interface ILocalPost extends IPost {
  createPost(body:IPostType)
  getPost(id:string)
  getPosts(args:Prisma.PostFindFirstArgs)
  updatePost(id:string, body:IObject)
}

export class LocalPosts implements ILocalPost {
  async createPost(body: IPostType): Promise<unknown> {
    const res = await prisma.post.create({
      data: {
        content: body.content,
        title: body.title,
        slug: body.slug,
        authorId: body.authorId
      }
    })
    return res
  }

  async getPost(id: string): Promise<unknown> {
    const data = await prisma.post.findFirst({
      where:{
        id:id
      }
    })
    return data
  }

  async getPosts(args: Prisma.PostFindManyArgs): Promise<unknown> {
    const data = await prisma.post.findMany(args)
    return data
  }

  async updatePost(id:string, args: Prisma.PostUpdateInput) {
    const data = await prisma.post.update({
      data:args,
      where:{
        id:id
      }
    })
    return data
  }
}