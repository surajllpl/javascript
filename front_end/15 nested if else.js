// nested if else

let winningNumber = 19;

let userGess = +prompt("Guess a number");
console.log(typeof userGess, userGess);

if (userGess === winningNumber) {
  console.log("your Guess is right..!");
} else {
  if (userGess < winningNumber) {
    console.log("too low..!");
  }else{
    console.log("too high..!");
    
  }
}
     