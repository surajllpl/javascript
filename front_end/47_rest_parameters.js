// rest parameters

// function app(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`a is ${b}`);
//     console.log(`a is `,c);
// }
// app(3,4,5,6,7,8,9);


function app(...numbers){
    let count=0;
    for(let no of numbers){
        count = count + no;
    }
    return count;
}
const ans = app(3,4,9,6,3,2,1);
console.log(ans);
