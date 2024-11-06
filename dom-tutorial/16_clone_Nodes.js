// clone Nodes

const ul = document.querySelector('.todo-list');
const li = document.createElement('li');
li.textContent = 'New Todo';
const newLi = li.cloneNode(true); // clone the li element and all its children
ul.append(li);
ul.prepend(newLi);
