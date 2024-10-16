// arrow functions with this keyword

const users ={
    firstName : "suraj",
    age : 35,
    getDetails : ()=>{
        console.log(this); // it accessing window object
        console.log(this.firstName,this.age);
        }
}

users.getDetails(); // this will print undefined  undefined
// this can be access one layer above object



