import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to DB...");

    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("DB Error:", error.message);
    throw error;
  }
};

export default connectDB;
