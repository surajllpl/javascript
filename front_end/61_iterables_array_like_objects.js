// iterables
// we can used for of loop on it.... like String and Arrray

const fname ="suraj";
for(let char of fname){
    console.log(char);
}
const items =["item1","item2","item3"];
for(let item of items){
    console.log(item);
}

// const users ={'1' :'item1','2' :"item2"};
// for(let item of users){
//     console.log(item); // object can not be iterable
// }

// array like objects

// who can having lenght property and accessing using Index

const firstname ="suraj";

    console.log(firstname.length);//length
    console.log(firstname[0]); // index
