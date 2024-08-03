var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var gatos = ['🐈', '🐈‍⬛'];

for (var i = 0; i < cantidadDeGatos; i++) {
    var pasos = '🐾'.repeat(cantidadDePasos);
    console.log(`Gato #${i + 1}: ${gatos[i % 2]} ${pasos}`);
}
