// Sets (it is iterable)
// const numbers=[1,2,3,4]
const numbers= new Set([1,2,3,'abc']);
console.log(numbers.size); // 4
console.log(numbers); 

// store data

// const numbers= new Set([1,2,3,3]); // unique items only(no duplication allowed)
// console.log(numbers[2]); // No index-based access 

const products=['product1','product2'];
const items= new Set();
items.add(1);
items.add(2);
items.add(2); // duplicate item
items.add(products);
items.add(products);// ignore 
// below both have diffrent memory address so it's valid
items.add([1,2,3]);
items.add([1,2,3]);
if(items.has(1)){
    console.log('1 is present');
    }else{
        console.log('1 is not present');
}
console.log(items); 

// check it is iterable
for(item of items){
    console.log(item);
}

// delete item from set
// const items= new Set([1,2,3,4]);
items.delete(2);
console.log(items);


// collect unique element
const myArray=[1,2,2,3,4,4,5,6,5,7,6,8];
const unique = new Set(myArray);
console.log(unique);
console.log(myArray);
// console.log(unique.length); // undefined


// how to find length of Set
let lenght=0;
for(let item of unique){
    lenght++;
}
console.log(lenght); // 8



