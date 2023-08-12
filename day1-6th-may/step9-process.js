var profiles = ["guest", "user", "admin","owner"];
// console.log( process.argv );
var param = process.argv[2];
console.log( "you requested for" ,(param < profiles.length ? profiles[param] : profiles[0])+".html" );

// profiles[process.argv[2] < profiles.length ? process.argv[2] : 0]

// run by-> node day1-6th-may/step9-process 3(or any number between 1..3)



