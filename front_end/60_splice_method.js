// splice method
// splice method used for some element delete or insert in Array

const arr =[1,2,3,4,5];
//delete
// const deleted = arr.splice(1,1);
// console.log(arr,deleted);

//insert
arr.splice(1,0,44);
console.log(arr);

// insert and delete
arr.splice(1,2,55); // (index,value for delete, insert value)
console.log(arr);

