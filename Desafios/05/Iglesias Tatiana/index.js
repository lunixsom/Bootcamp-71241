/* Ejercicio 01  */
var cantDeGatos = 13;
let gatos = ["😺","😸","😹"];
var vueltas =0;

for (let index = 0; index < cantDeGatos; index ++) {
    if (vueltas > 2) {
        vueltas = 0;
    }
    console.log("Gatos #" + (index +1) +":" + gatos[vueltas]);
    vueltas ++;
}



/* Ejercicio 02  */
/* var cantidadDeGatos = 5;
var cantidadDePasos =3;
var gato = "🐈";
var pasos = "🐾";
var pasitos = "";

for (let index = 1; index <= cantidadDePasos; index++) {
    pasitos = pasitos+pasos;  
}

for (let index = 0; index < cantidadDeGatos; index++) {
    console.log("Gato #" + (index +1) + ":" + gato + pasitos );
    
} */

/* Ejercicio 03 */
/* var cantidadDeGatos = 16;
var cantidadDePasos =3;
let gatos = ["🐈","🐈‍⬛"];
var pasos = "🐾";
var pasitos = "";
var vueltas = 0;

for (let index = 1; index <= cantidadDePasos; index++) {
    pasitos = pasitos+pasos;  
}

for (let index = 0; index < cantidadDeGatos; index++) {
    if (vueltas >1) {
        vueltas =0;
    }
    console.log("Gato #" + (index +1) + ":" + gatos[vueltas] + pasitos );
    vueltas ++;
} */