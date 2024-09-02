import * as https from 'https';
import * as fs from 'fs';
import  express  from 'express';
import router from './routes';

const app=express()

app.use()

const options = {
    key : fs.readFileSync('server.key'),
    cert : fs.readFileSync('server.cert')
}

/* function handler (res,rep){
    res.writeHead(200);
    res.end("Hello From Https")
}
*/
//const server  = https.createServer(options, handler)
const expressServer = https.createServer(options,app)
expressServer.listen(443, ()=>{console.log("the server is running ");
})