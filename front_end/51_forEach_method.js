// important array methods

const numbers =[4,2,5,8];

function find(no,index){
   
    console.log(`index is ${index} number is ${no}`);
    
}
// find(number[0],0);

// for(number in numbers){
//     find(numbers[number],number);
// }

numbers.forEach(find);

numbers.forEach(function(number,index){
    console.log(`....index is ${index} number is ${number} * 2 = ${number *2}`);

});



// working with object
const users =[
    {name:'John',age:25},
    {name:'Tom',age:28},
    {name:'Sam',age:30}
];
// for(let user of users){
//     console.log(user.name);
// }
users.forEach((user)=>{
    console.log(user.name);
});
