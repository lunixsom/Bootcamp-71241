

let miBoton = document.getElementById("boton");


miBoton.addEventListener("click", function() {
    
    let personajeIngresado = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

    miBoton.style.display = "none";
    
    console.log("El personaje ingresado es", personajeIngresado);

    let spanPersonaje = document.getElementById("personaje");

    personajeIngresado = personajeIngresado.toLowerCase();
    
    let divPersonaje = document.getElementById(personajeIngresado);
    console.log(divPersonaje);

    switch (personajeIngresado) {
        case "mario":
            spanPersonaje.innerText = "Mario"
            divPersonaje.setAttribute("title", "Presentado")
            break;
        case "luigi":
            spanPersonaje.innerText = "Luigi"
            divPersonaje.setAttribute("title", "Presentado")
            break;
        case "bowser":
            spanPersonaje.innerText = "Bowser Morton Koopa"
            divPersonaje.setAttribute("title", "Presentado")
            break;
        case "peach":
            spanPersonaje.innerText = "Princesa Peach Toadstool"
            divPersonaje.setAttribute("title", "Presentado")
            break;
        case "yoshi":
            spanPersonaje.innerText = "T. Yoshisaur Munchakoopas"
            divPersonaje.setAttribute("title", "Presentado")
            break;
        case "toad":
            spanPersonaje.innerText = "Toad"
            divPersonaje.setAttribute("title", "Presentado")
            break;
        case "toadette":
            spanPersonaje.innerText = "Toadette"
            divPersonaje.setAttribute("title", "Presentado")
            break;
        case "daisy":
            spanPersonaje.innerText = "Princesa Daisy"
            divPersonaje.setAttribute("title", "Presentado")
            break;

        default: spanPersonaje.textContent = "(desconocido)"
            break;
    }
    
    let div = document.getElementById(personajeIngresado);
    
    console.log(personajeIngresado);
});   
