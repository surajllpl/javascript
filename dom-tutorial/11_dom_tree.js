
const rootNode =document.getRootNode();
const htmlElement = rootNode.childNodes[0];
console.log(htmlElement.childNodes); //NodeList(3) [head, text, body]
const headElement = htmlElement.childNodes[0];
const textElement = headElement.childNodes[1];
const bodyElement = headElement.childNodes[2];
console.log(headElement);

console.log(headElement.parentNode);
console.log(headElement.nextSibling);
console.log(headElement.nextElementSibling);
