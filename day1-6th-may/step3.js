// https://nodejs.org/dist/latest-v18.x/docs/api/os.html

var os = require("os");
console.log( os.cpus().length );
console.log( os.cpus()[0] );
// console.log( os.cpus() );
console.log( os.userInfo().username );

console.log( "total memory ", (((os.totalmem())/1024)/1024) / 1024, " GB" );
console.log( "total memory ", ((os.totalmem())/1024)/1024, " GB" );

console.log( "free memory ", os.freemem() );
console.log( "free memory ", ((os.freemem())/1024)/1024, " GB" );
console.log( "free memory ", (((os.freemem())/1024)/1024) / 1024, " GB" );

