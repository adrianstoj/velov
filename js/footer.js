// Objet avec calcul du temps passé au rafraichissement de la page
const storageTime = {
    heures: "",
    minutes: "",
    secondes: "",  
}

// Initialisation de la variable pour récupérer l'heure
const now = new Date();

const resaTime = {
    heures: "",
    minutes: "",
    secondes: "",
    
    checkTime: function() {
       document.getElementById("envoi").addEventListener("click", function(e) {
           sessionStorage.setItem("hStorage", now.getHours());
           sessionStorage.setItem("minStorage", now.getMinutes());
           sessionStorage.setItem("secStorage", now.getSeconds());
        });
    },

}; 

// Heure de réservation
const resaHeures = sessionStorage.getItem("hStorage");
const resaMin = sessionStorage.getItem("minStorage");
const resaSec = sessionStorage.getItem("secStorage");

// Initialisation des blocs lors d'un refresh si le stockage de session comprend un nom de station
const checkNom = sessionStorage.getItem("nomStorage");
if (sessionStorage.getItem("nomStorage")) {
        document.getElementById("footer_defaut").style.display = "none";
        document.getElementById("footer_resa").style.display = "block";
        document.getElementById("nomFooter").innerHTML = checkNom;
    
        sessionStorage.setItem("nowHStorage", now.getHours());
        sessionStorage.setItem("nowMinStorage", now.getMinutes());
        sessionStorage.setItem("nowSecStorage", now.getSeconds());
}

// Heure actuelle
const currentHeures = sessionStorage.getItem("nowHStorage");
const currentMin = sessionStorage.getItem("nowMinStorage");
const currentSec = sessionStorage.getItem("nowSecStorage");

storageTime.secondes = currentSec - resaSec;
storageTime.minutes = currentMin - resaMin;

if (storageTime.secondes > 0) {
    document.getElementById("minutesTimer").textContent = 19 - storageTime.minutes;
    document.getElementById("secondesTimer").textContent = 59 -storageTime.secondes;
}

else if (storageTime.secondes < 0) {
    document.getElementById("secondesTimer").textContent = storageTime.secondes + 59;
    document.getElementById("minutesTimer").textContent = 19 - storageTime.minutes + 1;
}







