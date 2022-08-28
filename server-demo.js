/* const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Connecting to the Server!!</h1>')
});

server.listen(4000);
 */

const express=require('express');
const server=express();
const port=4000;

const movies=[
    {
        year:"2002",
        movie:"Gang of wasseypur",
        rating:"9.0+"
    },
    {
        year:"2008",
        movie:"Gang of wasseypur 2",
        rating:"7.0+"
    }
]

server.get('/',(req,res)=>{
    
    res.send(movies);
})

server.listen(port,() => {
    console.log("Server is listening port no."+ port);
})