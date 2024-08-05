/* Ejercicio 3*/

var cantidadDeGatos = 6;   
var cantidadDePasos = 3;    

var emojiGato1 = '🐈';
var emojiGato2 = '🐈‍⬛';
var emojiPaso = '🐾';


for (var i = 1; i <= cantidadDeGatos; i++) {

    var emojiGato = (i % 2 === 1) ? emojiGato1 : emojiGato2;
    
    var pasos = emojiPaso.repeat(cantidadDePasos);
    
    console.log('Gato #' + i + ': ' + emojiGato + ' ' + pasos);
}