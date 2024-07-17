// array push pop

let fruits = ["apple","orange","mango"];
//push add element in last
console.log(fruits);
fruits.push("banana");
console.log("push",fruits);

// pop  remove  last element
let popFruit = fruits.pop();
// console.log("pop",fruits.pop());
console.log("pop",fruits);
console.log("pop fruits is",popFruit);

// add and remove from starting element
// unshift
fruits.unshift("graps");
console.log("unshift",fruits);

//shift
let removeFruit = fruits.shift();
console.log("remove ",removeFruit,fruits);


// push and pop is faster then shift and unshift