import express from "express";
import { User } from "../controllers/user_control";
const router = express.Router();

router.post('/register', User)


export const userRoute = router



