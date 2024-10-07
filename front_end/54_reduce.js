// reduce

const numbers = [2, 3, 4, 5, 6];

const sum = numbers.reduce((accumlator, currentvalue) => {
  return accumlator + currentvalue;
});

//
console.log(sum);

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
  },
];
// reduce
const total = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
    }, 0);
    console.log(total); // 60
    // console.log(products); // [ { id: 1, name: 'Product 1
    // ', price: 10 }, { id: 2, name: 'Product 2
    // ', price: 20 }, { id: 3, name: 'Product 3
    // ', price: 30 } ]
    
    const totals = products.reduce((totalsum,currentValue)=>{
        return totalsum + currentValue.price;

    },0);
    console.log(totals); // 60