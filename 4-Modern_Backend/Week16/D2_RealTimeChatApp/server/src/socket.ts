import {Server, Socket } from "socket.io"
import logger from "./utils/logger"
import {v4} from "uuid"

interface Room {
    id:string;
    name:string;
}

const EVENT = {
    connection :"connection",
    CLIENT:{
        CREATE_ROOM:"CREATE_ROOM",
    },
    SERVER:{
        ROOMS: "ROOMS",
        JOINED_ROOM: "JOINED_ROOM"
    }
};

const rooms: Room[]= [{id:"",name:""}]

function socket ({io}:{io:Server}) {
    logger.info ("Sockets enabled");

    io.on(EVENT.connection, (socket:Socket)=>{
        logger.info(`user connected ${socket.id}`);

        socket.on(EVENT.CLIENT.CREATE_ROOM, ({roomName})=>{
            logger.info(`Created Room: ${roomName}`);
    
            const roomId =v4();
            rooms.push({id:roomId,name: roomName});
            socket.join(roomId);
            socket.broadcast.emit(EVENT.SERVER.ROOMS, rooms);
            socket.emit(EVENT.SERVER.ROOMS, rooms)
            socket.emit(EVENT.SERVER.JOINED_ROOM, roomId)
        })
    })
}

export default socket