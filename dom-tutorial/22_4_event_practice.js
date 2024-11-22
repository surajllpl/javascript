
//task : when you click any button then change background color yellow and text color gray
//solution : we will use event listener and change the style of the button
const allbtn = document.querySelectorAll('.my-buttons button');
// console.log(allbtn);
allbtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.currentTarget.textContent);
        e.currentTarget.style.backgroundColor = 'yellow';
        e.currentTarget.style.color = 'red';
    })
})

