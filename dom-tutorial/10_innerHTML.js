// inner HTML
// ex. <header> tag between all tags etc. is inner Html </header>
// ex. <div> tag between all tags etc. is inner Html </div>
// inner HTML is used to add HTML content to an element

const headLine = document.querySelector(".headline");
console.log(headLine.innerHTML);  // outputs: <h2 id="main-heading">Manage your tasks <span style="display: none;">Hello</span></h2><button class="btn btn-headline">Learn More</button>
headLine.innerHTML ="<h1>Inner html changed</h1>";// outputs: <h1>Inner html changed</h1>
headLine.innerHTML += "<button class=\"btn\">learn more...</button>"; // outputs: <h1>Inner html changed</h1><button>learn more...</button
console.log(headLine.innerHTML);