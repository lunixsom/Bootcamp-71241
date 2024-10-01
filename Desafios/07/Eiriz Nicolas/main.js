let nombrePersonaje;


let span = document.querySelector('span')
let personajeElegido;

function elegirPersonaje(){

    switch (nombrePersonaje) {
        case 'Mario': span.innerText = 'Mario'
            establecerAtributo('mario')
            break;
        case 'Luigi': span.innerText = 'Luigi'
            establecerAtributo('luigi')
            break;
        case 'Bowser': span.innerText = 'Bowser Morton Koopa'
            establecerAtributo('bowser')
            break;
        case 'Peach': span.innerText = 'Princesa Peach Toadstool'
            establecerAtributo('peach')
            break;
        case 'Yoshi': span.innerText = 'T. Yoshisaur Munchakoopas'
            establecerAtributo('yoshi')
            break;
        case 'Toad': span.innerText = 'Toad'
         establecerAtributo('toad')
            break;
        case 'Toadette': span.innerText = 'Toadette'
            establecerAtributo('toadette')
            break;
        case 'Daisy': span.innerText = 'Princesa Daisy'
            establecerAtributo('daisy')
            break;

        default: span.innerText = 'Hoy se presenta (desconocido)'
            break;
}
}

function establecerAtributo(personaje){
    
    personajeElegido = personaje
    document.querySelector(`#${personaje}`).setAttribute('title', 'Presentado')
    
    console.log(personajeElegido);
        
    // if(personajeVisible){
    //     document.querySelector(`#${personajeVisible}`).removeAttribute('title')
    //     personajeVisible = ''
    // }
}


function preguntarPersonaje(){

        
    nombrePersonaje = prompt('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)')
    
    console.log(nombrePersonaje)

    chequearPersonajeVisible(nombrePersonaje)

    elegirPersonaje()
    
       //ocultarBoton()
}

function ocultarBoton(){
    botonPresentar.style.display = 'none'
}



let botonPresentar = document.querySelector('#presentar')

botonPresentar.addEventListener('click', preguntarPersonaje)

//1) Quitar el comportamiento de que el botón creado se oculte luego de ser presionado, que se había solicitado en el punto anterior. Dejarlo visible en todo momento, incluso luego de ser presionado, manteniendo su comportamiento de mostrar el prompt y presentar al presonaje solicitado, de modo tal que cada vez que sea presionado pregunte otro nombre con un prompt y presente a otro personaje, pero ocultando el último personaje que se mostró, de tal manera que solo habrá un personaje visible a la vez, pero con cada presión sobre el botón se podrá cambiar de personaje, siempre y cuando el usuario haya ingresado un nombre válido, en caso contrario, se mantendrá visible el personaje visible actualmente, si es que hay uno.

function chequearPersonajeVisible(personajeElegido){
    

    if(personajeElegido == 'Mario' || personajeElegido == 'Luigi' || personajeElegido == 'Bowser' || personajeElegido == 'Peach' || personajeElegido == 'Yoshi' || personajeElegido == 'Toad' || personajeElegido == 'Toadette' || personajeElegido == 'Daisy'){
    
    
    let listaPersonajes = document.querySelectorAll('.personaje')

        listaPersonajes.forEach((personaje)=>{
            if(personaje.hasAttribute('title')){
                personaje.toggleAttribute('title')
                
        }
        
    })
}}

//2) Programar cada recuadro para que al ser presioniado se muestre u oculte el personaje que hay allí, de manera alternada. Es decir, que al iniciar la página, estando todos los personajes ocultos, se debería poder presionar cualquier recuadro y dicho recuadro debería presentar al personaje correspondiente. 

//Al presionarlo de nuevo, deberá volver a ocultarse. Se podrá hacer click en otro recuadro, para presionar a otro personaje, pero siempre ocultando al último visible. El botón definido en puntos anteriores, que utiliza el prompt, debe seguir funcionando.


    let personajes = document.querySelectorAll('.personaje')
    let personajeVisible

    personajes.forEach((personaje)=>{
        
        personaje.addEventListener('click', ()=>{
              
            personajes.forEach(personaje=>{
                if(personaje.hasAttribute('title')){
                    personaje.removeAttribute('title')
                }
            })

              if(!personaje.hasAttribute('title')){

                personaje.setAttribute('title', 'Presentado')
                
                if(personajeVisible){
                    document.querySelector(`#${personajeVisible}`).removeAttribute('title')
                }}
             
             else{
            personaje.toggleAttribute('title')
        }
        personajeVisible = personaje.id
    })})
    
    
