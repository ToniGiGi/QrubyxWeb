import React from 'react';
import './Services.css';

const services = [
  { 
    id: 1, 
    title: 'Desarrollo de Software a la Medida', 
    desc: 'Construimos ERPs, portales B2B y SaaS escalables desde cero, diseñados exactamente para la lógica de tu negocio.'
  },
  { 
    id: 2, 
    title: 'Integración y Middleware', 
    desc: 'Hacemos que tus sistemas Legacy hablen con la nube, eliminando la doble captura y centralizando tu operación.'
  },
  { 
    id: 3, 
    title: 'Ingeniería de Datos y ETL', 
    desc: 'Migración segura de bases de datos masivas y diseño de pipelines para limpiar y trasladar tu historia contable.'
  },
  { 
    id: 4, 
    title: 'Automatización de Procesos (BPA)', 
    desc: 'Digitalizamos flujos de trabajo lentos con motores algorítmicos y generación de documentos legales en tiempo real.'
  }
];

const Services = () => {
  return (
    <section className="srv-section">
      {/* Ambient glowing background lights */}
      <div className="srv-ambient srv-ambient-purple"></div>
      <div className="srv-ambient srv-ambient-emerald"></div>
      <div className="srv-ambient srv-ambient-blue"></div>

      <div className="srv-container">
        
        <div className="srv-header-container">
          <div className="srv-header-grid">
            <div className="header-left">
              <div className="title-l1">Nuestros <span className="text-gradient">servicios</span></div>
              <div className="title-l2">en Qrubyx</div>
            </div>
            <div className="header-center">
              <span className="srv-dot-static"></span>
            </div>
            <div className="header-right"></div>
          </div>
        </div>

        <div className="srv-cards-wrapper">
          <div className="srv-cable-trunk">
            <div className="srv-data-packet srv-trunk-packet"></div>
          </div>

          <div className="srv-cards-container">
            {/* LEFT COLUMN */}
            <div className="srv-column left-col">
              <div className="srv-cable-wrapper srv-cable-left">
                <div className="srv-cable-box"></div>
                <div className="srv-data-packet srv-branch-packet left"></div>
              </div>
              
              <div className="srv-card card-1">
                <h3>{services[0].title}</h3>
                <p>{services[0].desc}</p>
              </div>

              <div className="srv-cable-straight">
                <div className="srv-data-packet srv-straight-packet left"></div>
              </div>

              <div className="srv-card card-3">
                <h3>{services[2].title}</h3>
                <p>{services[2].desc}</p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="srv-column right-col">
              <div className="srv-cable-wrapper srv-cable-right">
                <div className="srv-cable-box"></div>
                <div className="srv-data-packet srv-branch-packet right"></div>
              </div>
              
              <div className="srv-card card-2">
                <h3>{services[1].title}</h3>
                <p>{services[1].desc}</p>
              </div>

              <div className="srv-cable-straight">
                <div className="srv-data-packet srv-straight-packet right"></div>
              </div>

              <div className="srv-card card-4">
                <h3>{services[3].title}</h3>
                <p>{services[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
