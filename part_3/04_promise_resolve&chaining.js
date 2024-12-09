// promise resolve and promise chaining

// const myPromise = Promise.resolve(5); // promise.resolve() return value
// myPromise.then(value =>{console.log(value)})

// another way of written
Promise.resolve(15).then((value) => {
  console.log(value);
});

// then() - then method always return Promise

// promise chaining
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("Hello");
  });
}
myPromise()
  .then((value) => {
    console.log(value); // Hello
    value += " World";
    return value; // if not return it then it return "undefined"
  })
  .then((value) => {
    console.log(value); // Hello World
    value += " Welcome";
    return value;
  })
  .then(value =>{
    console.log(value); // Hello World Welcome
  })
