const menuElt = document.getElementById("menu");
const liElts = menuElt.getElementsByClassName("li_menu");
for (let i = 0; i < liElts.length; i++) {
    liElts[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("li_active");
        current[0].className = current[0].className.replace("li_active", "li_menu");
        this.className += " li_active";
        this.className += " li_menu";
    });
}

