/* validar ingreso de nombre y apellido*/
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var error = document.getElementById('error');
error.style.color = 'red';


function afiliarse(){

    console.log('afiliandose...');

var mensajeError = [];

if(nombre.value === null || nombre.value === ''){
mensajeError.push('Ingresa tu nombre');
}

if(apellido.value === null || apellido.value === ''){
    mensajeError.push('Ingresa tu apellido');
    }

error.innerHTML= mensajeError.join(', ')

    return false;

}



/*modo oscuro-modo claro*/
const modoClaro = () => {
    console.log("Activamos el modo claro");

    let fondo = document.getElementById("fondo");

	
    let boton = document.getElementById("boton");


    fondo.style.backgroundColor = "white";


    boton.innerHTML = "Cambiar a modo oscuro";
}



/* Boton recordar: muestra datos del formulario*/
const formulario = document.querySelector("#formulario");
formulario.addEventListener( "submit", validarFormulario )

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const documento = document.querySelector("#documento").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `${nombre}, chequea tus datos! TU APELLIDO ES: ${apellido} TU DOCUMENTO ES: ${documento} ¿es correcto?`
}

let dado = Number((Math.random() * 6).toFixed(0));
console.log(dado)



/*resetear formulario*/
function reset(){
    document.getElementById("formulario").reset();
}