// how to get dimentions of elements
// find height width :getBoundingClientRect
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
// const info = sectionTodo.getBoundingClientRect(); //DOMRect {x: 54.59375, y: 543.796875, width: 982.796875, height: 438.875, top: 543.796875, …}
const info = sectionTodo.getBoundingClientRect().height; 
console.log(info);// output : 438.875
