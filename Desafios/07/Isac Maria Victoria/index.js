
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
                let mario = document.getElementById ("mario");
                
                if (mario) { mario.title="Presentado"} ;
    
                                            };
            
            if (CartelInicial === "Luigi" ) {
                let luigi = document.getElementById("luigi");
    
                if (luigi) { luigi.title="Presentado"};
                                            };
    
            if (CartelInicial === "Bowser") {
                let bowser = document.getElementById("bowser");
    
                if (bowser) { bowser.title="Presentado" };
                                            }
    
            if (CartelInicial === "Peach") {
                let peach = document.getElementById("peach");
    
                if (peach) { peach.title="Presentado" }
                                            };
    
            if (CartelInicial === "Yoshi") {
                let yoshi = document.getElementById("yoshi");
    
                if (yoshi) { yoshi.title="Presentado"};
                                            };
    
            if (CartelInicial === "Toad") {
                let toad = document.getElementById("toad");
    
                if (toad) { toad.title="Presentado"};
                                            };
    
            if (CartelInicial === "Toadette") {
                let toadette = document.getElementById("toadette");
    
                if (toadette) { toadette.title="Presentado" };
                                            };
    
            if (CartelInicial === "Daisy") {
                let daisy = document.getElementById("daisy");
    
                if (daisy) { daisy.title="Presentado" };
                                            };
    
    
        //6. Asignarle el prompt al boton
            let boton = document.querySelector(".boton");
            /* boton.style.display = "none"; */
                };
            } ;
    
    document.querySelector(".boton").addEventListener("click",function () {
    
        //Bonus 1) Dejar visible a un personaje por cada prompt
    
        for (let index = 0; index < personajes.length; index++) {
        
            personajes[index].title="";
            }
        
        PresentarPersonaje();
    }); 
    
    
    let personajes = document.querySelectorAll("#cajas div")
    
    //Bonus 2) Poder visualizar a los personajes al hacerle click
    
    for (let index = 0; index < personajes.length; index++) {
        
        personajes[index].addEventListener("click", function () {
            personajes[index].title="Presentado"; 

            ocultar()
    }  );
    
        }; 

        

    //Funcion ocultar

function ocultar() {
    for (let index = 0; index < personajes.length; index++) {

        if (personajes[index].title == "Presentado") {
        
        personajes[index].addEventListener("click", function () {
            personajes[index].title="";
            
        } )
    };
        };
            }

