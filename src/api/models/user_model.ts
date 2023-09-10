import { db } from "../../database/config/db";
import { user } from "../../interface/userInterface";

//Register user
export const registerUser = (data: user) => {
    return db('user').insert(data).returning("*").then((result: user[]) => {
        if (result) return result[0];
        else null
    })
}

//Check Email
export const checkEmail = (email: string) => {
    return db('user').where('email', email).first()
}

//Login User
export const loginUser = (email: string) => {
    return db('user').where({ email }).first()
}