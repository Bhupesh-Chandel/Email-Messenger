import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.mjs";
import userRouter from "./routes/user.route.mjs"
import cors from "cors";

//configuring dotenv for this file
dotenv.config();

//initialised app 
const app = express();

// initilaising mongodb atlas database
connectDB();

//constants
const PORT = process.env.PORT;

//middleware 
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// router routes
app.use("/user",userRouter);

//route
app.get("/",(req,res)=>{
    res.send("Hello Bhupesh , your server is On");
});

// Initialize server and listen for incoming requests
app.listen(PORT,()=>{
     console.log(`SERVER is Listening on PORT ${PORT}`);
});