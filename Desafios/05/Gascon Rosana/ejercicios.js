// Ejercicio 1
console.log("Ejercicio 1:");
for (var i = 1; i <= 17; i++) {
    var emojis = ["😺", "😸", "😹"];
    console.log("Gato #" + i + ": " + emojis[(i - 1) % emojis.length]);
}

console.log("\n-------------------------\n"); // Separador

// Ejercicio 2
console.log("Ejercicio 2:");
var cantidadDeGatos = 4;
var cantidadDePasos = 2;
for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = "🐾".repeat(cantidadDePasos);
    console.log("Gato #" + i + ": 🐈 " + pasos);
}

console.log("\n-------------------------\n"); // Separador

// Ejercicio 3
console.log("Ejercicio 3:");
for (var i = 1; i <= cantidadDeGatos; i++) {
    var emojiGato = (i % 2 === 0) ? "🐈‍⬛" : "🐈";
    var pasos = "🐾".repeat(cantidadDePasos);
    console.log("Gato #" + i + ": " + emojiGato + " " + pasos);
}
