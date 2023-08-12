var obj = require("./step7-export-functions");

var rand1 =Math.round( Math.random() * 10 );
var rand2 =Math.round( Math.random() * 10 );
console.log(rand1,"+",rand2,"=", obj.myfun(rand1,rand2) );