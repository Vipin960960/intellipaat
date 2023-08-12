var http = require("node:http");
var server = http.createServer(function(request, response){
    // response.writeHead(200,{"Content-Type":"text/plain", "author" : "Vijay"});
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h1> i am a headding </h1>");
    response.end();
});

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("Web Server is now ready to be used")
    }
})