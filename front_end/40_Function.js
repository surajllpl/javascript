

//Function in Javascript
// function declration
function welcome(){
    console.log("Hello, World!"); 
}

welcome(); // call function

function sumTwoNo(no1,no2){ // function with parameter
    // console.log(2+4);
    return no1+no2;  // function return somthing

}
const retuenValue = sumTwoNo(9,5); // function call with arguments and assign return values
console.log(retuenValue); // check the result of function 

// check no Even or not
function isEven(no){
    // if(no % 2 === 0){
    //     return true;
    // }
    //     return false;
    return no % 2 === 0;
}
const retuenValue1 = isEven(12);
console.log(retuenValue1);

function firstchar(str){
    return str[0];
}

console.log(firstchar("Hello"));


function arraytraget(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
            }
        }
        return -1;
   
}
const arr=[1,5,9,27,6]
const ans =arraytraget(arr,27);
console.log(ans);




// function expression

const message = function(){
    console.log("Hello, World!");
}
message(); // call function

const isNoEven = function (no){
    return no % 2 === 0;
}
console.log(isNoEven(6)); // call function and check result


const arrayTargetValue = function(arr,target){
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