// 1) select element and change the value of element
//change text 
// textContent and innerText
        // code
            // const mainHeading = document.getElementById("main-heading")
            // console.log( mainHeading.textContent); // accessing element text content - "Manage your tasks"
            // mainHeading.textContent = "Manage your tasks and projects"; // changing the text content of the element
            // console.log( mainHeading.textContent);

        //code


// 2)  add <span style="display: none;">Hello</span> in index.html : it not be show on browser 

        //code
            // const mainHeading = document.getElementById("main-heading")
            // console.log( mainHeading.textContent);// Manage your tasks Hello :content get "Hello"
        //code

// innerText
const mainHeading = document.getElementById("main-heading")
console.log( mainHeading.innerText);//: innerText get "Manage your tasks" 
