import { createTokenAndSaveInCookie } from "../jwt/generateToken.mjs";
import { User } from "../models/user.model.mjs";
import bcrypt from "bcryptjs";

export const signup = async (req,res)=>{
     const {name , email , password , confirmPassword} = req.body;
     let hashedPassword;

     // checking whether password match
     if(password !== confirmPassword){
        return res.status(400).json({
            message : "Passwords do not match"
        });
     }

     // hashing the password
     try{
        hashedPassword = await bcrypt.hash(password,10);
     }catch(err){
        console.error(`ERROR while hashing password, Error: ${err}`);
        return res.status(500).json("Error while password hashing");
     }

     // checking whether email already exists
     try{
        const userEmail = await User.findOne({emailAddress : email});
        if(userEmail){
           return res.status(400).json({message:"Email already Exists"});
        }
     }
     catch(err){
        return res.status(500).json({message : "ERROR while Validating Email"});
     }
     

     // creating a User
     try{
        const newUser = await User.create({fullName : name , emailAddress : email, password : hashedPassword});
        createTokenAndSaveInCookie(newUser._id,res);
        return res.status(201).json({message : "User Created Successfully" , user : {id : newUser._id , email : newUser.emailAddress , name : newUser.fullName }});
     }
     catch(err){
        console.error("ERROR while Creating User",err);
         return res.status(500).json({message : "ERROR while Creating User"});
     }
   
}

export const login = async(req,res)=>{
   try{
     const {email,password} = req.body;
      // find user email in database
      const ExistingUser = await User.findOne({emailAddress : email});

      if(!ExistingUser){
           return res.status(404).json({message : "Invalid Email or Password"});
      }

       // match provided password with hashed password
       const isMatched = await bcrypt.compare(password,ExistingUser.password);

      if(!isMatched){
         return res.status(404).json({message : "Invalid Email or Password"});
      }
         
      createTokenAndSaveInCookie(ExistingUser._id,res)
       return res.status(201).json({message : "User Logged in successfully" , user : {
            _id : ExistingUser._id,
            name : ExistingUser.fullName,
            email : ExistingUser.emailAddress,
      }});

     }
   catch(err){
      console.error(`Internal Server error , something went wrong while logging in , ERROR : ${err}`);
         return res.status(500).json({message : "Internal Server error , something went wrong while logging in"});
   }
}

export const logout = async(req,res)=>{
   try{
       return res.cookie("jwt","",{expires : new Date(0)}).status(200).json({message : "User Logged out"});
   }
   catch(err){
      console.error(`something went wrong while logging out , ERROR : ${err}`);
      return res.status(500).json({message : "Internal Server error , something went wrong while logging out"});
   }
}