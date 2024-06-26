import express from "express"
import { getPosts, fetchPost, createPost } from "../controller/post"

const router = express.Router();

router.post("/", createPost)
router.get("/:id", fetchPost)
router.get("/", getPosts)

export default router