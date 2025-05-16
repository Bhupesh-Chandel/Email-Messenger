import React from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";

function TypeMessage() {
  return (
    <div className='h-[10vh] w-[100%]]  bg-gray-900 flex justify-center items-center gap-3'>
        <label className='h-[70%] w-[90%] p-2 rounded-md bg-slate-800'>
            <input type='text'placeholder='type message' className='h-full w-full outline-none  bg-slate-800' />
        </label>
        <button className='p-0'>
        <RiSendPlane2Fill className='text-5xl p-1.5 hover:bg-slate-800 rounded-full duration-300'/>
        </button>
    </div>
  )
}

export default TypeMessage