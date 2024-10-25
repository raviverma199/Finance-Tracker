const User = require("../models/user");
const AppError = require("../utilities/errorhandler");
const { BcryptPassword, comparePasswords } = require("../utilities/helper");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { CreateToken } = require("../utilities/authhandler");

exports.signup = async (req, res, next) => {
  try {
    let errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success: false });
    }

    let { username, email, password, country } = req.body;
    let city = "New Delhi";
    let status = "Active";

    let HasedPassword = await BcryptPassword(password);

    let NewUser = await User.create({
      username,
      email,
      password: HasedPassword,
      country,
      city,
      status,
    });

    if (NewUser) {
      return res.status(200).json({
        msg: "User Created Successfully",
        success: true,
      });
    } else {
      return res.status(500).json({
        msg: "User Creation Failed",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// ----------------- Login User --------------------
exports.LoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ msg: "Password is incorrect", success: false });
    }

    const token = CreateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Strict", // Helps mitigate CSRF
    });

    return res.status(200).json({
      msg: "Login successful",
      success: true,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "An unexpected error occurred. Please try again later.",
      success: false,
    });
  }
};
