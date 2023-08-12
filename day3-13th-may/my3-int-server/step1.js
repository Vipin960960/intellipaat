var http = require("http");
var fs = require("fs");
//--------------------------

var server = http.createServer(function(request, response){
    var message = "Hello from HTTP server";
    response.writeHead(200,{"Content-Type":"text/html"});
    /*     
    response.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">');
    response.write('<head><meta charset="UTF-8">');
    response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    response.write('<title>Document</title></head>');
    response.write('<body><h1>Hello from HTTP server !!! </h1></body>');
    response.write('</html>'); 
    */
   response.write(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            <h1>${message}</h1>
            <h1>${message.length}</h1>
            <h1>${message.length * 2}</h1>
            <h1>${message.toUpperCase()}</h1>
        </body>

        </html>
   `);
    response.end();
});

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("Web Server is now ready to be used")
    }
})