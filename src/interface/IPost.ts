import APIError from "../libs/error-api"

export interface IUserType {
  name:string
  email:string
  phone:string
  role:string
  createdAt:string
  emailConfirmedAt:string
}

export interface IPostType {
  title: string
  slug: string
  content: string
  author: IUserType
  authorId: string
}

export type WherePosts = Partial<Omit<IPostType, "author">>

export type TCollectionBodyReq = {
  offset:number 
  limit:number
  order:string 
  orderBy:"asc" | "desc"
  keyword:string
}

export interface IPost {

  /**
   * Get all post with pagination
   * @param opts 
   */
  getPosts(data: unknown): Promise<unknown>


  /**
   * Retrieve single post
   * @param opts 
   */
  getPost(id: string): Promise<unknown>

  /**
   * create post
   * @param opts Object
   */
  createPost(body: unknown):Promise<unknown>

  /**
   * Update a post
   * @param opts 
   */
  updatePost(id:string, body: unknown): Promise<unknown>
}

