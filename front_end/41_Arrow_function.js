//Arrow Function


const message = () =>{
    console.log("Hello, World! using Arrow Function");
}
message(); // call function

const isNoEven =  (no) =>{
    return no % 2 === 0;
}
console.log(isNoEven(6)); // call function and check result


const arrayTargetValue = (arr,target) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
            }
        }
        return -1;
}
const arr1=[1,5,9,27,6]
const ans1=arrayTargetValue(arr1,6);
console.log(ans1);