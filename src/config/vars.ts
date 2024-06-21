import path from "path"

// import .env variables
require('dotenv-safe').config();

type IProps = {
  env: string,
  port: number,
  jwtSecret: string 
  jwtExpirationInterval: string 
  supabaseUrl: string 
  supabaseAnonKey: string
}

const port:number = process.env.PORT as never

const config:IProps = {
  env: process.env.NODE_ENV!,
  port: port,
  jwtSecret: process.env.JWT_SECRET!,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES!,
  supabaseUrl: process.env.SUPABASE_URL!,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY!
}

export default config
