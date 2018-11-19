var menuElt = document.getElementById("menu");
var liElts = menuElt.getElementsByClassName("li_menu");
for (var i = 0; i < liElts.length; i++) {
    liElts[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("li_active");
        current[0].className = current[0].className.replace("li_active", "li_menu");
        this.className += " li_active";
        this.className += " li_menu";
    });
}

