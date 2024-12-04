// // setIntervel

// console.log("script start");

// setInterval(() => {  // setInterval call 1 sec and continouslly
   
//   console.log(Math.random());
// }, 1000);


// console.log("script end");

// change backgroound of body 

const body =document.body;
const button = document.querySelector("button");
console.log(button);
const id = setInterval(()=>{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r},${g},${b})`;
    body.style.backgroundColor = randomColor;        
    }, 1000);

button.addEventListener("click",()=>{
    clearInterval(id);
    button.textContent = body.style.backgroundColor;
})
