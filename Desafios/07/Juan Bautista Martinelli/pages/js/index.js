
window.onload = function() {

    const botonPresentar = document.getElementById("boton-presentar");

    botonPresentar.addEventListener("click", function() {

        const personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");


        let nombreCompleto = "";


        if (personaje.toLowerCase() === "mario") {
            nombreCompleto = "Mario";
        } else if (personaje.toLowerCase() === "luigi") {
            nombreCompleto = "Luigi";
        } else if (personaje.toLowerCase() === "bowser") {
            nombreCompleto = "Bowser Morton Koopa";
        } else if (personaje.toLowerCase() === "peach") {
            nombreCompleto = "Princesa Peach Toadstool";
        } else if (personaje.toLowerCase() === "yoshi") {
            nombreCompleto = "T. Yoshisaur Munchakoopas";
        } else if (personaje.toLowerCase() === "toad") {
            nombreCompleto = "Toad";
        } else if (personaje.toLowerCase() === "toadette") {
            nombreCompleto = "Toadette";
        } else if (personaje.toLowerCase() === "daisy") {
            nombreCompleto = "Princesa Daisy";
        } else {
            nombreCompleto = "(desconocido)";
        }


        document.querySelector("h1 span").textContent = nombreCompleto;


        if (nombreCompleto !== "(desconocido)") {
            const personajeDiv = document.getElementById(personaje.toLowerCase());
            
            if (personajeDiv) {
                personajeDiv.setAttribute("title", "Presentado");
            }
        }


        botonPresentar.style.display = "none";
    });
};
