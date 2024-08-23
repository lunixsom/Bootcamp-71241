document.addEventListener("DOMContentLoaded", function() {
    const formularioAfiliacion = document.getElementById("formulario-afiliacion");

    formularioAfiliacion.addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("¡Te has registrado con éxito!");
    });

    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", function() {
        formularioAfiliacion.reset(); 
        alert("El formulario se ha restablecido.");
    });
});
