import React from 'react'
import { MdLogout } from "react-icons/md";
function Logout() {
  return (
    <div className='w-[3%]  text-white flex items-end justify-center pb-2' style={{backgroundColor : "#202C33"}}>
        <button className="p-0">
        <MdLogout className='text-4xl ml-1 p-1.5 hover:bg-black rounded-full duration-300'/>
         </button>  
    </div>
  )
}

export default Logout