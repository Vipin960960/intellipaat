const { emit } = require("node:process");

var EventEmitter = require("node:events").EventEmitter;

var ee = new EventEmitter();

function firstEvent(arg){
    console.log("Values passed through emit:",arg);
}

ee.addListener("hello",function(a){
    firstEvent(a);
});

ee.emit("hello",12);