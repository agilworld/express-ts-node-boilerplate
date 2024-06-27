import express from "express"
import { getPosts, fetchPost, createPost } from "../controller/post"
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware)
router.post("/create", createPost)
router.get("/:id", fetchPost)
router.get("/", getPosts)

export default router