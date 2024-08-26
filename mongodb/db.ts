import mongoose, { mongo } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let isConnected = false; // Track connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("--- Already connected to MongoDB ---");
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    isConnected = true;
    console.log("--- MongoDB connection already established ---");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI!);
    isConnected = true;
    console.log("--- Connected to MongoDB ---");
  } catch (error) {
    console.log("--- Error connecting to MongoDB ---", error);
  }
}


export default connectDB;
