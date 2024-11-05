// Add HTML Element using JavaScript

// Add new HTML Element to page inside the <section> tag 

// innerHTML to add html element
const todoList = document.querySelector(".todo-list");
console.log(todoList);
console.log(todoList.innerHTML);
// todoList.innerHTML = '<li>update todo</li>';// it change on existing element
todoList.innerHTML += '<li>new todo</li>'; // Add new todo 

// when you should use it - don't used innerHTML for add new element ,
// when you should not - update porpose used it.
