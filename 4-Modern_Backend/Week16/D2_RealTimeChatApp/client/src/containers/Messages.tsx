import { useRef } from "react";
import { useSockets } from "../context/socket.context"

export const MessagesContainer =()=>{
    const { socket, messages, roomId, username, setMessages}=useSockets();
    const newMessageRef = useRef<HTMLTextAreaElement>(null)
    
    const handleSendMessage = ()=>{

    }

    if (!roomId)return null;

    return <div>
        
        {messages?.map((message,index)=>(<p key={index}> {message.content}</p>))}
    
        <div>
            <textarea rows={1} placeholder="Message" ref={newMessageRef}/>
            <button onClick={handleSendMessage}>Send</button>
       </div>
    </div>
}