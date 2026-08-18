import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
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
