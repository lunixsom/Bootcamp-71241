import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/formulario">Formulario</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/alta">Alta de productos</Link></li>
        <li><Link to="/inventario">Inventario</Link></li>
      </ul>
    </nav>
  );
};

export default Navegacion;
