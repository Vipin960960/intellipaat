var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var path = require("path");
//-------------------------------------
// configurations for web server

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
var app = express();
    app.use(express.json());
    app.use(cors(corsOptions));
//-------------------------------------
// configurations for database
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = mongoose.model("User",new Schema({
    id : ObjectId,
    usertitle : String,
    usermail : String,
    usercity : String
}));
var url = "mongodb+srv://vipindhiman854:3inbO9plNOfUZHt1@cluster0.pxuzfj1.mongodb.net/userdb?retryWrites=true&w=majority";
// var url = "mongodb://127.0.0.1:27017/usersdb"; // for local mongodb

mongoose.connect(url)
.then( function(res){ console.log("DB Connected"); } )
.catch( function(err){ console.log("Error ", err); });


// serve the records in db
app.get("/data", function(req, res){
    User.find().then(
        function(dbRes){
            res.status(200).json(dbRes)
        }
    ).catch(
        function(err){
            console.log("Error ", err)
        }
    );
}); 
// create
app.post("/data", function(req, res){
    var user = new User(req.body);
    user.save().then(function(dbRes){
        // console.log(res.usertitle+" was added in to DB")
        res.status(200).send({ "message" : dbRes.usertitle+" was added in to DB" })
    }).catch(function(err){
        console.log("Error ", err)
    })
}); 
// read to update
app.get("/edit/:uid", function(req, res){
    User.findById({ _id : req.params.uid }).then(
        function(dbRes){
            res.status(200).send(dbRes);
        }
    ).catch(
        function(err){
            console.log("Error ", err)
        }
    )
}); 
// update
app.post("/edit/:uid", function(req, res){
    User.findById({ _id : req.params.uid })
    .then(
        function(dbres){
            dbres.usertitle = req.body.usertitle;
            dbres.usermail = req.body.usermail;
            dbres.usercity = req.body.usercity;
            dbres.save().then(function(updatedRes){
                // console.log(updatedRes.usertitle, "User was updated")
                res.status(200).send({"message": updatedRes.usertitle+" was updated"})
            }).catch(function(updateError){
                console.log("Error ", updateError);
            })
        }
    ).catch(
        function(err){
            console.log("Error ", err)
        }
    )
}); 

app.get("/delete/:uid", function(req, res){
    User.findByIdAndDelete({ _id : req.params.uid })
    .then(function(dbRes){
        res.status(200).send({"message" : dbRes.usertitle+" was deleted" })
    })
    .catch(function(err){
        console.log("Error ", err);
    })
});

//-------------------------------------
app.listen(5050, "localhost",function(error){
    if(error){ console.log("Error ", error )}
    else{ console.log("Server is now live on localhost:5050")}
})