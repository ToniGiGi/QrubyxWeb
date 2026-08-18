import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="nosotros" className="about-section">
      {/* Background glow elements */}
      <div className="about-bg-glow glow-cyan"></div>
      <div className="about-bg-glow glow-purple"></div>

      <div className="section-container">
        <div className="about-header">
          <h2 className="section-title">
            Conoce a <span className="text-gradient">Qrubyx.</span>
          </h2>
          <p className="section-subtitle">
            Ingeniería de software y manejo de datos a nivel empresarial.
          </p>
        </div>

        <div className="about-cards-wrapper">
          <div className="cable-trunk"></div>

          <div className="about-cards-container">
            {/* LEFT COLUMN */}
            <div className="card-column left-col">
              <div className="data-packet trunk-packet"></div>
              <div className="cable-wrapper cable-left">
                <div className="cable-box"></div>
                <div className="data-packet branch-packet"></div>
              </div>
              <div className="about-card">
                <div className="card-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="card-title">Nuestra Misión</h3>
                <p className="card-text">
                  En Qrubyx., somos especialistas en la creación de soluciones tecnológicas integrales orientadas al sector empresarial. Entendemos que la eficiencia operativa y el manejo inteligente de la información son los verdaderos pilares del éxito corporativo. Por ello, nos dedicamos a diseñar arquitectura de software robusta, escalable y enfocada en resolver problemas complejos de negocio.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="card-column right-col">
              <div className="data-packet trunk-packet"></div>
              <div className="cable-wrapper cable-right">
                <div className="cable-box"></div>
                <div className="data-packet branch-packet"></div>
              </div>
              <div className="about-card">
                <div className="card-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </div>
                <h3 className="card-title">Filosofía de Trabajo</h3>
                <p className="card-text">
                  Creemos en el poder de los datos como motor de crecimiento. No solo escribimos código; analizamos el ecosistema de cada empresa para ofrecer herramientas que aporten claridad, control y ventaja competitiva. Nuestra pasión por la automatización nos impulsa a buscar siempre la manera más inteligente y rápida de hacer las cosas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
