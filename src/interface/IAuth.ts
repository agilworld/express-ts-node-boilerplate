import APIError from "../libs/error-api"

type ISignInWithPasswordOpts = {
  email: string,
  password: string
}

export type IObject = {
  [key: string]: any
} | null

export interface IAuth {
  createUser(opts: unknown):Promise<unknown>
  signInPassword(opts: unknown): Promise<unknown>
  signInProvider(opts: unknown): Promise<unknown>
  signOut():void
}


export interface IAuthMiddleware<T extends IObject> {
  user:T 
  userId:number | string
  error:APIError
  authorized(authData: string): Promise<void>
}
