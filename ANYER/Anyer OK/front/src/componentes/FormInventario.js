import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagen from './Imagen';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function FormInventario() {

    const [nombreProducto, setNombreProducto] = useState(''); 
    const [precio, setPrecio] = useState(''); 
    const [cantidad, setCantidad] = useState(''); 

    const handleSubmit = async(e) => {
        e.preventDefault();

/*         const persona = {
            nombre,
            email,
            password
        } */
        
        try {

            await axios.post('http://localhost:9000/product/register', {
                nombreProducto,
                precio,
                cantidad
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
        setNombreProducto('');
        setPrecio('');
        setCantidad('');
    }


    return (
        <>
        <h1 className='container mt-5 text-center'>
            Alta de Productos
        </h1>
        <div className='d-flex container mt-5 text-center'>
            <Form className='w-75' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={nombreProducto}
                        onChange={(e) => setNombreProducto(e.target.value)} 
                        placeholder="Nombre del producto" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="precio" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cantidad">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                        type="number" 
                        value={cantidad}
                        onChange={(e) =>setCantidad(e.target.value)}
                        required
                        />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="success" type="submit">Enviar Datos</Button>
                    <Button variant="warning" onClick={handleReset}>Limpiar Campos</Button>
                </div>
            </Form>

            <Imagen />
        </div>
        </>
    );
}

export default FormInventario;