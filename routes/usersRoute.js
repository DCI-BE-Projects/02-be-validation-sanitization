import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";

//import { body } from "express-validator";

const router = express.Router();

//http://localhost:5000/
router.get("/", getUsers);

//http://localhost:5000/create-user
router.post(
  "/create-user",
  // [
  //   body("firstName").notEmpty().withMessage("First name is required").trim(),
  //   body("email")
  //     .isEmail()
  //     .withMessage("Email is not correct!")
  //     .normalizeEmail(),
  //   body("password")
  //     .isLength({ min: 4 })
  //     .withMessage("Password is too short ...")
  //     .custom((val, { req }) => {
  //       if (val !== req.body.confirmPassword) {
  //         throw new Error("Password and confirm password do not match");
  //       } else {
  //         return val;
  //       }
  //     }),
  // ],
  createUser,
);

// router.post()
// router.delete()
// router.put()

export default router;