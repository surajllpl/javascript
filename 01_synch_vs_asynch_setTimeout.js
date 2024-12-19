// synchronous programming vs asynchronous programming
// synchronous programming
//javascript is synchronous programming single threaded
// asynchronous programming multi threaded
// asynchronous programming is faster than synchronous programming

// // synchronous programming or blocking code

// console.log("script start");
// for(let i=1;i<10000;i++){
//     console.log("inside loop");

// }
// console.log("script end");

// setTimeout
// setTimeout provided by web browser
// setTimeout is used to execute a function after a specified time period

// console.log("script start");

// setTimeout(() => {
//   console.log("timeout");
// }, 1000);

// for (let i = 1; i < 5000; i++) {
//   console.log("inside loop");
// }

// console.log("script end");


// output :
// script start
// 4999 inside loop
// script end
// timeout


// cleareTimeout

console.log("script start");

const id = setTimeout(() => {
  console.log("timeout");
}, 1000);

for (let i = 1; i < 5000; i++) {
  console.log("inside loop");
}
console.log("set timeout id",id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");

// output :
// script start
// 4999 inside loop
// set timeout id 2
// clearing time out
// script end