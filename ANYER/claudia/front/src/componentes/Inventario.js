
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../CSS/inventario.css'



const Inventario = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !precio || !cantidad) {
            Swal.fire({
                title: 'Error!',
                text: 'Por favor, complete todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
            return;
        }

        /* const nuevoProducto = {
            nombre: nombreProducto,
            precio: parseFloat(precio),
            cantidad: parseInt(cantidad),
        }; */

        try {
            await axios.post('http://localhost:9000/inventario/register', {  
                nombre, precio, cantidad 
            });
            Swal.fire({
                title: 'Producto agregado!',
                text: 'El producto ha sido agregado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });

            // Limpiar los campos después de enviar
            setNombre('');
            setPrecio('');
            setCantidad('');
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un problema al agregar el producto.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    return (
        <div className="inventario-container">
            <h1>Inventario</h1>
            <p>Bienvenido a la sección de inventario. Aquí puedes agregar nuevos productos.</p>

            <form className="inventario-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre del Producto</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre del producto"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input
                        type="number"
                        id="precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="Precio"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        id="cantidad"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        placeholder="Cantidad disponible"
                        required
                    />
                </div>

                <button type="submit" className="btn-submit">Agregar Producto</button>
            </form>
        </div>
    );
};

export default Inventario;
