import { NextFunction, Request, Response } from "express";
import { checkEmail } from "../models/user_model";

export const checkmail = async (req: Request, res: Response, next: NextFunction) => {

    const email = await checkEmail(req.body.email)
    console.log(email)
    if (email) {
        res.status(402).json({
            status: 402,
            success: false,
            message: "Email already exist",
        })
    } else {
        next()
    }
}