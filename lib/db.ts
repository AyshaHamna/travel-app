import mongoose, { mongo } from "mongoose";

const connection: { isConnected?: number } = {};

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect() {
  //if (connection.isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URI!);

    //connection.isConnected = db.connections[0].readyState;
    console.log("db is connected");
  } catch (error) {
    console.log("connection string: ", MONGODB_URI);
    console.log("error connecting to db", error);
  }
}

export default dbConnect;
