

//console.log(personaje)

let span = document.getElementsByTagName("span")[0]

let botonPresentar = document.getElementById("presentar")

botonPresentar.addEventListener("click", () => {

    let personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy")

    /* botonPresentar.style.display = "none" */

    ocultarPersonajes()

    if (personaje == "Mario"){
        span.innerHTML = "Mario"
    }
    else if (personaje == "Toad"){
        span.innerHTML = "Toad Gomez"
    }
    else if (personaje == "Bowser"){
        span.innerHTML = "Bowser Koopa Ramirez"
    }
    else if (personaje == "Daisy"){
        span.innerHTML = "Daisy Barrionuevo"
    } else {
        span.innerText = "no se quien sos"
    }


/*     switch (personaje) {
        case 'Mario':
            //mario.title = "otra"
            
            let mario = document.getElementById("mario")
            span.innerHTML = "Mario"
            mario.title = "Presentado"
            mario.style.transitionDelay = ""
            break;
        case 'Luigi':
            span.innerHTML = "Luigi"
            let luigi = document.getElementById("luigi")
            luigi.title = "Presentado"
            break;
        case 'Bowser':
            span.innerHTML = "Bowser Morton Koopa"
            let bowser = document.getElementById("bowser")
            bowser.title = "Presentado"
            break;
        case 'Peach':
            span.innerHTML = "Princesa Peach Toadstool"
            let peach = document.getElementById("peach")
            peach.title = "Presentado"
            break;
        case 'Yoshi':
            span.innerHTML = "T. Yoshisaur Munchakoopas"
            let yoshi = document.getElementById("yoshi")
            yoshi.title = "Presentado"
            break;
        case 'Toad':
            span.innerHTML = "Toad"
            let toad = document.getElementById("toad")
            toad.title = "Presentado"
            break;
        case 'Toadette':
            span.innerHTML = `<span style="color:red;">Toadette</span>`
            let toadette = document.getElementById("toadette")
            toadette.title = "Presentado"
            break;
        case 'Daisy':
            //span.innerText = `<span style="color:pink;">Daisy</span>`
            span.innerText = "Princesa Daisy"
            let daisy = document.getElementById("daisy")
            daisy.title = "Presentado"
            break;
        default:
            span.innerHTML = "(desconocido)"
            break;
    } */
    
    

})


let personajes = document.querySelectorAll('#cajas > div'); //selecciona los hijos de cajas q son los div

personajes.forEach(personaje => {
    personaje.addEventListener('click', function() {
        // Uso la misma función mostrarPersonajeCompleto pero con el id del personaje
        console.log(personaje)
        mostrarPersonajeCompleto(this.id);
    });
});


function ocultarPersonajes() {
    // Oculta todos los personajes (quitar el atributo "Presentado")
    let personajes = document.querySelectorAll('div');
    personajes.forEach(function(div) {
        //div.removeAttribute('title');
        div.title = "otra"
    });
}

