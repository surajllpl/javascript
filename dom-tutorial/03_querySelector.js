// select element using query Selector

// by using query selector you can select any element of having class id .name etc
const mainHeading = document.querySelector("#main-heading"); //  for selecting id element put # before the element value
console.log( mainHeading);

const header = document.querySelector(".header"); // working with class 
console.log( header);

const nav = document.querySelector(".nav-item"); // working with class same name
console.log( nav); // it gives first element

const nav1 = document.querySelectorAll(".nav-item"); // working with class same name use querySelectorAll
console.log( nav1); // it gives NodeList of elements having class name is nav-item
 
