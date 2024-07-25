document.addEventListener("DOMContentLoaded", function() {
    async function getCredentials() {
        const { value: login } = await Swal.fire({
            title: 'Ingrese su login',
            input: 'text',
            inputPlaceholder: 'Login',
            showCancelButton: true,
            confirmButtonText: 'Siguiente',
            cancelButtonText: 'Cancelar'
        });

        if (!login) {
            await Swal.fire('Acceso cancelado', '', 'info');
            window.location.href = "index.html";
            return;
        }

        const { value: password } = await Swal.fire({
            title: 'Ingrese su password',
            input: 'password',
            inputPlaceholder: 'Password',
            showCancelButton: true,
            confirmButtonText: 'Ingresar',
            cancelButtonText: 'Cancelar'
        });

        if (!password) {
            await Swal.fire('Acceso cancelado', '', 'info');
            window.location.href = "index.html";
            return;
        }

        if (login === "Rosana" && password === "123456") {
            Swal.fire({
                title: 'Bienvenida',
                text: 'Bienvenida, administradora',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            await Swal.fire({
                title: 'Acceso Denegado',
                text: 'Acceso denegado. Redirigiendo al inicio...',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            window.location.href = "index.html";
        }
    }

    getCredentials();
});