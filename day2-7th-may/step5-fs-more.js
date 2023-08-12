var fs = require("node:fs");

/* Async
fs.writeFile("temp/temp.txt","welcome to your life",function(error){
    if(error){
        console.log("Vj Error ", error)
    }else{
        console.log("file was created")
    }
}); 
*/
//----------------------------------------

function writemyfile(message){
    fs.writeFile("temp/temp.txt",message,function(error){
        if(error){
            console.log("Vj Error ", error)
        }else{
            console.log("file was created")
        }
    }); 
};

fs.access("temp",function(error){
    if(error){
        fs.mkdir("temp",function(error){
            if(error){
                console.log("Error ", error)
            }else{
                writemyfile("Folder and file was created");
            }
        })
    }else{
        writemyfile("Only the file was created");
    }
})