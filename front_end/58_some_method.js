// Some method

const numbers=[3,4,5,9];
//check any one even no
const isEven = numbers.some((num) => num % 2 === 0);
console.log(isEven);

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
      price: 30000,
    },
  ];

  // check price above 10000
  const ans = products.some((product)=>product.price > 10000);
  console.log(ans);