// Evènement au clic qui remplace le premier bloc par le second
        


// Paramètres de la signature 
let drawingSignature = false;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.lineWidth = 4;
canvas.style.cursor = "pointer";

// Gestion des évènements de la souris pour dessiner lorsque la fenêtre sera chargée
window.onload = function mooveMouse() {
    canvas.onmousedown = Signature.beginSignature;
    canvas.onmouseup = Signature.endSignature;
    canvas.onmouseout = Signature.endSignature;
    canvas.onmousemove = Signature.doDrawSignature;
};

// L'objet où on récupère les différentes méthodes de la signature
const Signature = {
    beginSignature: function(event) {
        drawingSignature = true;
        context.beginPath();
        context.moveTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
    },
    
    endSignature: function() {
        drawingSignature = false;
    },
    
    doDrawSignature: function(event) {
    if (drawingSignature) {
            context.lineTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
            context.stroke();
        }
    },
};

// Gestion de la signature tactile
 canvas.addEventListener("touchstart", function() {
        drawingSignature = true;
        context.beginPath();
        context.moveTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
  });
  canvas.addEventListener("touchmove", function() {
         if (drawingSignature) {
            context.lineTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
            context.stroke();
        } 
  }); 
  canvas.addEventListener("touchend", function() {
        drawingSignature = false;
  });
  canvas.addEventListener("touchcancel", function() {
        drawingSignature = false;
  });

// Bloquage du scroll pour signer via touch event
document.body.addEventListener("touchstart", function (e) {
  if (e.target === canvas) {
    e.preventDefault();
  }
}, false);


