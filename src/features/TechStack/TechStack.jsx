import React from 'react';
import './TechStack.css';

const techs = [
  { name: 'Next.js', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 16V8l8 8V8"/></svg> },
  { name: 'React', icon: <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
  { name: 'JavaScript', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 16c0 1.1-.9 2-2 2H6M17 17c-1.1 0-2-.9-2-2v-1.5h2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H15"/></svg> },
  { name: 'Prisma', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 22h20L12 2z"/><path d="M12 2v20"/></svg> },
  { name: 'MySQL', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
  { name: 'Zoho', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
];

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack-mask">
        <div className="tech-stack-track">
          {/* Se duplica la lista para crear un efecto de loop infinito */}
          {[...techs, ...techs].map((tech, index) => (
            <React.Fragment key={index}>
              <div className="tech-item">
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
