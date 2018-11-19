// MAP
// Création de l'objet contenant les paramètres
var mapOptions = {
    center: {lat: 45.758114, lng: 4.832501},
    zoom: 13,
};

// Variable cible dans le dom pour placer la map
var targetDOM = document.getElementById("map");

// Initialisation de la map
function initMap() {
  map = new google.maps.Map(targetDOM, mapOptions);
};

// Création et initialisation de l'objet stationMarker (+ ajout de la personnalisation de l'icone)
var stationMarker = { 
    icon: "",
    
    initMarker: function (positionMarker) {
        marker = new google.maps.Marker({
            map: map,
            position: positionMarker,
            icon: this.icon,
            });
        Station.tabMarker.push(marker);
    },
    modifStatus: function(statusStation, availableBikes) {
        if ((statusStation === "OPEN") && (availableBikes > 0)) {
            marker.icon = "images/cycling.png";
        }
        else if ((statusStation === "OPEN") && (availableBikes === 0)) {
            marker.icon = "images/cycling3.png";
        }
        else if (statusStation === "CLOSED") {
            marker.icon = "images/cycling2.png";
        }
    },
};



