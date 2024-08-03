//Ejercicio #1

let CantidadDeGatos = 35;

let gatos = ['😺', '😸', '😹'];

console.log(gatos.length);

for (let i = 1; i <= CantidadDeGatos; i++) {
    console.log("Gato #" + i + ":" + gatos[(i - 1) % gatos.length]);
    }


console.log('===============================================');

