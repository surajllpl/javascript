// class practices

class Animal{ // base class
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <=1;
    }
}

const animal1 = new Animal('tom',2);
console.log(animal1);
// output: Animal { name: 'tom', age: 2 }
console.log(animal1.eat());
// output: tom is eating
console.log(animal1.isSuperCute());
// output: false

//dog class

class Dog extends Animal{ // sub class
    // constructor(name,age){
    //     this.name=name;
    //     this.age=age;
    // }
    // eat(){
    //     return `${this.name} is eating`;
    // }
    // isSuperCute(){
    //     return this.age <=1;
    // }
}
const tommy = new Dog('Tommy',5);
console.log(tommy); 
// output: Dog { name: 'Tommy', age: 5 }
console.log(tommy.eat());  // accessing base class Animal methods
// output: Tommy is eating
