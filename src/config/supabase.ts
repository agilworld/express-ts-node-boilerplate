import { createClient } from '@supabase/supabase-js'
import vars from './vars'

export const supabase = createClient(vars.supabaseUrl, vars.supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})