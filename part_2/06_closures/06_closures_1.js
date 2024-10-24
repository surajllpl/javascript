// Clousres example 1
function printFullName(firstName,lastName){
    
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}
const ans = printFullName('suraj','jagtap'); 
console.log(ans); 
ans(); 


// # Closures :
//     - functon can return function
//     - returned function can access outer function scope
//     - returned function can modify outer function scope
//     - returned function can be called multiple times
//     - returned function can be called with different arguments
    