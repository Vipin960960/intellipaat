var express = require("express");
var config = require("./config.json");

var app = express();

app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.listen(config.port,config.host, function(error){
    if(error){console.log( "Error ", error )}
    else{ console.log( `web server is now running on ${config.host+":"+config.port}`)}
})