// Event Bubbling



const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// child.addEventListener("click",function(){
//     console.log("bubbling !!! Child ");
// })
// parent.addEventListener("click",function(){
//     console.log("bubbling !!! Parent");
//     // Event Bubbling
// })
// grandparent.addEventListener("click",function(){
//     console.log("bubbling !!! Grandparent ");
//     })


// // capturing Event
// child.addEventListener("click",()=>{
//     console.log("capture !!!! Child ");
// },true)
// parent.addEventListener("click",()=>{
//     console.log("capture !!!! Parent ");
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("capture !!!!Grandparent ");
// },true)

// event delegation
grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
})