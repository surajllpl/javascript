// function return promise

function ricePromise(){
    const buckets =["coffee","chips","vegetables","salt","rice"];

    return new Promise((resolve, reject) => {
    if(buckets.includes('vegetables') && buckets.includes('salt') && buckets.includes('rice')){
        // console.log("Fried rice is ready");
        resolve("Fried rice is ready..!");
    }else{
        reject("couldn't do it..");
    }
});
}
// function call the promise
ricePromise().then(
    (myFriedRice)=>{
        console.log("lets eat",myFriedRice)
}).catch(
    (error)=>{
        console.log(error);
        }
)