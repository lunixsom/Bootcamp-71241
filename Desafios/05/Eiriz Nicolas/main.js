// Ejercicio 1

let cantidadDeGatos = 10

for(let i = 1; i <= cantidadDeGatos; i++){
    if(i % 3 === 1){
        console.log(`Gato #${i}: 😺`)
    }

    else if(i % 3 === 2){
        console.log(`Gato #${i}: 😸`)
    }

    else if(i % 3 === 0){
        console.log(`Gato #${i}: 😹`)
    }
}



// Ejercicio 2

let cantidadDeGatos = 5;
let cantidadDePasos = 3;

let mensajeConsola = ''

for(let i = 1; i <= cantidadDeGatos; i++){
    mensajeConsola = `Gato ${i}: 🐈`
    for(let j = 1; j<= cantidadDePasos; j++){
      mensajeConsola += '🐾'   
    }

    console.log(mensajeConsola)
}


//Ejercicio 3

let cantidadDeGatos = 10;
let cantidadDePasos = 4;

let mensajeConsola = ''

for(let i = 1; i <= cantidadDeGatos; i++){
    
    if(i % 2 === 1){
    mensajeConsola = `Gato ${i}: 🐈`}
    else if(i % 2 === 0){
    mensajeConsola = `Gato ${i}: 🐈🐈`}
        
    for(let j = 1; j<= cantidadDePasos; j++){
      mensajeConsola += '🐾'   
    }

    console.log(mensajeConsola)
}