var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){
    if(request.url=="/favicon.ico"){
        response.write("")
        response.end();
    }else{
        var URL = "";
        if(request.url=="/"){URL = "/index.html";}
        else{URL = request.url;}
        fs.readFile("."+URL,function(error,data){
            if(error){
                fs.readFile("./pageNotFound.html",function(error,data){
                    console.log(request.url.toString())
                    response.write(data.toString().replace("{###}",request.url.toString()));
                    response.end();
                })
            }else{
                response.write(data.toString().replace("{###}","Hello Vipin Dhiman"));
                response.end();
            }
        })
    }

});

server.listen(2020,"localhost",function(error){
    if(error){
        console.log("Error ",error);
    }else{
        console.log("Web server is now live on local:2020")
    }
})

