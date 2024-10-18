const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async () => {
  const BASE_CONN_URL = process.env.DBURL;
  try {
    const conn = await mongoose.connect(BASE_CONN_URL, {
      maxPoolSize: 10, // Sets the maximum number of connections in the pool
    });

    console.log("Database conncted Succesfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = ConnectDB;
