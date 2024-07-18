// Dot vs bracket notation 

const person = {
    name: "suraj",
    age: 25,
//  person hobbies: ["singing","dancing","reading"] // it gives error
    "person hobbies": ["singing","dancing","reading"] 
};
console.log(person);
// console.log(person.person hobbies); // error
console.log(person["person hobbies"]);

// add new key value pair in existing object
const key = "email"; // object of key should be set email

// person.key = "suraj@gmail.com"; // it assign key to "key" as value, want key as "email"  
// person["key"] = "suraj@gmail.com"; // this also same as above
person[key] = "suraj@gmail.com"; // it perfet set key as email 
console.log(person);








