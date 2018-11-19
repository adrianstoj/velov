// Création de l'élement actif qui récupère la couleur via al position
window.menu = function() {
    var liAccueil = document.getElementById("liAccueil");
    var liAppli = document.getElementById("liAppli");
    
    var domAccueil = document.getElementById("header_slider");
    var domAppli = document.getElementById("map");
    
    var posAccueil = domAccueil.offsetHeight + domAccueil.offsetTop;
    var posAppli = domAppli.offsetHeight + domAppli.offsetTop;
    var pos = window.scrollY;
    
    if (pos < posAccueil){   
        liAccueil.style.background = "#ff6666";
    } 
    else
		liAccueil.style.background = "inherit";
    
    if (pos > posAccueil && pos < posAppli){   
        liAppli.style.background = "#ff6666";
    } 
    else
		liAppli.style.background = "inherit";
}

 window.addEventListener("scroll", menu);