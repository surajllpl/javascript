// How to iterate objects 

const person = {
    name: "suraj",
    age: 25,
    "person hobbies": ["singing","dancing","reading"] 
};

// for in loop
for(let key in person){
    // console.log(key); // it showing key naming
    // console.log(person.key); // it searching the key name matching the given key it not match 
    // console.log(person.name); // it search and get matching key naming and gives value of them

    // console.log(person[key]); // this is best way to iterate object
    // console.log(`${[key]}:${person[key]}`); // it get in key value pair

}

// Object keys 

console.log(typeof (Object.keys(person)));// object type
const val = Array.isArray(Object.keys(person));  //check it array
console.log(val); // true or false

for(let key of Object.keys(person)){
console.log(person[key]); 

}