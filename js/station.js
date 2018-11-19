// Création de l'objet Station
var Station = {
    nom: "",
    adresse: "",
    etat: "",
    nbPlaces: "",
    nbDispo: "",
    tabMarker: [],
    
    // Méthode AJAX pour récupérer la liste des stations (+ ajout de la gestion des erreurs)
    ajaxGet: function (url, callback) {
    req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
            callback(req.responseText);
        } else {
            // Affichage des informations sur l'échec du traitement de la requête
            console.error(req.status + " " + req.statusText);
        }
    });
    req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
    });
    req.send(null);
    },
    
    // Attribution des données dans les attributs de l'objet
    data: function(dataStation) {
        this.nom = dataStation.name;
        this.addresse = dataStation.address;
        this.etat = dataStation.status;
        this.nbPlaces = dataStation.available_bike_stands;
        this.nbDispo = dataStation.available_bikes;
    },
    
    // Ajout des données à la page html
    addData: function() {
        document.getElementById("nomStation").innerHTML = this.nom;
        document.getElementById("adresseStation").innerHTML = this.addresse;
        document.getElementById("etatStation").innerHTML = this.etat;
        document.getElementById("placesStation").innerHTML = this.nbPlaces;
        document.getElementById("restantsStation").innerHTML = this.nbDispo;
        document.getElementById("nomStationResa").innerHTML = this.nom;
    },
    
    // Enregistrement des données pour le footer
    saveData: function() {
        var now = new Date();
        sessionStorage.setItem("nomStorage", this.nom);
        sessionStorage.setItem("hStorage", now.getHours());
        sessionStorage.setItem("minStorage", now.getMinutes());
        sessionStorage.setItem("secStorage", now.getSeconds());
    },
    
    regroupMarker: function () {
        var markerCluster = new MarkerClusterer(map, this.tabMarker, {imagePath: "images/marqueurs/m"});
    },
};

// Appel de la méthode AJAX précédement définie (+ajout des données de la station ensuite reprise dans le footer)
Station.ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=e9cd9163d494542b2a31c841c467c8fc2cf5913e", function(reponse) {
    allStations = JSON.parse(reponse);
    allStations.forEach(function(dataStation) {
        stationMarker.initMarker(dataStation.position);
        stationMarker.modifStatus(dataStation.status, dataStation.available_bikes);
        
         google.maps.event.addListener(marker, "click", function() {
            Station.data(dataStation);
            Station.addData();
            
            Station.saveData();
            var dataFooter = sessionStorage.getItem("nomStorage");
             
            document.getElementById("envoi").addEventListener("click", function(e) {
                document.getElementById("nomFooter").innerHTML = dataFooter;
            });

            if ((Station.nbDispo === 0) || (Station.etat === "CLOSED")) {
                alert("La réservation n'est pas disponible à cette station en raison du manque de vélos ou de sa fermeture. Sélectionnez en une autre.")
                document.getElementById("resa").style.display = "none";
                document.getElementById("resaImpossible").style.display = "block";
            }; 
             
            if ((Station.nbDispo !== 0) && (Station.etat === "OPEN")) {
                document.getElementById("resaImpossible").style.display = "none";
                document.getElementById("resa").style.display = "block";
            };
             
            document.getElementById("resa").addEventListener("click", function (e) {
            document.getElementById("reservation").style.display = "none";
            document.getElementById("reservation_2").style.display = "block";
            });
        });
    });
    Station.regroupMarker();
});
        



	






