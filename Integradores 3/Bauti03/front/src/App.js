
//import './css/App.css';
import Navegacion from './componentes/Navegacion';
import Home from './componentes/Home';
import Alta from './componentes/Alta';
import Productos from './componentes/Productos';
import Error from './componentes/Error';
import { Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer';
import Nosotros from './componentes/Nosotros';
import Formularioedicion from './componentes/Formularioedicion';

function App() {
  return (

    <>

      <Navegacion />

      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/alta' element={ <Alta /> }></Route>
        <Route path='/productos' element={ <Productos /> }></Route>
        <Route path="/editar/:id" element={<Formularioedicion />} />
        <Route path='/nosotros' element={ <Nosotros /> }></Route>  
        <Route path='*' element={ <Error /> }></Route>
      </Routes>

      <Footer />
    
    </>


  );
}

export default App;
