import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';

function TablaProductos() {

    const [productos, setProductos] = useState([]);
    const navigate = useNavigate(); // Inicializar el hook

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

    const eliminarUsuario = async (id) => {
        try {
            const respuesta = await axios.delete(`http://localhost:9000/product/${id}`);
            console.log('Respuesta al eliminar:', respuesta); // Añade este log
            if (respuesta.status === 200) {
                setProductos((prevLista) => prevLista.filter((usuario) => usuario._id !== id));
            }
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    };

    const confirmarEliminación = (id) => {
        Swal.fire({
            title: "Estás seguro?",
            text: "Esto no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarUsuario(id); // Llamar a la función de eliminación
                Swal.fire({
                    title: "Usuario Eliminado!",
                    text: "El archivo se ha eliminado.",
                    icon: "success"
                });
            }
        });
    };

    const manejarEdicion = (id) => {
        console.log("Editar producto con ID:", id);  
        navigate(`/editarProd/${id}`); // Redirigir a la ruta de edición
    };

    return (
        <>
            <h1 className='container mt-5 text-center'>
                Usuarios habilitados
            </h1>
            <div className='container mt-5 text-center'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ListaInventario</th>
                            <th>cantidad</th>
                            <th>precio</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto._id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.imagen}</td>
                                
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => confirmarEliminación(producto._id)}
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => manejarEdicion(producto._id)}
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default TablaProductos;
 