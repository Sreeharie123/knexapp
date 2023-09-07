import { db } from "../../database/config/db";
import { user } from "../../interface/userInterface";

//Register usesr
export const registerUser = (data: user) => {
    return db('user').insert(data).returning("*")
}

//Check Email
export const checkEmail = (email: string) => {
    return db('user').where('email', email).first()
}