import { AuthError, AuthResponse, AuthTokenResponse, AuthTokenResponsePassword, SignInWithIdTokenCredentials, SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js"
import { IAuth, IObject } from "../../interface/IAuth"
import { supabase } from "../../config/supabase"

export interface ISupabaseRepoAuth extends IAuth {
  createUser(params:SignUpWithPasswordCredentials):Promise<AuthResponse>
  signInPassword(credentials:SignInWithPasswordCredentials):Promise<AuthTokenResponsePassword>
  signInProvider(credentials:SignInWithIdTokenCredentials):Promise<AuthTokenResponse>
  signOut()
}

export class SupabaseAuthentication implements ISupabaseRepoAuth {  

  async createUser(credentials:SignUpWithPasswordCredentials):Promise<AuthResponse> {
    const res = await supabase.auth.signUp(credentials)
    return res
  }

  async signInPassword(credentials:SignInWithPasswordCredentials):Promise<AuthTokenResponsePassword> {
    const res = await supabase.auth.signInWithPassword(credentials)
    return res
  }

  async signInProvider(credentials:SignInWithIdTokenCredentials):Promise<AuthTokenResponse> {
    const res = await supabase.auth.signInWithIdToken(credentials)
    return res
  }

  async signOut() {
    const { error } = await supabase.auth.signOut()
    return error
  }
}


