import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Carrito = () => {


    const [carrito, setCarrito] = useState([]);
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const productosCarrito = JSON.parse(localStorage.getItem('carrito'));

        if (!productosCarrito || productosCarrito.length === 0) {
            alert('No hay productos en el carrito');
            navigate('/ecommerce');
        } else {
            setUser(window.sessionStorage.getItem('user'));
            setCarrito(productosCarrito);
        }
    }, [navigate]);

    const eliminarDatos = () => {
        localStorage.removeItem('carrito');
        navigate('/ecommerce');
    };

    const eliminarProducto = (index) => {
        const nuevoCarrito = carrito.filter((_, i) => i !== index);
        setCarrito(nuevoCarrito);
        localStorage.setItem('producto', JSON.stringify(nuevoCarrito));
    };

    return (
        <>
        <h1 className="tCarrito">AQUI ESTAN TUS PRODUCTOS SELECIONADOS {user}</h1>
    <div className="sectio">
        {carrito.map((producto, index) => (
            <div key={index} className="card">
                <img src={producto.img}  alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.Nombre}</h5>
                    <p className="card-text">Precio:{producto.Precio}</p>
                    <button onClick={() => eliminarProducto(index)} className="btn btn-outline-secondary text-center">
                        Eliminar
                    </button>
                </div>
            </div>
        ))}
      </div> 
    <button onClick={eliminarDatos} className="bCarrito text-center">Comprar</button>
    
    </>
);
};

export default Carrito;