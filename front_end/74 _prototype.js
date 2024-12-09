// Prototype 

function hello(){
    console.log("Hello");
}

// javascript function ==> function + object 

console.log(hello.name); // function work like object
//name property --> tells function name 
// you can add your own properties
hello.age = 25;
console.log(hello.age);

//function provides more usefull properties

console.log(hello.prototype); //{}
//only function provide prototype property
//prototype is an object that is linked to the function

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return 'sing song';
}
console.log(hello.prototype); 
console.log(hello.prototype.sing()); 
