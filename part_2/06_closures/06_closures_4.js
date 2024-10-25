// Closures Example 4

function myFunction(){
    let counter = 0;
    return function(){
        if(counter <1){
            console.log("hi, You called Me!");
            counter++;
        }else{
            console.log("You called me before");
        }
    }
}

const fun = myFunction();
fun(); // prints "hi, You called Me!"
fun(); // prints "You called me before"

const fun1 = myFunction();
fun1(); // prints "hi, You called Me!"
fun1(); // prints "You called me before"