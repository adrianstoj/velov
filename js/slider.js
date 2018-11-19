// Création de l'objet
var Slider = { 
    currentSlide: 0,
    allSlide: document.getElementsByClassName("slide"),
    
    // Slide suivant par l'incrémentation de l'index
    next: function () {       
      	this.allSlide[this.currentSlide].style.display = "none";       
        Slider.currentSlide++;
        
        if (this.currentSlide > this.allSlide.length - 1) {
            this.currentSlide = 0;
        };
      	this.allSlide[this.currentSlide].style.display = "block";      
    },
    
    // Slide précédent par la décrémentation de l'index
    prev: function () {
      	this.allSlide[this.currentSlide].style.display = "none";
        this.currentSlide--;
        
        if (this.currentSlide < 0) {
            this.currentSlide = this.allSlide.length - 1;
        };       
      	this.allSlide[this.currentSlide].style.display = "block";        
    },
    
    // Navigation à l'aide du clavier
    keyboard: function(e) {   
        var keyboardNav = e.keyCode;
        if (keyboardNav === 39) {
            Slider.next();
        }
        else if (keyboardNav === 37) {
            Slider.prev();
        }
        },
};

// Contrôle du slider au clic
document.getElementById("control_next").addEventListener("click", function(e) {
    Slider.next(); 
});

document.getElementById("control_prev").addEventListener("click", function(e) {
    Slider.prev(); 
});

// Contrôle du slider au clavier
document.addEventListener("keydown", Slider.keyboard);