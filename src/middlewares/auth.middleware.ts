import {type Request, type Response, type NextFunction} from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();
const jwtToken = process.env.JWT_SIGN_KEY;

export const verifyAuthCookie = (req: Request, res: Response, next: NextFunction) => {
    const cookie = req.cookies.session_key;

    if(!cookie) {
        return res.status(404).json({Message: 'TOKEN_NOT_PROVIDED'});
    }

    try {
        if(jwtToken) {
             const decoded = jwt.verify(cookie, jwtToken) as JwtPayload;
             req.email = decoded;
             next();
        } else {
            return res.status(404).json({Message: 'TOKEN_NOT_FOUND'})
        }
    } catch (err) {
        console.log(err);
        return res.status(403).json({Message: 'INVALID_TOKEN'});
    }
}