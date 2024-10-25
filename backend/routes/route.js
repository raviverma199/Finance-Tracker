const express = require("express");
const route = express.Router();
const UserSignup = require("../controller/logincontroller");
const IncomeSource = require('../controller/income')




route.post("/api/signup", UserSignup.signup);
route.post("/api/login", UserSignup.LoginController);


route.post('/api/createincome', IncomeSource.createincome)

module.exports = route;
