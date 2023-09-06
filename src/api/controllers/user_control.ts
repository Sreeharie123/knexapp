import { user } from '../../interface/userInterface';
import { createUser } from './../models/user_model';
import { Request, Response } from "express";

export const User = async (req: Request, res: Response) => {
    try {
        const { name, email, password, is_admin } = req.body
        const data: user = {
            name,
            email,
            password,
            is_admin
        }
        const user = await createUser(data)
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