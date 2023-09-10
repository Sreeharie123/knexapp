import { user } from '../../interface/userInterface';
import { loginUser, registerUser } from './../models/user_model';
import { Request, Response } from "express";
import bcrypt from "bcrypt"

//Create User
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


// GetUser
export const getUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await loginUser(email)
        if (!user) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "User not found",
                result: null
            })
        }
        const checkPass = await bcrypt.compare(password, user.password)
        if (!checkPass) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Invalid password",
                result: null
            })
        }

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