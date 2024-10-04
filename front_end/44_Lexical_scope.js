// lexical scope

function myApp(){
    const myVar ="value1"; //laxical scope of this veriable can be acceable inside myfunc also
    function myfunc(){
        // const myVar = "value 12";
    const myfunc2 = () =>{
        console.log("inside myFunc 2",myVar);
    }


        console.log("inside myFunc",myVar);
        myfunc2();
    }
    
    console.log(myVar);
    myfunc();
}
myApp();