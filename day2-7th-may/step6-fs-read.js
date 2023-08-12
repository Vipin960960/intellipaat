var fs = require("node:fs");
// console.log( fs.readFileSync("temp/temp.txt", "utf-8") );


fs.access("temp/temp.txt",function(error){
    if(error){
        console.log("File was not found")
    }else{
        fs.readFile("temp/temp.txt","utf-8",function(error,data){
            if(error){
                console.log("Error ", error);
            }else{
                console.log("I found file data is:\n"+data);
            }
        });
        
    }
})
