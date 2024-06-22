import httpStatus from "http-status"
import { Request, Response, NextFunction } from "express"
import { SupabaseInstanceAuth } from "../services/authService"

/**
 * @public
 * const for auth service
 */
const AuthService = SupabaseInstanceAuth

/**
 * Create user
 * @public
 */
export const createUserByEmail = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const paramsBody = req.body 
    if( paramsBody?.email && paramsBody?.password ) {
      const result = await AuthService.createUser(paramsBody)
      if( result.error ) {
        res.status(httpStatus.UNPROCESSABLE_ENTITY).json({code:result.error.code, message:result.error.message})
      } else {
        res.status(httpStatus.CREATED).json({message:"User Created"})
      }
    } else {
      res.status(httpStatus.BAD_REQUEST).json({message:"Bad Request"})
    }  
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:"Bad Request"})
  }
}

/**
 * Get user
 * @public
 */
export const getUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const user = req.user
    return res.status(httpStatus.OK)
      .json(user);

  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED)
      .json(error);
  }
};

/**
 * Login user
 * @public
 */
export const loginUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const email = req.body?.email 
    const password = req.body?.password 

    const resToken = await AuthService.signInPassword({
      email,
      password
    })

    if( resToken?.error ) {
      console.log("error", resToken.error)
      res.status(httpStatus.UNAUTHORIZED)
        .json(resToken.error)
    } else {
      res.status(httpStatus.OK)
        .json(resToken.data);
    }
    
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST)
      .json({message:"Bad Request"})
  }
};

export const loginUserProvider = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const provider = req.body?.provider 
    const token = req.body?.token 
    
    const resToken = await AuthService.signInProvider({
      provider,
      token
    })

    if( resToken?.data ) {
      res.status(httpStatus.OK)
        .json(resToken.data);
    } else {
      res.status(httpStatus.UNAUTHORIZED)
        .json(resToken.error)
    }
    
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST)
      .json({message:"Bad Request"})
  }
};



export const verifyByEmail = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const token = req.query?.access_token as string
    
    const result = await AuthService.verifyByEmail(token)

    if( result?.data ) {
      res.status(httpStatus.OK)
        .json(result.data);
    } else {
      res.status(httpStatus.UNAUTHORIZED)
        .json(result.error)
    }
    
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST)
      .json({message:"Bad Request"})
  }
};


