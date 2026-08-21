import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-links-grid">
          
          <div className="footer-column">
            <h4 className="footer-heading">CONTACTO</h4>
            <ul className="footer-list">
              <li>
                <a href="tel:+524423188424">+52 442 318 8424</a>
              </li>
              <li>
                <a href="mailto:tonygarcia692@gmail.com">tonygarcia692@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">SOCIAL</h4>
            <ul className="footer-list">
              <li>
                <a href="https://www.linkedin.com/in/roberto-antonio-garcia-garcia-515472170/" target="_blank" rel="noreferrer">
                  <i className="fi fi-brands-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com/qrubyx" target="_blank" rel="noreferrer">
                  <i className="fi fi-brands-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">SERVICIOS</h4>
            <ul className="footer-list">
              <li><a href="#services">Desarrollo a la Medida</a></li>
              <li><a href="#services">Integración y Middleware</a></li>
              <li><a href="#services">Ingeniería de Datos y ETL</a></li>
              <li><a href="#services">Automatización de Procesos</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">EMPRESA</h4>
            <ul className="footer-list">
              <li><a href="#about">Acerca de nosotros</a></li>
              <li><a href="#projects">Nuestros Proyectos</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos legales</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          {/* Huge Watermark */}
          <div className="footer-watermark">
            Qrubyx
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
