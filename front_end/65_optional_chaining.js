// optional chaining

const user={
    firstname : "suraj",
    // address : {houseNumber :'12345'}

}
console.log(user.firstname); // suraj
console.log(user?.address?.houseNumber); // 12345
// it check user first it available then it check next oterwise it give undefined
