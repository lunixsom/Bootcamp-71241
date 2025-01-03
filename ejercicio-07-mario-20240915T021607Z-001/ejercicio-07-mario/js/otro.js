let span = document.getElementsByTagName("span")[0]

let botonPresentar = document.getElementById("presentar")

botonPresentar.addEventListener("click", () => {
    /* ocultarTodos() */
    
    let personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy")

    presentarPersonaje(personaje)
    /* botonPresentar.style.display = "none" */
})

function presentarPersonaje(personaje){
    switch (personaje) {
        case 'Mario':
            //mario.title = "otra"
            ocultarTodos()
            let mario = document.getElementById("mario")
            span.innerHTML = "Mario"
            mario.title = "Presentado"
            mario.style.transitionDelay = ""
            break;
        case 'Luigi':
            ocultarTodos()
            span.innerHTML = "Luigi"
            let luigi = document.getElementById("luigi")
            luigi.title = "Presentado"
            break;
        case 'Bowser':
            ocultarTodos()
            span.innerHTML = "Bowser Morton Koopa"
            let bowser = document.getElementById("bowser")
            bowser.title = "Presentado"
            break;
        case 'Peach':
            ocultarTodos()
            span.innerHTML = "Princesa Peach Toadstool"
            let peach = document.getElementById("peach")
            peach.title = "Presentado"
            break;
        case 'Yoshi':
            ocultarTodos()
            span.innerHTML = "T. Yoshisaur Munchakoopas"
            let yoshi = document.getElementById("yoshi")
            yoshi.title = "Presentado"
            break;
        case 'Toad':
            ocultarTodos()
            span.innerHTML = "Toad"
            let toad = document.getElementById("toad")
            toad.title = "Presentado"
            break;
        case 'Toadette':
            ocultarTodos()
            span.innerHTML = `<span style="color:red;">Toadette</span>`
            let toadette = document.getElementById("toadette")
            toadette.title = "Presentado"
            break;
        case 'Daisy':
            ocultarTodos()
            //span.innerText = `<span style="color:pink;">Daisy</span>`
            span.innerText = "Princesa Daisy"
            let daisy = document.getElementById("daisy")
            daisy.title = "Presentado"
            break;
        default:
            //personaje.title = "Presentado"
            //span.innerHTML = "(desconocido)"
            break;
    }
}



let personajesDiv = document.querySelectorAll('#cajas > div'); //selecciona los hijos de cajas q son los div

for (let i = 0; i < personajesDiv.length; i++) {
    personajesDiv[i].addEventListener("click", function(){
        if(personajesDiv[i].title==""){
            ocultarTodos()
            personajesDiv[i].title = "Presentado" 
            span.innerText=personajesDiv[i].id   
        } else{
            personajesDiv[i].title = ""
            span.innerText= ""
        }   
    });    
}

function ocultarTodos(){
    for (let i = 0; i < personajesDiv.length; i++) {
        personajesDiv[i].title = ""
        span.innerText = ""   
    }
}
