var fs = require("fs");

console.log("log before the folder is created");

if(fs.existsSync("temp")){
    fs.writeFileSync("temp/temp.txt","Welcome to your life","utf-8");
}else{
    fs.mkdirSync("temp");
    fs.writeFileSync("temp/temp.txt","Welcome to your life","utf-8");
} 

fs.appendFileSync("temp/temp.txt","\nThere is no turning back","utf-8");

console.log("log after the folder is created");