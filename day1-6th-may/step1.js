

var user = "vijay";
var companyName = "My Company";
var version = 1024;

/* 
for(var i = 0; i < 10; i++){
    console.log( i, user );
}; 
*/

/* 
module.exports.companyName = companyName;
module.exports.user = user;
module.exports.version = version; 
*/

/* 
module.exports.prop = {
    companyName : companyName,
    user : user,
    version : version
} 
*/

// module.exports.prop = { companyName, user, version } ;

/* 
module.exports = {
    companyName : companyName,
    user : user,
    version : version
} 
*/

module.exports = { 
    companyName, 
    user, 
    version 
};
