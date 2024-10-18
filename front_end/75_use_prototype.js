// problem - no of methods add

// const userMethods = {
//     about : function(){
//         // console.log(this.firstName);
//         return `${this.firstName} ${this.lastName} is ${this.age} year old. and address is ${this.address}`;
//     },
// }

function createUser(firstName,lastName,age,address){

    const user =Object.create(createUser.prototype); // Object.create can be refreance of (createUser.prototype)    user.firstName =firstName;
    user.lastName =lastName;
    user.age =age;
    user.address = address;
   
    return user;
}
console.log(createUser.prototype);
createUser.prototype.about = function (){
    return `${this.firstName} ${this.lastName} is ${this.age} year old. and address is ${this.address}`;

}
const user1 = createUser('suraj','jagtap',35,'pune');
const user2 = createUser('mohan','garudkar',30,'mumbai');

console.log(user1); // proto is refrance of createUser function 
console.log(user2.about());
