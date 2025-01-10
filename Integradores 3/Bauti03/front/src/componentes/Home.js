import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Home.css'

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await axios.get(`http://localhost:9000/producto/`);
                setProductos(respuesta.data);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        }
        obtenerProductos();
    }, []);
    
    const carrito = () => {

        alert("Producto agregado al carrito");

        const producto = {
            nombre: 'creatina',
            precio: 30.000,
            descripcion: 'La creatina es un suplemento popular entre los atletas y culturistas por su capacidad para mejorar el rendimiento en ejercicios de alta intensidad. Ayuda a aumentar la fuerza y la masa muscular al permitir entrenamientos más intensos y prolongados.',
        }

        localStorage.setItem('producto', JSON.stringify(producto));

        

    }



    return (
        <main>
        <section class="cards">
        {productos.map((producto) => (
        <div class="card" id="proteina">
        <Link to="/proteina"><img src={producto.imagen} alt="Proteina" className="imgProd" /></Link>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p>{producto.precio}</p>
        <button onClick={carrito}>Agregar al carrito</button>
    </div>
    ))}
    </section>
    </main>
    );
}

export default Home; 