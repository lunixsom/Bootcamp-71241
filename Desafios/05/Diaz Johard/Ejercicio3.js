//Ejercicio #3

let CantidadDeGatos = 5;
let CantidadDePasos = 3;

let gatos = ['🐈', '🐈‍⬛'];
let pasos = [' 🐾'];


console.log(gatos.length);
console.log(pasos.length);

for (let i = 1; i <= CantidadDeGatos ; i++) {
    let huellas = " ";
    for (let i = 0; i < CantidadDePasos ; i++) {
        huellas += pasos;        
    }
    console.log("Gato #" + i + ":" + gatos[(i - 1) % gatos.length] + huellas);
}                                                                                                                                                                                   

