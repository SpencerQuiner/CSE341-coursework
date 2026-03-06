const { MongoClient } = require('mongodb');
require('dotenv').config();

let database;

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);

    await client.connect();

    database = client.db("professionaldb"); // your database name

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

const getDB = () => database;

module.exports = { connectDB, getDB };