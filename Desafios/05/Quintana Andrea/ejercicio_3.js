console.log("EJERCICIO 3:");
var cantidadDeGatos = 6;
var cantidadDePasos = 7;

var pasos = "";
for (let j = 0; j < cantidadDePasos; j++) {
    pasos = pasos + "🐾";
}
for (let i = 0; i < cantidadDeGatos; i++) {
    var gatoNegro = "";
    if ((i + 1) % 2 === 0) {
        gatoNegro = "🐈‍⬛";
    } else gatoNegro = "";

    console.log("Gato #" + (i + 1) + ": 🐈 " + gatoNegro + " " + pasos);
}
