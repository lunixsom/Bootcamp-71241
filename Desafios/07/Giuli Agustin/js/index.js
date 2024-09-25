const botonEnviar = document.querySelector('#botonEnviar');
const obligatorio = document.querySelector('#obligatorio');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const documento = document.querySelector('#documento');


obligatorio.onclick = alertaObligatorio;
botonEnviar.onclick = guardarInfo;

function guardarInfo() {
    alert(`Recordá tus datos: 
         Nombre: ${nombre.value}
         Apellido: ${apellido.value}
         Documento: ${documento.value}`);
}

function alertaObligatorio() {
    alert(`Todo campo con el asterisco (*) es obligatorio que se complete.`);
}