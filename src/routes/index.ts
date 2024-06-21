import express from "express"
import userRoutes from "./user.routes"
import authRoutes from "./auth.route"

const router = express.Router();

router.get('/status', (req, res) => res.send('Ok!'));

router.use('/user', userRoutes);

router.use('/auth', authRoutes);

export default router
