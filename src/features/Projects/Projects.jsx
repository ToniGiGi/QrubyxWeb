import React, { useState, useRef } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'ERP Legacy a Cloud CRM',
    subtitle: 'Integración Bidireccional',
    shortDescription: 'Desarrollo de un Middleware personalizado para integrar bidireccionalmente un ERP local (Aspel SAE) con Zoho CRM en la nube. El sistema automatiza la sincronización de inventarios, multialmacenes y caducidades en tiempo real.',
    fullDescription: 'Este proyecto resolvió el problema de mantener sincronizada la operación física de almacenes (gestionada en Aspel SAE) con la fuerza de ventas en campo (operando en Zoho CRM). \n\nSe construyó una API robusta que escucha webhooks de Zoho y realiza consultas seguras a la base de datos SQL Server de SAE. Además, permite la generación instantánea de pedidos locales directamente desde la plataforma web de Zoho, reduciendo el tiempo de procesamiento de ventas de horas a segundos.',
    tag: '.ZohoCRM',
    technologies: ['Node.js', 'Express', 'SQL Server', 'Zoho CRM API', 'Webhooks']
  },
  {
    id: 2,
    title: 'LogisticERP',
    subtitle: 'ERP Logístico y Portal B2B',
    shortDescription: 'Sistema integral Full-Stack que incluye CRM, calculadora inteligente de fletes, generación y firma digital de cotizaciones en PDF, y gestión avanzada de órdenes de traslado.',
    fullDescription: 'Una plataforma completa diseñada para la industria logística. Simplifica el flujo de trabajo desde la captación del cliente hasta la entrega final de la mercancía. \n\nCuenta con un algoritmo especializado para el cálculo de fletes basado en distancias, peso y tipo de transporte. Además, automatiza la creación de documentos legales (PDFs) con capacidades de firma digital y seguimiento en tiempo real de las órdenes de traslado.',
    tag: '.FullStack',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PDF Generation']
  },
  {
    id: 3,
    title: 'ControlKM',
    subtitle: 'Gestión Inteligente de Flotas',
    shortDescription: 'Aplicación web diseñada para la correcta gestión, monitoreo y control del kilometraje y mantenimiento preventivo de vehículos empresariales.',
    fullDescription: 'ControlKM elimina el uso de bitácoras de papel en la administración de flotillas. Permite a los conductores registrar sus viajes y kilometrajes diarios desde sus teléfonos. \n\nEl sistema genera alertas automáticas para mantenimientos preventivos (cambios de aceite, llantas) basándose en el uso real de cada unidad, ayudando a las empresas a prolongar la vida útil de sus vehículos y reducir costos operativos.',
    tag: '.TypeScript',
    technologies: ['TypeScript', 'React', 'TailwindCSS', 'Firebase', 'PWA']
  },
  {
    id: 4,
    title: 'STAS',
    subtitle: 'Strategic Talent Auto-Selector',
    shortDescription: 'Plataforma web inteligente para el departamento de Recursos Humanos, especializada en la automatización del reclutamiento para la industria automotriz.',
    fullDescription: 'STAS optimiza el embudo de contratación filtrando automáticamente a los candidatos según los requisitos específicos de cada vacante automotriz. \n\nMediante formularios dinámicos y un panel de control avanzado para los reclutadores, la plataforma califica y clasifica a los aplicantes, reduciendo el tiempo de selección manual y mejorando la calidad de las contrataciones.',
    tag: '.Automotive',
    technologies: ['React', 'Blade', 'Laravel', 'MySQL']
  },
  {
    id: 5,
    title: 'Pomofy',
    subtitle: 'Productividad y Enfoque',
    shortDescription: 'Aplicación web enfocada en maximizar la productividad personal y profesional mediante la gestión del tiempo y rutinas de trabajo basadas en la técnica Pomodoro.',
    fullDescription: 'Más que un simple temporizador, Pomofy es un ecosistema de productividad. Permite a los usuarios organizar tareas, establecer objetivos de enfoque diarios y visualizar su rendimiento a lo largo del tiempo a través de estadísticas detalladas. \n\nDiseñada con una interfaz minimalista y libre de distracciones para ayudar a mantener el estado de "Deep Work".',
    tag: '.WebApp',
    technologies: ['JavaScript', 'React', 'CSS Modules', 'LocalStorage']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Nuestros <span className="text-gradient">Proyectos.</span></h2>
        <p className="projects-subtitle">Soluciones tecnológicas reales que transforman negocios.</p>
      </div>

      <div className="carousel-wrapper">
        <div className="projects-marquee">
          {/* Group 1 */}
          <div className="marquee-group">
            {projectsData.map((project) => (
              <div 
                className="project-card" 
                key={`group1-${project.id}`} 
                onClick={() => openModal(project)}
              >
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <h4 className="project-card-subtitle">{project.subtitle}</h4>
                  <p className="project-card-desc">{project.shortDescription}</p>
                </div>
                <div className="project-card-footer">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-action">Ver detalles &rarr;</span>
                </div>
              </div>
            ))}
          </div>

          {/* Group 2 (Clone for infinite loop) */}
          <div className="marquee-group" aria-hidden="true">
            {projectsData.map((project) => (
              <div 
                className="project-card" 
                key={`group2-${project.id}`} 
                onClick={() => openModal(project)}
              >
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <h4 className="project-card-subtitle">{project.subtitle}</h4>
                  <p className="project-card-desc">{project.shortDescription}</p>
                </div>
                <div className="project-card-footer">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-action">Ver detalles &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            
            <span className="modal-tag">{selectedProject.tag}</span>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <h3 className="modal-subtitle">{selectedProject.subtitle}</h3>
            
            <div className="modal-body">
              {selectedProject.fullDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="modal-tech-stack">
              <h4>Tecnologías Integradas</h4>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
