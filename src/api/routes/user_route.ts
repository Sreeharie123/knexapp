import express from "express";
import { createUser } from "../controllers/user_control";
import { checkmail } from "../middlewares/checkemail";
const router = express.Router();

//Register the user
router.post('/register', checkmail, createUser)


export const userRoute = router



