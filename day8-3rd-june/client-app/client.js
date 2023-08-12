var express = require("express")

var app  = express();

app.use(express.static(__dirname))


app.listen(3000,'localhost',function(error){
    if(error){
        console.log("Error",error)
    }else{
        console.log("Server is now live on localhost:3000")
    }
});

