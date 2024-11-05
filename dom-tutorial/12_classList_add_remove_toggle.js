
// task : find the classes inside the <section> tag

const sectionnTodo = document.querySelector(".section-todo");
console.log(sectionnTodo.classList); // output: DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// how to set class to the sectionTodo : add
sectionnTodo.classList.add('bg-dark');
console.log(sectionnTodo.classList); //output: DOMTokenList(3) ['section-todo', 'container', 'bg-dark', value: 'section-todo container bg-dark']

// how to remove class from the sectionTodo :remove
sectionnTodo.classList.remove('bg-dark');
console.log(sectionnTodo.classList); //output:DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// check class exist or not :contains
console.log(sectionnTodo.classList.contains('container')); // output: true

// check class not exist it add otherwise not add : toggle
sectionnTodo.classList.toggle('container');
