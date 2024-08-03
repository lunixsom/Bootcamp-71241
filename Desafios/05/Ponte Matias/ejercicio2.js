var cantidadDeGatos = 1;  // Cambiar valor deseado
var cantidadDePasos = 1;  // Cambiar valor deseado

// Emoji del gato y de los pasos
var Gato = "🐈";
var Paso = "🐾";

// Loop para imprimir los gatos con los pasos
for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = "";
    for (var j = 0; j < cantidadDePasos; j++) {
        pasos += Paso;
    }
    console.log("Gato #" + i + ": " + Gato + " " + pasos);
}
