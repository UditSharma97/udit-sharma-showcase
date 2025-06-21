
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "System online. Udit's portfolio assistant at your service! Ask about skills, projects, or contact info.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const getBotResponse = (userInput: string): string => {
    const lowerCaseInput = userInput.toLowerCase();
    
    if (lowerCaseInput.match(/hello|hi|hey|greetings|sup/)) {
      return "System online. Udit's portfolio assistant at your service! Ask about skills, projects, or contact info.";
    }
    if (lowerCaseInput.match(/how are you|status report/)) {
      return "All systems operational. Ready to provide info about Udit Sharma.";
    }
    if (lowerCaseInput.match(/skill|tech|know|proficient|stack/)) {
      return "Udit is skilled in: Languages (Python, C++, Java), Web Dev (HTML, CSS, JS, React.js, Tailwind CSS), AI/ML (Generative AI), Databases (SQL), and Developer Tools (Git, GitHub, VS Code, Jupyter). Check the 'Skills' section for details!";
    }
    if (lowerCaseInput.match(/project|work|portfolio|show me|case stud/)) {
      return "Udit has worked on the Visa Flow project - an AI-powered visa application assistant using MERN stack and AI models. It features intelligent form filling and real-time tracking. See the 'Featured Projects' section for the live demo!";
    }
    if (lowerCaseInput.match(/contact|email|linkedin|hire|connect|reach out/)) {
      return "You can connect with Udit via Email (udit.sharma@email.com), LinkedIn, or GitHub. See the 'Let's Connect' section for all contact options!";
    }
    if (lowerCaseInput.match(/available|job|opportunity|hiring/)) {
      return "Udit is actively exploring new opportunities! Please use the contact information provided to discuss potential roles or collaborations.";
    }
    if (lowerCaseInput.match(/thanks|thank you|cool|awesome|nice/)) {
      return "You're welcome! Happy to provide information about Udit's work.";
    }
    if (lowerCaseInput.match(/bye|goodbye|later|disconnect/)) {
      return "Session terminated. Have a great day!";
    }
    
    const fallbacks = [
      "My circuits are buzzing, but I didn't quite parse that. Try rephrasing?",
      "Query unclear. Could you ask about Udit's skills, projects, or contact details?",
      "Processing... Please ask about Udit's technical capabilities or projects.",
      "I can tell you about Udit's experience with React, AI, or his projects. Try asking about those!"
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const sendMessage = () => {
    if (isSending || !inputValue.trim()) return;

    setIsSending(true);
    
    const userMessage: Message = {
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text);
      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsSending(false);
    }, 800 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div 
      id="chatbot-container"
      className={`fixed bottom-6 right-6 z-50 ${isOpen ? 'open' : ''}`}
    >
      {/* Chat Window */}
      <div
        id="chatbot-window"
        className={`absolute bottom-20 right-0 w-80 h-96 rounded-2xl overflow-hidden transition-all duration-400 ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
        }`}
        style={{
          background: 'rgba(31, 41, 55, 0.85)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-3 text-center font-semibold text-lg font-roboto-mono"
          style={{
            background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
            color: 'var(--bg-color)'
          }}
        >
          Portfolio Assistant
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto h-64 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                message.sender === 'user'
                  ? 'ml-auto rounded-br-sm self-end'
                  : 'mr-auto rounded-bl-sm self-start'
              }`}
              style={{
                background: message.sender === 'user'
                  ? 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))'
                  : 'var(--surface-color)',
                color: message.sender === 'user' ? 'var(--bg-color)' : 'var(--text-color)'
              }}
            >
              {message.text}
            </div>
          ))}
          {isSending && (
            <div className="mr-auto max-w-[85%] p-3 rounded-2xl rounded-bl-sm text-sm" style={{ background: 'var(--surface-color)', color: 'var(--text-color)' }}>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex p-4 border-t" style={{ 
          backgroundColor: 'rgba(17, 24, 39, 0.5)', 
          borderColor: 'var(--border-color)' 
        }}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about skills, projects..."
            disabled={isSending}
            className="flex-1 px-4 py-2 mr-3 rounded-full text-sm outline-none transition-all duration-300"
            style={{
              background: 'rgba(55, 65, 81, 0.7)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-color)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--primary-color)';
              e.target.style.boxShadow = '0 0 10px var(--glow-color-primary)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-color)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <button
            onClick={sendMessage}
            disabled={isSending || !inputValue.trim()}
            className="flex items-center justify-center p-2 text-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ color: 'var(--primary-color)' }}
            onMouseEnter={(e) => !e.target.disabled && (e.target.style.color = 'var(--accent-color)')}
            onMouseLeave={(e) => !e.target.disabled && (e.target.style.color = 'var(--primary-color)')}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-15 h-15 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 relative"
        style={{
          background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
          color: 'var(--bg-color)',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 8px 25px var(--glow-color-primary), 0 0 15px var(--glow-color-accent)';
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.4)';
        }}
      >
        <i 
          className={`fas transition-all duration-300 absolute ${
            isOpen 
              ? 'fa-times opacity-100 rotate-0 scale-100' 
              : 'fa-robot opacity-100 rotate-0 scale-100'
          }`}
        ></i>
        <i 
          className={`fas transition-all duration-300 absolute ${
            isOpen 
              ? 'fa-robot opacity-0 rotate-90 scale-50' 
              : 'fa-times opacity-0 rotate-(-90) scale-50'
          }`}
        ></i>
      </button>
    </div>
  );
};

export default Chatbot;
