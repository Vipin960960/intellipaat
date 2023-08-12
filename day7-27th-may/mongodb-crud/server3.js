var express = require("express")
var mongoose = require("mongoose")
var path = require('path')

// configuration for web server
var app = express();

// Serving static files in Express
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json())


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


// Getting request from server
app.get("/",function(req,res){
    res.send()//by default it will get index.html file or you can use below line
    // res.render("index.html")
})


// app.get("/data",function(req,res){
//     User.find().then(function(dbRes){
//         // res.status(200).json(dbRes)
//         var usersStr = "To get spesific user: <br>";
//         for(var i=0;i<dbRes.length;i++){
//             usersStr += ""+i+" -> "+dbRes[i].usertitle+"<br>";
//         }
//         res.status(200).send(usersStr)

//     }).catch(function(err){
//         console.log("Error "+err);
//     })
// })


// Srve the record in DB
app.get("/data",function(req,res){
    User.find().then(function(dbRes){
        res.status(200).json(dbRes)
    }).catch(function(err){
        console.log("Error "+err);
    })
})


// Create
app.post("/data",function(req,res){
    var user = new User(req.body);
    user.save().then(function(dbRes){
        console.log("skdmskmdskmd:"+dbRes);
        // res.status(200).send({"message": dbRes.usertitle+" was added in to DB"})
        res.status(200).send({"message": dbRes.usertitle+" was added in to DB"})

    }).catch(function(err){
        console.log("Error ",err);
    })
})


// Read to update
app.get("/edit/:uid",function(req,res){
    User.findById({_id:req.params.uid}).then(
        function(dbRes){
            res.status(200).send(dbRes);
        }
    ).catch(
        function(err){
            console.log("Error ",err);
        }
    )
})


// Update
app.post("/edit/:uid",function(req,res){
    User.findById({_id : req.params.uid}).then(function(dbRes){
        dbRes.usertitle = req.body.usertitle;
        dbRes.usermail = req.body.usermail;
        dbRes.usercity = req.body.usercity;
        dbRes.save().then(function(updatedRes){
            res.status(200).send({"message":updatedRes.usertitle+" was updated"})
        }).catch(function(updateError){
            console.log("Error "+updateError);
        })
    
    
    })
})

app.get("/delete/:uid",function(req,res){
    User.findByIdAndDelete({_id:req.params.uid}).then(
        function(dbRes){
            res.status(200).send({"message":dbRes.usertitle+" was updated"});
        }
    ).catch(
        function(err){
            console.log("Error ",err);
        }
    )
})



// Listening on server 5050
app.listen(5050,"localhost",function(error){
    if(error){
        console.log("Error ",error);
    }else{
        console.log("Server is now ready on localhost: 5050");
    }
})
