import React, { useState, useRef } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'ERP Legacy a Cloud CRM',
    subtitle: 'Integración Bidireccional',
    shortDescription: 'Desarrollo de un Middleware personalizado para integrar bidireccionalmente un ERP local (Aspel SAE) con Zoho CRM en la nube.',
    caseStudy: {
      challenge: 'Nuestro cliente contaba con una base de datos On-Premise robusta pero antigua (Aspel SAE) y necesitaba modernizar su equipo de ventas adoptando Zoho CRM en la nube. El desafío era que ambos sistemas hablaban "idiomas" diferentes, lo que provocaba captura manual doble, inventarios desactualizados, errores de cotización y nula visibilidad de los lotes y caducidades en tiempo real para los vendedores.',
      solution: 'Diseñamos y desarrollamos desde cero un Middleware a la medida (un puente de software inteligente) basado en Node.js que conecta de forma segura el servidor local de la empresa con la API de Zoho CRM en la nube, logrando una sincronización autónoma y en tiempo real.',
      features: [
        { title: 'Daemon de Sincronización', desc: 'Un bot automatizado de alta frecuencia que escanea el catálogo del ERP cada 60 segundos. Identifica cambios en existencias, precios y clientes, y los actualiza instantáneamente en la nube en más de 5 sucursales distintas.' },
        { title: 'Trazabilidad Inteligente de Lotes', desc: 'Los vendedores ahora ven directamente en Zoho CRM (a través de vistas HTML inyectadas en tiempo real) en qué almacén físico está cada producto, la cantidad exacta del lote y su fecha de caducidad.' },
        { title: 'Webhooks de Operación Inversa', desc: 'Cuando un trato se cierra en la nube, el sistema envía una orden a través de un túnel seguro que crea la cotización o el pedido automáticamente dentro del ERP local, respetando las series fiscales y sucursales.' }
      ],
      impact: [
        { highlight: '0% Doble Captura', desc: 'Automatización total del ciclo de ventas.' },
        { highlight: 'Reducción de Mermas', desc: 'Visibilidad de caducidades en tiempo real para el equipo comercial.' },
        { highlight: 'Operación Fluida', desc: 'El equipo de ventas opera 100% desde la nube, mientras administración mantiene el control total en su ERP local sin interrupciones.' }
      ]
    },
    tag: '.ZohoCRM',
    technologies: ['Node.js', 'Express', 'SQL (Firebird)', 'Zoho Deluge', 'Cloudflare Tunnels'],
    bgIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="project-bg-icon"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
  },
  {
    id: 2,
    title: 'LogisticERP',
    subtitle: 'ERP Logístico y Portal B2B',
    shortDescription: 'Sistema integral Full-Stack que incluye CRM, calculadora inteligente de fletes, firma digital y gestión de órdenes de traslado.',
    caseStudy: {
      challenge: 'Nuestro cliente, Logística Integral Valera S.A. de C.V., operaba su ciclo comercial de forma tradicional: la cotización de fletes dependía de cálculos manuales en Word, el seguimiento de prospectos se perdía en hojas de Excel aisladas, y la aprobación de traslados requería un tedioso ciclo de impresión, firma física y escaneo. Este "cuello de botella" administrativo generaba tiempos de respuesta lentos (hasta 30 minutos por cliente), errores humanos en las tarifas y una nula visibilidad gerencial sobre el rendimiento del equipo de ventas en tiempo real.',
      solution: 'Diseñamos y desarrollamos desde cero una plataforma web integral "End-to-End" alojada en la nube que digitaliza por completo el flujo operativo: desde la captación autónoma de prospectos en una Landing Page pública, hasta un portal B2B privado donde los clientes aprueban contratos mediante firmas electrónicas, todo respaldado por un panel de control avanzado para la administración.',
      features: [
        { title: 'Cotizador Algorítmico y Generación Dinámica de PDF', desc: 'Implementamos un motor de cálculo inteligente que evalúa variables complejas (distancia, dimensiones, carga IMO, sobrepeso) en segundos. Con un solo clic, el sistema ensambla y exporta una cotización formal en formato PDF con diseño corporativo estandarizado, eliminando la redacción manual.' },
        { title: 'Portal B2B y Firma Electrónica Táctil', desc: 'Desarrollamos un portal privado para clientes corporativos. Al recibir una propuesta, el cliente puede revisarla y, utilizando tecnología de Canvas HTML5, dibujar su firma directamente desde la pantalla de su teléfono móvil o computadora. El documento se bloquea y certifica automáticamente.' },
        { title: 'Dashboards Analíticos en Tiempo Real', desc: 'Creamos un panel de control administrativo con gráficas interactivas. Los directivos ahora pueden monitorear instantáneamente métricas clave (KPIs) como facturación mensual, volumen de operaciones y la tasa de conversión individual de cada agente logístico.' },
        { title: 'Arquitectura Serverless Escalable', desc: 'Todo el sistema opera bajo una infraestructura sin servidor que garantiza disponibilidad 24/7. Las acciones del usuario (Server Actions) interactúan de forma segura y directa con una base de datos relacional en la nube.' }
      ],
      impact: [
        { highlight: '85% Más Rápidos', desc: 'Reducción drástica en tiempos de respuesta, pasando de 30 minutos a menos de 5 minutos por cotización.' },
        { highlight: 'Cero Papel (Paperless)', desc: 'Eliminación total de la impresión y captura física gracias a la implementación nativa de la firma digital.' },
        { highlight: 'Toma de Decisiones Basada en Datos', desc: 'Por primera vez, la gerencia tiene visibilidad panorámica e instantánea del embudo comercial, permitiendo ajustar estrategias y medir el rendimiento de los agentes sin depender de reportes manuales.' }
      ]
    },
    tag: '.FullStack',
    technologies: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL (Neon DB)', 'Server Actions', 'Vercel'],
    bgIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="project-bg-icon"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    id: 3,
    title: 'ControlKM',
    subtitle: 'Gestión Inteligente de Flotas',
    shortDescription: 'Aplicación web diseñada para la correcta gestión, monitoreo y control del kilometraje y mantenimiento de vehículos empresariales.',
    caseStudy: {
      challenge: 'Nuestro cliente, una empresa con operaciones logísticas en múltiples sucursales, administraba su flotilla vehicular a través de un ecosistema fragmentado: hojas de cálculo inmensas, comprobantes físicos y grupos de WhatsApp. Este desorden provocaba que la gerencia no tuviera control sobre las pólizas de seguro vencidas, se perdiera el rastro de los mantenimientos preventivos y la conciliación de gastos de viáticos y combustible fuera un cuello de botella contable. Necesitaban centralizar su operación, pero garantizando que sus choferes pudieran usar el sistema fácilmente desde el celular.',
      solution: 'Diseñamos y desarrollamos desde cero "ControlKM", una plataforma web integral en la nube (SaaS) a la medida. Construimos una arquitectura moderna orientada al rendimiento (Edge Computing) que conecta a la administración central directamente con los operadores en ruta, automatizando el flujo de aprobaciones y el resguardo de evidencia.',
      features: [
        { title: 'Portales Basados en Roles (RBAC)', desc: 'Desarrollamos una experiencia dual. Mientras el equipo gerencial tiene un tablero con métricas financieras y control total del inventario vehicular, los conductores acceden a una interfaz móvil simplificada donde solo ven su unidad asignada, suben comprobantes de gasolina y reportan incidencias en un par de clics.' },
        { title: 'Arquitectura de Rendimiento Extremo', desc: 'El cliente reportaba lentitud con sus sistemas anteriores. Implementamos una base de datos distribuida (Edge) y técnicas de "Interfaz de Usuario Optimista", logrando que la navegación entre módulos pesados y reportes estadísticos reaccione en milisegundos, sin tiempos de carga frustrantes.' },
        { title: 'Almacenamiento Desacoplado de Evidencias', desc: 'Integramos Cloudflare R2 para la gestión de documentos pesados. Las fotos de los vehículos, siniestros y tickets de combustible se procesan y almacenan en un bucket dedicado en la nube, manteniendo la base de datos principal ultraligera y rápida.' },
        { title: 'Panel de Alertas Predictivas', desc: 'Programamos un motor automatizado que cruza los datos de toda la compañía para generar alertas proactivas. El sistema avisa automáticamente a los administradores sobre pólizas por vencer en los próximos 30 días o mantenimientos urgentes que requieren aprobación.' }
      ],
      impact: [
        { highlight: 'Cero Extravío de Tickets', desc: 'La comprobación de gastos de combustible y viáticos es ahora 100% digital, eliminando el papeleo físico y acelerando la contabilidad.' },
        { highlight: 'Reducción de Riesgos Operativos', desc: 'Gracias a las alertas predictivas, el cliente eliminó las multas por circular con pólizas vencidas o vehículos sin mantenimiento.' },
        { highlight: 'Aprobaciones Dinámicas', desc: 'Lo que antes tomaba días de correos, ahora es un flujo continuo donde el chofer solicita, el gerente aprueba y el sistema actualiza el gasto global de la unidad en tiempo real.' }
      ]
    },
    tag: '.TypeScript',
    technologies: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'Prisma ORM', 'Edge Database (Turso)', 'Cloudflare Pages & R2', 'NextAuth'],
    bgIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="project-bg-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  },
  {
    id: 4,
    title: 'STAS',
    subtitle: 'Strategic Talent Auto-Selector',
    shortDescription: 'Plataforma inteligente para Recursos Humanos, especializada en la automatización del reclutamiento para la industria automotriz.',
    caseStudy: {
      challenge: 'El departamento de Recursos Humanos en plantas automotrices se enfrentaba a volúmenes masivos de aplicaciones. Filtrar, clasificar y evaluar manualmente a cada candidato consumía semanas de trabajo y ralentizaba las líneas de producción por falta de talento.',
      solution: 'Diseñamos STAS, una plataforma web de inteligencia en reclutamiento que actúa como el primer filtro de contratación, evaluando de forma automática e imparcial si un candidato cumple con los perfiles técnicos estrictos requeridos en planta.',
      features: [
        { title: 'Filtros Dinámicos', desc: 'Exámenes y cuestionarios de pre-filtro configurables que descartan automáticamente a candidatos que no cumplen los conocimientos mínimos de la vacante.' },
        { title: 'Clasificación Automática', desc: 'Algoritmo que ranquea a los perfiles más altos basándose en su nivel técnico, experiencia en la industria y resultados de pruebas.' },
        { title: 'Portal de Selección', desc: 'Interfaz ágil para gestionar entrevistas y ver el progreso de todo el embudo de contratación en tiempo real.' }
      ],
      impact: [
        { highlight: 'Ahorro de Semanas', desc: 'Automatización del filtro inicial y descarte inmediato de CVs no calificados.' },
        { highlight: 'Top Talento', desc: 'Los reclutadores humanos solo invierten tiempo entrevistando al Top 10% de candidatos.' },
        { highlight: 'Cero Paros', desc: 'Reducción drástica del "Time-to-Hire" para cubrir puestos críticos en las líneas de ensamble.' }
      ]
    },
    tag: '.Automotive',
    technologies: ['React', 'Blade', 'Laravel', 'MySQL'],
    bgIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="project-bg-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  },
  {
    id: 5,
    title: 'Pomofy',
    subtitle: 'Productividad y Enfoque',
    shortDescription: 'Aplicación enfocada en maximizar el rendimiento personal y profesional mediante la gestión del tiempo y rutinas estructuradas.',
    caseStudy: {
      challenge: 'En la era del trabajo remoto, la constante pérdida de enfoque causada por notificaciones digitales reduce drásticamente la productividad de las personas y contribuye enormemente a la fatiga mental (Burnout).',
      solution: 'Desarrollamos Pomofy, más que un simple reloj, es un ecosistema completo de productividad enfocado en la técnica Pomodoro para ayudar a estudiantes y profesionales a mantener estados de "Deep Work" de forma medible.',
      features: [
        { title: 'Temporizador Inteligente', desc: 'Ciclos de enfoque profundo alternados con descansos estructurados, totalmente personalizables según la tolerancia del usuario.' },
        { title: 'Gestión de Sprints', desc: 'Vinculación de ciclos de tiempo a tareas específicas del día para saber exactamente cuánto cuesta desarrollar cada proyecto.' },
        { title: 'Analíticas de Rendimiento', desc: 'Gráficas de productividad diarias para visualizar el progreso y entender a qué horas se tienen los picos de mayor rendimiento intelectual.' }
      ],
      impact: [
        { highlight: 'Foco Absoluto', desc: 'Eliminación estructurada de distracciones externas durante los sprints de trabajo activo.' },
        { highlight: 'Cero Burnout', desc: 'El sistema obliga pausas saludables que mantienen la mente fresca durante toda la jornada laboral.' },
        { highlight: 'Autoconocimiento', desc: 'Datos reales y medibles sobre cómo se invierte el tiempo y la atención.' }
      ]
    },
    tag: '.WebApp',
    technologies: ['JavaScript', 'React', 'CSS Modules', 'LocalStorage'],
    bgIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="project-bg-icon"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
  },
  {
    id: 6,
    title: 'Data Migration & ETL',
    subtitle: 'Ingeniería de Datos Contables',
    shortDescription: 'Diseño de scripts de automatización para filtrar saldos vivos, replicar complejas matrices de precios y trasladar bases de datos Firebird locales hacia el ecosistema de Zoho.',
    caseStudy: {
      challenge: 'Nuestro cliente necesitaba dar el salto de un sistema contable On-Premise heredado (Aspel SAE) hacia un ecosistema moderno en la nube (Zoho Books y Zoho Inventory). El desafío no era solo transferir datos, sino lidiar con años de información desestructurada: complejas matrices de precios (hasta 49 listas distintas), control estricto de lotes y caducidades, y la necesidad crítica de migrar sus deudas e ingresos pendientes sin alterar artificialmente sus estados financieros. Además, debíamos lograrlo sin sobrepasar los estrictos límites diarios de la API de Zoho.',
      solution: 'Diseñamos y ejecutamos un pipeline ETL (Extract, Transform, Load) personalizado en Python, capaz de conectarse a la base de datos Firebird local, aplicar reglas de negocio y matemáticas complejas para depurar la información, y posteriormente inyectarla a la nube de manera ultra-eficiente.',
      features: [
        { title: 'Saneamiento y Depuración Financiera', desc: 'En lugar de realizar un volcado ciego, el script analizó el historial de todos los cargos y abonos para calcular matemáticamente qué facturas realmente tenían un "saldo vivo". Así, logramos filtrar más de 3,000 registros históricos para migrar únicamente las Cuentas por Cobrar (CXC) y por Pagar (CXP) reales.' },
        { title: 'Trazabilidad de Lotes y Caducidades', desc: 'Inyección de inventarios multi-almacén respetando el control estricto del sector salud/laboratorio. El sistema importó existencias con sus cantidades específicas, números de lote y fechas de caducidad.' },
        { title: 'Ingeniería de Listas de Precios (Price Books)', desc: 'Replicación exacta de la compleja matriz de precios heredada (49 niveles de descuento). Los clientes "VIP" fueron vinculados automáticamente en la nube a sus respectivas listas para automatizar sus cotizaciones.' },
        { title: 'Balanceo de Carga (API Optimization)', desc: 'Enrutamiento inteligente de las peticiones HTTP, dividiendo la carga masiva entre los endpoints de Zoho Books y Zoho Inventory. Esto permitió migrar más de 10,000 registros críticos evadiendo los bloqueos por límite de cuota diaria.' }
      ],
      impact: [
        { highlight: 'Transición Cero Fricción', desc: 'Toda la ejecución de la migración en el "Día Cero" fue orquestada para durar menos de 45 minutos. El cliente apagó su servidor un viernes y amaneció operando en la nube el lunes.' },
        { highlight: 'Finanzas Intactas', desc: 'Las Cuentas por Pagar y por Cobrar iniciales se inyectaron cruzadas contra cuentas puente de capital (Opening Balance Equity), garantizando que el Estado de Resultados quedara perfectamente cuadrado.' },
        { highlight: 'Cero Errores de Cotización', desc: 'Gracias a los Price Books, el equipo comercial ahora realiza presupuestos automáticos con los precios correctos pre-cargados para cada segmento de cliente.' }
      ]
    },
    tag: '.ZohoBooks/Inventory',
    technologies: ['Python', 'Firebird SQL (fdb)', 'ETL Pipelines', 'Zoho Inventory API', 'Zoho Books API'],
    bgIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="project-bg-icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
                {project.bgIcon}
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <h4 className="project-card-subtitle">{project.subtitle}</h4>
                  <p className="project-card-desc">{project.shortDescription}</p>
                </div>
                <div className="project-card-footer">
                  <span className="project-tag">{project.tag}</span>
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
                {project.bgIcon}
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <h4 className="project-card-subtitle">{project.subtitle}</h4>
                  <p className="project-card-desc">{project.shortDescription}</p>
                </div>
                <div className="project-card-footer">
                  <span className="project-tag">{project.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content case-study-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            
            <header className="cs-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <h3 className="modal-subtitle">{selectedProject.subtitle}</h3>
            </header>
            
            <div className="cs-body">
              <div className="cs-section">
                <h4>El Reto</h4>
                <p>{selectedProject.caseStudy.challenge}</p>
              </div>

              <div className="cs-section">
                <h4>Nuestra Solución</h4>
                <p>{selectedProject.caseStudy.solution}</p>
              </div>

              <div className="cs-section">
                <h4>Características Destacadas</h4>
                <ul className="cs-features-list">
                  {selectedProject.caseStudy.features.map((feature, idx) => (
                    <li key={idx}>
                      <strong>{feature.title}:</strong> {feature.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs-section cs-impact">
                <h4>El Impacto</h4>
                <div className="impact-grid">
                  {selectedProject.caseStudy.impact.map((item, idx) => (
                    <div className="impact-card" key={idx}>
                      <span className="impact-highlight">{item.highlight}</span>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-tech-stack">
              <h4>Tecnologías Utilizadas</h4>
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
