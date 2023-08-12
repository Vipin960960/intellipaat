var express = require("express")
var mongoose = require("mongoose")
var path = require('path')

// configuration for web server
var app = express();
// Configuration for database
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = mongoose.model("User",new Schema({
    id: ObjectId,
    usertitle : String,
    usermail : String,
    usercity : String 
}));

var url = "mongodb+srv://vipindhiman854:3inbO9plNOfUZHt1@cluster0.pxuzfj1.mongodb.net/userdb?retryWrites=true&w=majority";
mongoose.connect(url).then(function(res){
    console.log("Db Is Connected")
}).catch(function(err){
    console.log("Error ",err)
});

/*********************        Creatingg Crud Operations       ********************* */
// Read
setTimeout(function(){
    User.find().then(function(res){
        console.log("Response ",res)
    }).catch(
        function(err){
            console.log("Error ",err)
        }
    )
},2000)


// Create
// setTimeout(function(){
//     /* var user = new User({
//         usertitle: "Hulk",
//         usermail:"bruce@benner.com",
//         usercity: "toronto"
//     });*/
//     // Or you can use
//     var newUser = {
//         usertitle: "Hulk",
//         usermail:"bruce@benner.com",
//         usercity: "toronto"
//     }

//     var user = new User(newUser);
//     user.save().then(function(res){
//         console.log(res.usertitle+" ws added in to User Table")
//     }).catch(function(err){
//         console.log("Error ",err);
//     })

// },2000)



// Read above data Update
// setTimeout(function(){
//     // User.findOne({_id:"647955618f3bf551805ccbca"}).then(function(res){  //or you can use below line
//     User.findOne({usertitle:"Hulk"}).then(function(res){
//         console.log("Response "+res);
//     }).catch(function(err){
//         console.log(err);
//     })
// },2000)



// Update
// setTimeout(function(){
//     User.findById({_id:"647955618f3bf551805ccbca"}).then(
//         function(res){
//             res.usercity = "Mumbai";
//             res.save().then(function(updatedRes){
//                 console.log(updatedRes.usertitle,"User was updated")
//             }).catch(function(err){
//                 console.log("Error ",err)
//             })
//         }
//     )
// },2000)



// Delete
// setTimeout(function(){
//     User.findByIdAndDelete({_id:"647955618f3bf551805ccbca"}).then(
//         function(res){
//             console.log(res.usertitle+" was deleted");
//         }
//     ).catch(function(err){
//         console.log("Error ",err)
//     })
// },2000)



// custom middle wire
/*app.use(function(req,res,next){
    console.log(req.url);
    next();
});*/

// Getting request from server
app.get("/",function(req,res){
    res.send("Hello brother its mongoose class")
})

// Listening on server 5050
app.listen(5050,"localhost",function(error){
    if(error){
        console.log("Error ",error);
    }else{
        console.log("Server is now ready on localhost: 5050");
    }
})
