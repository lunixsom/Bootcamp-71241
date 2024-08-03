var cantidadDeGatos = 1;  // Cambiar valor deseado
var cantidadDePasos = 1;  // Cambiar valor deseado
// Emojis de los dos gatos y de los pasos
var Gato1 = "🐈";
var Gato2 = "🐈🐈";
var Paso = "🐾";

// Loop para imprimir los gatos alternados con los pasos
for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = "";
    for (var j = 0; j < cantidadDePasos; j++) {
        pasos += Paso;
    }
    if (i % 2 == 0) {
        console.log("Gato #" + i + ": " + Gato2 + " " + pasos);
    } else {
        console.log("Gato #" + i + ": " + Gato1 + " " + pasos);
    }
}
