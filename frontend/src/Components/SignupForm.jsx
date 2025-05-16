import React, { useState } from 'react'
import { IoIosMail} from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaKey } from "react-icons/fa6";
import axios from "axios";



function SignupForm() {

  async function createAccountInBackend(userInfo){
         try{
            const response = await axios.post("http://localhost:5001/user/signup",userInfo);
            console.log(response.data.message);
            console.log(response.data.user);
            alert("Account Created Successfully");
         }
         catch(err){
          if(err.response){
            console.log(`Error while making a Request to /signup , Error Mesage : ${err.response.data.message}`);
          }
          else{
            console.log(`Error while making a Request to /signup , Error : ${err}`);
          } 
         }
  }

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newErrors =  {};
        if(name === "") newErrors.name = true;
        if(email === "") newErrors.email = true;
        if(password === "") newErrors.password = true;
        if(confirmPassword === "") newErrors.confirmPassword = true;
        if(password !== confirmPassword) newErrors.samePassword = true;
        if(Object.keys(newErrors).length > 0){
          setError(newErrors);
          return;
        }
        setError({});
        const userInfo = {name, email,password,confirmPassword};
        createAccountInBackend(userInfo);
        }
      

  return (
    <div className='flex h-screen w-screen justify-center items-center'>
     <form onSubmit={handleSubmit}>
     <div className='border-2 border-black  w-[400px] flex justify-center mx-auto rounded-md bg-white'>
         <div className="p-5 flex flex-col gap-6 w-[96%] ">
         <div className="flex flex-col w-[100%] justify-center gap-y-1.5">
           <h1 className='text-blue-800 text-center text-2xl tracking-wide font-semibold'>Email Messenger</h1>
           <h2 className='text-center text-2xl tracking-wide'>Create a new <span className='text-blue-700'>Account</span></h2>
         </div>

          <div className='w-[100%] flex flex-col gap-4 mt-2'>

          <label className='flex items-center border-2 border-gray-800 px-1 py-0.5 gap-2 w-[98%] rounded-md h-12'>
                <CgProfile className='text-4xl py-1 opacity-90'/>
                <input type="text" placeholder='Username' value={name} onChange={(e)=>setName(e.target.value)} className='outline-none bg-white w-[90%] h-7 py-2 text-lg tracking-wide'/>
            </label>
            {error.name && <p className='text-red-600 text-sm'>**This field is required**</p>}


            <label className='flex items-center border-2 border-black px-1 py-0.5 gap-2 w-[98%] rounded-md h-12'>
                <IoIosMail className='text-4xl py-1 opacity-90'/>
                <input type="text" placeholder='Email' className='outline-none bg-white w-[90%] h-7 py-2 text-lg tracking-wide' onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            {error.email && <p className='text-red-600 text-sm'>**This field is required**</p>}

            <label className='flex items-center border-2 border-black px-1.5 py-0.5 gap-2 w-[98%] rounded-md h-12'>
                <FaKey className='text-2xl py-1 opacity-90'/>
                <input type="password" placeholder='Password'  className='outline-none bg-white w-[90%] h-7 py-2 text-lg tracking-wide' onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            {error.password && <p className='text-red-600 text-sm'>**This field is required**</p>}

            <label className='flex items-center border-2 border-black px-1.5 py-0.5 gap-2 w-[98%] rounded-md h-12'>
                <FaKey className='text-2xl py-1 opacity-90'/>
                <input type="password" placeholder='Confirm Password'  className='outline-none bg-white w-[90%] h-7 py-2 text-lg tracking-wide' onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </label>
            {error.confirmPassword && <p className='text-red-600 text-sm'>**This field is required**</p>}
            { !(error. confirmPassword || error.password) && error.samePassword && <p className='text-red-600 text-sm'>**Passwords do not match**</p>}
          </div>

          <button className='w-full h-[46px] bg-blue-600 text-center rounded-md text-white hover:bg-blue-500' type='submit'>Sign up</button>
        

          <div className='flex justify-center w-full'>
           <p>Have an Account? <span className='text-blue-500 underline cursor-pointer'>Login</span></p>
          </div>
             
         </div>
     </div>
     </form>

    </div>
  )
}

export default SignupForm