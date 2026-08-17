// récupération et ajout de l'élément de sortie dans la page
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}

// Calcule de l'IMC
function calculerIMC(poids, taille) {
  const imc = poids / (taille * taille);
  return imc;
}

// Affichage du résultat d'une personne dans la page
function afficherResultat(nom, poids, taille) {
  const imc = calculerIMC(poids, taille);
  let categorie = "";
  let classeCouleur = "";

  if (imc < 18.5) {
    categorie = "Maigreur";
    classeCouleur = "maigreur";
  } else if (imc < 25) {
    categorie = "Corpulence normale";
    classeCouleur = "normal";
  } else if (imc < 30) {
    categorie = "Surpoids";
    classeCouleur = "surpoids";
  } else {
    categorie = "Obésité";
    classeCouleur = "obesite";
  }

  afficher(
    "<p class='resultat " + classeCouleur + "'>" + nom + " — Poids : " + poids + " kg, Taille : " + taille.toFixed(2) + " m" + " → IMC de " + imc.toFixed(2) + " (" + categorie + ")" + "</p>"
  );
}

// Test avec 4 profils différents, un par catégorie
afficherResultat("Profil 1", 50, 1.7); // Maigreur
afficherResultat("Profil 2", 68, 1.75); // Normal
afficherResultat("Profil 3", 82, 1.72); // Surpoids
afficherResultat("Profil 4", 105, 1.68); // Obésité
