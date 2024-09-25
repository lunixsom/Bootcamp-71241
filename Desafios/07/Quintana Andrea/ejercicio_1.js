console.log("EJERCICIO 1:");
var cantidadDeGatos = 17;
var emojis = ["😺", "😸", "😹"];
for (let i = 0; i < cantidadDeGatos; i++) {
    var indice = i % emojis.length;
    var emoji = emojis[indice];
    console.log("Gato #" + (i + 1) + ": " + emoji);
}
