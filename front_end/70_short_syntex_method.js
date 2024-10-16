

const users ={
   
    "name": "Suraj",
    "age": 35,
    "city": "Pune",

about(){
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city} .`); 
              
        console.log(users.name,this.age); // this is similler of users like object
    },
    // this is object(users) is called / access properties 


}
users.about(); // this is called method of object(users)