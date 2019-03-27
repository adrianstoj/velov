// Création de l'élement actif qui récupère la couleur via al position
window.menu = function() {
    const liAccueil = document.getElementById("liAccueil");
    const liAppli = document.getElementById("liAppli");

    const domAccueil = document.getElementById("header_slider");
    const domAppli = document.getElementById("map");

    const posAccueil = domAccueil.offsetHeight + domAccueil.offsetTop;
    const posAppli = domAppli.offsetHeight + domAppli.offsetTop;
    const pos = window.scrollY;
    
    if (pos < posAccueil) {
        liAccueil.style.background = "#ff6666";
    } 
    else {
        liAccueil.style.background = "inherit";
    }
    
    if (pos > posAccueil && pos < posAppli) {
        liAppli.style.background = "#ff6666";
    } 
    else {
        liAppli.style.background = "inherit";
    }
}

window.addEventListener("scroll", menu);