import React from 'react'

function ChatUser() {
  return (
    <div className='flex gap-5 px-6 items-center bg-slate-800 h-[10vh]'>
        <div className='w-12 h-12'>
            <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="pic" className='w-full h-full rounded-full object-contain'/>
        </div>
        <div className='flex flex-col'>
            <span className='text-lg'>XyzRandom</span>
            <span className='text-sm'>online</span>
        </div>
    </div>
  )
}

export default ChatUser