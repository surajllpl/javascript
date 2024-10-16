// call,apply,bind method


    function personInfo(hobby,favActor){
        console.log(`${this.firstName} is ${this.age} years old and hobby is ${hobby}, fav Actor is ${favActor}`);

       
    }
const users ={
    firstName :"suraj",
    age : 35,
    address:{
        street:"abc",
        city:"pune"
        },
        about : function (){
            console.log(`${this.firstName} is ${this.age} years old `);

        }

}
const users2 ={
    firstName :"mohan",
    age : 30,
    address:{
        street:"xyz",
        city:"pune"
        },
       
}
users.about(); // it call about function of users
users.about.call(users2); // call can pass the object for this keyword
personInfo.call(users,"dance","SRK");

// apply
personInfo.apply(users2,['singing','Salman']); // apply can pass the array of arguments

// bind
const personInfoBind = personInfo.bind(users,'dancing','Salman');
personInfoBind(); // it will call the personInfo function with users2 object and arguments passed in



