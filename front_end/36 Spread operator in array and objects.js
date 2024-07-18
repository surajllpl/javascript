// Spread operator in array and objects 

const arr1 =[1,2,3];
const arr2 =[5,6,7];
const newarr = [...arr1, ...arr2,55,66]; 
console.log(newarr);

// Object spread operator



const obj = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3",
    key4 : "value4"
}
const newObj = {...obj,...obj2,key5 : "value5"};
// const newObj = {..."abc"};

console.log(newObj);

