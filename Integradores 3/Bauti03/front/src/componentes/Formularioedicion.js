import { useState, useEffect } from 'react';
import axios from 'axios';
/* import Swal from 'sweetalert2'; */
import "../css/Alta.css";
import { useParams } from 'react-router-dom';

function FormularioEdicion() {
    const { id } = useParams(); // Obtener el ID desde la URL

    const [nombre, setNombre] = useState(''); // const nombre = ''
    const [precio, setPrecio] = useState(''); // const email = ''
    const [stock, setStock] = useState('');
    const [descripcion, setDescripcion] = useState(''); // const password = ''
    const [imagen, setImagen] = useState('');


    //const [password, setPassword] = useState('');

    // Cargar los datos del producto al montar el componente
    useEffect(() => {
        // Obtener los datos del usuario desde la API
        axios.get(`http://localhost:9000/producto/${id} `)
            .then((response) => {
                const producto = response.data;
                setNombre(producto.nombre);
                setPrecio(producto.precio);
                setStock(producto.stock);
                setDescripcion(producto.descripcion);
                setImagen(producto.imagen);
            })
            .catch((error) => {
                console.log('Error al cargar los datos del usuario:', error);
            });
    }, [id]);

    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const updatedUser = {
            nombre,
            precio,
            stock,
            descripcion,
            imagen
        };

        // Enviar los datos modificados a la API

        axios.put(`http://localhost:9000/producto/editar/${id}`, updatedUser)
            .then((response) => {
                console.log('Producto actualizado correctamente');
                // Vaciar los campos después de guardar
            setNombre('');
            setPrecio('');
            setStock('');
            setDescripcion('');
            setImagen('');    
            })
            .catch((error) => {
                console.log('Error al actualizar el Producto GG:', error);
            });
    };


    return (
        <>
    <main>
    <h1>Alta de Productos</h1>
        <form onSubmit={handleSubmit} id="product-form">
            <label for="nombre">Nombre:</label>
            <input type="text"
            id="nombre" 
            name="nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required 
            />

            <label for="precio">Precio:</label>
            <input type="number"
            id="precio"
            name="precio" 
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            />

            <label for="stock">Stock:</label>
            <input type="number"
            id="stock"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            />

            <label for="descripcion">Descripción:</label>
            <textarea 
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required>

            </textarea>
            <label for="imagen">Imagen:</label>
            <input 
            type="text" 
            id="imagen" 
            name="imagen" 
            accept="image/*" 
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required />
            
            <button type="submit">Guardar Cambios</button>
        </form>
        </main>
        </>
                );
            }

export default FormularioEdicion;