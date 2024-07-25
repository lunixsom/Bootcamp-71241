

alert ('Hola, necesitamos iniciar tu sesión para comenzar.')


let email = 'admin@gmail.com';
let password = 'admin';

let emailUser = prompt('Introduce tu Email:');
let passwordUser = prompt('Introduce tu Password');


if (email !== emailUser && password !== passwordUser){
    window.location = "./index.html";
}

if (email == emailUser && password == passwordUser){
    alert ('Bienvenido a la página Admin')}