//  compilation
// code execution

// why compilation
// How javascript code executes

// what is Global ececution context?
// Global execution context is the top most execution context in the call stack. It is created when the
// script is loaded into the browser. It is the outermost context and all other execution contexts are
// nested inside it.

// what is local execution context?
// Local execution context is created when a function is called. It is the innermost context and it

// is created when a function is called. It is destroyed when the function returns.

console.log(this); //window object
console.log(window); // window object
console.log(firstName);  // undefined
var firstName = 'suraj'; // firstName is declared and assigned a value as "suraj"
console.log(firstName); // suraj

// Compilation Phase
//     - Early error checking
//     - Determining Approprite scope for variable
//     - Global scope 
//         - firstName

// Global Execution Context

//     - Creation Phase 
//         - window : window object
//         - this : window object   // This is equal to window object
//         - fisrtName : undefined // variable create
//     // javascript is Synchronous programming language : line by line execution of code. first line execution copleted then second line execution start.
//     // Asynchronous provide browser
//     // Single Threded 
//     - code Execution Phase
//         - console.log(this) : window object
//         - console.log(window) : window object
//         - console.log(firstName) : undefined
//         - var firstName = 'suraj' : firstName is declared and assigned a value as "suraj"
//         - console.log(firstName) : suraj


    

