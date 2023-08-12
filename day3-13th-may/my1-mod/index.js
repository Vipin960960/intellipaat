var fetch = require("fetch");
var fs = require("fs");

// var fileToRead = "http://arcstellar.com/index.html";
var fileToRead = process.argv[2];
var fileToWrite = process.argv[3];
 //Command to Run:   node . https://arcstellar.com/#home hello.html
if(fileToRead){
    fetch.fetchUrl(fileToRead,function(error,meta,body){
        if(error){console.log("Error ", error)}
        else{ 
            // console.log(body.toString().replace('<a class="navbar-brand logo" href="/">Arcstellar</a>','<a class="navbar-brand logo" href="/">Vijay</a>')) 
            var tempdata = body.toString().replace('<a class="navbar-brand logo" href="/">Arcstellar</a>','<a class="navbar-brand logo" href="/">Vijay</a>');
            fs.writeFile(fileToWrite+".html",tempdata,"utf-8",function(error){
                if(error){
                    console.log("Error ", error)
                }else{
                    console.log("file was created")
                }
            })
        }
        //else{ console.log(body+"") }
    })
}