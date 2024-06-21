import httpStatus from "http-status"
import { Request, Response, NextFunction } from "express"
import { SupabaseInstanceAuth } from "../services/authService"

/**
 * @public
 * const for auth service
 */
const AuthService = SupabaseInstanceAuth

// /**
//  * Update user
//  * @public
//  */
// export const updateUser = async (req:Request, res:Response, next:NextFunction) => {
//   try {
//     const userId = req.userId as string 
//     const paramsBody = req.body 
//     if( paramsBody ) {
//       const userRes = new UserRepository(userId)
//       // call update
//       await userRes.update(paramsBody)
//       res.status(httpStatus.CREATED).json({message:"Success Update"})
//     } else {
//       res.status(httpStatus.NOT_FOUND).json({message:"Not Found"})
//     }  
//   } catch (error) {
//     // next(User.checkDuplicateEmail(error));
//     res.status(httpStatus.BAD_REQUEST).json({message:"Bad Request"})
//   }
// };


/**
 * Get user
 * @public
 */
export const getUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const user = req.user
    return res.status(httpStatus.OK)
      .json({data:user});
  
  } catch (error) {
    console.log("error")
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

    if( resToken?.data ) {
      res.status(httpStatus.OK)
        .json(resToken.data)
    } else {
      res.status(httpStatus.UNAUTHORIZED)
        .json(resToken.error);
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



