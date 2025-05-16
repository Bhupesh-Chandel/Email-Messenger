import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async ()=>{
    const MONGODB_URI = process.env.MONGODB_URI;
    try{
       const connectionInstance = await mongoose.connect(MONGODB_URI);
       console.log(`DATABASE IS SUCCESSFULLY Connected AT : ${connectionInstance.connection.host}`);
    }
    catch(err){
      console.error(`ERROR while connecting to Database, ERROR : ${err}`);
    }
}