
export const logServerMessage =(message:string):void=>{
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp}: ${message}`);
}