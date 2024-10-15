// fill method

// value , start ,end

const array = new Array(10);
array.fill(0);
console.log(array); // [0, 0, 0, 0, 0,

const arr = [2,3,6,1,7,9,5];
arr.fill(0, 2, 5);
console.log(arr); // [2, 3, 0, 0, 0, 9, 5]


// function fill(value, start, end) {
//     let arr = new Array(end - start + 1).fill(value);
//     return arr;
//     }
