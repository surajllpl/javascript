// intro to event
// user click button :event
// mousehover
// on click
// 3 types of add event

// 1) way to add event : <button class="btn btn-headline" onclick="console.log('You clicked me.')">Learn More</button>  <!-- add event onclick() -->

const btn = document.querySelector('.btn-headline');
console.log(btn);
// btn.onclick = function(){
//     console.log('You clicked me...');
// }

//method -- > addEventListener
// function clickMe(){
//     console.log('You clicked me...');
// }
// btn.addEventListener('click', clickMe);
// btn.addEventListener('click', function(){
//     console.log('You clicked me...!!!');
// });
btn.addEventListener('click',()=>{
    console.log('You clicked Arrow function...!!!');
});