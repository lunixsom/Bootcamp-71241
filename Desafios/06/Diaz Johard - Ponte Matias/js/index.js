// Validación del formulario
document.getElementById('afiliacionForm').addEventListener('submit', function(event) {
    const requiredFields = document.querySelectorAll('#afiliacionForm [required]');
    let formIsValid = true;
    let firstInvalidField = null;

    requiredFields.forEach(function(field) {
        if (!field.value) {
            formIsValid = false;
            if (!firstInvalidField) {
                firstInvalidField = field;
            }
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '';
        }
    });

    if (!formIsValid) {
        alert('Por favor, complete todos los campos obligatorios marcados con *');
        firstInvalidField.focus();
        event.preventDefault();
    }
});

// Restablecer los estilos al hacer clic en "Restablecer"
document.getElementById('afiliacionForm').addEventListener('reset', function() {
    const requiredFields = document.querySelectorAll('#afiliacionForm [required]');
    requiredFields.forEach(function(field) {
        field.style.borderColor = '';
    });
});
// Alerta con información importante al hacer clic en "¡Recordá!"
document.getElementById('recorda').addEventListener('click', function() {
    alert('Datos Importantes:\n\n1. Asegúrate de llenar todos los campos obligatorios marcados con *.\n2. Revisa que tu correo electrónico sea válido.\n3. Acepta las condiciones para completar la afiliación.\n4. Una vez afiliado deberas presentar un apto medico en un plazo de 15 días.   ');
});
// Mostrar horarios de los deportes al hacer clic en "Ver Horarios"
document.getElementById('horarios').addEventListener('click', function() {
    const horarios = `
    Horarios de los deportes:

    Sede Palermo:
    - Básquet: Lunes, Miércoles, Viernes - 18:00 a 20:00
    - Boxeo: Martes, Jueves - 19:00 a 21:00
    - Fútbol: Lunes, Miércoles - 20:00 a 22:00
    - Tenis: Sábado, Domingo - 10:00 a 12:00

    Sede Rosario:
    - Básquet: Lunes, Miércoles, Viernes - 17:00 a 19:00
    - Boxeo: Martes, Jueves - 18:00 a 20:00
    - Rugby: Sábado - 14:00 a 16:00
    - Vóley: Domingo - 16:00 a 18:00
    `;

    alert(horarios);
});
// Alerta para 
document.getElementById('afiliacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (confirm('¿Estás seguro de que deseas enviar el formulario? ¡Verificar si los datos son correctos!')) {
        this.submit(); // Envía el formulario si confirma
    }
});