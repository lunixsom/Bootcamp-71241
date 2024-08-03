// EJERCICIO   1 

var cantidadDeGatos = 10;
var gatos = ['😺', '😸', '😹'];

for (var i = 1; i <= cantidadDeGatos; i++) {
    console.log('Gato #' + i + ': ' + gatos[(i - 1) % 3]);
}



// EJERCICIO 2
/*
var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    for (var j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
    }
    console.log('Gato #' + i + ': 🐈 ' + pasos);
}
*/

// EJERCICIO 3
/*
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var gatos = ['🐈', '🐈‍⬛'];

for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    for (var j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
    }
    if (i % 2 == 0) {
        console.log('Gato #' + i + ': ' + gatos[1] + ' ' + pasos);
    } else {
        console.log('Gato #' + i + ': ' + gatos[0] + ' ' + pasos);
    }
}
    
*/