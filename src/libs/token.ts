import jwt from "jwt-simple"
import bcrypt from "bcryptjs"
import moment from "moment-timezone";
import vars from "../config/vars"

export const generateToken = (id:string) => {
  const payload = {
    exp: moment().add(vars.jwtExpirationInterval, 'minutes').unix(),
    iat: moment().unix(),
    sub: id
  };
  return jwt.encode(payload, vars.jwtSecret);
}

export const passwordMatches = async (password:string, hashedPassword:string) => {
  const res = bcrypt.compare(password, hashedPassword)
  return res
}

export const hashPassword = (password:string) => {
  const hashed = bcrypt.hashSync(password)
  return hashed
}