// get and set Attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href")); // getAttributes : #home

link.setAttribute("href","https://youtube.com");
console.log(link.getAttribute("href")); // setAttributes : https://youtube.com


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type")); // getAttributes : text
