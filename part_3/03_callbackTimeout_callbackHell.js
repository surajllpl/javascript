

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// console.log(heading1);
// setTimeout(()=>{
//     heading2.textContent = "Heading 2"
//     heading2.style.color = "blue";
// },2000)


// // callback Hell
// setTimeout(()=>{
//     heading1.textContent = "one"
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "two"
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "three"
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "five"
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "seven"
//                             heading7.style.color = "brown";
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000);


// using function 
function changeText(element, text, color, time, onSuccessCallback, onfailureCallback){
    setTimeout(()=>{
        if(element){  // handle error : check element exiest or not
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback(); 
                }
        }else{
            if(onfailureCallback){
                onfailureCallback();
                }
        }
    },time);
}

// pyramind of doom
changeText(heading1,"one","violet",1000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","red",3000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","green",2000,()=>{
                    changeText(heading6,"six","blue",3000,()=>{
                        changeText(heading7,"seven","brown",1000,()=>{
                            changeText(heading8,"Eight","orange",1000,()=>{
                                changeText(heading9,"nine","yellow",1000,()=>{
                                    changeText(heading10,"ten","skyblue",1000,()=>{
                                    },()=>{console.log("Error or Element not found")})
                                },()=>{console.log("Error or Element not found")})
                            },()=>{console.log("Error or Element not found")})
                        },()=>{console.log("Error or Element not found")})
                    },()=>{console.log("Error or Element not found")})
                },()=>{console.log("Error or Element not found")})
            },()=>{console.log("Error or Element not found")})
        },()=>{console.log("Error or Element not found")})
    },()=>{console.log("Error or Element not found");});
},()=>{console.log("Error or Element not found");});
