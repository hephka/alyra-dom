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

/*
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

tagline.textContent = `${hi[randomIndexHi]} =)`;

// L'intro-criteres contient l'information sur le nombre de critères
const pIntroEl = document.getElementById("intro-criteres");
const criteres = document.querySelectorAll("#liste-criteres li");
console.log(criteres.length);

pIntroEl.textContent = `Nous avons préparé ${criteres.length} critères`;

*/

// Le bouton info affiche le titre (lang) et URL de la page
const infoBtn = document.getElementById("info-btn");
//const infoBtn = querySelector("#info-btn");

const infoBtnClickHandler = () => {
  console.dir(document);
  alert(
    `Le titre de cette page est "${document.title}" (${document.documentElement.lang}), son URL est ${document.URL} `
  );
};

// infoBtn.addEventListener("click", infoBtnClickHandler);

if (infoBtn) {
  infoBtn.addEventListener("click", () => {
    console.dir(document);
    console.log(document);
    alert(
      `Vous êtes sur la page ${document.title} (${document.documentElement.lang}), son addresse url est ${document.URL}`
    );
  });
}

// Le panneau publicitaire disparait en click

const pubEl = document.getElementById("pub");
//const pubEl = document.querySelector("#pub");
const pubBtn = document.getElementById("pub-btn");

pubEl.addEventListener("click", () => {
  // on ne veut plus avoir pubEl
  pubEl.remove();
  // pubEl.hidden = true
});

// Le bouton 😎 regénere la tagline

const headerBtn = document.querySelector("#header button");

if (headerBtn) {
  headerBtn.addEventListener("click", () => {
    alert("=)");
  });
}

const headerEl = document.getElementById("header");
const tagline = document.getElementById("tagline");

const generateHeader = () => {
  const colors = ["hotpink", "tomato", "orange"];
  const randomIndexColor = Math.floor(Math.random() * colors.length);
  const hi = ["Hello", "Salut", "Hola", "Cześć"];
  const randomIndexHi = Math.floor(Math.random() * hi.length);

  headerEl.setAttribute(
    "style",
    `background-color:${colors[randomIndexColor]}!important;`
  );
  tagline.textContent = `${hi[randomIndexHi]} =)`;
};

generateHeader();

// Et si on voulait désactiver tous les boutons ?
headerBtn = document.querySelector("#header button");

if (headerBtn) {
  headerBtn.addEventListener("click", () => {});
}

// 9

const buttons = document.querySelectorAll("button");
// const buttons = document.getElementsByTagName("button")
console.log(buttons);

for (let button of buttons) {
  button.disabled = true;
}

// 10

const pCookies = document.createElement("p");

console.log(pCookies);
pCookies.textContent = "Ce site n'utilise pas de cookies";
console.log(pCookies);
console.dir(pCookies);
pubEl.append(pCookies);

pCookies.className = "text-center";

console.log(headerEl.className);
console.log(headerEl.classList);
