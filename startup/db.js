const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

module.exports = {
  client,
  async connect() {
    await client.connect();
    console.log("Connected to database");
  },
};
