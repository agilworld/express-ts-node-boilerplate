import express from "express"
import { loginUser, loginUserProvider, verifyByEmail } from "../controller/auth"

const router = express.Router();

router.post("/login.email", loginUser)
router.post("/login.withProvider", loginUserProvider)
router.get("/verify.email", verifyByEmail)

export default router