import { user } from '../../interface/userInterface';
import { registerUser } from './../models/user_model';
import { Request, Response } from "express";
import bcrypt from "bcrypt"


export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, is_admin } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const data: user = {
            name,
            email,
            password: hashPassword,
            is_admin
        }
        const user = await registerUser(data)
        res.status(200).json({
            status: 200,
            message: "success",
            success: true,
            result: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Internal Server Error",
            error: error
        })
    }
}
