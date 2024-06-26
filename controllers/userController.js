import userModel from "../models/userModel.js";

//import { validationResult } from "express-validator";

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  try {
    //here code
    //validation results
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({
    //     errors: errors.array().map((err) => err.msg),
    //   });
    // }

    const user = req.body;
    console.log(user);
    const newUser = new userModel(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    //here catch the error
    res.status(409).json({ msg: error.message });
  }
};