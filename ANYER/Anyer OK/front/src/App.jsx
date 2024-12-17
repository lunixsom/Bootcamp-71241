import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importar los componentes
import Home from './componentes/Home';
import Formulario from './componentes/Formulario';
import Navegacion from './componentes/Navegacion';
import Usuarios from './componentes/Usuarios';
import Error from './componentes/Error';
import Quinventario from './componentes/inventario';

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
        <Route path="/inventario" element={<Quinventario />} />
        <Route path="*" element={<Error />} /> {/* Ruta para errores 404 */}
      </Routes>
    </>
  );
};

export default App;
