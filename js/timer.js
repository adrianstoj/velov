// Création de l'objet timer qui décomptera le temps dans le footer
const Timer = {
    minutes: 19,
    secondes: 59,
    
    diminuerSecondes: function() {
        const secondesElt = document.getElementById("secondesTimer");
        let secondesCompteur = Number(secondesElt.textContent);
        const minutesElt = document.getElementById("minutesTimer");
        let minutesCompteur = Number(minutesElt.textContent);
        if ((minutesCompteur >= 0) && (secondesCompteur > 0)) {
            secondesElt.textContent = secondesCompteur - 1;
            secondesCompteur.textContent = 59;
            }
        if ((minutesCompteur > 0) && (secondesCompteur <= 0)) {
            minutesElt.textContent = minutesCompteur - 1;
            let timerInterval = setInterval(Timer.diminuerSecondes, 1000);
            clearInterval(timerInterval);
            secondesElt.textContent = 59;
        }
    },
};

// Appelle la fonction diminuerCompteur toutes les secondes si les minutes sont supérieurs à 0
if (Timer.minutes >= 0) {
    let timerInterval = setInterval(Timer.diminuerSecondes, 1000);
}


    

