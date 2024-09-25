
let miBoton = document.getElementById("boton");



miBoton.addEventListener("click", (e) => {

    e.preventDefault();
    
    
    let user = prompt ( "¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)")

    //miBoton.style.display = "none";
    
    console.log(`Has elegido a ${user}`);
    
    let span = document.getElementById("personaje");
    
    user = user.toLowerCase();
    
    console.log(user);
    
   
    let div = document.getElementById(`${user}`);

    switch (user) {
        case "mario":
            ocultarTodos()
            span.textContent = user;
            
            div.setAttribute("title", "Presentado");
            break;
        case "daisy":
            ocultarTodos()
            span.innerHTML = `Princesa ${user}`;
            div.setAttribute("title", "Presentado");
            break;
            case "yoshi":
                span.innerHTML = `T. Yoshisaur Munchakoopas`;
                div.setAttribute("title", "Presentado");
            break;
        case "luigi":
            ocultarTodos()
            span.innerHTML = user;
            div.setAttribute("title", "Presentado");
            break;
        case "bowser":
            ocultarTodos()
            span.innerHTML = `Bowser Morton Koopa`;
            div.setAttribute("title", "Presentado");
            break;
        case "peach":
            ocultarTodos()
            span.textContent  = `Princesa Peach Toadstool`;
            div.setAttribute("title", "Presentado");
            break;
        case "toad":
            ocultarTodos()
            span.innerHTML = user;
            div.setAttribute("title", "Presentado");
            break;
        case "toadette":
            ocultarTodos()
            span.innerHTML = user;
            div.setAttribute("title", "Presentado");
            break;
       
        default:
            /* span.innerHTML = "Desconocido"; */
            break;
    } 
});

const ocultarTodos = () => {
    let divPersonajes = document.querySelectorAll('#cajas div')
    console.log(divPersonajes)
    divPersonajes.forEach(div => {
        div.removeAttribute("title")
    });
}

const mostrar = (user) => {
    
    let div = document.getElementById(`${user}`);
        
        if(div.getAttribute('title') === 'Presentado'){
            div.removeAttribute('title')
        }else{
            ocultarTodos()
            let span = document.getElementById("personaje");
            span.textContent = user;
            div.setAttribute("title", "Presentado");
        }
}
