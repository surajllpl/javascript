// param destructuring

// use with object

const person ={ firstName :"suraj",age :35,}

// function details(obj){
//     console.log(obj.firstName);
//     console.log(obj.age);
    
// }

function details({firstName,age}){
    console.log(firstName);
    console.log(age);
    
}
details(person);