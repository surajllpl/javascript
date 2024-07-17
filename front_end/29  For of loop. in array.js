//  For of loop in array 

const fruits = ["apple","mango","orange"];
const fruits2 = [];
// in gives values of array - "apple","mango","orange"

for(let fruit of fruits){
    console.log(fruit);
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

