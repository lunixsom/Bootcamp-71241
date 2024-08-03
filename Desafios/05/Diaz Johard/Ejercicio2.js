//Ejercicio #2

let CantidadDeGatos = 5;
let CantidadDePasos = 8;

let gato = ['🐈'];
let pasos = [' 🐾'];


console.log(gato.length);
console.log(pasos.length);

for (let i = 1; i <= CantidadDeGatos ; i++) {
    let huellas = " ";
    for (let i = 0; i < CantidadDePasos ; i++) {
        huellas += pasos;        
    }
    console.log("Gato #" + i + ":" + gato[(i - 1) % gato.length] + huellas);
}