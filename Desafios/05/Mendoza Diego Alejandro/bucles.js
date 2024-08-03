var cantidadDeGatos = 10;
var emojis = ['😺', '😸', '😹', '😺', '😸', '😹', '😺', '😸', '😹', '😺'];

for (var i = 1; i <= cantidadDeGatos; i++) {
  console.log('Gato #' + i + ': ' + emojis[i - 1]);
}

var cantidadDeGatos = 5;
var cantidadDePasos = 3;


for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = "";
    for (var j = 0; j < cantidadDePasos; j++) {
      pasos += "🐾";
    }
    console.log("Gato #" + i + ": 🐈 " + pasos);
  }
  

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