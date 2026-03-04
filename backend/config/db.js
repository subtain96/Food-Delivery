import mongoose from "mongoose";

export const connectDB = async () =>{
  await mongoose.connect('mongodb+srv://awaisi-food:528008@cluster0.wi8qakj.mongodb.net/food-del').then(() =>console.log("Database is connected successfully"));

}