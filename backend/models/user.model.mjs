import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   fullName : {
    type : String,
    required : true,
   },
   emailAddress : {
      type : String,
      required : true,
      unique : true,
      lowercase : true,
   },
   password : {
    type : String,
    required : true,
   },
},{
    timestamps : true,
});

export const User = mongoose.model("User",userSchema);