/* Ejercicio 1*/ 


var cantidadDeGatos = 14;

var emojis = ['😺', '😸', '😹'];

for (var i = 1; i <= cantidadDeGatos; i++) {

    var emoji = emojis[(i - 1) % emojis.length];
    console.log('Gato #' + i + ': ' + emoji);
}

