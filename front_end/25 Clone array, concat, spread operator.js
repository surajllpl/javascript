// clone array

let arr1 = ["str1","str2"];
// let arr2 = arr1;
// let arr2 = ["str1","str2"]; // diffrent array of values
// arr1.push("str3");
// let arr2 = arr1.slice(0);// slice can make clone of arr1 from index 0 to last
// let arr2 = [].concat(arr1); // concat aslo make clone 
//spread operrater
// let arr2 = [...arr1];
// let arr2 = [...arr1,"str3","str4"]; // add element
let arr3more = ["str3","str4","str5"];
let arr2 = [...arr1,...arr3more]; // also use this method

// arr1.push("str3");
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);
