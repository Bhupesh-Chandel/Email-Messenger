import SearchBar from './SearchBar';
import Users from './Users';
function Left(){
    return(
       <>
        <div className=' w-[30%] bg-black text-white'>
            <div className='mx-4'>
              <h1 className='font-bold text-3xl p-4 pb-0 pl-0 text-left'>Chats</h1>
              <SearchBar/>
              <hr className='mt-3'/>
              <Users/>
           </div>
       </div>
 
      </>
    )
}

export default Left;