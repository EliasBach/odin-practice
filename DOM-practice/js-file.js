// your JavaScript file

// example
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// # Exercises
// Add the following elements to the container using ONLY JavaScript and 
// DOM methods shown in the example above:

// 1) a <p> with red text that says “Hey I’m red!”
const p_red = document.createElement("p");
p_red.style["color"] = "red";
p_red.textContent = "Hey I'm red!";
container.appendChild(p_red);

// 2) an <h3> with blue text that says “I’m a blue h3!”
const h3_blue = document.createElement("h3");
h3_blue.style["color"] = "blue";
h3_blue.textContent = "I'm a blue h3!";
container.appendChild(h3_blue);

// 3) a <div> with a black border and pink background color 
    // with the following elements inside of it: 
    // i) another <h1> that says “I’m in a div”
    // ii) a <p> that says “ME TOO!”
    // > Hint for this one: after creating the <div> with createElement, 
    // append the <h1> and <p> to it before adding it to the container.

const black_pink_div = document.createElement("div");
black_pink_div.setAttribute("style", 
    "background: pink; border-style: solid; border-color: black");

const h1_child = document.createElement("h1");
h1_child.textContent = "I’m in a div! yeah";
black_pink_div.appendChild(h1_child);

const p_child = document.createElement("p");
p_child.textContent = "ME TOO!";
black_pink_div.appendChild(p_child);

container.appendChild(black_pink_div)