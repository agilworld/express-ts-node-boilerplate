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
export class LocalAuthentication implements ILocalAuth {  

  async createUser(credentials:IObject):Promise<any> {
    // create user logic
  }

  async signInPassword(credentials:IObject):Promise<any> {
    // sign-in with password logic
  }

  async signInProvider(credentials:IObject):Promise<any> {
    // sign-in with token provider logic
  }

  async signOut() {
    // sign-out logic
  }
}


