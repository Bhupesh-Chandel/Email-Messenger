import ChatUser from './ChatUser';
import Messages from './Messages.jsx'
import TypeMessage from './TypeMessage.jsx';
function Right() {
  return (
    <div className=" w-[67%]  bg-slate-950 text-white ">
    <ChatUser/>
    <div style={{maxHeight : "calc(80vh)"}} className="overflow-y-scroll">
     <Messages/>
    </div>
    <TypeMessage/>
    </div>
  )
}

export default Right;