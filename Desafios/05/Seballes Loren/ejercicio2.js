/* Ejercicio 2*/

var cantidadDeGatos = 4;
var cantidadDePasos = 10;


var emojiGato = '🐈';
var emojiPaso = '🐾';


for (var i = 1; i <= cantidadDeGatos; i++) {
    
    var pasos = emojiPaso.repeat(cantidadDePasos);

    console.log('Gato #' + i + ': ' + emojiGato + ' ' + pasos);
}