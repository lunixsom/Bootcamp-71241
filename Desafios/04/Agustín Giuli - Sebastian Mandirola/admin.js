document.addEventListener('DOMContentLoaded', () => {
    const username = prompt('Ingrese su nombre de usuario:');
    const password = prompt('Ingrese su contraseña:');

    if (username === 'admin' && password === 'admin123') {
        alert('Bienvenido, Admin');
    } else {
        alert('Acceso denegado');
        window.location.href = 'index.html';
    }


    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';

    });
});