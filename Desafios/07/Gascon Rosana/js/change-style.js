function cambiarEstilo() {
    var estilo1 = document.getElementById('estilo1');
    var estilo2 = document.getElementById('estilo2');
    var estilo3 = document.getElementById('estilo3');
    var selector = document.getElementById('selectorEstilo').value;
    
    // Deshabilita todas las hojas de estilo
    estilo1.disabled = true;
    estilo2.disabled = true;
    estilo3.disabled = true;
    
    // Habilita la hoja de estilo seleccionada
    if (selector === 'estilo1') {
        estilo1.disabled = false;
    } else if (selector === 'estilo2') {
        estilo2.disabled = false;
    } else if (selector === 'estilo3') {
        estilo3.disabled = false;
    }
}
