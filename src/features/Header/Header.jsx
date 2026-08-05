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
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
        </nav>

        <div className="header-actions">
          <a href="#contacto" className="btn-contact">Contáctame</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
