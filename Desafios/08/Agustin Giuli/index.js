document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los artículos seleccionados
    const items = document.querySelectorAll('input[name="items"]:checked');
    const itemList = Array.from(items).map(item => item.value);
    
    // Calcular el costo total
    let totalCost = 0;
    itemList.forEach(item => {
        const price = parseFloat(item.split('$')[1]);
        totalCost += price;
    });

    // Validar campos
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const address = this.address.value.trim();

    if (!name || !email || !address || itemList.length === 0) {
        alert('Por favor, completa todos los campos y selecciona al menos un artículo.');
        return;
    }

    // Mostrar el costo total
    document.getElementById('totalCost').innerHTML = `Costo Total: $${totalCost.toFixed(2)}`;

    // Enviar el pedido (simulado)
    console.log('Pedido enviado:', {
        name,
        email,
        address,
        items: itemList,
        totalCost
    });
    alert('Pedido enviado con éxito. ¡Gracias por tu compra!');
});
