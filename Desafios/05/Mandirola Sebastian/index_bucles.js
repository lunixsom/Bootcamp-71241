// EJERCICIO 1: Autos con diferentes emojis

(function ejercicio1() {
    var cantidadDeAutos = 10;
    var emojis = ["🚗", "🚙", "🚕"];

    console.log("Ejercicio 1:");
    for (var i = 1; i <= cantidadDeAutos; i++) {
        console.log("Auto #" + i + ": " + emojis[(i - 1) % 3]);
    }
    console.log("\n");
})();




// EJERCICIO 2: Crear 2 variables con valores numéricos libres: Autos con pistas

(function ejercicio2() {
    var cantidadDeAutos = 5;
    var cantidadDePistas = 3;
    var pistas = "🏁".repeat(cantidadDePistas);

    console.log("Ejercicio 2:");
    for (var i = 1; i <= cantidadDeAutos; i++) {
        console.log("Auto #" + i + ": 🚗 " + pistas);
    }
    console.log("\n");
})();



// EJERCICIO 3: Adaptar el ejercicio anterior para que se muestren 2 autos alternadamente:

(function ejercicio3() {
    var cantidadDeAutos = 10;
    var cantidadDePistas = 4;
    var pistas = "🏁".repeat(cantidadDePistas);
    var autos = ["🚗", "🚙"];

    console.log("Ejercicio 3:");
    for (var i = 1; i <= cantidadDeAutos; i++) {
        console.log("Auto #" + i + ": " + autos[(i - 1) % 2] + " " + pistas);
    }
    console.log("\n");
})();
