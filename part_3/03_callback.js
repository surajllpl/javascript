// understand callback
// callback is a function that is passed as an argument to another function


function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}
function myFunc2(){
    console.log("Function is doing task 2");
    
}
myFunc(myFunc2);
// output: Function is doing task 1, Function is doing task 2
// callback is used to pass a function as an argument to another function. It is used to execute
// a function after a certain task is completed. It is used to handle asynchronous operations.


// example 2
// function getTwono(no1,no2,callback){
//     console.log(no1,no2);
//     if(typeof no1 === "number" && typeof no2 === "number"){
//     callback(no1,no2);
//     }else{
//         console.log("Invalid input");
//     }
// }
// function add(a,b){
//     console.log( a+b);
//     }
// getTwono(4,5,add);
// //output :
// // 4 5
// //  9


function getTwono(no1, no2, onSuccess, onFailure) {
    console.log(no1, no2);
    if (typeof no1 === "number" && typeof no2 === "number") {
        onSuccess(no1, no2);
    } else {
        onFailure();
    }
}

// Test with correct parameters
getTwono(4, 5, (a, b) => {
    console.log(a + b); // Output should be 9
}, () => {
    console.log("Invalid input");
});

// Test with incorrect parameters to trigger onFailure
getTwono("4", 5, (a, b) => {
    console.log(a + b);
}, () => {
    console.log("Invalid input"); // Output: Invalid input
});

