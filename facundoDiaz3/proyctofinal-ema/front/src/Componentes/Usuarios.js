
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        try {
            const getUsuarios = async () => {
                const response = await axios.get('http://localhost:9000/user/');
                setUsuarios(response.data);
            }

            getUsuarios();

            console.log(usuarios);

        } catch (error) {
            console.log('Error al obtener los datos ' + error);
        }



    }, []);

    const deleteUsuario = async (id) => {

        console.log(id);
        try {
            const respuesta = await axios.delete(`http://localhost:9000/user/${id}`);
            setUsuarios(usuarios.filter((usuario) => usuario._id !== id));

            console.log(respuesta);


        } catch (error) {
            console.log('Error al eliminar el usuario ' + error);
        }
    }

    const confirmacion = (id) => {

        if (window.confirm("¿Estas seguro de eliminar este usuario?")) {
            deleteUsuario(id);      
        }
    };

    return (
        <>
            <h1 className='container mt-5 text-center'>
                Miembros de Athlete Transformation
            </h1>
            <div className='container mt-5 text-center'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th> Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {usuarios.map((usuario) => (
                            <tr key={usuario._id}>
                                <td>{usuario._id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => { confirmacion(usuario._id) }}
                                    >
                                        Eliminar
                                    </button>
                                    <button className='btn btn-primary'>Editar</button>
                                </td>
                            </tr>
                        ))}



                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Usuarios;