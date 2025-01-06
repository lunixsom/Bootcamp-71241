
import '../Login/Login.css';
import { useState, } from "react";
import axios from 'axios';


function Login() {

    const [nombre, setNombre] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleSubmit = async(e) => {
        e.preventDefault();

        
        try {

            await axios.post('http://localhost:9000/user/register', {
                nombre,
                email,
                password
            });

            handleReset();

           alert('Datos enviados correctamente');

            console.log('Datos enviados correctamente');

        } catch (error) {

            console.log('Error al enviar los datos ' + error);

            handleReset();
            
           alert('Error al enviar los datos, los campos no deben estar completados correctamente');
        }
    }

    const handleReset = () => {
        setNombre('');
        setEmail('');
        setPassword('');
    }

    return (

        <>
            <h1 className="text-center mt-5 mb-5" >
                Registrate
            </h1>
            <div className="Log " >
                <form onSubmit={handleSubmit}>
                    <div className="form-group"  >
                    
                        <label htmlFor="exampleInputNombre1">Nombre & Apellido</label>
                        
                        <input type="text"
                            className="form-control"
                            onChange={(e) => setNombre(e.target.value)}
                            id="exampleInputNombre1"
                            value={nombre}
                            placeholder="Nombre & Apellido"
                            required />

                    </div>

                    <div className="form-group mt-5 "  >
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            required />

                    </div>

                    <div className="form-group mt-5 "  >
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Minimo 8 caracteres"
                            required />
                    </div>
                    <div className="boo"> 
                        <button type="submit"  className="btn btn-primary ">registrarse</button>
                        <button onClick={handleReset} className="btn btn-danger">borrar</button>
                    </div>
                </form>
            </div>

        </>
    );

}

export default Login