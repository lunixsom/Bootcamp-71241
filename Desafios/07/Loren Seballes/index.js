function entrarPresentar () {
    const nombre= prompt ('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)');


const elemento = document.getElementById("personaje");


function nombreCompleto(nombre) {
    switch (nombre.toLowerCase()) {
        case "mario":
            return "Mario";
        case "luigi":
            return "Luigi";
        case "bowser":
            return "Bowser Morton Koopa";
        case "peach":
            return "Princesa Peach Toadstool";
        case "yoshi":
            return "T. Yoshisaur Munchakoopas";
        case "toad":
            return "Toad";
        case "toadette":
            return "Toadette";
        case "daisy":
            return "Princesa Daisy";
        default: return "(desconocido)";                            
    }
}

elemento.textContent = nombreCompleto(nombre); 

//document.getElementById("botonPresentar").style.display= "none";

// Parte 3 y 4

const elementoPersonaje = document.getElementById(nombre.toLowerCase());

    if (elementoPersonaje) {
        ocultaTodos()
        elementoPersonaje.title = "Presentado";

    }
 }

function ocultaTodos(){
    let divs = document.querySelectorAll("#cajas > div")

    divs.forEach(div => {
        div.removeAttribute("title","Presentado")
    } )
}



//Bonus (NO PUDE HACER QUE FUNCIONE)


/*const personajes = document.getElementsByClassName("personaje");
for (let i = 0; i < personajes.length; i++) {
    personajes[i].addEventListener('click', function() {

    this.classList.toggle('active');
    });
}*/

    /*const personajes = document.getElementsByClassName('personaje');

    for (let i = 0; i < personajes.length; i++) {
    personajes[i].addEventListener('click', function() {
        const personajeId = this.id; 
    
        
        const imagenContainer = document.getElementsByClassName('personaje');
    
        imagenContainer.className = ''; 
        imagenContainer.classList.add(personajeId); 
    
        imagenContainer.style.display = 'block';
    });
    }
}*/

