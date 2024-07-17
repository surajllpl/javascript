// Array
// refrance type 
//order collection of elements
let fruits = ["apple","orange","mango"];
let numbers = [1,2,3,4,5];
let mix = [1,2,3,"string",null,true];

console.log(fruits[1]);
console.log(numbers);
console.log(mix);

console.log(fruits);

fruits[1] = "banana";
let obj ={}; // object literal
console.log(fruits,typeof(fruits)); // object 
// how to know fruits object is array or not
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(obj)); // false
