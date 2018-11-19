// MAP
var map;
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



