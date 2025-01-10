import { useState } from 'react';
import axios from 'axios';



const Alta= () => {

    const [nombre, setNombre] = useState(''); 
    const [precio, setPrecio] = useState(''); 
    const [stock, setStock] = useState('');
    const [detalles, setDetalles] = useState('');


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {

            await axios.post( `http://localhost:9000/product/register`, {
                nombre,
                precio, 
                stock,
                detalles
            });

            console.log(nombre, precio, stock, detalles);

            console.log('Datos enviados correctamente');

        } catch (error) {

            console.log('Error al enviar los datos ' + error);

            }
    }


    return (
<div className="alta container mt-5 text-center" >
                <form action="Direccion" method="post" autocomplete="off" onSubmit={handleSubmit}>
                    
                    <label htmlFor="Nombre"> Nombre: </label>  <br />
                    <input
                    type="text
                    " name="nombre" 
                    placeholder="Ingresa el nombre"
                    className="contact"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}  />  <br /><br />
                    
                    <label htmlFor="Precio"> Precio:   </label> <br />
                        <input
                        type="number
                        " name="Email" 
                        className="contact"
                        onChange={(e) => setPrecio(e.target.value)} 
                        /> <br /> <br />
                    
                    <label htmlFor="Stock"> Stock:  </label><br /> 
                        <input 
                        type="number"
                        name="telefono" 
                        className="contact" 
                        onChange={(e) => setStock(e.target.value)} 
                        /> <br /> <br />                       
                        
                    <label htmlFor="Detalles"> Detalles:  </label><br />
                        <input
                        type="text"
                        name="Texto"
                        className="contact" 
                        onChange={(e) => setDetalles(e.target.value)} 
                        /><br /> <br />
        
                        <input type="submit" value="Enviar" className="boton" /><br />  
                    
                </form>
            </div>
    );
}

export default Alta;