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

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(403);
  }

  jwt.verify(token, 'RAvi#@$#@@#@@$#$', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = { CreateToken, authenticateJWT };
