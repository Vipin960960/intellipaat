var fs = require("node:fs");

var product = ["gift", "chocolate", "cards", "music", "movie"];

var count = 0;

function productGenerator(){
    fs.access("data",function(error){
        if(error){
            fs.mkdir("data",function(error){
                if(error){
                    console.log("Unable to make Directory")
                }else{
                    console.log("Directory is created")
                    writeInitialFile();
                }
            })
        }else{
            console.log("Directory is already exist")
            writeInitialFile();
        }
    })
};

function writeInitialFile(){
    fs.access("data/products.json",function(error){
        if(error){
            fs.writeFile("data/products.json",'{"products": []}',function(error){
                if(error){
                    console.log("Error while writing file")
                }else{
                    console.log("File was created")
                    readOrWriteData();
                }
            })        
        }else{
            readOrWriteData();
        }
    })
}
function readOrWriteData(){
    fs.readFile("data/products.json","utf-8",function(error, data){
        if(error){ console.log("Error ", error )}
        else{
            var tempdata = JSON.parse(data);
            var tempproduct = product[Math.round( Math.random() * (product.length-1) )];
            var data = {
                id : tempdata.products.length+1,
                title : tempproduct,
                fileurl : tempproduct+".jpg",
                cost : Math.round( Math.random() * 100 )
            }
            tempdata.products.push(data);
            fs.writeFile("data/products.json", JSON.stringify(tempdata), "utf-8", function(err){
                if(err){ console.log("Error ", error)}
                else{ 
                    console.log("file updated ");
                    count++;
                    if(count >= 100){
                        console.log(count);
                        clearInterval(si);
                    };
                }
            });
        };
    });
}

var si = setInterval(productGenerator, 10);

