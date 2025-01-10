import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditarForm() {
    const { id } = useParams(); // Obtener el ID desde la URL
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');
    //const [password, setPassword] = useState('');

    // Cargar los datos del usuario al montar el componente
    useEffect(() => {
        // Obtener los datos del usuario desde la API
        axios.get(`http://localhost:9000/product/${id}` )
            .then((response) => {
                const producto = response.data;
                setNombre(producto.nombre);
                setPrecio(producto.precio);
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
            imagen
        };

        // Enviar los datos modificados a la API

        axios.put(`http://localhost:9000/product/editar/${id}`, updatedUser)
            .then((response) => {
                console.log('Usuario actualizado correctamente');
                // Vaciar los campos después de guardar
            setNombre('');
            setPrecio('');
            setImagen('');
            })
            .catch((error) => {
                console.log('Error al actualizar el usuario GG:', error);
            });
    };
return (
        <div className="d-flex container mt-5">
            <Form className="w-75 shadow-lg p-4 rounded" onSubmit={handleSubmit}>
                <Form.Group className="mb-4" htmlFor="nombre">
                    <Form.Label className="fw-bold">Nombre</Form.Label>
                    <Form.Control
                    id="nombre" 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Tu nombre" 
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-4" htmlFor="email">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control 
                    id="precio"
                        type="number" 
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="name@example.com" 
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" htmlFor="email">
                    <Form.Label className="fw-bold">Imagen</Form.Label>
                    <Form.Control 
                    id="imagen"
                        type="text" 
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        placeholder="name@example.com" 
                        required
                    />
                </Form.Group>

                <div className="d-flex justify-content-between">
                    <Button variant="success" type="submit" className='mt-4'>Guardar cambios</Button>
                    <Button variant="outline-warning" className='mt-4' onClick={() => {
                    setNombre('');
                    setPrecio('');
                    setImagen('');
                    }}>Limpiar Campos</Button>
                </div>
            </Form>
        </div>
    );
};

export default EditarForm;
