// document.createElement()
//append
//prepend
//remove

// const newTodoItem = document.createElement('li');
// console.log(newTodoItem);
// const newTodoItemText = document.createTextNode ('New Todo');
// newTodoItem.append(newTodoItemText);
// console.log(newTodoItem);
// const todoList = document.querySelector('.todo-list');
// todoList.appendChild(newTodoItem);


// # using textContent

// const newTodoItem = document.createElement('li');
// console.log(newTodoItem);
// // const newTodoItemText = document.createTextNode ('New Todo');
// // newTodoItem.append(newTodoItemText);
// newTodoItem.textContent = 'New Todo';
// console.log(newTodoItem);
// const todoList = document.querySelector('.todo-list');
// todoList.append(newTodoItem);



// // # using prepend
// const newTodoItem = document.createElement('li');
// console.log(newTodoItem);
// newTodoItem.textContent = 'New Todo';
// console.log(newTodoItem);
// const todoList = document.querySelector('.todo-list');
// todoList.prepend(newTodoItem);

// // # using remove

// const todoList = document.querySelector('.todo-list li');
// todoList.remove();

// # using before and after
const newTodoItem = document.createElement('li');
console.log(newTodoItem);
newTodoItem.textContent = 'New Todo';
const todoList = document.querySelector('.todo-list');
// todoList.before(newTodoItem);
todoList.after(newTodoItem);

