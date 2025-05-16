import jwt from "jsonwebtoken";

export const createTokenAndSaveInCookie = (UserId,res)=>{

 // generating token 
 const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
 const token = jwt.sign({UserId},JWT_SECRET_KEY,{
    expiresIn : "5d",
 });

 // setting cookie in the client's browser
 res.cookie("jwt",token,{
    httpOnly : true ,// helps against xss
    secure : true ,
    sameSite : "strict",   // helps against CSRF
 });
}