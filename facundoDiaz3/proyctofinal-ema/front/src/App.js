import './App.css';
import Navegacion from './Componentes/Navegacion.js';
import Header from './Componentes/Header.js';
import Footer from './Componentes/Footer.js';
import Nosotros from './Nosotros/Nosotros/Nosotros.js';
import Ecomerce from './Ecomerce/Ecomerce.js';
import Alta from './Alta/Alta.js';
import Contacto from './Contacto/contacto/Contacto.js';
import {Routes, Route} from 'react-router-dom';
import Login from './Login/Login.js';
import Admin from './Admin/Admin.js';
import Carrito from './Carrito/Carrito.js';
import Usuarios from './Componentes/Usuarios';
import Error from './Componentes/Error';

function App() {
  return (
  <>
  
  <Header />

  <Navegacion />

  <Routes>
    <Route path='/Nosotros' element={<Nosotros />} /> 
    <Route path='/Ecomerce' element={<Ecomerce />} />
    <Route path='/Alta' element={<Alta />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Admin' element={<Admin />} />
    <Route path='/Carrito' element={<Carrito />} />
    <Route path='/Contacto' element={<Contacto/>} />
    <Route path='/usuarios' element={ <Usuarios/>}/>
    <Route path='*' element={ <Error/>}/>

  </Routes>

  <Footer />
  </>
  );
}



export default App;
