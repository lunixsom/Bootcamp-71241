var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 0; i < cantidadDeGatos; i++) {
    var pasos = '🐾'.repeat(cantidadDePasos);
    console.log(`Gato #${i + 1}: 🐈 ${pasos}`);
}
