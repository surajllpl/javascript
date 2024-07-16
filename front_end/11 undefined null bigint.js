
//undefined

let firstName; // when delcare variable but not assign value then it is undefined
var lastName; // let and var can be declared without assign value  
const fullName = "suraj jagtap";//but const must be assign value
console.log(firstName,typeof(firstName));
console.log(lastName,typeof(lastName));

console.log(fullName,typeof(fullName));

//null
let str = null;

console.log(str,typeof(str)); // it print null value 
// but it type are object it is bug in javascript it should be a null
str  = "suraj";
console.log(str,typeof(str));


//BigInt

let number = 12;
let BigInt_number = BigInt(12);
let BigInt_number2 = 22n;

console.log(number,BigInt_number,BigInt_number2);
console.log(BigInt_number+BigInt_number2)
