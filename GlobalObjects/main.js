//1
console.log(__filename);

//2
console.log(__dirname);

//3
function printHello() {
    console.log( "Hello, World!");
 }
 setTimeout(printHello, 2000);

 //4
 function printHello() {
    console.log( "Hello, World!");
 }
 var t = setTimeout(printHello, 2000);

 clearTimeout(t);

 //5
 function printHello() {
    console.log( "Hello, World!");
 }
 
 setInterval(printHello, 2000);