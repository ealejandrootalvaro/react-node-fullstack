import express from 'express';
import { authenticateToken } from '../../middlewares/index';
import { getPosts } from "./posts";

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    console.log("post req.body", req.body)
    res.json(getPosts(req.token));
})

export default router;