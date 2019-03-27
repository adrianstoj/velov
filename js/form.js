function validerForm(form) {
		return false;
	}
// Création d'un tableau contenant deux emplacements pour les conditions des envois
const tabInfo = [document.getElementById("nomForm"), document.getElementById("prénomForm")];

// Conditions globales pour les validations de saisie
tabInfo[0, 1].addEventListener("input", function (e) {
    let valueInfo = e.target.value;
    if ((valueInfo !== "") && (valueInfo !== null)) {
        document.getElementById("envoi").addEventListener("click", function(e) {
            document.getElementById("footer_defaut").style.display = "none";
            document.getElementById("footer_resa").style.display = "block";
            document.getElementById("reservation_2").style.display = "none";
            document.getElementById("reservation").style.display = "block";
            document.getElementById("minutesTimer").textContent = Timer.minutes;
            document.getElementById("secondesTimer").textContent = Timer.secondes;
        });
    }
});