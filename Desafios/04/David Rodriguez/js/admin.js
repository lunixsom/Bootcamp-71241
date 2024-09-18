let user = 'admin';
let password = '1234';

let userName = prompt('Introduce tu Nombre de Usuario: ');
let userPassword = prompt('Introduce tu Contraseña: ');

if(user == userName && password == userPassword){
    alert('Bienvenido Admin');
}

if (user != userName || password != userPassword){
    window.location.href = "../index.html"
}



