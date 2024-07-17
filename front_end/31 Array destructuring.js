// Array destructuring 

const  myArray =["value1","value2","value3","value4"];
// array vale assign to variable
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// above is basic assign values
// console.log(myvar1,myvar2);
//
// let[myvar1,myvar2] = myArray; // this is the way of array destructing
// console.log(myvar1,myvar2);

// let[myvar1,myvar2] = myArray; 
// let myNewArray = myArray.slice(2);// assign remain values in new array using slice()
// console.log(myvar1,myvar2,myNewArray);

let[myvar1,myvar2,...myNewArray] = myArray; // it is var and array both destruct of myArray
console.log(myvar1,myvar2,myNewArray);
