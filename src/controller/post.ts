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
export const getUserPosts = (req:Request, res:Response) => {
  try {
    const body = req.body as TCollectionBodyReq
    const paramsUser = req.user as IObject
    const data = PostService.getUserPostsPagination(paramsUser?.id, body?.offset, body?.limit)
    
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
    // console.log("datauser", paramsUser)
    const user = {
      userId: paramsUser?.id,
      name: paramsUser?.name,
      email: paramsUser?.email,
      role: paramsUser?.role,
      phone: paramsUser?.phone,
      createdAt: paramsUser?.created_at,
      emailConfirmedAt: paramsUser?.email_confirmed_at
    } as unknown as IUserType

    const postData = {
      ...body,
      author:user,
      authorId:paramsUser?.id
    } as IPostType

    const data = PostService.model.createPost(postData)
    
    return res.status(httpStatus.CREATED)
      .json(data);

  } catch (error) {
    console.log("error", error)
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
      .json(error);
  }
};



