// default parameters

function add(a,b){
    if(typeof b === "undefined"){ // if parsmeter is not get then it set 0
        b=0;
    }
    return a+b;
}
// const ans = add(4,5);// it gives correct ans
const ans = add(4);// we gives one arrgument then it gives NaN

console.log(ans);


function add(a,b=0){ // default parameter is set if not given
    
    return a+b;
}
const ans1 = add(5);// we gives one arrgument then it gives NaN

console.log(ans1);