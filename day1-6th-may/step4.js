var path = require("path");

var project = "myproject";
var dir = "assets";
var file = "myphoto.jpg";

// console.log( path.basename('C:\\temp\\myfile.html') );

// console.log(project+"/"+dir+"/"+file);

console.log( path.join(project, dir, file) );