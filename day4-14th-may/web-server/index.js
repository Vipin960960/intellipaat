var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
    /* 
    console.log(request.url);
    response.end(); 
    */
   if(request.url == "/favicon.ico"){
        // console.log("recieved a request for /favicon.ico");
        response.write("");
        response.end();
    }else if(request.url == "/"){
       // console.log("recieved a request for ", request.url);
       response.write( fs.readFileSync("./index.html","utf-8") )
       response.end();
   }else{

   }
});

server.listen(2020,"localhost",function(error){
    if(error){ console.log("Error ", error )}
    else{ console.log("web server is now live on localhost:2020") }
});