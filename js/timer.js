// Création de l'objet timer qui décomptera le temps dans le footer
var Timer = {
    minutes: 19,
    secondes: 59,
    
    diminuerSecondes: function() {
        var secondesElt = document.getElementById("secondesTimer");
        var secondesCompteur = Number(secondesElt.textContent);
        var minutesElt = document.getElementById("minutesTimer");
        var minutesCompteur = Number(minutesElt.textContent); 
        if ((minutesCompteur >= 0) && (secondesCompteur > 0)) {
            secondesElt.textContent = secondesCompteur - 1;
            secondesCompteur.textContent = 59;
                
            };
        if ((minutesCompteur > 0) && (secondesCompteur <= 0)) {
            minutesElt.textContent = minutesCompteur - 1;  
            clearInterval(timerInterval);
            secondesElt.textContent = 59;
            timerInterval = setInterval(Timer.diminuerSecondes, 1000);
        };  
    },
};

// Appelle la fonction diminuerCompteur toutes les secondes si les minutes sont supérieurs à 0
if (Timer.minutes >= 0) {
    var timerInterval = setInterval(Timer.diminuerSecondes, 1000);
};


    

