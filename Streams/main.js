//1 Reading a stream

var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('inp.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");


//2 Writing to a Stream
var fs = require("fs");
var data2 = 'NEW LINE ADDED';

var writerStream = fs.createWriteStream('inp.txt');

writerStream.write(data2,'UTF8');

writerStream.end();

writerStream.on('finish', function() {
   console.log('Write Completed');
});


writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");


//3 Piping the Stream
var fs = require("fs");

var readerStream = fs.createReadStream('inp.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");


//4 Chaining Streams
var fs=require("fs");
var zlib=require("zlib");
//File Compress
fs.createReadStream('inp.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('inp.txt.gz'));

console.log("File Compressed");

//File Decompress
fs.createReadStream('inp.txt.gz')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('inp.txt'));
  
console.log("File Decompressed.");