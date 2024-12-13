// callbackHell code pyramid to promise flat code

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        // handle error : check element exiest or not
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("Element not found");
      }
    }, time);
  });
}

// changeText(heading1, "one", "red", 1000)
//   .then(() => {
//     return changeText(heading2, "two", "blue", 2000);
//   })
//   .then(() => {
//     return changeText(heading3, "three", "green", 3000);
//   })
//   .then(() => {
//     return changeText(heading4, "four", "yellow", 1000);
//   })
//   .then(() => {
//     return changeText(heading5, "five", "purple", 2000);
//   })
//   .then(() => {
//     return changeText(heading6, "six", "orange", 1000);
//   })
//   .then(() => {
//     return changeText(heading7, "seven", "pink", 2000);
//   })
//   .then(() => {
//     return changeText(heading8, "eight", "brown", 1000);
//   })
//   .then(() => {
//     return changeText(heading9, "nine", "gray", 2000);
//   })
//   .then(() => {
//     return changeText(heading10, "ten", "skyblue", 1000);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  // another way to written
  changeText(heading1, "one", "red", 1000)
  .then(() =>  changeText(heading2, "two", "blue", 2000))
  .then(() =>  changeText(heading3, "three", "green", 3000))
  .then(() =>  changeText(heading4, "four", "yellow", 1000))
  .then(() =>  changeText(heading5, "five", "purple", 2000))
  .then(() =>  changeText(heading6, "six", "orange", 1000))
  .then(() =>  changeText(heading7, "seven", "pink", 2000))
  .then(() =>  changeText(heading8, "eight", "brown", 1000))
  .then(() => changeText(heading9, "nine", "gray", 2000))
  .then(() => changeText(heading10, "ten", "skyblue", 1000))
  .catch((error) => alert(error));