// get multiple element using getElements by class name
// get multiple element using querySelectorAll

const allElement = document.getElementsByClassName("nav-item");
console.log (allElement); // HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item]
console.log (allElement[0]); // li.nav-item : it gives the [0] index element
console.log (typeof (allElement)); // object : it is object
console.log (Array.isArray(allElement)); // false : it is not array



// querySelectorAll

const queryelement = document.querySelectorAll(".nav-item");
console.log(queryelement); // NodeList(3) [li.nav-item, li.nav-item, li.nav-item]  
// NodeList(3) [li.nav-item, li.nav-item, li.nav-item]
// 0
// : 
// li.nav-item
// 1
// : 
// li.nav-item
// 2
// : 
// li.nav-item
// length
// : 
// 3
// [[Prototype]]
// : 
// NodeList

console.log(queryelement[2]); // li.nav-item  
// 2
// : 
// li.nav-item
