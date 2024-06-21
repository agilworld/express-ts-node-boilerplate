import express from "express"
import { loginUser, loginUserProvider, createUserByEmail } from "../controller/auth"

const router = express.Router();

router.post("/login.email", loginUser)
router.post("/login.withProvider", loginUserProvider)
router.post("/signup.email", createUserByEmail)

export default router