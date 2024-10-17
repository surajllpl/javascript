
const userMethods = {
    about : function(){
        // console.log(this.firstName);
        return `${this.firstName} ${this.lastName} is ${this.age} year old. and address is ${this.address}`;
    },
}

function createUser(firstName,lastName,age,address){

    const user ={};
    user.firstName =firstName;
    user.lastName =lastName;
    user.age =age;
    user.address = address;
    user.about = userMethods.about;
    return user;
}

const user1 = createUser('suraj','jagtap',35,'pune');
const user2 = createUser('mohan','garudkar',30,'mumbai');

console.log(user1.about());
console.log(user2.about());
