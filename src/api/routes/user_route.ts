import express from "express";
import { createUser, getUser } from "../controllers/user_control";
import { checkmail } from "../middlewares/checkemail";
const router = express.Router();

//Register the user
router.post('/register', checkmail, createUser)

//Login the User
router.get('/login', getUser)

export const authRoute = router



