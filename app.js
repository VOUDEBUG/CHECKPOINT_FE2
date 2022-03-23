const form = document.querySelector("form");
const modelo = document.querySelector("#modelo");
const potencia = document.querySelector("#potencia");
const imagem = document.querySelector("#imagem");
var x = window.matchMedia("(max-width: 700px)")

form.addEventListener("submit", function (event) {
  event.preventDefault();

const img = document.createElement('img');
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const div1 = document.createElement('div');
const div2 = document.createElement('div');

img.setAttribute('src', imagem.value);
document.body.appendChild(div1);
div1.appendChild(img);
div1.classList.add('card-body');

const text1 = document.createTextNode(modelo.value);
document.body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(h1);
h1.appendChild(text1);
div2.classList.add('container');
if (x.matches) { // If media query matches
  h1.classList.add('texto');
} else {
  h1.classList.add('texto-1');
}

const text2 = document.createTextNode(potencia.value);
document.body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(h2);
h2.appendChild(text2);
if (x.matches) { // If media query matches
  h2.classList.add('texto');
} else {
  h2.classList.add('texto-1');
}





  form.reset();

});
