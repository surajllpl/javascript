
// type of operator

//data types (primitive data types)
 // string
 // number
 // booleans
 //null


 let age = 25;

 let first_Name = "Suraj";

 console.log(typeof age);

 console.log(typeof first_Name);

 console.log(typeof 20);
 console.log(typeof "suraj");

 // convert number to string 

 age = age + ""; // after the number variable put + ""  it covert number to string
 console.log('convert number to string ==',typeof (age));

 let  str1 = "22";
   str1 = Number(str1); // convert string to number
   console.log(str1,typeof(str1));
   str1 = String(str1); // convert number to string
   console.log(str1,typeof(str1));

 // convert string to number 
 let str = "34"; 
 str = +str; // before the string put + it convert string to number 

 console.log('convert string to number ==',typeof (str));
