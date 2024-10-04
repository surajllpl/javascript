//block scope vs function scope

// let and const are block scope
// var is function scope
{
    let firstName = "suraj";
    console.log(firstName);
}
 //console.log(firstName); // ReferenceError: firstName is not defined
{
    const firstName = "jagtap";
    console.log(firstName);
}
//console.log(firstName); // ReferenceError: firstName is not defined

{
    var firstName = "suraj";
}

console.log("var",firstName); // suraj from var firstName

{
    console.log("var in block",firstName);
}


function app(){
    
    if(true){
        let fname = "suraj "; // let cannot be acceable outsode block 
        var f_name = "suraj jagtap "; 
        console.log("function in block let",fname);
    }
    console.log("app var",f_name);

}
app();