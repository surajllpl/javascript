

const users= [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 20 },
    { id: 5, name: 'Mike', age: 40 },
]

// destructuring of Users in const array 
const [user1,user2,user3]=users;
console.log(user1);

// destructuring of Users object in specific field
const [{name},,{age}]=users;
console.log(name,age);
// destructuring of Users object in specific field using identify name
const [{name:userfirst_name},,{age:user3_age}]=users;
console.log(userfirst_name,user3_age)