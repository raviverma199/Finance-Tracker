const express = require('express');
const route = express.Router();
const UserSignup = require('../controller/logincontroller')

route.post('/api/signup', UserSignup.signup)

route.post('/api/login', UserSignup.LoginController)

module.exports = route;