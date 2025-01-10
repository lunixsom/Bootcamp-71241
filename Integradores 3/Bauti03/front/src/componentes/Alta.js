
/* import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagen from './Imagen'; */
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../css/Alta.css";

function Alta() {

    const [nombre, setNombre] = useState(''); // const nombre = ''
    const [precio, setPrecio] = useState(''); // const email = ''
    const [stock, setStock] = useState('');
    const [descripcion, setDescripcion] = useState(''); // const password = ''
    const [imagen, setImagen] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

/*         const persona = {
            nombre,
            email,
            password
        } */
        
        
            try {

            await axios.post('http://localhost:9000/producto/register', {
                nombre,
                precio,
                stock,
                descripcion,
                imagen
            });

            handleReset();


            Swal.fire({
                title: 'Enviado!',
                text: 'Click para seguir',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            console.log('Datos enviados correctamente');

        } catch (error) {

            console.log('Error al enviar los datos ' + error);

            handleReset();
            
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error  al enviar los datos',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            
        }
    }

    const handleReset = () => {
        setNombre('');
        setPrecio('');
        setStock('');
        setDescripcion('');
        setImagen('');
    }


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
            
            <button type="submit">Agregar Producto</button>
        </form>
        </main>
        </>













    
        /*     <>
        <h1 className='container mt-5 text-center'>
            Alta de productos
        </h1>
        <div className='d-flex container mt-5 text-center'>
            <Form className='w-75' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre de producto</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Nombre del producto" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Precio de producto</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="Precio del producto" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        type="text" 
                        value={descripcion}
                        onChange={(e) =>setDescripcion(e.target.value)}
                        placeholder="Descripción del producto"
                        required
                        />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="success" type="submit">Enviar Datos</Button>
                    <Button variant="warning" onClick={handleReset}>Limpiar Campos</Button>
                </div>
                
                <Imagen />
                </div>
                </>
                </Form> */
            );
}

export default Alta;
