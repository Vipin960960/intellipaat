var express  = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use(express.static(__dirname))
    .use(express.static(__dirname+"/public"));


io.on("connection",function(socket){
    // console.log("A client has connection")
    socket.on("clientevent",function(msg){
        console.log("Clienct's message is: ",msg);
        socket.emit("messageevent","hello from socket.io");
    })
})
io.on("disconnect",function(socket){
    console.log("A client was disconnected");
})

http.listen(2020,"localhost",function(error){
    if(error){
        console.log("Error ",err)
    }else{
        console.log("Server is now live on localhost:2020");
    }
})