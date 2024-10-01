//Ejercicio 1

let cantidadDeGatos = 4;

let emojis = ["😺", "😸", "😹"];

for (let i = 0; i < cantidadDeGatos; i++) {
  let emoji = emojis[ i % 3];
  console.log("Gato #"+(i+1)+ ": "+emoji)
}
console.log("-----------------")

//Ejercicio 2

let numeroDeGatos = 5;
let cantidadDePasos = 3;

for (let i = 0; i < numeroDeGatos; i++) {
  let gatos = "🐈";
  let pasos = "";
  
  for (let j = 0; j < cantidadDePasos; j++) {
    pasos+="🐾";
  }
  console.log("Gato #" + (i+1) + ": "+gatos + pasos);
}

console.log("----------------")

//Ejercicio 3

let numeroDeGato = 10;
let cantidadDePaso = 4;

let gatitos = ["🐈","🐈‍⬛"];

for (let i = 0; i < numeroDeGato; i++) {
  let gatito = gatitos[i % 2];
  let pasos = "";
  
  for (let j = 0; j < cantidadDePaso; j++) {
    pasos += "🐾";
  }
  console.log("Gato #" + (i+1) + ": "+gatito + pasos);
}