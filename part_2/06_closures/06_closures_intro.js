// closures 
// function can return function 

function fun(){
    
    function func_2(){
        console.log("Hello");
    }
    return func_2;
}
const ans = fun(); // call fun() function and assign return function func_2
console.log(ans); // print func_2
ans(); // Hello



// def - - A closure is the combition of a function bundled together with references to its surrounding state (lexical env.)
// - A closure gives a function access to its outer scope.