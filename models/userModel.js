import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "The first name is required!"],
    trim: true,
    minLength: [4, "firtName is too short ..."],
    maxLength: [8, "firstName is too long ..."],
  },
  email: {
    type: String,
    required: [true, "The email is required!"],
    validate: [validator.isEmail, "Email is not valid!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The email is required!"],
    minLength: [4, "The password is too short ..."],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm your password!"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Password does not match!",
    },
  },
});

//this code avoid to store confirmPassword field to our DB
userSchema.pre("save", function (next) {
  this.confirmPassword = undefined; //remove confirmPassword filed before to save to DB
  this.firstName =
    this.firstName.charAt(0).toUpperCase() +
    this.firstName.slice(1).toLowerCase(); //Jakub
  next();
});

// userSchema.pre("save", function (next) {
//   this.firstName =
//     this.firstName.charAt(0).toUpperCase() +
//     this.firstName.slice(1).toLowerCase(); //Jakub

//   next();
// });

const userModel = mongoose.model("user", userSchema);

export default userModel;