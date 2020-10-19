// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.style.backgroundColor = "pink";
content.style.borderColor= "black";
content.style.borderStyle = "solid";

const he1 = document.createElement('h1');
he1.textContent = 'I’m in a div';

const parag2 = document.createElement('p');
parag2.textContent = 'ME TOO';

content.appendChild(he1);
content.appendChild(parag2);
container.appendChild(content);

const parag = document.createElement('p');
parag.textContent = 'Hey I am red';
parag.style.color = "red";

const he3 = document.createElement('h3');
he3.textContent = 'Hey I blue h3';
he3.style.color = "blue";

container.appendChild(parag);
container.appendChild(he3);