import './App.css';
import Footer from './Componentes/Footer';
import Navegacion from './Componentes/Navegacion';
import { Routes, Route } from 'react-router-dom';
import Contacto from './Contacto/Contacto';
import Nosotros from './Nosotros/Nosotros';
import Alta from './Alta/Alta';
import Inicio from './Inicio/Inicio';

function App() {
  return (
    <>
    <Navegacion />

    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/alta' element={<Alta />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
      </Routes>


    <Footer />  
    </>
  );
}

export default App;
