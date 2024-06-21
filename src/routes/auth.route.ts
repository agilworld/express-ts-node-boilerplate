import express from "express"
import { loginUser, loginUserProvider } from "../controller/auth"

const router = express.Router();

router.post("/login.email", loginUser)
router.post("/login.withProvider", loginUserProvider)

export default router