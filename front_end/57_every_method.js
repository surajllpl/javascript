//every method

const numbers =[2,4,6,10,4];
// check every no is even or not
console.log(numbers.every((num) => num % 2 === 0)); // false
// every method  -----> true/false (boolean)

const products = [
    {
      id: 1,
      name: "Product 1",
      price: 1000,
    },
    {
      id: 2,
      name: "Product 2",
      price: 2000,
    },
    {
      id: 3,
      name: "Product 3",
      price: 3000,
    },
  ];
  //check product price <30000
  console.log(products.every((product) => product.price < 30000)); // true