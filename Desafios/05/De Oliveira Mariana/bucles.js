var cantidadDeGatos = ['Gato0','Gato1', 'Gato2', 'Gato3', 'Gato4', 'Gato5', 'Gato6', 'Gato7', 'Gato8', 'Gato9'];

for(var index = 0 ; index < cantidadDeGatos.length ; index++){
    console.log(cantidadDeGatos[index]);
    console.log(index);
}
console.log(index)
var cantidadDeGatos = 14;
var emojis = ['😺', '😸', '😹', '😺', '😸', '😹', '😺', '😸', '😹', '😺'];

for (var i = 1; i <= cantidadDeGatos; i++) {
  console.log('Gato #' + i + ': ' + emojis[i - 1]);
}

var cantidadDeGatos = 9;
var cantidadDePasos = 6;


for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = "";
    for (var j = 0; j < cantidadDePasos; j++) {
      pasos += "🐾";
    }
    console.log("Gato #" + i + ": 🐈 " + pasos);
  }
  

console.log(" -------------------------------------  ")
  
  var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var pasos = "";
  for (var j = 0; j < cantidadDePasos; j++) {
    pasos += "🐾";
  }
  if (i % 2 == 0) {
    console.log("Gato #" + i + ": 🐈 " + pasos);
  } else {
    console.log("Gato #" + i + ": 🐈 " + pasos + " 🐾");
  }
}