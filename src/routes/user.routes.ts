import express from "express"
import {  getUser } from "../controller/auth"
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware)
router.get("/", getUser)
  
export default router