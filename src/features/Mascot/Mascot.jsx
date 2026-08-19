import React from 'react';
import './Mascot.css';
import qryCurioso from '../../images/qrycurioso.PNG';

const Mascot = () => {
  return (
    <section id="mascota" className="mascot-section">
      {/* 3D Room Environment Elements */}
      <div className="mascot-room-bg"></div>
      <div className="mascot-floor"></div>
      
      <div className="mascot-content-wrapper">
        {/* Left side: The Mascot sitting on the floor */}
        <div className="mascot-visual-area">
          {/* Decorative floating panels moved to backup */}
          
          {/* New IDE Window floating behind Qry */}
          <div className="floating-window-ide">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="window-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> <span className="code-variable">idea</span> <span className="code-operator">=</span> <span className="code-keyword">new</span> <span className="code-class">Qrubyx</span>();<br/>
                  <span className="code-variable">idea</span>.<span className="code-function">build</span>();<br/>
                  <span className="code-object">console</span>.<span className="code-function">log</span>(<span className="code-string">"Let's code! 🚀"</span>);<br/>
                  <br/>
                  <span className="code-comment">// Qry siempre tiene ideas</span>
                </code>
              </pre>
            </div>
          </div>
          
          <img src={qryCurioso} alt="Qry, la mascota de Qrubyx" className="mascot-image-3d" />
        </div>
        
        {/* Right side: Text Information */}
        <div className="mascot-info-area">
          <h2 className="mascot-title">
            <span className="text-gradient">Qry.</span> La mascota de <span className="text-gradient">Qrubyx.</span>
          </h2>
          <p className="mascot-description">
            Qry es un pequeño gato digital que representa la programación, la tecnología y la curiosidad que nos impulsa a crear.
          </p>
          <p className="mascot-description">
            Siempre observando, siempre aprendiendo, siempre buscando nuevas soluciones.
          </p>
          
          <div className="mascot-slogan">
            <span className="slogan-line-1">Pequeño gato digital.</span>
            <span className="slogan-line-2">Grandes ideas.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mascot;
