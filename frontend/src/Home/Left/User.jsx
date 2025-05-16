import React from 'react'

function User({src = "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg" , email , name}) {
  return (
    <div className='flex gap-5 h-20 p-3 hover:bg-slate-800 duration-300'>
        <div className='w-12 h-12'>
            <img src={src} alt="pic" className='w-full h-full rounded-full object-contain'/>
        </div>
        <div className='flex flex-col'>
            <span>{email}</span>
            <span>{name}</span>
        </div>
    </div>
  )
}

export default User