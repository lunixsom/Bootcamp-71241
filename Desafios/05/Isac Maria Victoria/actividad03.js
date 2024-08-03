//ACTIVIDAD 3

let Gatos = 8;
let Pasos = 3;
let gatoBlanco = "🐈";
let pasos = "🐾";
let gatoNegro = "🐈‍⬛";
for (let index = 0; index < Gatos; index++) {
    if (index % 2 == 0) {

        console.log(gatoNegro + pasos.repeat(Pasos));
    
    } else {
        console.log(gatoBlanco + pasos.repeat(Pasos));
    }
    
}