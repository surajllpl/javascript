// this keyword

const btn = document.querySelector('.btn-headline');
console.log(btn);
btn.addEventListener("click",()=>{
    console.log("you hit button..!");
    console.log(this);
});  // output : Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// this keyword is referring to window object here.
// arrow function alwayas refer to two level above parents

// without arrow or normao function()
btn.addEventListener("click",function(){
    console.log("you hit button..!");
    console.log(this);
});     //output : <button class="btn-headline">Learn More</button>
// this keyword is referring to button element here.


