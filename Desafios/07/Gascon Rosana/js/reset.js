function resetForm() {
    // Selecciona el formulario por su ID
    var form = document.getElementById('my-form');
    
    // Recorre todos los elementos del formulario
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        
        // Borra el valor de los campos de texto, áreas de texto y selects
        if (element.type === 'text' || element.type === 'textarea' || element.type === 'select-one'|| element.type === 'tel'|| element.type === 'email' ) {
            element.value = '';
        }
        
        // Desmarca los checkboxes y radio buttons
        else if (element.type === 'checkbox' || element.type === 'radio') {
            element.checked = false;
        }
    }
}
