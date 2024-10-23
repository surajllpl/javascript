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
