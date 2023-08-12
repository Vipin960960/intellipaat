var EventEmitter = require("node:events").EventEmitter;

// create a new instance of event class
var myevent = new EventEmitter();
console.log("log from line 5");
// attach a listener for the event vijayevent
myevent.addListener('event', function(a, b) {
    console.log("Vijay Event Happened", "line 8:",(a+b));
});
console.log("log from line 10");
// dispatch the event vijayevent
setTimeout(function(){
    console.log("log from line 13");
    myevent.emit('event', 12, 13);;
}, 2000);