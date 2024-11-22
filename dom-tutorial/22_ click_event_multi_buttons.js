// multiple buttons 

// const btnOne = document.querySelector('#one');
// btnOne.addEventListener('click',function(){
// console.log("you clicked on button one");
// })

const allbtn = document.querySelectorAll('.my-buttons button');
console.log(allbtn);

// for(btn of allbtn){
//     btn.addEventListener('click',function(){
//         // console.log("you clicked on button") ;
//         console.log(this.textContent);
//         })
// }
// // for loop
// for(let i=0; i<allbtn.length; i++){
//     allbtn[i].addEventListener('click',function(){
//         console.log(this);
//         })
// }

//forEach
allbtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        console.log(this.textContent);
        })
});

