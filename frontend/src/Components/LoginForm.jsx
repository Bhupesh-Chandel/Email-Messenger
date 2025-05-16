import React, { useState } from 'react'
import { IoIosMail} from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import {useForm} from "react-hook-form";
import axios from "axios";

function LoginForm() {
  
  const {register , handleSubmit , formState : {errors}} = useForm();

  
  const onFormSubmit = async (data)=>{
    try{
      const response = await axios.post("http://localhost:5001/user/login",data);
      console.log(response.data.message);

      // save userData recieved from backend into browser's localStorage
      let flattened_string_data = JSON.stringify(response.data.user);
      localStorage.setItem("Email_Messenger",flattened_string_data);

      // give alert on frontend
      alert("Login Successful");
    }
    catch(err){
      if(err.response){
        console.error(`Error while making a Request to /login , Error Mesage : ${err.response.data.message}`);
        alert(`${err.response.data.message}`);
      }
      else{
        console.error("unKnown Error While Making a Post Request at /Login" + err);
        alert("unKnown Login Error");
      }
      
    }
       
  }

  return (
    <>
     <div className='flex h-screen w-screen justify-center items-center'>
         <form onSubmit={handleSubmit(onFormSubmit)}>
         <div className='border-2 border-black w-[400px] flex justify-center mx-auto rounded-md bg-white'>
             <div className="p-5 flex flex-col gap-8 w-[96%] ">
             <div className="flex flex-col w-[100%] justify-center gap-y-1.5 mt-4">
               <h1 className='text-blue-800 text-center text-2xl tracking-wide font-semibold'>Email Messenger</h1>
               <h2 className='text-center text-2xl tracking-wide'>Login with your <span className='text-blue-700'>Account</span></h2>
             </div>
    
              <div className='w-[100%] flex flex-col gap-6 mt-2'>
    
                <label className='flex items-center border-2 border-black px-1 py-0.5 gap-2 w-[98%] rounded-md h-12'>
                    <IoIosMail className='text-4xl py-1 opacity-90'/>
                    <input 
                    {...register('email', {required : {value : true , message : "**This Feild is Required**"}})}
                    type="text" placeholder='Email' className='outline-none bg-white w-[90%] h-7 py-2 text-lg tracking-wide' />
                </label>
                {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}

                <label className='flex items-center border-2 border-black px-1.5 py-0.5 gap-2 w-[98%] rounded-md h-12'>
                    <FaKey className='text-2xl py-1 opacity-90'/> 
                    <input 
                    {...register('password',{required : {value : true , message : "**This Feild is Required**"}})}
                    type="password" placeholder='Password' className='outline-none bg-white w-[90%] h-7 py-2 text-lg tracking-wide'/>
                </label>
                {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
    
              </div>
    
              <button type = "submit" className='w-full h-12 bg-blue-600 text-center rounded-md text-white hover:bg-blue-500'>Log in</button>
            
    
              <div className='flex justify-center w-full mt-3'>
               <p>Don't have an Account?  <span className='text-blue-500 underline cursor-pointer'>Sign up</span></p>
              </div>
                 
             </div>
         </div>
         </form>
    
     </div>
  
    </>
    )
   
}

export default LoginForm