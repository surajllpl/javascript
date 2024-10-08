
 // .trim()

let first_Name = "    Suraj   ";

console.log(first_Name.length);  // 12

let newString = first_Name.trim(); // remove space from given string

console.log(newString.length)  // 5 // show result using another veriable

first_Name = first_Name.trim(); // using same variable

console.log(first_Name.length)// 5 

// .toUpperCase

console.log(first_Name.toUpperCase()); // SURAJ

// .toLowerCase

console.log(first_Name.toLowerCase()); // suraj

// start Index and end Index 
// .slice()

let string = first_Name.slice(1,4);
// let string = first_Name.slice(1);

console.log(string);
