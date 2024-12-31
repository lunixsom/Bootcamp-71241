import './Alta.css'

import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Alta = () => {

    const [nombre, setNombre] = useState(''); 
    const [precio, setPrecio] = useState(''); 
    const [imagen, setImagen] = useState(null);
    
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {

            // CAMBIAR URL PARA QUE FUNCIONE Y CREAR UNA NUEVA RUTA EN EL BACKEND
            await axios.post( `http://localhost:9000/product/register`, {
                nombre,
                precio, 
                imagen
            });

            console.log(nombre, precio, imagen);

            Swal.fire({
                title: 'Enviado!',
                text: 'Click para seguir',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            console.log('Datos enviados correctamente');

        } catch (error) {

            console.log('Error al enviar los datos ' + error);
            
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error  al enviar los datos',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            
        }
    }

    return (
        <>
            <h1>Formulario</h1>
            <p id='Texto'>Completa los datos del formulario.</p>
            <form action="" autocomplete="off" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Ingresa el nombre" 
                    className="campo" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} 
                />
                <input 
                    type="number" 
                    name="precio" 
                    placeholder="Ingresa el precio" 
                    className="campo" 
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
                <input 
                    type="text" 
                    name="imagen" 
                    placeholder="Ingresa link imagen" 
                    className="campo"
                    value={imagen}
                    onChange={(e) =>setImagen(e.target.value)} 
                />
                <input 
                    type="submit" 
                    name="Enviar" 
                    value="Enviar" 
                    className="Enviar" 
                />
            </form>
        </>
    )
    
}
export default Alta;