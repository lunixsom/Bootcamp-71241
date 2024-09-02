//Ejercicio A

let cantidadDeGatos = '14';


let emojis = ['😺', '😸','😹'];

for( let index = 1; index <= cantidadDeGatos ; index++){
    let emoji = emojis[(index - 1) % emojis.length];
    console.log('Gato #' + index + ':' + emoji);
}

/* console.log('===========================================');

var cantidadDeGatos = '5';
var cantidadDePasos = '3';

for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = "";
    for (var j = 0; j < cantidadDePasos; j++) {
    pasos += "🐾";
    }
    console.log("Gato #" + i + ": 🐈 " + pasos);
}

console.log('===========================================');


var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
var pasos = "";
for (var j = 0; j < cantidadDePasos; j++) {
    pasos += "🐾";
}
if (i % 2 == 0) {
    console.log("Gato #" + i + ": 🐈 " + pasos);
} else {
    console.log("Gato #" + i + ": 🐈 " + pasos + " 🐾");
}
} */