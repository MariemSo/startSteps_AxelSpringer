import { useRef } from "react";
import { useSockets } from "../context/socket.context"
import { EVENTS } from "../config/events";

export const RoomsContainer =()=>{
    const {socket, roomId,rooms} = useSockets();
    const newRoomRef = useRef<HTMLInputElement>(null);

    const handleCreateRooms =()=>{
        const roomName= newRoomRef.current?.value || "";
        if(!String(roomName).trim()) return;

        socket.emit(EVENTS.CLIENT.CREATE_ROOM ,{roomName});

        if(newRoomRef.current){
            newRoomRef.current.value=""
        }
    }
    return <nav>
        <div>
            <input placeholder="Room Name" ref={newRoomRef}/>
            <button onClick={handleCreateRooms}>Create Room</button>
        </div>
        {rooms.map(({id,name})=>(<div key={id}>
            {name}
        </div>))}
    </nav>
}