// event object

const firstButton = document.querySelector('#one');
console.log(firstButton);
// firstButton.addEventListener('click',function(){
//     console.log(this);  
// });
 // when call any event on a element :
 // js Engin --- code executed line by line
 // browser --- js Engine + extra features
 // browser --- js Engin + WebApi

//  when browser know the user canperform event on element 
//  browser will create an event object and pass it to js engine
//  js engine will execute the event handler function with the event object as an argument
//  event object is a object that contains information about the event that occurred

// firstButton.addEventListener('click',function(e){
//     console.log(e);  // output: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// });



const allbtn = document.querySelectorAll('.my-buttons button');
console.log(allbtn);

for(btn of allbtn){
    btn.addEventListener('click',(e)=>{
        console.log(e.currentTarget);     //output : <button id="one">My Button one</button>
        // console.log(e.target.textContent); //My Button one
        })
}
