import express from 'express';
import { loginUser } from '../controllers/userControllers';
import { registerUser } from '../controllers/userControllers';

const userRouter = express.Router()


userRouter.post("/register" , registerUser)
userRouter.post("/login", loginUser)

export default userRouter;
