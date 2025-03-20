import { Router } from "express";
import { registerLearnerController , registerEducatorController , signin , updateUserDetails} from "../controllers/user.js";

const userRouter = Router();

userRouter.post('/register-learner',registerLearnerController);
userRouter.post('/register-educator',registerEducatorController);
userRouter.post('/signin',signin);
userRouter.patch('/updateUserDetails', updateUserDetails)

export default userRouter