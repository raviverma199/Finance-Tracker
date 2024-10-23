const jwt = require("jsonwebtoken");
require("dotenv").config();

function CreateToken(userId) {
  try {
    const secretkey = process.env.secretkey || "RAvi#@$#@@#@@$#$";
    const payload = { userId: userId };

    const options = { expiresIn: "30d" };

    return jwt.sign(payload, secretkey, options);
  } catch (error) {
    throw new Error(error);
  }
}


/**
 * 
 * -----------------------  Auth handler for Exisitng Token -----------------------
 * 
 */

function isTokenValid (Token, secretkey) {
  try {

    jwt.verify(Token, secretkey)

    return true
    
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { CreateToken };
