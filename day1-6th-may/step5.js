var path = require("path");

var profiles = ["guest", "user", "admin","owner"];
var files = ['info.html', 'history.html', 'profile.html', 'welcome.html'];

console.log( Math.round( Math.random() * 10 ) );
// console.log( Math.round( Math.random() * (profiles.length-1) ) );
// console.log( Math.round( Math.random() * (files.length-1) ) );

var url = path.join( 
    profiles[Math.round( Math.random() * (profiles.length-1) )], 
    files[Math.round( Math.random() * (files.length-1) )]
    );

console.log(url)