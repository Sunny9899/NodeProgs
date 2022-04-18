var fs= require('fs');

//Blocking Code (program blocks until it reads the file and then only it proceeds to end the program.)
var data=fs.readFileSync('inp.txt');

console.log(data.toString());
console.log("Blocking Program Ended");

console.log("-----------------------");

//Non Blocking Code (program does not wait for file reading and proceeds on)
fs.readFile('inp.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("Non Blocking Program Ended");