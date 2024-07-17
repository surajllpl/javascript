// For loop in array 

let fruits = ["apple","orange","mango"];
let fruits2=[];
for(let i=0;i<fruits.length;i++ ){
    
    console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);