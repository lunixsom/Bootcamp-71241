let email = 'admin@gmail.com';
let password = '1234';

let emailUser = prompt('Introduce tu Email');
let passwordUser = prompt('Introduce tu contraseña');

if(email == emailUser && password == passwordUser){
    alert ('Bienvenido a la plataforma');
} else {
    alert("Credenciales incorrectas")
    window.location="./index.html";
}