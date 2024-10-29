// task : nav element have must set background color : while and text color : blue

let navElement = document.getElementsByTagName("a");
console.log(navElement);
// we can't use forEach method to iterate throught HTMLCollection
// simple for loop
// for of loop
// forEach 

// simple for loop 
// for(let i=0; i< navElement.length; i++){
//     // console.log(navElement[i]);
//     const navItem = navElement[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "blue";
//     navItem.style.fontWeight = "bold";
// }
// for of loop
for(let navItem of navElement){
    
   
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// forEach loop
navElement = Array.from(navElement); //HTMLCollection change in Array
navElement.forEach((navItem) => {
        navItem.style.backgroundColor = "white";
        navItem.style.color = "red";
        navItem.style.fontWeight = "bold";
    });

