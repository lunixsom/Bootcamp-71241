let cantidadDeGatos = 9;
let cantidadDePasos = 2;
let Pasos = "🐾";
let Gatos = ["🐈", "🐈‍⬛"];

function listadeGatosYPasos (cantidadGatos, cantidadPasos){
    for(let index = 0; index < cantidadGatos; index++) {
        let resultado = 'Gato' + (index + 1) + ':'+ Gatos [index % Gatos.length] + '';
    for (let paso = 0; paso < cantidadPasos; paso++){
        resultado += Pasos;
    }
    console.log (resultado);}
}
listadeGatosYPasos (cantidadDeGatos, cantidadDePasos);
