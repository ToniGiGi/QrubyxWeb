import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="/">Qrubyx<span className="logo-dot">.</span></a>
        </div>
        
        <nav className="header-nav">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proyectos">Nuestros proyectos</a>
          <a href="#servicios">Nuestros servicios</a>
        </nav>

        <div className="header-actions">
          <a href="#contacto" className="btn-contact">Contáctanos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
