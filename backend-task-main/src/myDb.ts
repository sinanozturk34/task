// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://sinanozturkcoder:${process.env.DB_PASSWORD}@cluster0.3hph2.mongodb.net/`;

export async function connectToDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri, {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    });
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
