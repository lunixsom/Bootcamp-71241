import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Inventario() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        try {
            const obtenerProductos = async () => {
                const respuesta = await axios.get('http://localhost:9000/product/');
                setProductos(respuesta.data);

                console.log(respuesta);
                console.log(respuesta.status);

            }

            obtenerProductos();

            console.log(productos);

        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }

    }, []);

    const eliminarProducto = async (id) => {

        console.log(id);
        
        try {
            const respuesta = await axios.delete(`http://localhost:9000/product/${id}`);
            setProductos(productos.filter(producto => producto._id !== id));
            console.log(respuesta);

        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    }

    const confirmarEliminación = (id) => {

        console.log(id);
        
        Swal.fire({
            title: "Estás seguro?",
            text: "Esto no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProducto(id);
                Swal.fire({
                    title: "Producto Eliminado!",
                    text: "El archivo se ha eliminado.",
                    icon: "success"
                });
            }
        });

        
    }



    return (
        <>
            <h1 className='container mt-5 text-center'>
                Stock Productos
            </h1>
            <div className='container mt-5 text-center'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto._id}>
                                <td>{producto._id}</td>
                                <td>{producto.nombreProducto}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => { confirmarEliminación(producto._id) }}
                                    >
                                        Eliminar
                                    </button>
                                    <button className='btn btn-warning'>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Inventario;