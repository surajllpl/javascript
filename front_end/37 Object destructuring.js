// Object destructuring 

const user = {
    name : "suraj",
    address : "pune",
    age : 35,
    emailId : "suraj@gmail.com"
};
// let userName =user.name;
// let userAddress =user.address;
let{name,address,...userRemain} = user;
console.log(user);
// console.log(userName,userAddres);
console.log(name,address);

console.log(userRemain);

