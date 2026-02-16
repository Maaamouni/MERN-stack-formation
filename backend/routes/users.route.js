import express from "express";
import { getUsers, CreateUser } from "../controllers/users.controller.js";

const router = express.Router();

router.post('/api/users', CreateUser)
router.get('/api/users', getUsers)

export default router;