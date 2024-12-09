// promise
// it is feature of browser
// it is used to handle asynchronous operation
// it is used to handle error and success both
// it is used to handle promise chain


console.log("start script");

const buckets =["coffee","chips","vegetables","salt","rice"];

const friedRicePromise = new Promise((resolve,reject)=>{
    if(buckets.includes('vegetables') && buckets.includes('salt') && buckets.includes('rice')){
        // console.log("Fried rice is ready");
        resolve("Fried rice is ready..!");
    }else{
        reject("couldn't do it..");
    }
});

friedRicePromise.then((myFriedRice)=>{  // it in microtask queue
    console.log("lets eat",myFriedRice)
},
// (error)=>{
//     console.log(error);
// }
).catch(
    (error)=>{
        console.log(error);
        }
)

setTimeout(()=>{  // it in callback queue
    console.log("from set timeout");
},0);

for(let i=0;i<10;i++){
    console.log(i);
}

console.log("end script");


// output :
// start script
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// end script
// lets eat Fried rice is ready..!
// from set timeout

// explaine output
// 1. start script
// 2. buckets and promise(object) are store in memory.

// 3. for loop runs and prints 0 to 9
// 4. end script
// 5. lets eat Fried rice is ready..! (microtask queue)
// 6. from set timeout (callback queue)
// promise and callback handle by browser
