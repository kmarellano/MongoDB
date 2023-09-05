const mongoose = require("mongoose");

const startDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}${process.env.DB_COLL}`);
  } catch (err) {
    throw err;
  }
};

module.exports = startDB;
