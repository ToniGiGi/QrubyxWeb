import React from 'react';
import './Hero.css';
import TechStack from '../TechStack/TechStack';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Arquitectura digital <span className="text-accent">inteligente</span> <br />
          para el futuro de <span className="text-gradient">tu Empresa</span>.
        </h1>
        <p className="hero-subtitle">
          En Qrubyx., somos especialistas en la creación de soluciones tecnológicas integrales orientadas al sector empresarial.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary">Nuestros proyectos →</button>
          <a href="https://github.com/ToniGiGi?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="github-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
        
        <div className="hero-glow"></div>
      </div>
      
      <TechStack />
    </section>
  );
};

export default Hero;
