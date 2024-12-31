/* import '../css/Home.css'
import Depto1 from "../Img/Departamento1.jpg";
import Depto2 from "../Img/Departamento2.jpg";
import Depto3 from "../Img/Departamento3.jpg";
const Home = () => {
    const carrito = () => {

        alert("Producto agregado al carrito");

        const producto = {
            nombre: 'Departamento 1',
            precio: 2500,
            descripcion: 'Ideal para todo trabajo aeróbico. - Con sales de rehidratación.',
            img: {Depto1}
        }

        localStorage.setItem('producto', JSON.stringify(producto));
        localStorage.setItem('datos', 'hola gente, soy datos'); 

    }
    return (
        <div class="container">
    <div class="card">
        <figure>
            <img src={Depto1} alt="logo" />
        </figure>
        <div class="contenido">
            <h3>Departamento</h3>
            <p>¡Descubre tu nuevo hogar en este encantador departamento que combina 
comodidad, estilo y funcionalidad! Situado en una de las zonas más 
cotizadas de Mar de plata, este departamento de habitaciones y  baños 
ofrece el equilibrio perfecto entre tranquilidad y acceso a todos los 
servicios que necesitas</p>
            <button onClick={carrito}>Comprar</button>
        </div>
    </div>
    <div class="card">
        <figure>
            <img src={Depto2} alt="logo" class="Image2" />
        </figure>
        <div class="contenido">
            <h3>Penthouse</h3>
            <p>¡Vive el lujo porque en su máxima expresión con este impresionante 
penthouse en, uno de los edificios más prestigiosos de Cordoba! Este 
penthouse de  habitaciones y baños ofrece una experiencia de vida única, 
con un diseño sofisticado y vistas panorámicas incomparables.</p>
            <a href="">Comprar</a>
        </div>
    </div>
    <div class="card">
        <figure>
            <img src={Depto3} alt="logo" class="Image2" />
        </figure>
        <div class="contenido">
            <h3>Apartamento</h3>
            <p>¡Descubre tu nuevo hogar en este hermoso apartamento que combina estilo 
moderno y comodidad! Situado en o Tierra del fuego, en una de las zonas 
más vibrantes y convenientes de Ushuaia, este apartamento de habitaciones 
y baños es perfecto para aquellos que buscan un espacio elegante y 
funcional.</p>
            <a href="">Comprar</a>
        </div>
    </div>
</div>
    )
}
export default Home;
 */

import '../css/Home.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Depto1 from "../Img/Departamento1.jpg";
/* import Depto2 from "../Img/Departamento2.jpg";
import Depto3 from "../Img/Departamento3.jpg"; */

const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await axios.get(`http://localhost:9000/product/`);
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
            nombre: 'Departamento 1',
            precio: 2500,
            descripcion: 'Ideal para todo trabajo aeróbico. - Con sales de rehidratación.',
            img: {Depto1}
        }

        localStorage.setItem('producto', JSON.stringify(producto));
        localStorage.setItem('datos', 'hola gente, soy datos'); 
    }
    return (
    <div className="container">
        {productos.map((producto) => (
            <div className="card">
                <figure>
                    <img src={producto.imagen} alt="logo" />
                </figure>
                <div className="contenido">
                    <h3>{producto.nombre}</h3>
                    <p>{producto.precio}</p>
                    <button onClick={carrito}>Comprar</button>
                </div>
            </div>
        ))}    
    </div>
    )
}
export default Home;