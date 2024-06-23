import APIError from "../libs/error-api"

export type IObject = {
  [key: string]: any
} | null

export interface IAuth {
  /**
   * create/sign-up user
   * @param opts Object
   */
  createUser(opts: unknown):Promise<unknown>

  /**
   * Sign-in user with password & email
   * @param opts 
   */
  signInPassword(opts: unknown): Promise<unknown>

  /**
   * Sign-in user with provider Google, Github, Facebook
   * @param opts 
   */
  signInProvider(opts: unknown): Promise<unknown>

  /**
   * Verify user by email, just pass token itself
   * @param token String
   */
  verifyByEmail(token:string):Promise<unknown>

  /**
   * Verify user by token & email
   * @param token String
   * @param email String
   */
  verifyOTPByEmail(token:string, email:string): Promise<unknown>

  /**
   * Verify user by token & email
   * @param token String
   * @param phone String
   */
  verifyOTPByPhone(token:string, phone:string): Promise<unknown>

  /**
   * Sign out user method
   */
  signOut():void
}


export interface IAuthMiddleware<T extends IObject> {
  user:T 
  userId:number | string
  error:APIError
  authorized(authData: string): Promise<void>
}
