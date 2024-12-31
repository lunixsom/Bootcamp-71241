
//import './css/App.css';
import Navegacion from './componentes/Navegacion';
import Home from './componentes/Home';
import Formulario from './componentes/Formulario';
import Usuarios from './componentes/Usuarios';
import Error from './componentes/Error';
import { Routes, Route } from 'react-router-dom';
import Alta from './Alta/Alta';
import EditarForm from './componentes/EditarForm'
import EditarFormProd from './componentes/EditFormProd'
import TablaProductos from './componentes/TablaProductos';

function App() {
  return (

    <>

      <Navegacion />

      <Routes>
        <Route path="/login" element={<Formulario /> }></Route>
        <Route path="/editar/:id" element={<EditarForm />} />
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/alta' element={ <Alta /> }></Route>
        <Route path='/formulario' element={ <Formulario /> }></Route>
        <Route path='/usuarios' element={ <Usuarios /> }></Route>
        <Route path='/productos' element={ <TablaProductos /> }></Route>
        <Route path="/editarProd/:id" element={ <EditarFormProd /> }></Route>
        <Route path='*' element={ <Error /> }></Route>
      </Routes>
    
    </>


  );
}

export default App;
