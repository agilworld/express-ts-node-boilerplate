import { SupabaseAuthentication, ISupabaseRepoAuth } from "./supabase/Authentication"
import { LocalAuthentication, ILocalAuth } from "./local/Authentication"
import { SupabaseAuthorization, ISupabaseMiddleware } from "./supabase/Middleware"
import { IAuth, IAuthMiddleware, IObject } from "../interface/IAuth"

export class AuthService {
  /**
   * @public var auth instance
   * 
   */
  public auth:IAuth

  /**
   * @public var auth instance middleware
   */
  public middleware: IAuthMiddleware<IObject>

  /**
   * 
   * @param AuthProvider 
   * @param AuthMiddleware 
   */
  constructor(AuthProvider, AuthMiddleware) {
    this.auth = new AuthProvider()
    this.middleware = new AuthMiddleware()
  }
}

const supabaseAuthInstance = new AuthService(SupabaseAuthentication, SupabaseAuthorization)

export const SupabaseInstanceAuth =  supabaseAuthInstance.auth as ISupabaseRepoAuth

export const SupabaseInstanceMiddleware =  supabaseAuthInstance.middleware as ISupabaseMiddleware

// Instance of local
// const localAuthInstance = new AuthService(LocalAuthentication, SupabaseAuthorization)



