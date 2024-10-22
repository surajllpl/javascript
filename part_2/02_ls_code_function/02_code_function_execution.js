console.log(this);                            //window object
console.log(window);                         // window object
console.log(myFunction); 
console.log(fullName);                       // undefined

function myFunction(){
    console.log("Hello, World!");
}
var firstName = 'suraj';                    // firstName is declared and assigned a value as "suraj"
var lastName = 'jagtap';                    // lastName is declared and assigned a value as "jagtap"
var fullName = firstName + " " + lastName;
console.log(fullName);                      // suraj jagtap
