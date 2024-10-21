//class Keyword

class createUser{
    constructor(firstName,lastName,age,address) {
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    getDetails(){
        return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Address
        : ${this.address}`
    }

        
}

const user1 =new createUser('suraj','jagtap',35,'pune');  
const user2 = new createUser('mohan','garudkar',30,'mumbai');

console.log(user1); 