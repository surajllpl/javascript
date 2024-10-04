// callback function

function fun1(callback) {
    console.log("Callback function executed");
    callback("Suraj");
    // console.log(callback);
    }

function fun2(name){
    console.log("inside function 2");
    console.log(name);
}    
fun1(fun2)    
