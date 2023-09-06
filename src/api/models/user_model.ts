import { db } from "../../database/config/db";
import { user } from "../../interface/userInterface";

export const createUser = (data: user) => {
    return db('user').insert(data).returning("*")
}