function presentarPersonaje() {
    let personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    console.log(personaje);  

// Objeto con los nombres completos de los personajes
const nombresCompletos = {
    Mario: "Mario",
    Luigi: "Luigi",
    Bowser: "Bowser Morton Koopa",
    Peach: "Princesa Peach Toadstool",
    Yoshi: "T. Yoshisaur Munchakoopas",
    Toad: "Toad",
    Toadette: "Toadette",
    Daisy: "Princesa Daisy"
};

// Personaje ingresado válido
if (nombresCompletos[personaje]) {
    // Obtener el nombre completo
    let nombreCompleto = nombresCompletos[personaje];
    document.querySelector("h1 span").textContent = nombreCompleto;

    // Convertir el nombre del personaje a minúsculas
    let personajeId = personaje.toLowerCase();

    // Buscar el elemento con el ID correspondiente en minúsculas
    let personajeElemento = document.getElementById(personajeId);

    if (personajeElemento) {
        personajeElemento.setAttribute("title", "Presentado");
    }
} else {
    // Si el personaje no es válido, mostrar "(desconocido)" 
    document.querySelector("h1 span").textContent = "(desconocido)";
}

   // Desaparece el botón después de hacer clic
    document.querySelector(".boton").style.display = 'none';
}
// Asignar la función al botón
document.querySelector(".boton").addEventListener('click', presentarPersonaje);