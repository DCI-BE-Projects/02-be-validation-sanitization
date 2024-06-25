import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import usersRoute from "./routes/usersRoute.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const PORT = process.env.PORT;

app.use("/", usersRoute);

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DB connected and server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
