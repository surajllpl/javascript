// filter method

const numbers=[1,4,2,5,6,8,3]

const evenNumber = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumber);
