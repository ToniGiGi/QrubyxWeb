import React from 'react';
import './TechStack.css';

const techs = [
  { name: 'Next.js', color: '#ffffff', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.325 6.3h1.498l5.474 8.24h-1.498l-5.474-8.24zm-2.88 0h1.43v8.24h-1.43V8.3z"/></svg> },
  { name: 'React', color: '#61DAFB', icon: <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
  { name: 'TypeScript', color: '#3178C6', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="2" /><text x="18" y="19" fill="#000" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="end">TS</text></svg> },
  { name: 'JavaScript', color: '#F7DF1E', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="2" /><text x="18" y="19" fill="#000" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="end">JS</text></svg> },
  { name: 'Laravel', color: '#FF2D20', icon: <svg viewBox="0 0 64 64" width="24" height="24" fill="currentColor"><path d="M60.1 20L34 5.3c-1.3-.8-2.8-.8-4.1 0L3.9 20C1.5 21.4 0 24.1 0 26.9v15.6c0 2.8 1.5 5.5 3.9 6.9L30 64l.1-39.7 29.8-17.2c.2-.5.2-1.2.2-1.7V26.9c0-2.8-1.5-5.5-3.9-6.9zM32 4.1c.3-.2.7-.2 1 0l21 11.9-21 12.1L11 16 32 4.1z" /></svg> },
  { name: 'Python', color: '#4B8BBE', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.01 2c-2.67 0-3.08.43-3.08.43l-.02 2.13h3.18v.4h-4.3s-1.84.07-1.84 2.58.07 2.62.07 2.62h1.22v-1.26s.03-1.46 1.48-1.46h2.8c1.36 0 1.48 1.41 1.48 1.41v1.5s-.04 1.47-1.48 1.47h-1.3v.44h4.15s3.04-.15 3.04-2.86S14.68 2 12.01 2zm-1.46 1.56a.71.71 0 1 1 0 1.41.71.71 0 0 1 0-1.41zm3.83 5.4v1.27s-.03 1.46-1.48 1.46H10.1c-1.36 0-1.48-1.42-1.48-1.42v-1.5s.04-1.47 1.48-1.47h1.3v-.44H7.25s-3.04.15-3.04 2.86 2.73 7.29 5.4 7.29 3.08-.43 3.08-.43l.02-2.13h-3.18v-.4h4.3s1.84-.07 1.84-2.58-.07-2.62-.07-2.62h-1.22zM13.47 20a.71.71 0 1 1 0-1.42.71.71 0 0 1 0 1.42z"/></svg> },
  { name: 'Prisma', color: '#5A67D8', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 22h20L12 2z"/><path d="M12 2v20"/></svg> },
  { name: 'MySQL', color: '#4479A1', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3"/></svg> },
  { name: 'Zoho', color: '#10b981', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><rect x="2" y="2" width="8" height="8" rx="2" /><rect x="14" y="2" width="8" height="8" rx="2" /><rect x="14" y="14" width="8" height="8" rx="2" /><rect x="2" y="14" width="8" height="8" rx="2" /></svg> },
];

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <p className="tech-stack-title">Nuestras tecnologías:</p>
      <div className="tech-stack-mask">
        <div className="tech-stack-track">
          {/* Se duplica la lista para crear un efecto de loop infinito */}
          {[...techs, ...techs].map((tech, index) => (
            <React.Fragment key={index}>
              <div 
                className="tech-item"
                style={{ '--hover-color': tech.color }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
              <div className="tech-separator"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
