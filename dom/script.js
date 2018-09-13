
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
const content = document.querySelector(".content");
const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";

content.appendChild(p);

const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent ="I'm a blue h3!";

const div = document.createElement('div');
div.style.cssText = ("border-color: black; background-color: pink");

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div"

const p2 = document.createElement('p')
p2.textContent = "ME Too!"

div.appendChild(h1);
div.appendChild(p2)




content.appendChild(h3);
content.appendChild(div);
