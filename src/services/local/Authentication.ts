import { IAuth, IObject } from "../../interface/IAuth"

export interface ILocalAuth extends IAuth {
  createUser(params:IObject):Promise<any>
  signInPassword(credentials:IObject):Promise<any>
  signInProvider(credentials:IObject):Promise<any>
  signOut()
}

 /**
  * Local auth
  */
export class LocalAuthentication implements Partial<ILocalAuth> {  

   /* eslint-disable @typescript-eslint/require-await */
  async createUser(credentials:IObject):Promise<any> {
    /* 
      remove comment eslint when put codes with await keyword
      create user logic 
    */
    console.log(credentials)
  }

  async signInPassword(credentials:IObject):Promise<any> {
    // sign-in with password logic
    /* 
      remove comment eslint when put codes with await keyword
      create user logic 
    */
    /* eslint-disable @typescript-eslint/require-await */
    console.log(credentials)
  }

  async signInProvider(credentials:IObject):Promise<any> {
    // sign-in with token provider logic
    /* 
      remove comment eslint when put codes with await keyword
      create user logic 
    */
     
    console.log(credentials)
  }

  async signOut() {
    // sign-out logic
  }
}


