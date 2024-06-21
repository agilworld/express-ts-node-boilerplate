import { Request, Response, NextFunction } from "express"
import { SupabaseInstanceMiddleware } from "../services/authService";

const AuthorizationService = SupabaseInstanceMiddleware

const authMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { authorization } = req.headers;
        
        await AuthorizationService.authorized(authorization as string)

        if( AuthorizationService.error ) {
            return res.status(401).json({ error: AuthorizationService.error.message });
        } else {
            req.user = AuthorizationService.user
            req.userId = AuthorizationService.userId as string
            next();
        }
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default authMiddleware