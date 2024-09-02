import React, { createContext, useContext, ReactNode, useState } from "react";
import io ,{Socket}from "socket.io-client";
import { SOCKET_URL } from "../config/default";
import {EVENTS} from "../config/events"

interface Room {
  id: string;
  name: string;
} 
interface Message {
  username: string;
  content: string;
  time:string;
}

interface Context {
  socket : Socket;
  username?:string;
  setUsername:(value?:string)=> void;
  messages?:Message[];
  setMessages: (value?:Message[])=>void;
  roomId?:string;
  rooms:Room[];
}

export const socket = io(SOCKET_URL);

export const SocketContext = createContext<Context>({ socket ,
  setUsername:()=>"",
  rooms:[{id:"",name:""}],
  setMessages:()=>[]
});

interface SocketsProviderProps {
  children: ReactNode;
}

function SocketsProvider({ children }: SocketsProviderProps) {
  const [username, setUsername] = useState<string|undefined>("");
  const [roomId, setRoomId] = useState<string|undefined>("");
  const [rooms, setRooms] = useState([{id:"",name:""}]);
  const [messages, setMessages] = useState<Message[]|undefined>([])

  socket.on(EVENTS.SERVER.ROOMS,(value)=>{
    setRooms(value);
  })
  socket.on(EVENTS.SERVER.JOINED_ROOM, (value)=>{
    setRoomId(value);
    setMessages([])
  })

  socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({content, username, time})=>{
    if(messages){
      setMessages([...messages,{content, username, time}])
    }
  })
  return (
    <SocketContext.Provider value={{ socket,username,setUsername,setMessages ,rooms,roomId}}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
