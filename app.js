const http =require('http');

const server =http.createServer((req, res) =>{
    console.log(req);
    console.log("Ranjeet kumar Yadav")
    console.log("Abhishek kumar")

});

server.listen(4000);