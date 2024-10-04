// function return function

function myfunc(){
    function Hello(){
        console.log("Hello, World!");
    }
    return Hello;
}

const ans = myfunc();
// console.log(ans)
ans(); // Hello, World!