         
let emojis = ['😺', '😸', '😹'];

let cantidadDeGatos = 16

let count = 0
for (let index = 0; index < cantidadDeGatos; index++) {
    console.log('Gato#', index + 1, ':', emojis[count]);
    if (count == 2) {
        count = 0
    } else {
        count = count + 1
    }
}

/* let emojis = ['🐈', '🐾']

let cantidadDeGatos = 4
let cantidadDePasos = 7

for (let index = 0; index < cantidadDeGatos; index++) {
    let salida = `Gato# ${index + 1}: ${emojis[0]}`;
    for (let i = 0; i < cantidadDePasos; i++) {
        salida += ` ${emojis[1]}`;
    }
    console.log(salida);
} */

/*     let emojis = ['🐈', '🐾'] */

/* let cantidadDeGatos = prompt('Ingrese la cantidad de gatos');
let cantidadDePasos = prompt('ingrese la cantidad de pasos'); */

/* let cantidadDeGatos = 7
let cantidadDePasos = 2

for (let index = 0; index < cantidadDeGatos; index++) {
    let salida = `Gato# ${index + 1}: ${emojis[0]}`;
    if (index %2==0) {
        salida += `${emojis[0]}`;
    }
    for (let i = 0; i < cantidadDePasos; i++) {
        salida += ` ${emojis[1]}`;
    }
    console.log(salida);
} */

