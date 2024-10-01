let miBoton = document.getElementById("boton");



miBoton.addEventListener("click", (e) => {

    e.preventDefault();
    ocultarPersonajes()
    
    let user = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy");

    //miBoton.style.display = "none";
    
    console.log(`Has elegido a ${user}`);
    
    let span = document.getElementById("personaje");
    
    user = user.toLowerCase();
    
    console.log(user);
    
    //3. OBTENGO LA VARIABLE DEL DIV
    let div = document.getElementById(`${user}`);

    switch (user) {
        case "mario":
            span.textContent = user;
            //le asigno un atributo al div
            div.setAttribute("title", "Presentado");
            break;
        case "daisy":
            span.innerHTML = `Princesa ${user}`;
            div.setAttribute("title", "Presentado");
            break;
            case "luigi":
            span.innerHTML = `Luigi`;
            div.setAttribute("title", "Presentado");
            break;
            case "yoshi":
                span.innerHTML = `T. Yoshisaur Munchakoopas`;
                div.setAttribute("title", "Presentado");
            break;
            case "bowser":
                span.innerHTML = `Bowser Morton Koopa`;
                div.setAttribute("title", "Presentado");
            break;
            case "peach":
                span.innerHTML = `Princesa Peach Toadstool`;
                div.setAttribute("title", "Presentado");
            break;
            case "toad":
                span.innerHTML = `Toad`;
                div.setAttribute("title", "Presentado");
            break;
            case "toadette":
                span.innerHTML = `Toadette`;
                div.setAttribute("title", "Presentado");
            break;

        default:
            span.innerHTML = "Desconocido";
            
            break;
    } 


});

const ocultarPersonajes = () => {
    let divPersonajes = document.querySelectorAll('#cajas div')
    console.log(divPersonajes)
    divPersonajes.forEach(div => {
    div.removeAttribute("title")
    });
    }
    


const mostrar = (user) => {

    let div = document.getElementById(`${user}`);
    let span = document.getElementById("personaje");
    span.textContent = user;
    div.setAttribute("title", "Presentado");
    
}

