// let and const code executions


// console.log(firstName); 
//  Uncaught ReferenceError: Cannot access 'firstName' before initialization
//  This is because the variable is declared after it is being used. In JavaScript, variables are
//  "hoisted" to the top of their scope, but their assignments are not. So
//  the variable is declared, but its value is still undefined when it is first accessed.
//  To fix this, we can move the console.log statement below the variable declaration.

let firstName = "suraj";
console.log(firstName);

// using const 
// console.log(FirstName);

// const FirstName = "suraj form const";
// console.log(FirstName);