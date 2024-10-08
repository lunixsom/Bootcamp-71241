//--- Me envía los datos a la consola ---//
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

// ---Esto me permite guardar los datos del cliente---//
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

// ---Esto me permite seleccionar los campos de menu items---//
    const seleccion = document.querySelectorAll('input[name="menu-item"]:checked');

// --- Alert para elegir por lo menos un articulo ---//
    if (seleccion.length === 0) {
        alert("Por favor, selecciona al menos un artículo.");
        return;
    }

// ---Con esto calculo el precio del pedido---//
    let costoTotal = 0;
    const articulos = [];
    
    seleccion.forEach(item => {
        const precio = parseFloat(item.getAttribute('data-price'));
        costoTotal += precio;
        articulos.push(item.value);
    });

//---Con esto calculo el precio del pedido---//
    document.getElementById('detallesPedido').innerText = `Artículos seleccionados: ${articulos}`;
    document.getElementById('costoTotal').innerText = `Costo total: $${costoTotal.toFixed(2)}`;

// ---Alert de pedido confirmado---//
    alert(`Gracias por tu pedido, ${nombre}! Tu pedido se ha realizado con exito! \nSeleccionaste: ${articulos} \nCosto total: $${costoTotal.toFixed(2)}`  );

//---Con esto reseteo el formulario cuando ya se hace el pedido---// 
    this.reset();
});

