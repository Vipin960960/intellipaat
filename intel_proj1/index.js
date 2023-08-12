var express = require("express");
var mongoose = require("mongoose");
var session = require("client-sessions");//Used to set cookies in browser
var bcrypt = require("bcrypt");//Used to encrypt string in salt

let app = express();

//----------------------------------
app.use(express.urlencoded({ extended : true }));
app.use(session({
    cookieName: 'intellipaat', // cookie name dictates the key name added to the request object
    secret: 'cdrtyuiop56789098ytfvbnmkjhgfer678998uytrdcvbnjkloiuytrewer5tyhgvcde456y', // should be a large unguessable string
    duration: 30 * 60 * 1000, // how long the session will stay valid in ms
    activeDuration: 5 * 60 * 1000, // how long the session will stay valid in ms
    cookie: {
      ephemeral: false, // when true, cookie expires when the browser closes
    }
  }));
//----------------------------------

// DB Config
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = mongoose.model("User", new Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    email : {type : String, unique : true},
    password : String
}));
var url = "mongodb+srv://vipindhiman854:3inbO9plNOfUZHt1@cluster0.pxuzfj1.mongodb.net/authdb?retryWrites=true&w=majority";//My cloud database path
mongoose.connect(url)
.then(function(res){
    console.log("DB Connected")
}).catch(function(err){
    console.log("Error ", err)
});
//----------------------------------
app.get("/", function(req, res){
    res.render("login.pug")
})
app.post("/", function(req, res){//post route for login page
    User.findOne({ email : req.body.email })
    .then(function(dbres){
        if(dbres.email == req.body.email){
            if(bcrypt.compareSync(req.body.password, dbres.password)){
                req.intellipaat.user = dbres;//set user data in cookies to persistence user info
                res.redirect("/profile");//redireting to Profile page after login
            }else{
                res.render("login.pug",{//Rendering error if Email is invalid
                    error : "invalid email or password"
                })
            }
        }
    })
    .catch(function(err){
        res.render("login.pug",{
            error : "no user found with that credential"
        })
    })
})
app.get("/register", function(req, res){
    res.render("register.pug")
})
app.post("/register", function(req, res){//Post Route for Registration page 
    if(req.body.password.length>=5 && req.body.email.length>0 && req.body.lastname.length>0 && req.body.firstname.length>0){
        var hashedPass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(5));
        var user = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : hashedPass,
        });    
        user.save()
        .then(function(dbres){
            res.redirect("/");//if user information is correct we redirect it to login page
            console.log("user created", dbres.firstname, " was added")
        } )
        .catch(function(err){
            if(err.code == 11000){//True if email is aleady exist
                res.render("register.pug",{
                    error : "email id already exists"
                })
            }else{
                res.render("register.pug",{
                    error : "something went wrong please try later"
                })
            }
        });    
    }else{
        if(req.body.email.length==0 || req.body.lastname.length==0 || req.body.firstname.length==0){//if user does not enter something
            res.render("register.pug",{
                error : "Please fill all fields"
            })    
        }else if(req.body.password.length<5){
            res.render("register.pug",{
                error : "Password must contain 5 character."
            })    
        }
    }
});
app.get("/profile", function(req, res){
    if(req.intellipaat && req.intellipaat.user){
        User.findOne({email : req.intellipaat.user.email})
        .then(function(dbres){
            res.render("profile.pug", {
                userdetails : dbres  //sends data to profile page
            })
        })
        .catch(function(error){
            req.intellipaat.reset();
            res.redirect("/");
        })
    }else{
        res.redirect("/")
    }
})
app.get("/logout", function(req, res){
    req.intellipaat.reset();//clears cookies from the chrome
    res.redirect("/")
})

app.listen(2525, "localhost", function(error){
    if(error){ console.log("Error ", error )}
    else{ console.log("server is now live on localhost:2525")}
})