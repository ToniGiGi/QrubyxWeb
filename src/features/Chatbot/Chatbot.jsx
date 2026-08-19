import React, { useState, useRef, useEffect } from 'react';
import qriImage from '../../images/Qrisoporte.PNG';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '¡Hola! Soy Qry, el asistente de Qrubyx. ¿En qué te puedo ayudar hoy?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const predefinedQA = [
    {
      q: '¿Qué es Qrubyx?',
      a: 'Qrubyx. es una empresa de tecnología y arquitectura digital, enfocada en crear soluciones innovadoras.'
    },
    {
      q: '¿Qué servicios ofrecen?',
      a: 'Ofrecemos desarrollo de software, diseño web con estéticas vanguardistas (como el Glassmorphism y Cyberpunk) y consultoría tecnológica.'
    },
    {
      q: '¿Cómo puedo contactarlos?',
      a: 'Puedes enviarnos un correo, contactarnos por nuestras redes sociales, o seguir navegando por la web para ver nuestro trabajo.'
    }
  ];

  const handleQuestionClick = (qa) => {
    // Add user question
    setMessages(prev => [...prev, { type: 'user', text: qa.q }]);
    setIsTyping(true);
    
    // Simulate delay for bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: qa.a }]);
    }, 2000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <img src={qriImage} alt="Qry" className="chatbot-header-avatar" />
              <div>
                <h3>Qry</h3>
                <span className="chatbot-status">En línea</span>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={toggleChat}>
              &times;
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.type}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble bot typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-options">
            <p className="chatbot-options-title">Preguntas frecuentes:</p>
            <div className="chatbot-options-list">
              {predefinedQA.map((qa, idx) => (
                <button 
                  key={idx} 
                  className="chatbot-option-btn"
                  onClick={() => handleQuestionClick(qa)}
                >
                  {qa.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button 
        className={`chatbot-trigger ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Chat con Qry"
      >
        <img src={qriImage} alt="Mascota Qry" />
      </button>
    </div>
  );
};

export default Chatbot;
