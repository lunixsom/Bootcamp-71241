// EJERCICIO 1

var cantidadDeGatos = 10;
var tipoGatos = ["😺", "😸", "😹"];

for (var i = 1; i <= cantidadDeGatos; i++) {
    let gatos = tipoGatos[(i - 1) % tipoGatos.length];
    console.log(`Gatos #${i}: ${gatos}`);
}
console.log(`----------------------------------------------`);

// EJERCICIO 2

var cantidadDeGatoss = 5;
var cantidadDePasos = 3;

var gato = '🐈';
var paso = '🐾';

for (let i = 1; i <= cantidadDeGatoss; i++) {
    let pasos = paso.repeat(cantidadDePasos);
    console.log(`Gato #${i}: ${gato} ${pasos}`);
}
console.log(`----------------------------------------------`);

// EJERCICIO 3

var cantidadDeGatosss = 10;
var cantidadDePasoss = 4;

var gato ='🐈';
var gatoDos ='🐈‍⬛';
var paso ='🐾';

for (let i = 1; i <= cantidadDeGatosss; i++) {
    let pasos = paso.repeat(cantidadDePasoss);
    if (i % 2 === 0) {
        console.log(`Gato #${i}: ${gatoDos} ${pasos}`);
    } else {
        console.log(`Gato #${i}: ${gato} ${pasos}`);
    }
}




