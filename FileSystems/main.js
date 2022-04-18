var fs=require('fs');

//1 Open a file
var fs = require("fs");

console.log("Going to open file!");
fs.open('inp.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});

//2 Get File Info
var fs = require("fs");

console.log("Going to get file info!");
fs.stat('inp.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");

   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});

//3 Writing a File
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('inp.txt', 'Simply Easy Learning!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('inp.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});


//4 Reading A File
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('inp.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});


//5 Closing a File
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('inp.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
      if (err) {
         console.log(err);
      }

      if(bytes > 0) {
         console.log(buf.slice(0, bytes).toString());
      }

      fs.close(fd, function(err) {
         if (err) {
            console.log(err);
         } 
         console.log("File closed successfully.");
      });
   });
});