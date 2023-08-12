var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();

function firstlistener(){
    console.log("first", "myevent happened");
}

function secondlistener(){
    console.log("second", "myevent happened");
}

// ee.addListener("myevent", firstlistener);
ee.on("myevent", firstlistener);
// ee.once("myevent", firstlistener);

// ee.addListener("myevent", secondlistener);
ee.on("myevent", secondlistener);

console.log( ee.listenerCount("myevent") );

// ee.removeListener("myevent", secondlistener);
ee.off("myevent", secondlistener);

ee.emit("myevent");
ee.emit("myevent");
ee.emit("myevent");
ee.emit("myevent");
ee.emit("myevent");

console.log("Event counts:", ee.listenerCount("myevent") );