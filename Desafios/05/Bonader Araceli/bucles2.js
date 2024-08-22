let cantidadDeGatos = 5;
let cantidadDePasos = 2;
let Pasos = "🐾";
let Gatos = "🐈";

function listadeGatosYPasos(cantidadGatos, cantidadPasos) {
    for (let index = 0; index < cantidadGatos; index++) {
        let resultado = 'Gato ' + (index + 1) + ':' + Gatos +'';
    for (let paso = 0; paso < cantidadPasos; paso++) {
        resultado += Pasos;
        }
        console.log(resultado);
    }
}

listadeGatosYPasos(cantidadDeGatos, cantidadDePasos);