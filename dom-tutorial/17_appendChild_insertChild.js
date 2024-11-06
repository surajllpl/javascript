// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild


// // appendChild
// const ul = document.querySelector('.todo-list');
// console.log(ul);
// const li = document.createElement('li');
// li.textContent ="new todos";
// ul.appendChild(li);


// // insertBefore
// const ul = document.querySelector('.todo-list');
// const refranceLi = document.querySelector('.todo-list li');
// console.log(refranceLi);
// const li = document.createElement('li');
// li.textContent ="new todos";
// ul.insertBefore(li,refranceLi);

// // replaceChild
// const ul = document.querySelector('.todo-list');
// // refranceNode
// const refranceLi = document.querySelector('.todo-list li');
// console.log(refranceLi);
// // new element
// const li = document.createElement('li');
// li.textContent ="new todos";
// ul.replaceChild(li,refranceLi);

// replaceChild
const ul = document.querySelector('.todo-list');
// refranceNode
const refranceLi = document.querySelector('.todo-list li');
console.log(refranceLi);
// new element
const li = document.createElement('li');
li.textContent ="new todos";
ul.removeChild(refranceLi);