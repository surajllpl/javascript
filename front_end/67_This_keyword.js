// This Keyword
// The `this` keyword is used to refer to the current object. It is used to access

console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window object is global object of javascript
// it is used to access global variables and functions
// it is used to access document object location object name object history object  screen object storage object

//this === window // true

function myFun(){
    "use strict"; // it can not be access window object
    console.log(this); // undefined
    
}
myFun();


