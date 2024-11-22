
console.log("script start ....!");

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

allButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.currentTarget.textContent);
    })
})
console.log("script end ....!");

// output : script start ....!
// NodeList(3) [button#one, button#two, button#three]
// 12 script end ....!
// first execute Global Contect 

// then execute script of eventListener when it occer
// when click on first button : output - My Button one
// when click on second button : output - My Button two
// when click on third button : output - My Button three
