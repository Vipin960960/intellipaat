var http = require("http");
var fs = require("fs");
//--------------------------

var server = http.createServer(function(request, response){
    console.log(request.url);
    var fileurl = request.url.replace("/","");
    if(fileurl.readFileSync,"utf-8",function(error){
        if(error){
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(fs.readFileSync(fileurl,"utf-8"));
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(fs.readFileSync("index.html","utf-8"));
            response.end();
        }
    
    });
   });

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("Web Server is now ready to be used")
    }
})