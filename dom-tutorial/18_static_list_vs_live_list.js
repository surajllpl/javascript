// Static list vs live list 

const listItem = document.querySelectorAll(".todo-list li");
const sixthItem = document.createElement("li");
sixthItem.textContent = "item 6";
const ul = document.querySelector('.todo-list');
ul.append(sixthItem);
console.log(listItem); //output : NodeList(5) [li, li, li, li, li]
// querySelectorAll gives the static list
// getElementsBy.... method gives the live list

const UL = document.querySelector('.todo-list');
const listItems = ul.getElementsByTagName("li");
console.log(listItems); //output : NodeList(6) [li, li, li, li, li, li]

 