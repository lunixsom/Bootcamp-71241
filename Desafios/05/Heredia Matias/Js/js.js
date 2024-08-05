var cantidadDeGatos = 10;
var emojis = ['😺', '😸', '😹'];

for (var i = 1; i <= cantidadDeGatos; i++) {
    console.log(`Gato #${i}: ${emojis[(i - 1) % emojis.length]}`);
}
