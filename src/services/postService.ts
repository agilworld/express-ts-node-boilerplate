import { ILocalPost, LocalPosts } from "./local/Post"
import { IPost } from "../interface/IPost"

export class PostService {

  /**
   * @public var post instance
   */
  public model: ILocalPost

  /**
   * @param PostProvider 
   */
  constructor(PostProvider) {
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    this.model = new PostProvider()
  }
}


const postInstance = new PostService(LocalPosts)

export const PostInstanceService = postInstance