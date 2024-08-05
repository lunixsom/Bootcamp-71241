var cantidadDeGatos = 5; 

for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoji;
    if (i % 3 === 1) {
        emoji = '😺';
    } else if (i % 3 === 2) {
        emoji = '😸';
    } else {
        emoji = '😹';
    }
    console.log('Gato #' + i + ': ' + emoji);
}

// var cantidadDeGatos = 10; 
var cantidadDePasos = 7; 

for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    for (var j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
    }
    console.log('Gato #' + i + ': 🐈 ' + pasos);
}

var cantidadDeGatos = 5; 
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    for (var j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
    }
    if (i % 2 === 1) {
        console.log('Gato #' + i + ': 🐈 ' + pasos);
    } else {
        console.log('Gato #' + i + ': 🐈‍⬛ ' + pasos);
    }
}
