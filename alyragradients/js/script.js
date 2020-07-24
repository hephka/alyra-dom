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

function generateBgImg() {
  const start = Math.floor(Math.random() * gradients.length);
  const end = Math.floor(Math.random() * gradients.length);
  const colorGradient = (document.getElementById(
    "header"
  ).style.backgroundImage = `linear-gradient(90deg, ${start}, ${end})`);
  console.log(colorGradient);
}

const myButton = document.querySelector("header-button");
myButton.addEventListener("click", () => {
  return colorGradient;
});

generateBgImg();
