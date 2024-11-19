
const mainButton = document.querySelector("button");
const body = document.body;
const h1 = document.querySelector('h1');

function randomColorGenerater(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r},${g},${b})`;
    return randomColor;

}
mainButton.addEventListener('click',()=>{
    const randomColor = randomColorGenerater();
    h1.textContent = `Current color : ${randomColor}`;
    body.style.backgroundColor =randomColor;
});

Math.floor(Math.random()*256)