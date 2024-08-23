document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (validarFormulario()) {
            alert("Formulario enviado exitosamente!");
          
        }
    });
    

    function validarFormulario() {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();

        if (!nombre || !apellido) {
            alert("Por favor, completa todos los campos obligatorios.");
            return false;
        }

        return true;
    }
});


