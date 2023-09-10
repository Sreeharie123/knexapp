import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"


const secutiryKey = process.env.ACCESS_TOKEN_SECRET as string

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers['token']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).json({
        message: "Unauthorized",
        status: 401,
        success: false
    })
    jwt.verify(token, secutiryKey, (err: any, user: any) => {
        if (err) return res.sendStatus(403).json({
            message: "Invalid token",
            status: 403,
            success: false
        })
        req.user = user
        next()
    })
}
