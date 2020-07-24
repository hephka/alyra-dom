"use strict";

//document.body.style.background = "magenta";
/*
document.body.style.opacity = 0;
document.body.style.transition = "1s";
*/

// Le contenu de body apparait avec transition
// setTimeout crée un délai
setTimeout(() => {
  document.body.style.opacity = 1; // style inline ; force 1000
}, 500);

// La propriété background-color de l'élément header est aléatoire ["hotpink", "tomato", "orange"]
const headerEl = document.getElementById("header");
console.dir(headerEl);
const colors = ["hotpink", "tomato", "orange"];
const randomIndexColor = Math.floor(Math.random() * colors.length);

//headerEl.style.backgroundColor = colors[randomIndexColor];
headerEl.setAttribute(
  "style",
  `background-color:${colors[randomIndexColor]}!important;`
);

// Le tagline est aléatore ['Hello', 'Salut', 'Hola', 'Cześć']
const tagline = document.querySelector("#tagline");
console.dir(tagline);
const hi = ["Hello", "Salut", "Hola", "Cześć"];
const randomIndexHi = Math.floor(Math.random() * hi.length);

tagline.textContent = hi[randomIndexHi];

// L'intro-criteres contient l'information sur le nombre de critères
const pIntroEl = document.getElementById("intro-criteres");
const criteres = document.querySelectorAll("#liste-criteres li");
console.log(criteres.length);

pIntroEl.textContent = `Nous avons préparé ${criteres.length} critères`;
