import { User, UserResponse } from "@supabase/supabase-js";
import { supabase } from "../../config/supabase";
import { IAuthMiddleware } from "../../interface/IAuth";
import APIError from "../../libs/error-api";

export interface ISupabaseMiddleware extends IAuthMiddleware<UserResponse["data"]["user"]> {}

export class SupabaseAuthorization implements ISupabaseMiddleware  {
  public user: User
  public userId: string | number
  public error: APIError

  async authorized(authData: string){
    try {
      if (!authData || !authData.startsWith('Bearer ')) {
        throw new APIError({ message:"Unauthorized" })
      }
  
      const token = authData.split(' ')[1];
      const res = await supabase.auth.getUser(token)
  
      if( res.error ) {
        throw new APIError({ message:"Unauthorized" })
      } else {
        this.user = res.data.user
        this.userId = res.data.user?.id
      }
    } catch (error) {
      if( error instanceof APIError) {
        this.error = error
      }
    }
   
  }
}