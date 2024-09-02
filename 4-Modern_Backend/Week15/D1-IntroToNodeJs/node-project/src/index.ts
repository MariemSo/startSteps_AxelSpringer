import http from "http"
//let http = require ('http');

import dotenv  from 'dotenv';

dotenv.config();

const port = process.env.PORT;

function handler(req,res){
    console.log('request Recieved');

    res.writeHead(200,{
        'content-type':'text/plain'
    })
    res.end('Hello from backend server')
}

//create server
http.createServer(handler).listen(port,()=>console.log('server is running at : http://127.0.0.1:5005'))