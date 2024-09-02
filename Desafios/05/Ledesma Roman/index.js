/* let cantidadDeGatos1 =  (prompt("¿Cuántos gatos quAerés ver?")); */
let cantidadDeGatos1 =  13;
let gatos1 = ['😺','😸','😹'];

if (cantidadDeGatos1 >= 0 && cantidadDeGatos1 <=20) {
for (let index = 0; index < cantidadDeGatos1; index++)
    console.log('gato #'+ (index + 1 ) + gatos1[index % 3]);
}

console.log("===========================");
console.log("===========================");



// // Ejercicio 2

/* let numeroDeGatos =prompt ("¿Cuántos gatos querés ver?"); 
let numeroDeHuellas =prompt ("¿Cuántas huellas querés ver?");  */
/* let numeroDeGatos = 5; 
let numeroDeHuellas =3; 

let gato = '🐈'; 
let paso = '🐾'; 

for (let index = 1; index <= numeroDeGatos; index++) {
    let huellas = paso.repeat(numeroDeHuellas) ;
    let gatos = gato.repeat(numeroDeGatos);
    console.log( 'Gato #'+ [index]  +gatos + huellas);
}



console.log("===========================");
console.log("===========================");
 */



// Ejercicio 3


/* let cantidadDeGatos = prompt("Cantidad de gatos ");
let cantidadDePasos = prompt("Cantidad de huellitas "); */
/* let cantidadDeGatos = 3;
let cantidadDePasos = 1;

let gatos = ["🐈", "🐈‍⬛"]; 
let huellitas = ["🐾"]


for (let index = 1; index <= cantidadDeGatos; index++) {
    let LosDosGatos = gatos[index % 2]; 
    let huellitas = "🐾".repeat(cantidadDePasos); 
    console.log( 'Gato #'+[index] +LosDosGatos + huellitas);
}


console.log("===========================");
console.log("===========================");
 */
