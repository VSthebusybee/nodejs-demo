const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Connecting to the Server!!</h1>')
});

server.listen(4000);

