console.log("EJERCICIO 2:");
var cantidadDeGatos = 7;
var cantidadDePasos = 2;

var pasos = "";
for (let j = 0; j < cantidadDePasos; j++) {
    pasos = pasos + "🐾";
}
for (let i = 0; i < cantidadDeGatos; i++) {
    console.log("Gato #" + (i + 1) + ": 🐈 " + pasos);
}
