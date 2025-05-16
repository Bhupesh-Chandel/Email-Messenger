import React from 'react'
import { IoSearch } from "react-icons/io5";
function SearchBar() {
  return (
    <div>
        <form action="">
            <div className='flex mt-5 mx-auto w-full justify-center'>
                <label className='flex w-[90%] items-center'>
                <input type="text" placeholder='Search' className='grow outline-none flex-shrink-1 w-full bg-slate-800 px-3 h-10 rounded'/>
                </label>
                <button className="p-0">
                <IoSearch className='text-4xl ml-1 p-1.5 hover:bg-slate-800 rounded-full duration-300'/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default SearchBar