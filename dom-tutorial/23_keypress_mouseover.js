// keypress event
const body =document.body;
body.addEventListener('keypress', (e) => {
    console.log(e.key);
});

// mouseover event
const button = document.querySelector('.btn-headline');
button.addEventListener('mouseover', () => {
    console.log('Mouse over the button');
    });

    button.addEventListener('mouseleave', () => {
        console.log('Mouse leave the button');
        });