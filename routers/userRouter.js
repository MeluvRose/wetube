import express from "express";
import routes from "../routes";
import {  
    userDetail, 
    editProfile, 
    changePassword
} from "../controllers/userController";
import { home } from "../controllers/videoController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;