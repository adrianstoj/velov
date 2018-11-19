var marker;
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
            marker.icon = "./images/cycling.png";
        }
        else if ((statusStation === "OPEN") && (availableBikes === 0)) {
            marker.icon = "./images/cycling3.png";
        }
        else if (statusStation === "CLOSED") {
            marker.icon = "./images/cycling2.png";
        }
    },
};