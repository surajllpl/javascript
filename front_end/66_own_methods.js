// create your own mwthods
// function inside object it is called method

 function personInfo(){
    console.log(`${this.name} is ${this.age} years old and lives in ${this.city} .`); 
          
    console.log(users.name,this.age); // this is similler of users like object
}
const users ={
   
        "name": "Suraj",
        "age": 35,
        "city": "Pune",
  
    about : function(){
            console.log(`${this.name} is ${this.age} years old and lives in ${this.city} .`); 
                  
            console.log(users.name,this.age); // this is similler of users like object
        },
        // this is object(users) is called / access properties 

  
}

const users1 ={
   
    "name": "Mohan",
    "age": 33,
    "city": "Nagar",
    about :personInfo
}
const users2 ={
   
    "name": "Naresh",
    "age": 30,
    "city": "Mumbai",
    about :personInfo

}
const users3 ={
   
    "name": "Pramod",
    "age": 25,
    "city": "Nashik",
    about :personInfo

}
users.about(); // Suraj is 35 years old and lives in pune.
users3.about();
