// Maps object
// map is an itrerable
// map is a collection of key-value pairs
// map is mutable

//object literal
// key should be String or Symbol

// const person = {
//     firstname :"suraj",
//     age : 7,
//     1 :'one',
// }
// console.log(person);
// console.log(person["firstname"]);
// for(let key in person){
//     console.log(typeof key);
// }


// map 
const person = new Map();
person.set('firstname', 'suraj');
person.set(1, 'one');
person.set('age',7)
console.log(person);
console.log(person["firstname"]);//undefined
console.log(person.get('firstname')); // suraj
console.log(person.keys());//MapIterator {'firstname', 1, 'age'}
console.log(person.values());//MapIterator {'suraj', 'one', 7}


for(let key of person.keys()){
    console.log(key,typeof key);
}



