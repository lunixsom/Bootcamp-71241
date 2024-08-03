var cantidadDeGatos = 1; // Cambiar valor deseado

// emojis de gatos
//gatos:       1     2      3    4      5     6     7     8      9    10
var gatos = ["😺", "😸", "😹","😺", "😸", "😹","😺", "😸", "😹","😺"];

// Loop para imprimir los gatos
for (var i = 1; i <= cantidadDeGatos; i++) {
    console.log("Gato #" + i + ": " + gatos[(i - 1)]);
}
