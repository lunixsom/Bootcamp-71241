import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditarFormulario() {
    const { id } = useParams(); 
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
   

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL_SERVER_GET}/${id}`)
            .then((response) => {
                const usuario = response.data;
                setNombre(usuario.nombre);
                setEdad(usuario.edad);
                setEmail(usuario.email);
            })
            .catch((error) => {
                console.log('Error al cargar los datos del usuario:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const updatedUser = {
            nombre,
            edad,
            email,
            //password,
        };


        //axios.put(`${process.env.REACT_APP_API_URL_SERVER_PUT}/${id}`, updatedUser)
        axios.put(`${process.env.REACT_APP_API_URL_SERVER_PUT}/${id}`, updatedUser)
            .then((response) => {
                console.log('Usuario actualizado correctamente');

            setNombre('');
            setEdad('');
            setEmail('');
            //setPassword('');
            
            
            })
            .catch((error) => {
                console.log('Error al actualizar el usuario:', error);
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
                <Form.Group className="mb-4" htmlFor="edad">
                    <Form.Label className="fw-bold">Edad</Form.Label>
                    <Form.Control 
                    id="edad"
                        type="number" 
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        placeholder= "Edad desde los 8 en adelante" 
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" htmlFor="email">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control 
                    id="email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com" 
                        required
                    />
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Button variant="success" type="submit" className='mt-4'>Guardar cambios</Button>
                    <Button variant="outline-warning" className='mt-4' onClick={() => {
                    setNombre('');
                    setEdad('');
                    setEmail('');
                    //setPassword('');
                    }}>Limpiar Campos</Button>
                </div>
            </Form>
        </div>
    );
};

export default EditarFormulario;