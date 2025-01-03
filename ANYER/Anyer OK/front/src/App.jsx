import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importar los componentes
import Home from './componentes/Home';
import Formulario from './componentes/Formulario';
import Navegacion from './componentes/Navegacion';
import Usuarios from './componentes/Usuarios';
import Error from './componentes/Error';
import FormInventario from './componentes/FormInventario';
import Inventario from './componentes/Inventario';
/* import Inventario from './componentes/Inventario'; */


/* const App = () => { */
function App(){ 
  return (
    <>
      {/* Incluye el componente de navegación */}
      <Navegacion />

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/alta" element={<FormInventario />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="*" element={<Error />} /> {/* Ruta para errores 404 */}
      </Routes>
    </>
  );
};

export default App;
