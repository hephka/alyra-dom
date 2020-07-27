"use strict";

/* 
le script gradients.js est chargé avant script.js
la variable gradients est disponible - vous pouvez le voir dans la console
*/
console.log(gradients);

/* dans le paragraphe #intro afficher la phrase 
Voici une collection de ... dégradés prêts à utiliser dans vos feuilles de styles

ou ... correspond au nombre de dégradés */
console.log(gradients.length);
const pSumEl = document.getElementById("intro");
pSumEl.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styless`;

/* header : 
ajouter la propriété backgroundImage au style de header
linear-gradient(90deg, .., ..)
ou ... correspondent aux couleurs start et end d'un des objet de l'array gradients (choix aléatoire)

Le bouton #header-button permet de regénérer le header (=changer le dégradé)
*/

const header = document.querySelector("#header");
const randomIndexGradient = Math.floor(Math.random() * gradients.length);

const randomGradient = gradients[randomIndexGradient];
const startColor = randomGradient.start;
const endColor = randomGradient.end;
console.log(randomGradient);
console.log("start", startColor);
console.log("end", endColor);
const gradientCSS = `linear-gradient(90deg, ${startColor}, ${endColor})`;
header.style.backgroundImage = gradientCSS;

const infoBtn = document.getElementById("info-btn");
// const infoBtn = querySelector("#info-btn")

const infoBtnClickHandler = () => {
  console.dir(document);
  alert("haha, ça marche !!?");
};

infoBtn.addEventListener("click", infoBtnClickHandler);
