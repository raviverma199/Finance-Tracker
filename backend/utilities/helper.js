const bcrypt = require("bcrypt");
const { body } = require("express-validator");
/**
 *
 * --------  function for password bcrypt ---------------------
 */
async function BcryptPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);

    let HasedPassword = await bcrypt.hash(password, salt);

    return HasedPassword;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * ----------- function for password incrypt ------------------
 */

async function comparePasswords(plainTextPassword, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error(`Error comparing passwords: ${error.message}`);
  }
}

module.exports = { BcryptPassword, comparePasswords };
