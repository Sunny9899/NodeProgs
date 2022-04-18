var events= require('events');

var eventEmitter = new events.EventEmitter(); //creating event emitter object

var listener1=function listener1(){
    console.log('1 is Listening');
}

var listener2=function listener2(){
    console.log('2 is Listening');
}

eventEmitter.addListener('connection',listener1); //addListener(event, listener)  //Adds a listener at the end of the listeners array for the specified event.
 
eventEmitter.on('connection',listener2);// on(event, listener)  //Adds a listener at the end of the listeners array for the specified event.

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection'); //listenerCount(emitter, event)   //Returns the number of listeners for a given event.
console.log(eventListeners +'Listener listening to connection event');

eventEmitter.emit('connection'); //	emit(event, [arg1], [arg2], [...]) //Execute each of the listeners in order with the supplied arguments. Returns true if the event had listeners, false otherwise.

eventEmitter.removeListener('connection',listener1); //	removeListener(event, listener)  //Removes a listener from the listener array for the specified event
console.log("Listener 1 stopped listening");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");