import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/create-user", createUser);

// router.post()
// router.delete()
// router.put()

export default router;