// map method

const numbers =[3,4,5,1,6];

// const square = (number)=>{
//     return number * number;
// } 

const squareNo = numbers.map((number)=>{
    return number * number;
});

console.log(squareNo);


const users =[
    {firstname : "Tom",age:25},
    {firstname : "John",age:30},
    {firstname : "Anna",age:35}
    
];


const username = users.map((user)=>{
    return user.firstname;
});
console.log(username);
