//find method

const myArray =["Hello","cat","dog","lion"];

function isLength3(str){ // it return length of string equals to 3
    return str.length === 3;
}

// const ans = isLength3("dogs");

// console.log(ans); // it gives false


const ans =  myArray.find(isLength3); // find method return first accurance true and stop
console.log(ans); // it gives output "cat" 


const users =[
    {id :1,fname:"John",age:25},
    {id :2,fname:"Alice",age:30},
    {id :3,fname:"Bob",age:35}
]
const ans1 =  users.find((user)=>{
    return user.id ===3;
}); 
console.log(ans1); 


