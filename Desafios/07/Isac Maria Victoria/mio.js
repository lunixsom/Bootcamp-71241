let divPersonajes = document.querySelectorAll("#cajas div")

let Personajes = {Mario : "Mario",
    Luigi : "Luigi",
    Bowser: "Bowser Morton Koopa",
    Peach: "Princesa Peach Toadstool",
    Yoshi: "T. Yoshisaur Munchakoopas",
    Toad: "Toad",
    Toadette: "Toadette",
    Daisy: "Princesa Dai",
    }; 

let nombresPila = ["Mario","Luigi","Bowser","Peach","Yoshi","Toad","Toadette","Daisy"]

//fUNCION PARA OBTENER EL NOMBRE
function Nombre (CI,P) {
    for (let Personaje in P) {
        console.log(Personaje);    
        if (CI == Personaje) {
            
            return P [Personaje]
        } ;
    };
};



function PresentarPersonaje () {
    // 1. Prompt

let CartelInicial = prompt ("¿Quien se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");  

    // 2. Rellenar el span
let Saludar = Nombre(CartelInicial,Personajes);

    if (Saludar) {

let NombrePersonaje = document.getElementById ("nombre")

    NombrePersonaje.innerText = Saludar; 
        
    //3. Crear un title a medida que se presenta al personaje 
        if (CartelInicial === "Mario" ) {
            ocultarTodos() 
            let mario = document.getElementById ("mario")
            
            if (mario) { mario.title="Presentado"} 

                                        }
        
        else if (CartelInicial === "Luigi" ) {
            ocultarTodos()
            let luigi = document.getElementById("luigi")

            if (luigi) { luigi.title="Presentado"}
                                        }

        else if (CartelInicial === "Bowser") {
            ocultarTodos()
            let bowser = document.getElementById("bowser")

            if (bowser) { bowser.title="Presentado" }
                                        }

        else if (CartelInicial === "Peach") {
            ocultarTodos()
            let peach = document.getElementById("peach")

            if (peach) { peach.title="Presentado" }
                                        }

        else if (CartelInicial === "Yoshi") {
            ocultarTodos()
            let yoshi = document.getElementById("yoshi")

            if (yoshi) { yoshi.title="Presentado"}
                                        }

        else if (CartelInicial === "Toad") {
            ocultarTodos()
            let toad = document.getElementById("toad")

            if (toad) { toad.title="Presentado"}
                                        }

        else if (CartelInicial === "Toadette") {
            ocultarTodos()
            let toadette = document.getElementById("toadette")

            if (toadette) { toadette.title="Presentado" }
                                        }

        else if (CartelInicial === "Daisy") {
            ocultarTodos()
            let daisy = document.getElementById("daisy")

            if (daisy) { daisy.title="Presentado" }
                                        }
        else if (!(nombresPila.includes(CartelInicial))){
            console.log("te equivocaste");
            
        }


    //6. Asignarle el prompt al boton
        let boton = document.querySelector(".boton");
        /* boton.style.display = "none"; */
            };
        } ;

document.querySelector(".boton").addEventListener("click",function () {

    //Bonus 1) Dejar visible a un personaje por cada prompt

/*     for (let index = 0; index < personajes.length; index++) {
    
        personajes[index].title="";
        } */
    ocultarTodos()
    PresentarPersonaje()
})



//Bonus 2) Poder visualizar a los personajes al hacerle click

for (let index = 0; index < divPersonajes.length; index++) {
    
    divPersonajes[index].addEventListener("click", function () {
        ocultarTodos()
        divPersonajes[index].title="Presentado"; 

}  );

    }; 

    

//Funcion ocultar

function ocultarTodos() {
    for (let index = 0; index < divPersonajes.length; index++) {
        divPersonajes[index].title="";
    }
}


/* function ocultar() {
for (let index = 0; index < personajes.length; index++) {

    if (personajes[index].title == "Presentado") {
    
    personajes[index].addEventListener("click", function () {
        personajes[index].title="";
        
    } )
};
    };
        } */

