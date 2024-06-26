import httpStatus from "http-status"
import { Request, Response } from "express"
import { PostInstanceService } from "../services/postService"
import { IObject } from "../interface/IGeneral"
import { TCollectionBodyReq, IPostType, IUserType } from "../interface/IPost"

/**
 * @public
 * const for auth service
 */
const PostService = PostInstanceService

/**
 * Fetch post
 * @public
 */
export const fetchPost = (req:Request, res:Response) => {
  try {
    const idPost = req.params.id as string
    const data = PostService.model.getPost(idPost)
    
    return res.status(httpStatus.OK)
      .json(data);

  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
      .json(error);
  }
};


/**
 * Get all posts
 * @public
 */
export const getPosts = (req:Request, res:Response) => {
  try {
    const body = req.body as TCollectionBodyReq
    const data = PostService.getPostsPagination(body?.offset, body?.limit)
    
    return res.status(httpStatus.OK)
      .json(data);

  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
      .json(error);
  }
}

/**
 * Get all posts
 * @public
 */
export const createPost = (req:Request, res:Response) => {
  try {
    const body = req.body as IPostType
    const paramsUser = req.user as IObject
    const dataUser = paramsUser?.user
    console.log("datauser", dataUser)
    const user = {
      id: dataUser?.id,
      name: dataUser?.name,
      email: paramsUser?.email,
      role: dataUser?.role,
      phone: dataUser?.phone,
      createdAt: dataUser?.created_at,
      emailConfirmedAt: dataUser?.email_confirmed_at
    } as unknown as IUserType
    
    const data = PostService.model.createPost(body, user)
    
    return res.status(httpStatus.CREATED)
      .json(data);

  } catch (error) {
    console.log("error", error)
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
      .json(error);
  }
};



