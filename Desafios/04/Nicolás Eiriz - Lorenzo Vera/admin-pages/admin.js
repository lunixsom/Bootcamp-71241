alert("Escriba su correo y contraseña");

let usuarioCorrecto = 'pepe';
let contrasenaCorrecta = '1234';

var login = prompt('acceso-admin');
var contrasena = prompt('contraseña');


if (login == usuarioCorrecto && contrasena == contrasenaCorrecta){
    alert("Su correo y su contraseña son correctas")
    
}

else{
    alert("Usuario Incorrecto");
    window.location.href = '../index.html';
}


