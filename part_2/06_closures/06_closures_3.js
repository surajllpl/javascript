// Closures Example 3


// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);



const myFunction =(power)=>{
    return (number)=>{
        return number ** power;
    }
}
// const myFunction =power=> number=>number ** power; // 

const square = myFunction(2);
const ans = square(3);
console.log(ans);


// Output :
// 9