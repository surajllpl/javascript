// Hoaisting

hello();
function hello(){
    console.log("hello");
}



//error : Cannot access 'hello' before initialization

// hello();
// const hello = () => {
//     console.log("hello");
// }