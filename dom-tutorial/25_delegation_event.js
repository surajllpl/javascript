const todoForm = document.querySelector(".form-todo");
console.log(todoForm);
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault(); // by using this you can stop page refresh 
    console.log(todoInput.value);
    const newTosoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
                <span class="text">${newTosoText} </span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
            newLi.innerHTML = newLiInnerHtml;
        todoList.append(newLi);
            
    todoInput.value="";
});

todoList.addEventListener("click",(e)=>{
    console.log(e.target);
    //if user click on Done Button
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(e.target.parentNode.previousElementSibling);
        //e.target.parentNode.parentNode.classList.toggle("done");
        liSpan.style.textDecoration = "line-through";
       
        }
    if(e.target.classList.contains("remove")){
        //e.target.parentNode.parentNode.classList.toggle("done");
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
        // console.log(targetLi);
        }
        
    


})
