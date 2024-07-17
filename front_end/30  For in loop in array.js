//  For of loop in array 

const fruits = ["apple","mango","orange"];
const fruits2 = [];
// in gives index of array 0 1 2 ...
for(let index in fruits){
    console.log(fruits[index]);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

